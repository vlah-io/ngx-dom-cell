import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-calendar-cell',
  template: `<span [vlahioCalendarCell]="value" [format]="format" [locale]="locale" [timezone]="timezone"></span>`
})
export class CalendarCellComponent {
  @Input() format: string;
  @Input() timezone: string;
  @Input() locale: string;
  @Input() value: string | number;
}
