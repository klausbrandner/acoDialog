import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AcoDialogModule } from './dialog/dialog.module';
import { AcoNotificationModule } from './notification/notification.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AcoDialogModule,
        AcoNotificationModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
