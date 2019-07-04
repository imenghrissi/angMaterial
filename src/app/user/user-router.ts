import { Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { DetailUsersComponent } from './detail-users/detail-users.component';

export const UsersRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListUsersComponent, pathMatch: 'full'},
      { path: 'new', component: DetailUsersComponent },
      { path: ':id', component: DetailUsersComponent, pathMatch: 'full' },
      { path: ':id/edit', component: DetailUsersComponent }
    ]
  }
];