import { Injectable } from '@angular/core';
import {LinkType} from '../models/LinkType';
import {Link} from '../models/NewLink';
import {Node} from '../models/Node';
import {NodeType} from '../models/NodeType';
import {PositionChangerService} from './position-changer.service';

@Injectable({
  providedIn: 'root'
})
export class SceneElementsService {
  links: Link[] = [];
  nodes: Node[] = [new Node(), new Node()];

  // Претенденты на вынос в другой сервис, тк не влияют на отрисовку
  // nodeTypes: NodeType[] = []
  // linkTypes: LinkType[] = []
  constructor(private positionChanger: PositionChangerService) {
    this.positionChanger.initSimulation(this.nodes, this.links);
  }
  addNode(node: Node) {
    this.nodes = this.positionChanger.changeNodesAmount([...this.nodes, node])
  }
}
