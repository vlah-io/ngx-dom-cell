import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-infinity-cell',
  template: `<span [vlahioInfinityCell]="visible"></span>`
})
export class InfinityCellComponent {
  @Input() visible: boolean | null | undefined;
}
