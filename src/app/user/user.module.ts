import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { DetailUsersComponent } from './detail-users/detail-users.component';
import { RouterModule } from '@angular/router';
import { UsersRoutes } from './user-router';

@NgModule({
  declarations: [
    ListUsersComponent,
    DetailUsersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UsersRoutes)
  ]
})
export class UserModule { }
