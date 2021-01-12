import { Component, OnInit } from '@angular/core';
import {UsersService} from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  activeUsers = [];
  inactiveUsers = [];

  constructor(private usersService: UsersService) {
    this.usersService.userSetToInactive.subscribe(
      (id: number) => this.onSetToInactive(id)
    );

    this.usersService.userSetToActive.subscribe(
      (id: number) => this.onSetToActive(id)
    );
  }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.updateUserStatus(id, false);
  }

  onSetToActive(id: number) {
    this.usersService.updateUserStatus(id, true);
  }
}
