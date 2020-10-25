import {Directive, HostBinding, Input} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {TrendCellWorker} from '../../service/trend-cell.worker';

@Directive({
  selector: '[vlahioMonthCell]'
})
export class MonthCellDirective {
  @Input('vlahioMonthCell') txt: number | string | null;

  constructor(private trendCellWorker: TrendCellWorker) {
  }

  @HostBinding('innerHtml')
  get _innerHTML(): SafeHtml | null {
    return this.trendCellWorker.render(this.txt, 'vlahio-mo');
  }
}
