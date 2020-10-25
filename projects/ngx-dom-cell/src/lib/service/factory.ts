import {RendererFactory2} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {TrendCellWorker} from './trend-cell.worker';
import {TrendElementWorker} from './trend-element.worker';

export function TrendCellWorkerFactory(rendererFactory2: RendererFactory2,
                                       sanitizer: DomSanitizer,
                                       trendElementWorker: TrendElementWorker
): TrendCellWorker {
  return new TrendCellWorker(rendererFactory2, sanitizer, trendElementWorker);
}
