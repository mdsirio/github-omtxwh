import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SimpleButtonModule } from '../../library';
import { SimpleButtonExampleComponent } from './simple-button-example.component';

@NgModule({
  imports: [BrowserModule, FormsModule, SimpleButtonModule],
  declarations: [SimpleButtonExampleComponent],
  bootstrap: [SimpleButtonExampleComponent],
})
export class SimpleButtonExampleModule {}
