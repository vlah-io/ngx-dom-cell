@vlah.io/ngx-dom-cell

Set of reusable Angular components to display table cell's.

### Usage (code example)

```
    <span [vlahioCalendarCell]="'12/05/2019'"></span>
    <span [vlahioNumberCell]="60.54"> </span>
    <span [vlahioSquareFeetCell]="58.25"></span>
    <span [vlahioTextCell]="'YES'"></span>
    <span [vlahioYearCell]="2019"></span>
    <span [vlahioYearsCell]="24"></span>
    <span [vlahioDaysCell]="4"></span>
    <span [vlahioMonthCell]="6"></span>
    <span [vlahioMonthCell]="'December'"></span>
    <span [vlahioDayCell]="24"></span>
    <span [vlahioDayCell]="'Monday'"></span>
    <span [vlahioPercentCell]="6.5"></span>
    <span [vlahioPercentCell]="'6.5'"></span>
    <span [vlahioPerThousandCell]="24.2"></span>
    <span [vlahioPerThousandCell]="'24.2'" [trend]="-100"></span>
    <span [vlahioTextCell]="'left'" [cls]="'vlahio-fm'"></span>
    <span [vlahioTextCell]="'center'" [cls]="'vlahio-fm vlahio-fm-c'"></span>
    <span [vlahioTextCell]="'right'" [cls]="'vlahio-fm vlahio-fm-r'"></span>
    <span [vlahioUsdCurrencyCell]="1825.5656" [digits]="3" [trend]="trend"></span>
    <span [vlahioGbpCurrencyCell]="1825.56"></span>
    <span [vlahioEurCurrencyCell]="1825.56"> </span>
    <span [vlahioCurrencyCell]="1825.56" [cls]="'vlahio-mn-ron'"></span>
    <span [vlahioCurrencyCell]="1825.56" [cls]="'vlahio-mn-chf'"></span>
    <span [vlahioCurrencyCell]="1825.56" [cls]="'vlahio-mn-bgn'"></span>
    <span [vlahioCurrencyCell]="1825.56" [cls]="'vlahio-mn-hrk'"></span>
    <span [vlahioCurrencyCell]="1825.56" [cls]="'vlahio-mn-czk'"></span>
    <span [vlahioCurrencyCell]="1825.56" [cls]="'vlahio-mn-dkk'"></span>
    <span [vlahioCurrencyCell]="1825.56" [cls]="'vlahio-mn-huf'"></span>
    <span [vlahioCurrencyCell]="1825.56" [cls]="'vlahio-mn-isk'"></span>
    <span [vlahioCurrencyCell]="1825.56" [cls]="'vlahio-mn-nok'"></span>
    <span [vlahioCurrencyCell]="1825.56" [cls]="'vlahio-mn-pln'"></span>
    <span [vlahioCurrencyCell]="1825.56" [cls]="'vlahio-mn-rub'"></span>
    <span [vlahioCurrencyCell]="1825.5656" [cls]="'vlahio-mn-sek'" [digits]="3"></span>
    <span [vlahioCurrencyCell]="-1825.56" [cls]="'vlahio-mn-try'" [trend]="trend"></span>
    <span [vlahioCurrencyCell]="1825.56" [cls]="'vlahio-mn-uah'" [trend]="-10"></span>
    <span [vlahioCurrencyCell]="null" [cls]="'vlahio-mn-uah'"></span>
    <span vlahioInfinityCell></span>
    <span [vlahioInfinityCell]="null"></span>
    <span [vlahioInfinityCell]="true"></span>
    <span [vlahioSquareMetreCell]="58.25"></span>
    <span [vlahioUpDownArrow]="trend"></span>
    <span><span [vlahioUpDownArrow]="trend"></span> 45</span>
```

### Dom-Cell Worker Services
```
    constructor(private upDownArrowWorker: UpDownArrowWorker,
                private trendElementWorker: TrendElementWorker,
                private trendCellWorker: TrendCellWorker
    ) {
    }

    ngOnInit(): void {
      // this.upDownArrowWorker.render(val: number): HTMLSpanElement | undefined
      const upDownArrowWorker = this.upDownArrowWorker.render(10);

      // this.trendElementWorker.render(trend: number, parent: HTMLElement, refChild: ChildNode): void
      const parent = this.renderer.createElement('span');
      const refChild = this.renderer.createText('45.56');
      this.renderer.appendChild(parent, refChild);
      const trendElementWorker = this.trendElementWorker.render(10, parent, refChild);

      // this.trendCellWorker.render(txt: any, cls?: string | string[], options: TrendCellWorkerOptionsInterface = {}): SafeHtml | null
      const el = this.trendCellWorker.render(45.56, 'vlahio-mn-mn vlahio-mn-gbp', {trend: 10});
    }
```

### CSS styles
```
    /* You can add global styles to this file, and also import other style files */
    @import "../../ngx-dom-cell/src/assets/css/ngx-dom-cell.css";
    @import "../../ngx-dom-cell/src/assets/css/ngx-dom-cell-various.css";
    @import "../../ngx-dom-cell/src/assets/css/ngx-dom-cell-table.css";
```

For more details read [here](https://github.com/vlah-io/ngx-dom-cell/blob/master/INSTALLATION.md).
