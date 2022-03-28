import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SimpleTextboxModule } from '../../library';
import { SimpleTextboxExampleComponent } from './simple-textbox-example.component';

@NgModule({
  imports: [BrowserModule, FormsModule, SimpleTextboxModule],
  declarations: [SimpleTextboxExampleComponent],
  bootstrap: [SimpleTextboxExampleComponent],
})
export class SimpleTextboxExampleModule {}
