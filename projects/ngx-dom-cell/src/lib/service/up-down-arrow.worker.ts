import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {RendererWorker} from '@vlah.io/ngx-worker';
import {MathHelper} from '@vlah.io/ngx-helper';

@Injectable({
  providedIn: 'root'
})
export class UpDownArrowWorker {
  private renderer: Renderer2;

  constructor(private rendererWorker: RendererWorker,
              private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  render(val: number): HTMLSpanElement | undefined {
    const value = MathHelper.isNumber(val);
    if (value) {
      const el = this.rendererWorker.createElement(
        'span',
        ['vlahio-arrow-icon', value > 0 ? 'up' : 'down']
      );
      const parentEl = this.rendererWorker.createElement('span', 'vlahio-arrow-container');
      this.renderer.appendChild(parentEl, el);

      return parentEl;
    }

    return undefined;
  }
}
