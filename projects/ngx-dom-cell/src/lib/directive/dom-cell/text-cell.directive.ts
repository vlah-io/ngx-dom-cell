import {Directive, HostBinding, Input} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {TrendCellWorker} from '../../service/trend-cell.worker';

@Directive({
  selector: '[vlahioTextCell]'
})
export class TextCellDirective {
  @Input('vlahioTextCell') txt: string | number | null | undefined;
  @Input() cls: string | string[] | undefined;

  constructor(private domCelWorker: TrendCellWorker) {
  }

  @HostBinding()
  get innerHTML(): SafeHtml | null {
    return this.domCelWorker.render(this.txt, this.cls);
  }
}
