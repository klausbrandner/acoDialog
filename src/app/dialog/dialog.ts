export class Dialog{

    type: string;
    title: string;
    message: string;
    buttons: any[];

    constructor(type:string, title:string, message:string, buttons: any[]){
        this.type = type;
        this.title = title;
        this.message = message;
        this.buttons = buttons;
    }

}
