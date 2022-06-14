import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {renTypes} from '../../data/rentType';
import {facilityTypes} from '../../data/facilityType';
import {Facility} from '../../module/facility';
import {FacilityType} from '../../module/facility-type';
import {RentType} from '../../module/rent-type';
import {RentTypeService} from '../rent-type.service';
import {FacilityTypeService} from '../facility-type.service';
import {FacilityService} from '../facility.service';


@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})

export class FacilityCreateComponent implements OnInit {
  public poolSquare: boolean;
  public numberFloor: boolean;
  facilityForm: FormGroup;
  facility = {} as Facility;
  facilityTypes: FacilityType[] = [];
  rentTypes: RentType[] = [];
  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService) { }

  ngOnInit(): void {
    this.facilityTypes = this.facilityTypeService.getAllFacilityType();
    this.rentTypes = this.rentTypeService.getAllRentType();
    this.facilityForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
      rentType: new FormControl('', [Validators.required]),
      rentalFee: new FormControl('', [Validators.required]),
      floorSquare: new FormControl('', [Validators.required, Validators.pattern('^[+]?(\\d*\\.)?\\d+$')]),
      maximumPeople: new FormControl('', [Validators.required, Validators.pattern('^[+]?[0]*[1-9][0-9]*$')]),
      facilityType: new FormControl('', [Validators.required]),
      roomStandard: new FormControl(''),
      description: new FormControl(''),
      poolSquare: new FormControl(''),
      numberFloor: new FormControl(''),
      freeServiceInclude: new FormControl(''),
      image: new FormControl('')
    });
  }
  showFacility(value: FacilityType) {
    const id = value.id;
    console.log(id);
    switch (id) {
      case 3:
        this.poolSquare = true;
        this.numberFloor = true;
        break;
      case 2:
        this.poolSquare = false;
        this.numberFloor = true;
        break;
      case 1:
        this.numberFloor = false;
        this.poolSquare = false;
    }
  }
  createFacility() {
    if (this.facilityForm.valid) {
      this.facility = this.facilityForm.value;
      this.facilityService.save(this.facility);
      this.facilityForm.reset();
    }
  }
}
