import { Component, OnInit } from '@angular/core';
import {facilities} from '../data/facilities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
facilities = facilities;
  constructor() { }

  ngOnInit(): void {
  }

}
