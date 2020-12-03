import {Directive, HostBinding, Input} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {TrendCellWorker} from '../../service/trend-cell.worker';

@Directive({
  selector: '[vlahioSquareFeetCell]'
})
export class SquareFeetCellDirective {
  @Input('vlahioSquareFeetCell') txt: number | string | null | undefined;
  @Input() trend: number | null | undefined;

  constructor(private trendCellWorker: TrendCellWorker) {
  }

  @HostBinding()
  get innerHTML(): SafeHtml | null {
    return this.trendCellWorker.render(this.txt, 'vlahio-sq-ft', {trend: this.trend});
  }
}
