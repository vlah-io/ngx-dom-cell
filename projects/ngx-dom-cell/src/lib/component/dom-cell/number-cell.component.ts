import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-number-cell',
  template: `<span [vlahioNumberCell]="value" [trend]="trend"></span>`
})
export class NumberCellComponent {
  @Input() value: number | string | null | undefined;
  @Input() trend: number | undefined;
}
