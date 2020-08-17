require('dotenv').config();
export class Database{

    private static instance:Database;
    private knex;

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
        this.knex= require('knex')({
            client:process.env.DB_CLIENT,
            conection:{
                host: process.env.DB_HOST,
                user:process.env.DB_USER,
                password:process.env.password,
                database: process.env.DB_DATABASE,
            }
        })
    }

}