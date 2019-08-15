import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {WidgetService} from '../../services/widget.service';
import {IWidget} from '../../models/iwidget';
import {FormBuilder} from '@angular/forms';
import {Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnDestroy {
  widget: IWidget;
  editForm;
  subscription: Subscription;
  private unsubscribe: Subject<boolean> = new Subject();

  constructor(private widgetService: WidgetService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.subscription = this.widgetService.editedWidget
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => {
        if (res) {
          this.widget = res;
          this.editForm = this.formBuilder.group({
            caption: res.caption,
            value: res.value,
          }, {updateOn: 'change'});
        }
      });

    this.editForm.valueChanges
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.widgetService.updateEditingWidget(this.editForm.value));
  }

  onSubmit(data) {
    this.widgetService.updateEditingWidget(data);
    this.editForm.reset();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  @HostListener('document:keydown.escape', ['$event'])
  @HostListener('document:keydown.enter', ['$event'])
  onEscHandler() {
    this.widgetService.endEditing();
  }

}
