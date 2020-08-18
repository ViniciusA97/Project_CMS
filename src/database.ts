require('dotenv').config();
import Knex from 'knex';
export class Database{

    private static instance:Database;
    private db;

    private constructor(){
        this.buildKnex();
    }

    public static getInstance(): Database{
        if(!this.instance){
            this.instance = new Database();
        }
        return this.instance;
    }

    private buildKnex():void{
    }

}

export const config = {
    client:process.env.DB_CLIENT,
    conection:{
        host: process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
    migrations:{
    }
}

const inst: Knex = Knex(config as Knex.Config);