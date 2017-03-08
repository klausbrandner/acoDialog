import { Component } from '@angular/core';

import { DialogService } from './dialog/dialog.service';
import { NotificationService } from './notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'ngdialog';

    constructor(private dialogService: DialogService,
        private notificationService: NotificationService) {}

    onShowError(): void {
        this.notificationService.error('Oh snap!','An error occured on this website.');
    }
    onShowWarning(): void {
        this.notificationService.warning('Heads up!','Try to limit your typos on this site.');
    }
    onShowSuccess(): void {
        this.notificationService.success('Good job!','You successfully performed this task.');
    }

    onShowDialog(): void {
        let self = this;
        this.dialogService.push("Whooop!","This is a test message. Please choose one button.",[
            {
                title: "Continue",
                click: function(){
                    console.log("continued");
                }
            }
        ]);
        this.dialogService.push("Change title!","Would you like to change the title of this page?",[
            {
                title: "Change",
                click: function(){
                    self.title = "title changed";
                }
            },{
                title: "Cancel"
            }
        ]);
    }

}
