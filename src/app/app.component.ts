import { Component } from '@angular/core';
import {SceneElementsService} from './services/scene-elements.service';
import {Node} from './models/Node';

import {Link} from './models/NewLink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nodes: Node[] = [];
  links: Link[] = [];
  constructor(private sceneElements: SceneElementsService) {
      this.nodes = sceneElements.nodes;
  }

  addNode() {
    console.log('123');
    this.sceneElements.addNode(new Node(200,200 ))
  }
}
