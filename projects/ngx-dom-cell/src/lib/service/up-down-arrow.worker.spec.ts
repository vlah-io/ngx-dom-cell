import {UpDownArrowWorker} from './up-down-arrow.worker';
import {TestBed} from '@angular/core/testing';

describe('UpDownArrowWorker', () => {
  let upDownArrowWorker: UpDownArrowWorker;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    upDownArrowWorker = TestBed.inject(UpDownArrowWorker);
  });

  it(
    'should return up arrow',
    () => {
      expect(upDownArrowWorker.render(10)?.innerHTML)
        .toBe('<span class="vlahio-arrow-icon up"></span>');
    }
  );

  it(
    'should return down arrow',
    () => {
      expect(upDownArrowWorker.render(-10)?.innerHTML)
        .toBe('<span class="vlahio-arrow-icon down"></span>');
    }
  );
});
