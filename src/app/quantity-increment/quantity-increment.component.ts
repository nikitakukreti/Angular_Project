import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-increment',
  templateUrl: './quantity-increment.component.html',
  styleUrls: ['./quantity-increment.component.css']
})
export class QuantityIncrementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  msg="";
  click()
  {
    this.msg="Click Me Button Clicked";
  }

  counterValue = 0;

  increment() {
    this.counterValue++;
  }

  counterVal = 0;

  incrementt() {
    this.counterVal++;
  }

  decrement() {
    this.counterVal--;
  }
}
