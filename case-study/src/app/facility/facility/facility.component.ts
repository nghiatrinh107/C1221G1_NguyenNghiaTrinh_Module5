import {Component, OnInit} from '@angular/core';
import {facilities} from '../../data/facilities';
import {FacilityService} from '../facility.service';
import {Facility} from '../../module/facility';
declare let card: any;
@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities ;
  facilityDelete = {} as Facility;
  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilities = this.facilityService.getAllFacilities();
    // tslint:disable-next-line:no-unused-expression
    new card();
  }
  public loadScript() {
  }
  getFacility(facility: Facility) {
    this.facilityDelete = facility;
  }
  deleteFacility(facilityDelete: Facility) {
    const check = this.facilityService.findById(facilityDelete.id) === undefined;
    if (check) {
      alert('can not found');
    } else {
      this.facilityService.delete(facilityDelete);
      this.ngOnInit();
    }
  }
}
