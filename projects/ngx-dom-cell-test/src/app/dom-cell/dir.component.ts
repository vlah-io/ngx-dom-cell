import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dir-cell-component',
  templateUrl: './dir.component.html'
})
export class DirComponent implements OnInit {
  trend = 100;

  ngOnInit(): void {
    setTimeout(() => this.trend = -100, 5000);
  }
}
