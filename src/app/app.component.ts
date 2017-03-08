import { Component } from '@angular/core';

import { NotificationService } from './notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'app works!';

    constructor(private notificationService: NotificationService) {}

    onShowError(): void {
        this.notificationService.error('Oh snap!','An error occured on this website.');
    }
    onShowWarning(): void {
        this.notificationService.warning('Heads up!','Try to limit your typos on this site.');
    }
    onShowSuccess(): void {
        this.notificationService.success('Good job!','You successfully performed this task.');
    }
}
