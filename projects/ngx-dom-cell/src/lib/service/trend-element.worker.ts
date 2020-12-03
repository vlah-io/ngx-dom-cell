import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {FactoryWorker} from '@vlah.io/ngx-worker';
import {UpDownArrowComponent} from '../component/various/up-down-arrow.component';

@Injectable({
  providedIn: 'root'
})
export class TrendElementWorker {
  private renderer: Renderer2;

  constructor(private factoryWorker: FactoryWorker,
              private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  render(trend: number, parent: HTMLElement, refChild: ChildNode): void {
    const compRef = this.factoryWorker.make(UpDownArrowComponent);
    compRef.instance.value = trend;
    const el = compRef.location.nativeElement;
    this.factoryWorker.destroy(compRef);

    this.renderer.setStyle(el, 'margin', '0 5px');
    this.renderer.insertBefore(parent, el, refChild);
  }
}
