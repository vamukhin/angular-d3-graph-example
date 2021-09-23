import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Directive({
    selector: '[zoomableOf]'
})
export class ZoomableDirective implements OnInit {
    @Input('zoomableOf') zoomableOf: Element;

    constructor(private _element: ElementRef) {}

    ngOnInit() {
      let svg, container, zoomed, zoom;
      svg = d3.select(this.zoomableOf);
      container = d3.select(this._element.nativeElement);

      zoomed = () => {
        const transform = d3.event.transform;
        container.attr('transform', 'translate(' + transform.x + ',' + transform.y + ') scale(' + transform.k + ')');
      }

      zoom = d3.zoom().on('zoom', zoomed);
      svg.call(zoom);
    }
}
