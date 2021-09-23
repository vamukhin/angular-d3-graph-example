import { Injectable } from '@angular/core';
import {LinkType} from '../models/LinkType';
import {Link} from '../models/NewLink';
import {NewNode} from '../models/NewNode';
import {NodeType} from '../models/NodeType';

@Injectable({
  providedIn: 'root'
})
export class SceneElementsService {
  links: Link[] = [];
  nodes: NewNode[] = [];

  // Претенденты на вынос в другой сервис, тк не влияют на отрисовку
  nodeTypes: NodeType[] = []
  linkTypes: LinkType[] = []
  constructor() {
    this.nodes.push(new NewNode())
    this.nodes.push(new NewNode())
    this.nodes.push(new NewNode())
    this.nodes.push(new NewNode())
  }
}
