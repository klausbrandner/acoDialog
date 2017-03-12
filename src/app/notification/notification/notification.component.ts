import { Component, Input, OnDestroy } from '@angular/core';

import { Notification } from '../notification';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'aco-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnDestroy {

    @Input() notification:Notification;
    private closeTimer: any;
    private timeToClose = 6000;
    close: boolean;

    constructor(private notificationService:NotificationService){
        this.close = false;

        let self = this;
        this.closeTimer = setTimeout(function(){
            self.closeNotification();
        },this.timeToClose);
    }

    closeNotification(): void {
        if(!this.close){
            clearTimeout(this.closeTimer);
            this.close = true;

            let self = this;
            setTimeout(function(){
                self.notificationService.removeNotification(self.notification);
            },390);
        }
    }

    ngOnDestroy(){
        clearTimeout(this.closeTimer);
    }
}
