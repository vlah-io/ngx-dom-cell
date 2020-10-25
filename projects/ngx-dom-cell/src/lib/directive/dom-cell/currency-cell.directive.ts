import {Directive, HostBinding, Inject, Input} from '@angular/core';
import {MathHelper} from '@vlah.io/ngx-helper';
import {TrendCellWorker} from '../../service/trend-cell.worker';
import {VLAHIO_DOM_CELL_CONFIG} from '../../service/injection-token';
import {DomCellConfigInterface} from '../../interface/ngx-dom-cell.interface';
import {SafeHtml} from '@angular/platform-browser';
import {CurrencyPipe} from '@angular/common';

@Directive({
  selector: '[vlahioCurrencyCell]'
})
export class CurrencyCellDirective {
  @Input() trend: number | null;
  @Input() cls: string;
  private amount: number | string | null;
  private digits: string;

  constructor(private trendCellWorker: TrendCellWorker,
              @Inject(VLAHIO_DOM_CELL_CONFIG) private configs: DomCellConfigInterface
  ) {
  }

  @Input('vlahioCurrencyCell')
  set _amount(amount: number | string | null) {
    if (MathHelper.isNumber(amount)) {
      this.amount = amount;
    }
  }

  @Input('digits')
  set _digits(digits: number) {
    if (MathHelper.isNumber(digits)) {
      this.digits = `1.0-${digits}`;
    }
  }

  @HostBinding('innerHtml')
  get _innerHTML(): SafeHtml | null {
    let cls = ['vlahio-mn'];
    if (this.cls) {
      cls = [...cls, ...this.cls.trim().split(' ')];
    }
    return this.trendCellWorker.render(this.amount$(), cls, {trend: this.trend});
  }

  amount$(): string | number | null | undefined {
    if (this.amount) {
      const currency: CurrencyPipe = new CurrencyPipe(this.configs.locale || 'en-US');
      return currency.transform(this.amount, '', '', this.digits);
    }

    return this.amount;
  }
}
