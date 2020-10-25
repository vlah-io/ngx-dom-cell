import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-year-cell',
  template: `<span [vlahioYearCell]="value"></span>`
})
export class YearCellComponent {
  @Input() value: number | string | null;
}
