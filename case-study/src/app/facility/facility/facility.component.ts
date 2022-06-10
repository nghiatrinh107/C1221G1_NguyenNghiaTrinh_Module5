import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  private scripUrls = [
    'assets/js/jquery.min.js',
    'assets/js/popper.min.js',
    'assets/js/bootstrap.min.js',
    'assets/js/roberto.bundle.js',
    'assets/js/default-assets/active.js',
    'assets/js/default-assets/card.js'
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.loadScrip();
  }

  public loadScrip() {
    for (const scripUrl of this.scripUrls) {
      const body = document.body as HTMLDivElement;
      const scrip = document.createElement('script');
      scrip.innerHTML = '';
      scrip.src = scripUrl;
      body.appendChild(scrip);
    }
  }
}
