export function up(knex) {
    return knex.schema.createTable('preset_layers', (table) => {
        table.bigIncrements('id').primary();
        table.bigInteger('preset_id').unsigned().primary();
        table.bigInteger('layer_id').unsigned().primary();

        table.foreign('preset_id').references('id').inTable('makeup_presets');
        table.foreign('layer_id').references('id').inTable('makeup_user_layers');
    })
}

export function down(knex) {
    return knex.schema.dropTable('preset_layers')
}
