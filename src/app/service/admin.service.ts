import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): void {
    // Send the form data to the server
    const formData = {
      username: username,
      password: password
    };

    this.http.post('http://localhost:3000/posts', formData)
      .subscribe(
        response => {
          // Handle the response from the server
          console.log('Form data sent successfully');
          // You can perform further actions here, such as displaying a success message or navigating to a different page
        },
        error => {
          console.error('Error sending form data:', error);
          // Handle the error here, such as displaying an error message to the user
        }
      );
  }
}
