import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SimpleButtonExampleModule } from './examples/simple-button-example/simple-button-example.module';
import { SimpleTextboxExampleModule } from './examples/simple-textbox-example/simple-textbox-example.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    SimpleButtonExampleModule,
    SimpleTextboxExampleModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
