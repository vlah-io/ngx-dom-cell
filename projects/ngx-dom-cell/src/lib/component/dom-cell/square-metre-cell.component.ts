import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-square-metre-cell',
  template: `<span [vlahioSquareMetreCell]="value" [trend]="trend"></span>`
})
export class SquareMetreCellComponent {
  @Input() value: number | string | null | undefined;
  @Input() trend: number | undefined;
}
