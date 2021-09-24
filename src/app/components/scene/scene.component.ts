import {Component, OnInit, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import {SceneElementsService} from '../../services/scene-elements.service';

@Component({
  selector: 'app-scene',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg #svg [attr.width]="1000" [attr.height]="1000">
      <g [zoomableOf]="svg">
        <g [nodeVisual]="node" *ngFor="let node of this.sceneElements.nodes" [draggableNode]="node"></g>
        <g [linkVisual]="link" *ngFor="let link of this.sceneElements.links"></g>
      </g>
    </svg>
  `,
  styleUrls: ['./scene.component.css']
})
export class SceneComponent {
  private _options: { width, height } = { width: 800, height: 600 };
  //
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.graph.initSimulation(this.options);
  // }

  constructor(public sceneElements: SceneElementsService) {}

}
