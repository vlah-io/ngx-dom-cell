import {Component, ElementRef, Input, Renderer2} from '@angular/core';
import {RendererWorker} from '@vlah.io/ngx-worker';
import {UpDownArrowWorker} from '../../service/up-down-arrow.worker';

@Component({
  selector: 'vlahio-up-down-arrow',
  template: ``
})

export class UpDownArrowComponent {
  constructor(private renderer: Renderer2,
              private rendererWorker: RendererWorker,
              private upDownArrowWorker: UpDownArrowWorker,
              private elRef: ElementRef
  ) {
  }

  @Input('value')
  set _value(val: number) {
    this.rendererWorker.removeChildNodes(this.elRef.nativeElement);
    const el = this.upDownArrowWorker.render(val);
    if (el) {
      this.renderer.appendChild(this.elRef.nativeElement, el);
    }
  }
}
