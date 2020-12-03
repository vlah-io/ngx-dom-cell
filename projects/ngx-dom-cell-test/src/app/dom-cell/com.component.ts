import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-com-cell-component',
  templateUrl: './com.component.html'
})
export class ComComponent implements OnInit {
  trend = 100;

  ngOnInit(): void {
    setTimeout(() => this.trend = -100, 5000);
  }
}
