import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-square-feet-cell',
  template: `<span [vlahioSquareFeetCell]="value" [trend]="trend"></span>`
})
export class SquareFeetCellComponent {
  @Input() value: number | string | null | undefined;
  @Input() trend: number | undefined;
}
