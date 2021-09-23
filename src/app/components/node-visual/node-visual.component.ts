import { Component, Input } from '@angular/core';
import {NewNode as Node} from '../../models/NewNode'
@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:circle
          class="node"
          attr.fill="blue"
          cx="0"
          cy="0"
          [attr.r]="node.r">
      </svg:circle>
      <svg:text
          class="node-name"
          attr.font-size="14">
        {{node.id}}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;
}
