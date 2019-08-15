import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WidgetListComponent} from './components/widget-list/widget-list.component';
import {EditorComponent} from './components/editor/editor.component';
import {WidgetComponent} from './components/widget/widget.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArrowComponent } from './components/arrow/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetListComponent,
    EditorComponent,
    WidgetComponent,
    ArrowComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
