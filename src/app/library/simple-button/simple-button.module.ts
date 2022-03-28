import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SimpleButtonComponent } from './simple-button.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [SimpleButtonComponent],
  bootstrap: [SimpleButtonComponent],
  exports: [SimpleButtonComponent],
})
export class SimpleButtonModule {}
