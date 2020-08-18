import {Component, OnInit} from '@angular/core';

@Component({
  selector: '[appCallStack]',
  template: `
<!--    <div class="stack-wrapper flexChild">-->
      <div class="stack">
        <!--      <ReactCSSTransitionGroup transitionName="tr-stack">-->
        <!--        {{this.calls}}-->
        <!--      </ReactCSSTransitionGroup>-->
      </div>
<!--    </div>-->
  `,
  styleUrls: ['./call-stack.component.css']
})
export class CallStackComponent implements OnInit {
  calls = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}


