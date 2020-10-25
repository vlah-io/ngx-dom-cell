import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-currency-cell',
  template: `<span [vlahioCurrencyCell]="amount" [cls]="cls" [digits]="digits" [trend]="trend"></span>`
})
export class CurrencyCellComponent {
  @Input() cls: string;
  @Input() trend: number;
  @Input() digits: number;
  @Input() amount: number;
}
