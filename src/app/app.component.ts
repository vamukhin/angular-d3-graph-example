import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {SceneElementsService} from './services/scene-elements.service';
import {Node} from './models/Node';

import {Link} from './models/Link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  constructor(public sceneElements: SceneElementsService) {}

}
