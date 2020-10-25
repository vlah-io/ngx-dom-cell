import {Directive, HostBinding, Input} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {TrendCellWorker} from '../../service/trend-cell.worker';

@Directive({
  selector: '[vlahioInfinityCell]'
})
export class InfinityCellDirective {
  @Input('vlahioInfinityCell') visible: boolean;

  constructor(private domCelWorker: TrendCellWorker) {
  }

  @HostBinding('innerHtml')
  get _innerHTML(): SafeHtml | null {
    if (this.visible !== true) {
      return null;
    }

    return this.domCelWorker.render('∞', ['vlahio-fm', 'vlahio-fm-r']);
  }
}
