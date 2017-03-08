import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { NotificationService } from '../notification.service';
import { Notification } from '../notification';

@Component({
  selector: 'ngdialog-notification',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.sass']
})
export class NotificationListComponent implements OnInit {

    notifications: Notification[];

    constructor(private notificationService:NotificationService) { }

    ngOnInit() {
        this.notificationService.notifications.subscribe(data => {
            this.notifications = data;
        });
    }

}
