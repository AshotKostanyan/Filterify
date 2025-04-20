export function up(knex) {
    return knex.schema.createTable('makeup_presets', (table) => {
        table.bigIncrements('id').primary();
        table.bigInteger('makeup_template_id').unsigned().notNullable();
        table.bigInteger('author_id').unsigned().notNullable();
        table.tinyint('is_public').notNullable();

        table.foreign('makeup_template_id').references('id').inTable('makeup_templates');
        table.foreign('author_id').references('id').inTable('users');
    })
}

export function down(knex) {
    return knex.schema.dropTable('makeup_presets')
}
