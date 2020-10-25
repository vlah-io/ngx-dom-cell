import {TestBed} from '@angular/core/testing';
import {TrendCellWorker} from './trend-cell.worker';

describe('TrendCellWorker', () => {
  let trendCellWorker: TrendCellWorker;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    trendCellWorker = TestBed.inject(TrendCellWorker);
  });

  it(
    'should return up arrow outer dom cell element',
    () => {
      expect(
        (trendCellWorker.render(46.50, 'vlahio-fm-mn vlahio-fm-gbp', {trend: 10}) as any).changingThisBreaksApplicationSecurity
      )
        .toBe(
          '<span class="vlahio-fm vlahio-fm-mn vlahio-fm-gbp"><vlahio-up-down-arrow style="margin: 0px 5px;"><span class="vlahio-arrow-container"><span class="vlahio-arrow-icon up"></span></span></vlahio-up-down-arrow>46.5</span>'
        );
    }
  );

  it(
    'should return down arrow outer dom cell element',
    () => {
      expect(
        (trendCellWorker.render(46.50, 'vlahio-fm-mn vlahio-fm-gbp', {trend: -10}) as any).changingThisBreaksApplicationSecurity
      )
        .toBe(
          '<span class="vlahio-fm vlahio-fm-mn vlahio-fm-gbp"><vlahio-up-down-arrow style="margin: 0px 5px;"><span class="vlahio-arrow-container"><span class="vlahio-arrow-icon down"></span></span></vlahio-up-down-arrow>46.5</span>'
        );
    }
  );

  it(
    'should return up arrow inner dom cell element',
    () => {
      expect(
        (trendCellWorker.render(46.50, 'vlahio-fm-mn vlahio-fm-gbp', {
          trend: 10,
          returnInnerHTML: true
        }) as any).changingThisBreaksApplicationSecurity
      )
        .toBe(
          '<vlahio-up-down-arrow style="margin: 0px 5px;"><span class="vlahio-arrow-container"><span class="vlahio-arrow-icon up"></span></span></vlahio-up-down-arrow>46.5'
        );
    }
  );

  it(
    'should return down arrow inner dom cell element',
    () => {
      expect(
        (trendCellWorker.render(46.50, 'vlahio-fm-mn vlahio-fm-gbp', {
          trend: -10,
          returnInnerHTML: true
        }) as any).changingThisBreaksApplicationSecurity
      )
        .toBe(
          '<vlahio-up-down-arrow style="margin: 0px 5px;"><span class="vlahio-arrow-container"><span class="vlahio-arrow-icon down"></span></span></vlahio-up-down-arrow>46.5'
        );
    }
  );

  it(
    'should return up arrow inner dom cell element',
    () => {
      expect(
        (trendCellWorker.render(46.50, undefined, {
          trend: 10
        }) as any).changingThisBreaksApplicationSecurity
      )
        .toBe(
          '<span class="vlahio-fm"><vlahio-up-down-arrow style="margin: 0px 5px;"><span class="vlahio-arrow-container"><span class="vlahio-arrow-icon up"></span></span></vlahio-up-down-arrow>46.5</span>'
        );
    }
  );

  it(
    'should return down arrow inner dom cell element',
    () => {
      expect(
        (trendCellWorker.render(46.50, undefined, {
          trend: -10
        }) as any).changingThisBreaksApplicationSecurity
      )
        .toBe(
          '<span class="vlahio-fm"><vlahio-up-down-arrow style="margin: 0px 5px;"><span class="vlahio-arrow-container"><span class="vlahio-arrow-icon down"></span></span></vlahio-up-down-arrow>46.5</span>'
        );
    }
  );
});
