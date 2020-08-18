require('ts-node/register');
require('ts-node').register();
require('dotenv').config();

module.exports ={
    client:process.env.DB_CLIENT,
    version:'5.7',
    conection:{
        host: process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: '3306'
    },
    migrations:{
        tableName: 'knex_migrations',
        directory: 'src/migrations'
    }
};

