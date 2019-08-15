import {Component, HostListener, Input} from '@angular/core';
import {WidgetService} from '../../services/widget.service';
import {IWidget} from '../../models/iwidget';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {
  @Input() widget: IWidget;

  constructor(private widgetService: WidgetService) {
  }

  edit($event) {
    $event.stopPropagation();
    if (!this.widget.isDisabled) {
      this.widgetService.editWidget(this.widget);
    }
  }

  get isActive() {
    return this.widgetService.activeWidget.value && this.widget.id === this.widgetService.activeWidget.value.id;
  }

  @HostListener('click') click() {
    if (!this.widget.isDisabled) {
      this.widgetService.setActiveWidget(this.widget);
    }
  }
}
