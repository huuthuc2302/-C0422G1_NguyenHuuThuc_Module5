import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  a: number = 0;
  b: number = 0;
  result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  summation(){
    this.result = this.a + this.b ;
  }

  subtraction(){
    this.result = this.a - this.b;
  }

  multiplication(){
    this.result = this.a * this.b;
  }

  division(){
    this.result = this.a / this.b;
  }

}
