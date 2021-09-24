import {Injectable} from '@angular/core';
import * as d3 from 'd3';
import {Link} from '../models/Link';
import {Node} from '../models/Node';

const FORCES = {
  LINKS: 1 / 50,
  COLLISION: 1,
  CHARGE: -1
}


@Injectable({
  providedIn: 'root'
})
export class PositionChangerService {
  // Тикер - хорошая реализация, но должна быть в другом месте. Этот сервис только меняет координаты
  // public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
  private simulation: d3.Simulation<any, any>;

  changeNodesAmount(nodes: Node[]) {
    this.simulation.nodes(nodes);
    return this.simulation.nodes()
  }

  changeLinksAmount(links: (Link<Node> | Link<string>)[]): Link<Node>[] {
    const linkForce = d3.forceLink(links)
      .id(d => d['id'])
      .strength(FORCES.LINKS);

    this.simulation.force('links', linkForce);
    return linkForce.links() as Link<Node>[] // метод фактически возвращает только Link<Node>, хотя ро типам Link<Node> | Link<number> | Link<string>
  }

  initSimulation(nodes, links) {
    /** Creating the simulation */
    if (!this.simulation) {

      this.simulation = d3.forceSimulation()
        .alphaDecay(0) // это нехорошо для перфоманса, но для mvp сойдет
        .nodes(nodes)
        .force('centers', d3.forceCenter(200, 200))
        .force('links',
          d3.forceLink(links)
            .id(d => d['id'])
            .strength(FORCES.LINKS)
        )
        .force('charge',
          d3.forceManyBody()
            .strength(10)
        )
        .force('collide',
          d3.forceCollide()
            .strength(FORCES.COLLISION)
            .radius(d => d['r'] + 5).iterations(2)
        );

      // Connecting the d3 ticker to an angular event emitter
      this.simulation.on('tick',  () => {
        // console.log(this.simulation.nodes().length)
        // ticker.emit(this);
      });
    }
    /** Restarting the simulation internal timer */
    this.simulation.restart();
  }
}
