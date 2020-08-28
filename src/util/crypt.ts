
export class Cryptografic{
    
    private bycript; 
    private rounds;
    constructor(){
        this.bycript= require('bcrypt');
    }

    public async encrypt(password:string){
        const bcrypt = require('bcrypt');
        let crypted = await bcrypt.hash(password, 10);
        return crypted;
    }

    public async compare(param1, param2){
        const bcrypt = require('bcrypt');
        let result = await bcrypt.compare(param1,param2);
        return result;
    }
}
