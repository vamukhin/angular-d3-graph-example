import { v4 as uuidv4 } from 'uuid';

export class NewNode implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string

  r = 20
  constructor() {
    this.id = uuidv4();
  }
}
