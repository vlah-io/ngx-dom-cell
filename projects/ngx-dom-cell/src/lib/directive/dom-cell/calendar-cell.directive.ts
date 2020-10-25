import {Directive, HostBinding, Input} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {VlahioDatePipe} from '@vlah.io/ngx-pipe';
import {TrendCellWorker} from '../../service/trend-cell.worker';

@Directive({
  selector: '[vlahioCalendarCell]'
})
export class CalendarCellDirective {
  @Input('vlahioCalendarCell') txt: string | number;
  @Input() format: string;
  @Input() timezone: string;
  @Input() locale: string;

  constructor(private trendCellWorker: TrendCellWorker,
              private datePipe: VlahioDatePipe
  ) {
  }

  @HostBinding('innerHtml')
  get _innerHTML(): SafeHtml | null {
    return this.trendCellWorker.render(this.datePipe.transform(
      this.txt.toString(),
      this.format,
      this.timezone,
      this.locale
      ),
      'vlahio-cl'
    );
  }
}
