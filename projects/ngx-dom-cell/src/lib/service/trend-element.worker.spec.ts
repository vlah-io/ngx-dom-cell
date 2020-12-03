import {TestBed} from '@angular/core/testing';
import {TrendElementWorker} from './trend-element.worker';
import {Renderer2, RendererFactory2} from '@angular/core';

describe('TrendElementWorker', () => {
  let trendElementWorker: TrendElementWorker;
  let renderer: Renderer2;
  let rendererFactory: RendererFactory2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    trendElementWorker = TestBed.inject(TrendElementWorker);
    rendererFactory = TestBed.inject(RendererFactory2);
    renderer = rendererFactory.createRenderer(null, null);
  });

  it(
    'should return up arrow trend element',
    () => {
      const parent = renderer.createElement('span');
      const refChild = renderer.createText('46.50');
      renderer.appendChild(parent, refChild);
      trendElementWorker.render(10, parent, refChild);
      expect(parent.innerHTML)
        .toBe(
          [
            '<vlahio-up-down-arrow style="margin: 0px 5px;">',
            '<span class="vlahio-arrow-container"><span class="vlahio-arrow-icon up"></span></span>',
            '</vlahio-up-down-arrow>46.50'
          ].join('')
        );
    }
  );

  it(
    'should return down arrow trend element',
    () => {
      const parent = renderer.createElement('span');
      const refChild = renderer.createText('46.50');
      renderer.appendChild(parent, refChild);
      trendElementWorker.render(-10, parent, refChild);
      expect(parent.innerHTML)
        .toBe(
          [
            '<vlahio-up-down-arrow style="margin: 0px 5px;">',
            '<span class="vlahio-arrow-container"><span class="vlahio-arrow-icon down"></span></span>',
            '</vlahio-up-down-arrow>46.50'
          ].join('')
        );
    }
  );
});
