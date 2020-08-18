import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as ace from 'brace';
import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/theme/solarized_light';
import 'brace/ext/language_tools';


@Component({
  selector: 'app-ace-editor',
  template: `
    <div class="ace-editor" #aceEditor></div>`,
  styleUrls: ['./ace-editor.component.css']
})
export class AceEditorComponent implements OnInit {
  content: string = 'var a = 12';
  @ViewChild('aceEditor') aceEditor: ElementRef;
  editor: any;
  @Input() initialValue: string = '$.on(\'button\', \'click\', function onClick() {\n' +
    '    setTimeout(function timer() {\n' +
    '        console.log(\'You clicked the button!\');    \n' +
    '    }, 2001);\n' +
    '});\n' +
    '\n' +
    'console.log("Hi!");\n' +
    '\n' +
    'setTimeout(function timeout() {\n' +
    '    console.log("Click the button!");\n' +
    '}, 5000);\n' +
    '\n' +
    'console.log("Welcome to loupe.");';
  @Input() mode: string;

  onCodeChange = (newCode) => {
    console.log(newCode);
  };

  onBlur = () => {
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.editor = ace.edit(this.aceEditor.nativeElement);
    this.editor.getSession().setMode(`ace/mode/${this.mode}`);
    this.editor.setTheme('ace/theme/solarized_light');
    this.editor.focus();
    this.editor.setShowFoldWidgets(true);

    this.editor.setOption('enableBasicAutocompletion', true);


    this.editor.setValue(this.initialValue, -1);

    this.editor.on('blur', function() {
      this.onCodeChange(this.editor.getValue().split('\n'));
      this.onBlur();
    }.bind(this));

  }

  ngOnDestroy() {
    this.editor.destroy();
  }

}
