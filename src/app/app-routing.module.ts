import { ContainerComponent } from './container/container.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'the-adventures-of-billy-meier/:lang/:ep/:contact/:page',
    component: ContainerComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'the-adventures-of-billy-meier/en/ep1/contact-report/1',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
