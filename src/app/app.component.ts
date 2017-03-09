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
        this.notificationService.info('Good job!','You successfully performed this task.');
    }

    onShowDialog(): void {
        let self = this;
        this.dialogService.error("Oh Snap!","An error occured on this website. Do you want to continue?",[{
            title: "Yes",
            click: function(){
                self.dialogService.warning("Whooop!","Hey, heads up. There is another dialog box coming.",[{
                    title: "Continue",
                    click: function(){
                        self.notificationService.warning("Wait a second","You can change the title of this page.");
                    }
                }]);
                self.dialogService.info("Change title!","Would you like to change the title of this page?",[{
                    title: "Change",
                    click: function(){
                        self.title = "title changed :)";
                        self.notificationService.info("Title changed","You successfully changed the title of this page.");
                    }
                },{
                    title: "Cancel"
                }]);
            }
        },{
            title: "No"
        }]);

    }

}
