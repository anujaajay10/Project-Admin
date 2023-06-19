import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = true;

  constructor(private router: Router) { }

  toggleLogin() {
    if (this.isLoggedIn) {
      // Perform logout logic if needed
      this.isLoggedIn = false;
      this.router.navigate(['/adminhome']);
    } else {
      this.router.navigate(['/adminlogin']);
    }
  }
}
