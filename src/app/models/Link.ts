import { v4 as uuidv4 } from 'uuid';
import {Node} from './Node';

export class Link<T extends string | number | Node> implements d3.SimulationLinkDatum<Node> {
  id: string
  linkTypeId: string

  source: T
  target: T
  constructor(source: T, target: T, linkTypeId: string) {
    this.source = source;
    this.target = target;
    this.linkTypeId = linkTypeId;
    this.id = uuidv4();
  }
}
