import { Component, OnInit } from '@angular/core';
import { User } from './users.model';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [
  new User("Mahesh", 25),
  new User("Shakti", 23),
  new User("Krishna", 23),
  new User("Radha", 21),

  ];
flag:boolean=true

status='ON';
  constructor() { }

  ngOnInit(): void {

  }
  toggle(){
    this.flag=!this.flag
  }

}
