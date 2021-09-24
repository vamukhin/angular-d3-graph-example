import {Directive, Input, ElementRef, OnInit} from '@angular/core';
import * as d3 from 'd3';
import {Node} from '../models/Node';

@Directive({
    selector: '[draggableNode]'
})
export class DraggableDirective implements OnInit {
    @Input('draggableNode') draggableNode: Node;

  constructor(private _element: ElementRef) { }

    ngOnInit() {
      const d3element = d3.select(this._element.nativeElement);
      const node = this.draggableNode;
      function started() {
        /** Preventing propagation of dragstart to parent elements */
        d3.event.sourceEvent.stopPropagation();
        d3.event.on('drag', dragged).on('end', ended);

        function dragged() {
          node.fx = d3.event.x;
          node.fy = d3.event.y;
        }

        function ended() {
          node.fx = null;
          node.fy = null;
        }
      }

      d3element.call(d3.drag()
        .on('start', started));
    }
}
