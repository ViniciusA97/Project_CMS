require('dotenv/config');

export class Cryptografic{
    
    private bycript; 
    private rounds:number;
    constructor(){
        this.bycript= require('bcrypt');
        this.rounds = +process.env.ROUNDS;
    }

    public async encrypt(password:string){
        const bcrypt = require('bcrypt');
        let crypted = await bcrypt.hash(password, this.rounds);
        return crypted;
    }

    public async compare(param1:string, param2:string){
        const bcrypt = require('bcrypt');
        let result = bcrypt.compare(param1,param2);
        return result;
    }
}
