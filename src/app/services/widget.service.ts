import {Injectable} from '@angular/core';
import {IWidget} from '../models/iwidget';
import {BehaviorSubject} from 'rxjs';
import {widgetStub} from '../stubs/widgetsStub';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  widgets: BehaviorSubject<IWidget[]> = new BehaviorSubject(null);
  editedWidget: BehaviorSubject<IWidget> = new BehaviorSubject<IWidget>(null);
  activeWidget: BehaviorSubject<IWidget> = new BehaviorSubject<IWidget>(null);

  constructor() {
  }

  init() {
    const DEV_TIMEOUT = 5000;
    setTimeout(() => {
      this.widgets.next(widgetStub);
    }, DEV_TIMEOUT);
  }

  editWidget(widget: IWidget) {
    const nextWidget = this.editedWidget.value && this.editedWidget.value.id === widget.id ? null : widget;
    this.editedWidget.next(nextWidget);
  }

  updateEditingWidget(widget) {
    const editedWidget = this.editedWidget.value;
    widgetStub.forEach((w) => {
      if (w.id === editedWidget.id) {
        Object.assign(w, widget);
      }
    });
    this.widgets.next(widgetStub);
  }

  endEditing() {
    this.editedWidget.next(null);
  }

  setActiveWidget(widget: IWidget) {
    const activeWidget = this.activeWidget.value && this.activeWidget.value.id === widget.id ? null : widget;
    this.activeWidget.next(activeWidget);
  }

}
