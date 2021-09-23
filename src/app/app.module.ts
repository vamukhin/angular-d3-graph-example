import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { SceneComponent } from './components/scene/scene.component';

import {DraggableDirective} from './directives/draggable.directive';
import {ZoomableDirective} from './directives/zoomable.directive';
import {NodeVisualComponent} from './components/node-visual/node-visual.component';
import {LinkVisualComponent} from './components/link-visual/link-visual.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    DraggableDirective,
    ZoomableDirective,
    NodeVisualComponent,
    LinkVisualComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
