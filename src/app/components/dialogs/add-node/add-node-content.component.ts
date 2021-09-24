import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SceneElementsService} from '../../../services/scene-elements.service';
import {Node} from '../../../models/Node'
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-add-node-content',
  templateUrl: './add-node-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNodeContentComponent {
  name = '';

  constructor(private sceneElements: SceneElementsService, private dialogRef: MatDialogRef<AddNodeContentComponent>) { }

  submit(form) {
    this.sceneElements.addNode(new Node(form.form.value.name));
    this.dialogRef.close()
  }
}
