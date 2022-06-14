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
  facility = {} as Facility;
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
      const facility = this.getFacility(this.id);
      this.facilityTypes = this.facilityTypeService.getAllFacilityType();
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
    });
  }

  ngOnInit(): void {
  }
  getFacility(id: number) {
    return this.facilityService.findById(id);
  }

}

