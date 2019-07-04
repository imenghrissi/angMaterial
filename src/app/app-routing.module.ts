import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ListServersComponent } from './server/list-servers/list-servers.component';
import { DetailServersComponent } from './server/detail-servers/detail-servers.component';

const routes: Routes = [
  {path: '' , component: DashboardComponent },
  {path:'users', loadChildren: ()=> import('./user/user.module').then(m=>m.UserModule)},
  {path:'servers', loadChildren: ()=> import('./server/server.module').then(m=>m.ServerModule)},
  {path:'**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
