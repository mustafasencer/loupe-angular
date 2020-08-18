import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CallStackComponent} from './call-stack/call-stack.component';
import {CallbackComponent} from './callback/callback.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CallbackQueueComponent} from './callback-queue/callback-queue.component';
import {WebApisComponent} from './web-apis/web-apis.component';
import {HtmlEditorComponent} from './html-editor/html-editor.component';
import {EditorComponent} from './editor/editor.component';
import {EventLoopSpinnerComponent} from './event-loop-spinner/event-loop-spinner.component';
import {SettingsPanelComponent} from './settings-panel/settings-panel.component';
import {AceEditorComponent} from './ace-editor/ace-editor.component';
import {AceModule} from 'ngx-ace-wrapper';
import { CallStackItemComponent } from './call-stack/call-stack-item/call-stack-item.component';
import {SanitizeHtmlPipe} from './pipes/sanitize-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CallStackComponent,
    CallbackComponent,
    CallbackQueueComponent,
    WebApisComponent,
    HtmlEditorComponent,
    EditorComponent,
    EventLoopSpinnerComponent,
    SettingsPanelComponent,
    AceEditorComponent,
    CallStackItemComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AceModule
  ],
  providers: [SanitizeHtmlPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
