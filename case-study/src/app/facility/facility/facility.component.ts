import {Component, OnInit} from '@angular/core';
import {facilities} from '../../data/facilities';
import {FacilityService} from '../facility.service';
declare let card: any;
@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities ;
  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilities = this.facilityService.getAllFacilities();
    // tslint:disable-next-line:no-unused-expression
    new card();
  }
  public loadScript() {
  }

}
