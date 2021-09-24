import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddNodeContentComponent} from './add-node/add-node-content.component';
import {AddLinkContentComponent} from './add-link/add-link-content.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-add-node-wrapper',
  template: '',
})
export class AddNodeWrapperComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(name: 'addNode' | 'addLink') {
    if (name === 'addNode') {
      this.dialog.open(AddNodeContentComponent);
    }
    if (name === 'addLink') {
      this.dialog.open(AddLinkContentComponent);
    }
  }

}
