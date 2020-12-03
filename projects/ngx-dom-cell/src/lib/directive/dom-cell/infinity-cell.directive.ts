import {Directive, HostBinding, Input} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {TrendCellWorker} from '../../service/trend-cell.worker';

@Directive({
  selector: '[vlahioInfinityCell]'
})
export class InfinityCellDirective {
  private isVisible: boolean | undefined;

  constructor(private domCelWorker: TrendCellWorker) {
  }

  @Input('vlahioInfinityCell')
  set visible(bool: string | boolean | null | undefined) {
    this.isVisible = bool === true;
  }

  @HostBinding()
  get innerHTML(): SafeHtml | null {
    if (!this.isVisible) {
      return null;
    }

    return this.domCelWorker.render('∞', ['vlahio-fm', 'vlahio-fm-r']);
  }
}
