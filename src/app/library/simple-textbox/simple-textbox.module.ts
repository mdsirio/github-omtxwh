import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SimpleTextboxComponent } from './simple-textbox.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [SimpleTextboxComponent],
  bootstrap: [SimpleTextboxComponent],
  exports: [SimpleTextboxComponent],
})
export class SimpleTextboxModule {}
