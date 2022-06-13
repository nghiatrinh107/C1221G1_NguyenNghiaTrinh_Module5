import {Component, OnInit} from '@angular/core';
import {facilities} from '../../data/facilities';
declare let card: any;
@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  // private scripUrls = [
  //   'assets/js/jquery.min.js',
  //   'assets/js/popper.min.js',
  //   'assets/js/bootstrap.min.js',
  //   'assets/js/roberto.bundle.js',
  //   'assets/js/default-assets/active.js',
  //   'assets/js/default-assets/card.js'
  // ];
  facilities = facilities;
  constructor() {
  }

  ngOnInit(): void {
    // this.loadScript();
    // tslint:disable-next-line:no-unused-expression
    new card();
  }
  public loadScript() {
    // for (const scriptUrl of this.scripUrls) {
    //   const body = document.body as HTMLDivElement;
    //   const script = document.createElement('script');
    //   script.innerHTML = '';
    //   script.src = scriptUrl;
    //   body.appendChild(script);
    // }
  }

}
