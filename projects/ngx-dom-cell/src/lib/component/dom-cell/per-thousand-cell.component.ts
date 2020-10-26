import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-per-thousand-cell',
  template: `<span [vlahioPerThousandCell]="value" [trend]="trend"></span>`
})
export class PerThousandCellComponent {
  @Input() value: number | string | null;
  @Input() trend: number;
}
