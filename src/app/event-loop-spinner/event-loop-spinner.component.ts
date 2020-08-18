import {Component, OnInit} from '@angular/core';

@Component({
  selector: '[spinnerWrapper]',
  template: `
    <div class="spinner-circle"></div>
    <div class="spinner-arrow spinner-arrow-left"></div>
    <div class="spinner-arrow spinner-arrow-right"></div>
  `,
  styleUrls: ['./event-loop-spinner.component.css']
})
export class EventLoopSpinnerComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}

