import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode:boolean=false;
 

  constructor() { }

  ngOnInit(): void {
    
  }

  registerToggle(){
   this.registerMode=true;
  }
  // getUsers(){
  //      this.http.get('https://localhost:44356/api/users').subscribe(users => this.users=users);
  // }

}
