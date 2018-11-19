import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent, MapViewComponent } from './containers';

const routes: Routes = [
  {
    path: 'list',
    component: ListViewComponent
  },
  {
    path: 'map',
    component: MapViewComponent
  },
  {
    path: '**',
    redirectTo: '/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
