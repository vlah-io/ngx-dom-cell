import {Component, Input, ViewChild} from '@angular/core';
import {TrendElementWorker} from '../../service/trend-element.worker';
import {TextCellComponent} from './text-cell.component';

@Component({
  selector: 'vlahio-per-thousand-cell',
  template: `<span [vlahioPerThousandCell]="value" [trend]="trend"></span>`
})
export class PerThousandCellComponent {
  @Input() value: number | string | null;
  @Input() trend: number;
}
