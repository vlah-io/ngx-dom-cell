import {Directive, HostBinding, Input} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {TrendCellWorker} from '../../service/trend-cell.worker';

@Directive({
  selector: '[vlahioTextCell]'
})
export class TextCellDirective {
  @Input('vlahioTextCell') txt: string | number;
  @Input() cls: string | string[];

  constructor(private domCelWorker: TrendCellWorker) {
  }

  @HostBinding('innerHtml')
  get _innerHTML(): SafeHtml | null {
    return this.domCelWorker.render(this.txt, this.cls);
  }
}
