import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-percent-cell',
  template: `<span [vlahioPercentCell]="value" [trend]="trend"></span>`
})
export class PercentCellComponent {
  @Input() value: number | string | null;
  @Input() trend: number;
}
