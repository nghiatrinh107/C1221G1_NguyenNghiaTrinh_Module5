import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
public color: string;
  constructor() { }

  ngOnInit(): void {
  }

  getColor() {
    let color1 = (document.getElementById('color') as HTMLInputElement).value;
    this.color = color1;
  }
}
