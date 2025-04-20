export function up(knex) {
    return knex.schema.createTable('makeup_user_layers', (table) => {
        table.bigIncrements('id').primary();
        table.bigIncrements('author_id').primary();
        table.string('type', 30).notNullable();
        table.string('color', 30);
        table.tinyint('opacity');
    })
}

export function down(knex) {
    return knex.schema.dropTable('makeup_user_layers')
}
