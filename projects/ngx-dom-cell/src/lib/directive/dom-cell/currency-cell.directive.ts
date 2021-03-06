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
  @Input() trend: number | null | undefined;
  @Input() cls: string | undefined;
  private currencyAmount: number | string | null | undefined;
  private decimals: string | undefined;

  constructor(private trendCellWorker: TrendCellWorker,
              @Inject(VLAHIO_DOM_CELL_CONFIG) private configs: DomCellConfigInterface
  ) {
  }

  @Input('vlahioCurrencyCell')
  set amount(amount: number | string | null | undefined) {
    if (MathHelper.isNumber(amount)) {
      this.currencyAmount = amount;
    }
  }

  @Input()
  set digits(digits: number | undefined) {
    if (MathHelper.isNumber(digits)) {
      this.decimals = `1.0-${digits}`;
    }
  }

  @HostBinding()
  get innerHTML(): SafeHtml | null {
    let cls = ['vlahio-mn'];
    if (this.cls) {
      cls = [...cls, ...this.cls.trim().split(' ')];
    }
    return this.trendCellWorker.render(this.amount$(), cls, {trend: this.trend});
  }

  amount$(): string | number | null | undefined {
    if (this.currencyAmount) {
      const currency: CurrencyPipe = new CurrencyPipe(this.configs.locale || 'en-US');
      return currency.transform(this.currencyAmount, '', '', this.decimals);
    }

    return this.currencyAmount;
  }
}
