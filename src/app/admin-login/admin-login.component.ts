import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username!: string 
  password!: string 
  isLoggedIn!: boolean 

  constructor(private router: Router,private adminService:AdminService) { }

  login() {
    this.adminService.login(this.username,this.password);
    // Perform login logic, validate credentials, etc.

    // Once the user is successfully logged in, set the isLoggedIn property to true
    this.isLoggedIn = true;
    
    // Navigate to the admin home page
    this.router.navigate(['/adminhome']);
  }
}
