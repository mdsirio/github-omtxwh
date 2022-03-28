import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PlaygroundComponent } from './playground.component';
import { SimpleButtonModule, SimpleTextboxModule } from '../library';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    SimpleButtonModule,
    SimpleTextboxModule,
  ],
  declarations: [PlaygroundComponent],
  // bootstrap: [PlaygroundComponent],
})
export class PlaygroundModule {}
