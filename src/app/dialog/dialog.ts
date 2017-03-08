export class Dialog{

    title: string;
    message: string;
    buttons: any[];

    constructor(title:string, message:string, buttons: any[]){
        this.title = title;
        this.message = message;
        this.buttons = buttons;
    }

}
