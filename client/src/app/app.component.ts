import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // returning and sending data from and to the browser
  title = 'The dating app';
  users: any;

constructor(private http: HttpClient) {}

// Interface OnInit
// on initialize 
  ngOnInit() {
    this.getUsers();
  }

  // getting the users from the server side 5001
  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe(response =>
    {
      this.users = response;
    }, error =>{
      console.log(error);
    })
  }

}

