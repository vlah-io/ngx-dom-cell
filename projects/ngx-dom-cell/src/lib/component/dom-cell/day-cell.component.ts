import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-day-cell',
  template: `<span [vlahioDayCell]="value"></span>`
})
export class DayCellComponent {
  @Input() value: number | string | null | undefined;
}
