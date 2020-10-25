import {Component, Input, ViewChild} from '@angular/core';
import {TrendElementWorker} from '../../service/trend-element.worker';
import {TextCellComponent} from './text-cell.component';

@Component({
  selector: 'vlahio-number-cell',
  template: `<span [vlahioNumberCell]="value" [trend]="trend"></span>`
})
export class NumberCellComponent {
  @Input() value: number | string | null;
  @Input() trend: number;
}
