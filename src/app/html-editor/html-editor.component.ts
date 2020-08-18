import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-html-editor',
  template: `
    <div *ngIf="isEditable; else Editable" class="html-editor">
      <div class='editor-switch'>
        <button (click)="switchMode()">Edit</button>
      </div>
      <div class='html-scratchpad flexChild' [innerHTML]="this.initialValue | sanitizeHtml"></div>
    </div>

    <ng-template #Editable>
      <div class="html-editor">
        <div class='editor-switch'>
          <button (click)="switchMode()">Save</button>
        </div>
        <app-ace-editor class="ace-editor-wrapper" [mode]="'html'" [initialValue]="this.initialValue"></app-ace-editor>
      </div>
    </ng-template>`,
  styleUrls: ['./html-editor.component.css']
})
export class HtmlEditorComponent implements OnInit {
  isEditable: boolean = true;
  code: string;
  initialValue: string = `<button (click)="console.log('Hi')" style="border-radius: 10px;">Click me!</button>`;

  constructor() {
  }

  ngOnInit(): void {
  }

  switchMode() {
    this.isEditable = !this.isEditable;
  }

  onCodeChange(newCode) {
    this.code = newCode;
  }
}
