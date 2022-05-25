import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-notification',
  templateUrl: './dashboard-notification.component.html',
  styleUrls: ['./dashboard-notification.component.scss']
})
export class DashboardNotificationComponent implements OnInit {
  notification:any=[]
  constructor() { }

  ngOnInit(): void {
    this.notification.push({user:'test',text:"test notification"},{user:'test',text:"test notification"})
  }

}
