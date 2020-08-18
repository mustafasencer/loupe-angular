import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-editor',
  template: `
    <button class='editor-switch' *ngIf="isEditable; else notEditable" (click)="this.saveAndRunCode()">Save + Run</button>
    <app-ace-editor class="ace-editor-wrapper" [mode]="'javascript'"></app-ace-editor>

    <ng-template #notEditable>
      <div class='editor-switch'>
        <button (click)="this.onEditFocus()">Edit</button>
        <button (click)="this.runCode()">Rerun</button>
        <button (click)="this.pauseCode()">Pause</button>
        <button (click)="this.resumeCode()">Resume</button>
      </div>
      <div
        class="editor flexChild"
        (click)="this.onEditFocus()"
        data-lines="this.lines"
      ></div>
    </ng-template>`,
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  isEditable: boolean = true;
  code: any;
  lines: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onCodeChange(newCode): void {
    this.code.codeLines = newCode;
  }

  getLines(): string {
    let i = 0;
    return this.code.codeLines.map(function() {
      i++;
      return i;
    }).join(String.fromCharCode(10));
  }

  saveAndRunCode(): void {
    this.isEditable = false;
    this.runCode();

  }

  onEditFocus(): void {
    console.log('Heyt Beeee');
    this.isEditable = true;
  }

  runCode(): void {

  }

  pauseCode(): void {

  }

  resumeCode(): void {

  }
}
