import { Injectable } from '@angular/core';
import {LinkType} from '../models/LinkType';
import {Link} from '../models/Link';
import {Node} from '../models/Node';
import {NodeType} from '../models/NodeType';
import {PositionChangerService} from './position-changer.service';

// Основной источник данных. Все изменения элементов через него
@Injectable({
  providedIn: 'root'
})
export class SceneElementsService {
  links: Link<Node>[] = [];
  nodes: Node[] = [new Node('Первая')];

  // Претенденты на вынос в другой сервис, тк не влияют на отрисовку
  // nodeTypes: NodeType[] = []
  // linkTypes: LinkType[] = []
  constructor(private positionChanger: PositionChangerService) {
    this.positionChanger.initSimulation(this.nodes, this.links);
  }
  addNode(node: Node) {
    this.nodes = this.positionChanger.changeNodesAmount([...this.nodes, node])
  }
  addLink(link: Link<string>) {
    this.links = this.positionChanger.changeLinksAmount([...this.links, link]);
  }
}
