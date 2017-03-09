import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Notification } from './notification';

@Injectable()
export class NotificationService {

    notifications: Observable<Notification[]>;
    private _notifications: BehaviorSubject<Notification[]>;
    private dataStore: {
        notifications: Notification[]
    };
    private maxNotifications = 5;

    constructor() {
        this.dataStore = {
            notifications: []
        };
        this._notifications = <BehaviorSubject<Notification[]>>new BehaviorSubject([]);
        this.notifications = this._notifications.asObservable();
    }

    removeNotification(notification:Notification): void {
        let index = this.dataStore.notifications.indexOf(notification);
        if(index > -1){
            this.dataStore.notifications.splice(index,1);
        }
        this._notifications.next(Object.assign({}, this.dataStore).notifications);
    }

    error(title:string, message:string): void{
        this.push('error', title, message);
    }
    warning(title:string, message:string): void{
        this.push('warning', title, message);
    }
    info(title:string, message:string): void{
        this.push('info', title, message);
    }
    push(type:string, title:string, message:string){
        if(this.dataStore.notifications.length >= this.maxNotifications){
            this.dataStore.notifications.splice(0,1);
        }
        this.dataStore.notifications.push(new Notification(type, title, message));
        this._notifications.next(Object.assign({}, this.dataStore).notifications);
    }

}
