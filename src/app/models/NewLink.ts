import { v4 as uuidv4 } from 'uuid';
import {NewNode} from './NewNode';

export class Link implements d3.SimulationLinkDatum<NewNode> {
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
