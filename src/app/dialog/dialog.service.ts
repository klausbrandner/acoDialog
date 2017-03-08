import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Dialog } from './dialog';

@Injectable()
export class DialogService {

    dialogs: Observable<Dialog[]>;
    private _dialogs: BehaviorSubject<Dialog[]>;
    private dataStore: {
        dialogs: Dialog[]
    };

    constructor() {
        this.dataStore = {
            dialogs: []
        };
        this._dialogs = <BehaviorSubject<Dialog[]>>new BehaviorSubject([]);
        this.dialogs = this._dialogs.asObservable();
    }

    push(title: string, message: string, buttons: any[]): void {
        this.dataStore.dialogs.push(new Dialog(title, message, buttons));
        this._dialogs.next(Object.assign({}, this.dataStore).dialogs);
    }

    execute(dialog: Dialog, button: any): void {
        if(button.click){
            button.click();
        }
        let index = this.dataStore.dialogs.indexOf(dialog);
        if(index > -1){
            this.dataStore.dialogs.splice(index,1);
        }
        this._dialogs.next(Object.assign({}, this.dataStore).dialogs);
    }

}
