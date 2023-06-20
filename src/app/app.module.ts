import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewParcelComponent } from './view-parcel/view-parcel.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './service/admin.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewParcelComponent,
    SearchUserComponent,
    AdminhomeComponent,
    NavbarComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
