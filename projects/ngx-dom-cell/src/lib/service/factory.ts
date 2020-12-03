import {RendererFactory2} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {TrendCellWorker} from './trend-cell.worker';
import {TrendElementWorker} from './trend-element.worker';

export const TrendCellWorkerFactory = (rendererFactory2: RendererFactory2,
                                       sanitizer: DomSanitizer,
                                       trendElementWorker: TrendElementWorker
): TrendCellWorker => new TrendCellWorker(rendererFactory2, sanitizer, trendElementWorker);
