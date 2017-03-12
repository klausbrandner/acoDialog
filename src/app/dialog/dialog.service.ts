import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Dialog } from './dialog';
import { Button } from './button';

@Injectable()
export class DialogService {

    dialogs: Observable<Dialog[]>;
    private _dialogs: BehaviorSubject<Dialog[]>;
    private dataStore: {
        dialogs: Dialog[]
    };

    constructor() {
        this.dataStore = { dialogs: [] };
        this._dialogs = <BehaviorSubject<Dialog[]>>new BehaviorSubject([]);
        this.dialogs = this._dialogs.asObservable();
    }

    info(title:string, message:string, buttons:Button[]): void {
        this.push("info", title, message, buttons);
    }
    warning(title:string, message:string, buttons:Button[]): void {
        this.push("warning", title, message, buttons);
    }
    error(title:string, message:string, buttons:Button[]): void {
        this.push("error", title, message, buttons);
    }
    push(type:string, title:string, message:string, buttons:Button[]): void {
        this.dataStore.dialogs.push(new Dialog(type, title, message, buttons));
        this._dialogs.next(Object.assign({}, this.dataStore).dialogs);
    }

    execute(dialog:Dialog, button:Button): void {
        if(button.click){ button.click(); }
        let index = this.dataStore.dialogs.indexOf(dialog);
        if(index > -1){ this.dataStore.dialogs.splice(index,1); }
        this._dialogs.next(Object.assign({}, this.dataStore).dialogs);
    }

}
