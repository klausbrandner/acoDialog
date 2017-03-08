import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DialogModule } from './dialog/dialog.module';
import { NotificationModule } from './notification/notification.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DialogModule,
        NotificationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
