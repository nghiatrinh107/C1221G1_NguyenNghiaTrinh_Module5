import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BusService} from "../../service/bus.service";

import {TypeService} from "../../service/type.service";
import {Type} from "../../module/type";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  types: Type[] = [];
  busForm: FormGroup;
  submitted = false;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private busService: BusService,
              private typeService: TypeService,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getBus(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllType();

  }

  getBus(id: number) {
    return this.busService.findById(id).subscribe(bus => {
      this.busForm = new FormGroup({
        id: new FormControl(bus.id),
        numberPlate: new FormControl(bus.numberPlate),
        type: new FormControl(bus.type, [Validators.required]),
        name: new FormControl(bus.name, [Validators.required]),
        start: new FormControl(bus.start, [Validators.required]),
        end: new FormControl(bus.end, [Validators.required]),
        phone: new FormControl(bus.phone, [Validators.required, Validators.pattern('^(090|093|097)\\d{7}$')]),
        email: new FormControl(bus.email, [Validators.required,Validators.email]),
        startHours: new FormControl(bus.startHours, [Validators.required]),
        endHours: new FormControl(bus.endHours, [Validators.required])
      })
    });
  }

  update(id: number) {
    if (this.busForm.valid) {
      const bus = this.busForm.value;
      console.log(bus);
      this.busService.update(id, bus).subscribe(() => {
          alert('Cập nhật thành công');
          this.route.navigate(['/list']);
        }
      );
    }
  }

  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  getAllType() {
    this.typeService.getAll().subscribe(types => {
      this.types = types;
    });
  }
}
