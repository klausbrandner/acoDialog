import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationService } from './notification.service';

import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NotificationListComponent,
        NotificationComponent
    ],
    providers: [
        NotificationService
    ],
    exports: [
        NotificationListComponent
    ]
})
export class NotificationModule { }
