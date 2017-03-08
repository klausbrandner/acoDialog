import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogService } from './dialog.service';

import { DialogComponent } from './dialog/dialog.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DialogComponent
    ],
    providers: [
        DialogService
    ],
    exports: [
        DialogComponent
    ]
})
export class DialogModule { }
