import { Button } from './button';

export class Dialog{

    type: string;
    title: string;
    message: string;
    buttons: Button[];

    constructor(type:string, title:string, message:string, buttons: Button[]){
        this.type = type;
        this.title = title;
        this.message = message;
        this.buttons = buttons;
    }

}
