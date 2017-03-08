import { Component, OnInit } from '@angular/core';

import { DialogService } from '../dialog.service';
import { Dialog } from '../dialog';

@Component({
  selector: 'ngdialog-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {

    dialog: Dialog;

    constructor(private dialogService: DialogService) { }

    ngOnInit() {
        this.dialogService.dialogs.subscribe(data => {
            if(data.length > 0){
                this.dialog = data[0];
            }else{
                this.dialog = null;
            }
        });
    }

    execute(button): void {
        this.dialogService.execute(this.dialog, button);
    }

}
