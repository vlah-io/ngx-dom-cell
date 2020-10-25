import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-format-cell',
  template: `<span [vlahioTextCell]="value" [cls]="cls"></span>`
})
export class FormatCellComponent {
  @Input() value: number | string | null;
  @Input() cls: string | string[];
}
