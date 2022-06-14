import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {renTypes} from '../../data/rentType';
import {facilityTypes} from '../../data/facilityType';


@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})

export class FacilityCreateComponent implements OnInit {
  renTypes = renTypes;
  facilityTypes = facilityTypes;
  public poolSquare: boolean;
  public numberFloor: boolean;
  facilityForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.facilityForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      image: new FormControl('',[])
    });
  }
  showFacility(value: any) {
    switch (value) {
      case '1':
        this.poolSquare = true;
        this.numberFloor = true;
        break;
      case '2':
        this.poolSquare = false;
        this.numberFloor = true;
        break;
      case '3':
        this.numberFloor = false;
        this.poolSquare = false;
    }
  }
}
