import { Component, OnInit } from '@angular/core';

import { DialogService } from '../dialog.service';
import { Dialog } from '../dialog';
import { Button } from '../button';

@Component({
  selector: 'ngdialog-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {

    dialog: Dialog;
    show:boolean = false;

    constructor(private dialogService: DialogService) { }

    ngOnInit() {
        this.dialogService.dialogs.subscribe(data => {
            if(data.length > 0){
                this.dialog = data[0];
                this.show = true;
            }else{
                this.dialog = null;
                this.show = false;
            }
        });
    }

    execute(button:Button): void {
        this.show = false;
        this.dialogService.execute(this.dialog, button);
    }

}
