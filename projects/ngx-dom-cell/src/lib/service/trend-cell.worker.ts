import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {TrendElementWorker} from './trend-element.worker';
import {StringHelper} from '@vlah.io/ngx-helper';
import {TrendCellWorkerOptionsInterface} from '../interface/ngx-dom-cell.interface';

@Injectable({
  providedIn: 'root'
})
export class TrendCellWorker {
  private renderer: Renderer2;

  constructor(private rendererFactory2: RendererFactory2,
              private sanitizer: DomSanitizer,
              private trendElementWorker: TrendElementWorker
  ) {
    this.renderer = rendererFactory2.createRenderer(null, null);
  }

  render(txt: any,
         cls?: string | string[],
         options: TrendCellWorkerOptionsInterface = {}): SafeHtml | null {
    if ([
      '[object String]',
      '[object Number]'
    ].indexOf(Object.prototype.toString.call(txt)) === -1) {
      return null;
    }

    const {returnInnerHTML, trend} = options;

    const el = this.renderer.createElement('span') as HTMLSpanElement;
    const textElement = this.renderer.createText(txt.toString());
    this.renderer.appendChild(el, textElement);

    const cssClassArray = StringHelper.cssClassNameToArray(cls, ['vlahio-fm']);
    cssClassArray.forEach(
      (className: string) => {
        this.renderer.addClass(el, className);
      }
    );

    if (trend) {
      this.trendElementWorker.render(trend, el, textElement);
    }

    return this.sanitizer.bypassSecurityTrustHtml(
      returnInnerHTML === true ? el.innerHTML : el.outerHTML
    );
  }
}
