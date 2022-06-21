import {Component, OnInit} from '@angular/core';
import {Type} from "../../module/type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BusService} from "../../service/bus.service";
import {TypeService} from "../../service/type.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  types: Type[] = [];
  busForm: FormGroup;
  submitted = false;

  constructor(private busService: BusService,
              private typeService: TypeService) {
  }

  ngOnInit(): void {
    this.getAllBusTypes();
    this.busForm = new FormGroup({
      numberPlate: new FormControl(''),
      type: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      start: new FormControl('', [Validators.required]),
      end: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(090|093|097)\\d{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      startHours: new FormControl('', [Validators.required]),
      endHours: new FormControl('', [Validators.required])
    })
  }

  getAllBusTypes() {
    this.typeService.getAll().subscribe(types => {
      this.types = types;
    });
  }

  create() {
    const bus = this.busForm.value;
    if (this.busForm.valid) {
      this.busService.save(bus).subscribe(() => {
        alert('Tạo thành công');
        this.busForm.reset();
      });
    }
  }
}
