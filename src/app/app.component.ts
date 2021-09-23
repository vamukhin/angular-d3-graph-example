import { Component } from '@angular/core';
import {SceneElementsService} from './services/scene-elements.service';
import {NewNode} from './models/NewNode';

import {Link} from './models/NewLink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nodes: NewNode[] = [];
  links: Link[] = [];
  constructor(private sceneElements: SceneElementsService) {
      this.nodes = sceneElements.nodes;
  }

  addNode() {
    console.log('123');
    this.sceneElements.nodes.push(new NewNode())
  }
}
