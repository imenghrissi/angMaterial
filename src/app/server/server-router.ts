import { Routes } from '@angular/router';
import { ListServersComponent } from './list-servers/list-servers.component';
import { DetailServersComponent } from './detail-servers/detail-servers.component';


export const ServerRoutes: Routes = [
  {
    path: '',
    children: [
        {path: '', component: ListServersComponent},
        {path: ':id', component:DetailServersComponent},
    ]
  }
];