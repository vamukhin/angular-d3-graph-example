import { v4 as uuidv4 } from 'uuid';
import {Node} from './Node';

export class Link implements d3.SimulationLinkDatum<Node> {
  id: string
  linkTypeId: string

  source: string
  target: string
  constructor(source: string, target: string, linkTypeId: string) {
    this.source = source;
    this.target = target;
    this.linkTypeId = linkTypeId;
    this.id = uuidv4();
  }
}
