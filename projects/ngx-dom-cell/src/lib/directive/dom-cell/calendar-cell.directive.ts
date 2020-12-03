import {Directive, HostBinding, Input} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {VlahioDatePipe} from '@vlah.io/ngx-pipe';
import {TrendCellWorker} from '../../service/trend-cell.worker';

@Directive({
  selector: '[vlahioCalendarCell]'
})
export class CalendarCellDirective {
  @Input('vlahioCalendarCell') txt: string | number | undefined;
  @Input() format: string | undefined;
  @Input() timezone: string | undefined;
  @Input() locale: string | undefined;

  constructor(private trendCellWorker: TrendCellWorker,
              private datePipe: VlahioDatePipe
  ) {
  }

  @HostBinding()
  get innerHTML(): SafeHtml | null {
    if (this.txt === undefined) {
      return null;
    }

    return this.trendCellWorker
      .render(
        this.datePipe.transform(
          this.txt.toString(),
          this.format,
          this.timezone,
          this.locale
        ),
        'vlahio-cl'
      );
  }
}
