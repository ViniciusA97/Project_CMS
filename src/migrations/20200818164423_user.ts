import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user',(table)=>{
        table.uuid('id');
        table.string('name').notNullable();
        table.string('email').unique();
        table.string('password').notNullable;
        table.string('phone').notNullable();
        table.boolean('admin').nullable().defaultTo('0');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user');
}

