import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BusService} from "../../service/bus.service";
import {StartService} from "../../service/start.service";
import {EndService} from "../../service/end.service";
import {Bus} from "../../module/bus";
import {TypeService} from "../../service/type.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild('name') name: ElementRef;
  @ViewChild('type') type: ElementRef;
  busDelete: string;
  id: number;
  busList: Bus[] = [];
  p: string | number;
  constructor(private busService: BusService,private typeService: TypeService) { }

  ngOnInit(): void {
    this.busService.getAll().subscribe(busies => {
      // @ts-ignore
      this.busList = busies.content; })
  }

  getBus(id: number,name: string) {
    this.busDelete = name;
    this.id = id;
  }

  deleteBus(id: number) {
    this.busService.delete(id).subscribe(() => {
      this.ngOnInit();
    });
  }
  search() {
    console.log(this.name.nativeElement.value);
    console.log(this.type.nativeElement.value);

    this.busService.search(this.name.nativeElement.value, this.type.nativeElement.value).
    subscribe(busies =>
      // @ts-ignore
      this.busList = busies.content, () => {} );
  }
}
