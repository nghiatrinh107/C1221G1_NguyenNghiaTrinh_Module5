import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public number1: number;
  public number2: number;
  public result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculator(value: string) {
    if (value === '+') {
      this.result = Number(String(this.number1)) + Number(String(this.number2));
    }
    if (value === '-') {
      this.result = Number(String(this.number1)) - Number(String(this.number2));
    }
    if (value === '*') {
      this.result = Number(String(this.number1)) * Number(String(this.number2));
    }
    if (value === '/') {
      this.result = Number(String(this.number1)) / Number(String(this.number2));
    }
  }
}
