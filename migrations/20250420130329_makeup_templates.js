export function up(knex) {
    return knex.schema.createTable('makeup_templates', (table) => {
        table.bigIncrements('id').primary();
        table.string('name', 255).notNullable();
    })
}

export function down(knex) {
    return knex.schema.dropTable('makeup_templates');
}
