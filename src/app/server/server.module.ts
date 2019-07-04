import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServerRoutes } from './server-router';
import { ListServersComponent } from './list-servers/list-servers.component';
import { DetailServersComponent } from './detail-servers/detail-servers.component';


@NgModule({
  declarations: [
   ListServersComponent,
   DetailServersComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ServerRoutes)
  ]
})
export class ServerModule { }
