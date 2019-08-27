import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {

  username: string = 'anonymous';
  userCreateStatus: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  onCreateUser() {
    this.userCreateStatus = 'The User ' + this.username + ' is created.';
  }

  enableResetButton() {
    return this.userCreateStatus != '';
  }

  resetUser() {
    this.username = 'anonymous';
    this.userCreateStatus = '';
  }
}
