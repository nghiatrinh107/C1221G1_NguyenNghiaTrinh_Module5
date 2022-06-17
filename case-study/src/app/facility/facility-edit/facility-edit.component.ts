import { Component, OnInit } from '@angular/core';
import {Facility} from '../../module/facility';
import {FacilityType} from '../../module/facility-type';
import {RentType} from '../../module/rent-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FacilityService} from '../facility.service';
import {FacilityTypeService} from '../facility-type.service';
import {RentTypeService} from '../rent-type.service';


@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  public poolSquare: boolean;
  public numberFloor: boolean;
  facilityTypes: FacilityType[] = [];
  rentTypes: RentType[] = [];
  facilityForm: FormGroup;
  id: number;
  constructor(private activatedRoute: ActivatedRoute,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getFacility(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllFacilityTypes();
    this.getAllRentTypes();
  }
  getFacility(id: number) {
    return this.facilityService.findById(id).subscribe(facility => {
      this.facilityForm = new FormGroup({
        name: new FormControl(facility.name, [Validators.required]),
        code: new FormControl(facility.code, [Validators.required, Validators.pattern('^DV-\\d{4}$')]),
        rentType: new FormControl(facility.rentType, [Validators.required]),
        rentalFee: new FormControl(facility.rentalFee, [Validators.required]),
        floorSquare: new FormControl(facility.floorSquare, [Validators.required, Validators.pattern('^[+]?(\\d*\\.)?\\d+$')]),
        maximumPeople: new FormControl(facility.maximumPeople, [Validators.required, Validators.pattern('^[+]?[0]*[1-9][0-9]*$')]),
        facilityType: new FormControl(facility.facilityType, [Validators.required]),
        roomStandard: new FormControl(facility.roomStandard),
        description: new FormControl(facility.description),
        poolSquare: new FormControl(facility.poolSquare),
        numberFloor: new FormControl(facility.numberFloor),
        freeServiceInclude: new FormControl(facility.freeServiceInclude),
        image: new FormControl(facility.image)
      });
    });
  }
  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
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
  updateFacility(id: number) {
    if (this.facilityForm.valid) {
      const facility = this.facilityForm.value;
      console.log(facility);
      this.facilityService.update(id, facility).subscribe(() => {
        alert('Cập nhật thành công');
        this.route.navigate(['/facility/list']);
      });
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

