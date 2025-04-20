export function up(knex) {
    return knex.schema.createTable('makeup_user_layers', (table) => {
        table.bigIncrements('id').primary();
        table.bigInteger('author_id').unsigned().notNullable();
        table.string('type', 30).notNullable();
        table.string('color', 30);
        table.tinyint('opacity');

        table.foreign('author_id').references('id').inTable('users');
    })
}

export function down(knex) {
    return knex.schema.dropTable('makeup_user_layers')
}
