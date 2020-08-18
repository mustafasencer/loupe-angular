import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loupe-angular';
  isSettingsOpen: boolean = false;

  @ViewChild('content') content: ElementRef<any>;

  constructor(private modalService: NgbModal) {
  }

  toggleSettings() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  openModal(content): void {
    this.modalService.open(content, {size: 'xl'}).result.then((result) => {
      console.log('Modal Opened!');
    }, (reason) => {
      console.log('Modal Error!');
    });
  }

  ngAfterViewInit(): void {
    // this.modalService.open(this.content, {size: 'xl'}).result.then((result) => {
    //   console.log('Modal Opened!');
    // }, (reason) => {
    //   console.log(reason);
    // });
  }

  ngOnInit(): void {
  }
}
