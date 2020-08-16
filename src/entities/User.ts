import {uuid} from 'uuidv4';

export class User{

    private readonly id: string;
    private name:string;
    private email:string;
    private password:string;

    constructor(props:Omit<User, 'id'>, id?:string){
        Object.assign(this, props);
        if(!id){
            this.id = uuid();
        }
    }
}