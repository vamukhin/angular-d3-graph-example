import { Component, Input, ChangeDetectorRef, HostListener, ChangeDetectionStrategy, OnInit, AfterViewInit } from '@angular/core';
import {SceneElementsService} from '../../services/scene-elements.service';
import {ForceDirectedGraph} from '../../models';

@Component({
  selector: 'app-graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg #svg [attr.width]="options.width" [attr.height]="options.height">
      <g [zoomableOf]="svg">
        <g [linkVisual]="link" *ngFor="let link of this.sceneElements.links"></g>
        <g [nodeVisual]="node" *ngFor="let node of this.sceneElements.nodes"
            [draggableNode]="node" [draggableInGraph]="graph"></g>
      </g>
    </svg>
  `,
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, AfterViewInit {
  graph: ForceDirectedGraph;
  private _options: { width, height } = { width: 800, height: 600 };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.graph.initSimulation(this.options);
  }


  constructor(public ref: ChangeDetectorRef, public sceneElements: SceneElementsService) {}

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = new ForceDirectedGraph(this.sceneElements.nodes, this.sceneElements.links, this.options);

    /** Binding change detection check on each tick
     * This along with an onPush change detection strategy should enforce checking only when relevant!
     * This improves scripting computation duration in a couple of tests I've made, consistently.
     * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
     */
    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}
