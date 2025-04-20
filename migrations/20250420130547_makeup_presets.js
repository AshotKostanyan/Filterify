export function up(knex) {
    return knex.schema.createTable('makeup_presets', (table) => {
        table.bigInteger('id').primary();
        table.bigIncrements('makeup_template_id').notNullable();
        table.bigIncrements('author_id').notNullable();
        table.tinyint('is_public').notNullable();
    })
}

export function down(knex) {
    return knex.schema.dropTable('makeup_presets')
}
