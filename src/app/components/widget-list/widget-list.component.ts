import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {IWidget} from '../../models/iwidget';
import {WidgetService} from '../../services/widget.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() ids: number[];
  idsMap: {};
  widgets: IWidget[];
  subscription: Subscription;

  constructor(private widgetService: WidgetService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // make Map to fasten search of element in filter
    this.idsMap = {};
    this.ids.forEach(id => this.idsMap[id] = id);
  }

  ngOnInit() {
    this.widgetService.widgets.subscribe((widgets) => {
      if (widgets) {
        this.widgets = widgets.filter(w => this.idsMap[w.id]);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
