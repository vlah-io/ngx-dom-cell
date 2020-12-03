import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-currency-cell',
  template: `<span [vlahioCurrencyCell]="amount" [cls]="cls" [digits]="digits" [trend]="trend"></span>`
})
export class CurrencyCellComponent {
  @Input() cls: string | undefined;
  @Input() trend: number | undefined;
  @Input() digits: number | undefined;
  @Input() amount: number | string | null | undefined;
}
