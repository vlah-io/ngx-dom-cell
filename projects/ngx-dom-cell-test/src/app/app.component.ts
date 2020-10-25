import {Component, OnInit} from '@angular/core';
import {VLAHIO_DOM_CELL_CONFIG} from '../../../ngx-dom-cell/src/lib/service/injection-token';
import {VLAHIO_DATE_PIPE_CONFIG, VlahioDatePipe} from '@vlah.io/ngx-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: VLAHIO_DOM_CELL_CONFIG,
      useValue: {
        locale: 'en-US',
        date_format: 'dd/MM/yyyy'
      }
    },
    VlahioDatePipe,
    {
      provide: VLAHIO_DATE_PIPE_CONFIG,
      useValue: {
        locale: 'en-US',
        date_format: 'dd/MM/yyyy'
      }
    }
  ]
})
export class AppComponent implements OnInit {
  trend = 100;

  ngOnInit(): void {
    setTimeout(() => this.trend = -100, 5000);
  }
}
