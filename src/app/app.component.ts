import {Component, OnInit} from '@angular/core';
import {WidgetService} from './services/widget.service';
import {widgetListSettingsStub} from './stubs/widgetListSetiingsStub';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'untitled';
  isEditing = false;
  settings = widgetListSettingsStub;
  constructor(private widgetService: WidgetService) {

  }

  ngOnInit(): void {
    this.widgetService.init();
    this.widgetService.editedWidget.subscribe(value => {
      this.isEditing = value != null;
    });
  }


}
