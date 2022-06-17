import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  facilityTypes: FacilityType[] = [];
  rentTypes: RentType[] = [];
  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService) { }

  ngOnInit(): void {
    this.getAllFacilityTypes();
    this.getAllRentTypes();
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
    const facility = this.facilityForm.value;
    if (this.facilityForm.valid) {
      this.facilityService.save(facility).subscribe(() => {
        alert('Tạo thành công');
        this.facilityForm.reset();
      }, e => console.log(e));
    }
  }
  getAllFacilityTypes() {
    this.facilityTypeService.getAll().subscribe(facilityTypes => {
      this.facilityTypes = facilityTypes;
    });
  }
  getAllRentTypes() {
    this.rentTypeService.getAll().subscribe(rentTypes => {
      this.rentTypes = rentTypes;
    });
  }
}
