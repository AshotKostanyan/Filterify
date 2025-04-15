export function up(knex) {
    return knex.schema.createTable('makeup_layers', table => {
        table.increments('id').primary();
        table.integer('preset_id').unsigned().references('id').inTable('makeup_presets').onDelete('CASCADE');
        table.string('type', 50).notNullable(); // lips, eyes, etc.
        table.string('color', 7); // e.g. #FF00AA
        table.float('opacity').defaultTo(1.0);
        table.text('texture_url');
        table.boolean('is_enabled').defaultTo(true);
    });
}

export function down(knex) {
    return knex.schema.dropTable('makeup_layers');
}
