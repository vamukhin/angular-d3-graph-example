import {ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SceneElementsService} from '../../../services/scene-elements.service';
import {Link} from '../../../models/Link';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-link-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-link-content.component.html',
})
export class AddLinkContentComponent {

  firstNode?: string
  secondNode?: string
  options: Array<{
    id: string;
    name: string;
  }>

  constructor(private sceneElements: SceneElementsService, private dialogRef: MatDialogRef<AddLinkContentComponent>) {
    this.options = this.sceneElements.nodes
      .map(({id, name}) => ({id, name}))
  }

  firstNodeOptions() {
    return this.options
      .filter((node) => node.id !== this.secondNode).concat({id: undefined, name: ''})
  }
  secondNodeOptions() {
    return this.options
      .filter((node) => node.id !== this.firstNode)
      .concat({id: undefined, name: ''})
  }


  submit(form) {
    const {firstNode, secondNode} = form.form.value;
    this.sceneElements.addLink(new Link(firstNode, secondNode, '123'));
    this.dialogRef.close()
  }
}
