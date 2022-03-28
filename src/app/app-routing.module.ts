import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { SimpleButtonExampleComponent } from './examples/simple-button-example/simple-button-example.component';
import { SimpleTextboxExampleComponent } from './examples/simple-textbox-example/simple-textbox-example.component';
import { PlaygroundComponent } from './playground/playground.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  {
    path: 'simple-button-example',
    component: SimpleButtonExampleComponent,
  },
  {
    path: 'simple-textbox-example',
    component: SimpleTextboxExampleComponent,
  },
  {
    path: 'playground',
    component: PlaygroundComponent,
  },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
