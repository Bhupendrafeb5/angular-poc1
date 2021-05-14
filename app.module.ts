import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { WellComponent } from './well/well.component';
import { WellListComponent } from './well-list/well-list.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component'
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    WellComponent,
    WellListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
