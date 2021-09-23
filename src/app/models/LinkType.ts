import { v4 as uuidv4 } from 'uuid';

interface ITarget<TargetType> {
  id: string;
  type: TargetType
}


export class LinkType {
  id: string
  from?: ITarget<'nodeId'> | Array<ITarget<'familyId'>>
  to: ITarget<'nodeId'> | Array<ITarget<'familyId'>>
  color: string;
  constructor(from: LinkType['from'], to: LinkType['to'], color: string) {
    this.id = uuidv4();
    this.color = color
  }
}
