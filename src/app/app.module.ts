import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { GraphComponent } from './components/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';
import {DraggableDirective} from './directives/draggable.directive';
import {ZoomableDirective} from './directives/zoomable.directive';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    DraggableDirective,
    ZoomableDirective,
    ...SHARED_VISUALS,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
