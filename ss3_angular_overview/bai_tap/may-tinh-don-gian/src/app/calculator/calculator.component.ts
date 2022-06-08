import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
public number = '' ;
  constructor() { }

  ngOnInit(): void {
  }

  calculator(value: string) {
    this.number += value;
  }

  remove() {
    this.number = '';
  }

  result() {
    // tslint:disable-next-line:no-eval
   this.number = eval(this.number);
  }
}
