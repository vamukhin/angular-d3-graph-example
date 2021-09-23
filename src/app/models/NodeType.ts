import { v4 as uuidv4 } from 'uuid';

export class NodeType {
  id: string
  color: string;
  constructor(color: string) {
    this.id = uuidv4();
    this.color = color
  }
}
