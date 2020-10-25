import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-days-cell',
  template: `<span [vlahioDaysCell]="value" [trend]="trend"></span>`
})
export class DaysCellComponent {
  @Input() value: number | string | null;
  @Input() trend: number;
}
