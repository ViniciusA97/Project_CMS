import { createConnection, Connection } from 'typeorm';

export class Database{

    private static instance:Database;
    private connection:Connection;

    private constructor(){
        this.build();
    }

    private async build(){
        this.connection =  await createConnection();
    }

    public static getInstance():Database{
        if(!Database.instance) Database.instance = new Database();
        return Database.instance;
    }

    public getConnection(){
        return this.connection;
    }

}
