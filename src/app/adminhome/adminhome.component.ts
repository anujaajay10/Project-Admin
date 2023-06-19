import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {
  constructor(private router: Router) {}

  
  navigateToViewParcel(): void {
    this.router.navigate(['/viewparcel']);
  }

  navigateToSearchUser(): void {
    this.router.navigate(['/searchuser']);
  }
 
  
}
