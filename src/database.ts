import { createConnection } from 'typeorm';

function connect(){
    createConnection();
}

export { connect as connect}