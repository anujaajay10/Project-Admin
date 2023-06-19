import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUserComponent } from './search-user/search-user.component';
import { ViewParcelComponent } from './view-parcel/view-parcel.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes =  [{ path: '', component: AdminhomeComponent },
{path:'adminhome', component:AdminhomeComponent},
{path:'searchuser', component:SearchUserComponent},
{path:'viewparcel',component:ViewParcelComponent},
{path:'adminlogin',component:AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
