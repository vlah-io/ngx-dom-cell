import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-text-cell',
  template: `<span [vlahioTextCell]="txt" [cls]="cls"></span>`
})
export class TextCellComponent {
  @Input() txt: string | number | undefined;
  @Input() cls: string | string[] | undefined;
}
