import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-years-cell',
  template: `<span [vlahioYearsCell]="value" [trend]="trend"></span>`
})
export class YearsCellComponent {
  @Input() value: number | string | null;
  @Input() trend: number;
}
