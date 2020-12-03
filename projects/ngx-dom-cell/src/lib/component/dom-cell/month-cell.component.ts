import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-month-cell',
  template: `<span [vlahioMonthCell]="value"></span>`
})
export class MonthCellComponent {
  @Input() value: number | string | null | undefined;
}
