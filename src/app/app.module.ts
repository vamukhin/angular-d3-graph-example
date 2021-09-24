import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { SceneComponent } from './components/scene/scene.component';

import {DraggableDirective} from './directives/draggable.directive';
import {ZoomableDirective} from './directives/zoomable.directive';
import {NodeVisualComponent} from './components/node-visual/node-visual.component';
import {LinkVisualComponent} from './components/link-visual/link-visual.component';
import { AddNodeContentComponent } from './components/dialogs/add-node/add-node-content.component';
import { AddNodeWrapperComponent } from './components/dialogs/add-node-wrapper.component';
import {addNodeDialog} from './components/dialogs/add-node';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddLinkContentComponent } from './components/dialogs/add-link/add-link-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    DraggableDirective,
    ZoomableDirective,
    NodeVisualComponent,
    LinkVisualComponent,
    AddNodeContentComponent,
    AddNodeWrapperComponent,
    ...addNodeDialog,
    AddLinkContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
