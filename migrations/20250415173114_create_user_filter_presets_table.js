export function up(knex) {
    return knex.schema.createTable('user_filter_presets', function (table) {
        table.increments('id').primary();
        table.integer('user_filter_id').unsigned().notNullable();
        table.integer('preset_id').unsigned().notNullable();
        table.timestamps(true, true);

        table.foreign('preset_id').references('id').inTable('makeup_presets').onDelete('CASCADE');
        table.foreign('user_filter_id').references('id').inTable('user_filters').onDelete('CASCADE');
    });
}

export function down(knex) {
    return knex.schema.dropTableIfExists('user_filter_presets');
}
