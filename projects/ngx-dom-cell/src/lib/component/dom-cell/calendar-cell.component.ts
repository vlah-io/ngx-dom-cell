import {Component, Input} from '@angular/core';

@Component({
  selector: 'vlahio-calendar-cell',
  template: `<span [vlahioCalendarCell]="value" [format]="format" [locale]="locale" [timezone]="timezone"></span>`
})
export class CalendarCellComponent {
  @Input() format: string | undefined;
  @Input() timezone: string | undefined;
  @Input() locale: string | undefined;
  @Input() value: string | number | undefined;
}
