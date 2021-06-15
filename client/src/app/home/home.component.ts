import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  // getting the users from the server side 5001
  // getUsers() {
  //   this.http.get('https://localhost:5001/api/users').subscribe(users => {this.users = users;
  //   }, error => {
  //     console.log(error);
  //   })
  // }

  cancelRegisterMode(event, boolean)
  {
    this.registerMode = event;
  }

}
