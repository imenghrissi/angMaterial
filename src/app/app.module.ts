import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module.ts/material.module';
import { SidenavComponent } from './shared/layout/sidenav/sidenav.component';
import { ToolbarComponent } from './shared/layout/toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';

import { UserModule } from './user/user.module';
import { ServerModule } from './server/server.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    DashboardComponent,
    ContentComponent,    
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    UserModule,
    ServerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
