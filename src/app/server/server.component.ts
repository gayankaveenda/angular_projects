import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';

  ngOnInit() {
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  isServerOnline() {
    return this.getServerStatus()==='online';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }


}
