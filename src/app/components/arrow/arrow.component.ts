import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class ArrowComponent {
  @Input() value: number;

  readonly threshold = 2;

  constructor() {
  }


}
