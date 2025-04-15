export function up(knex) {
    return knex.schema.createTable('makeup_presets', table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.string('name', 100).notNullable();
        table.timestamps(true, true);
    });
}

export function down(knex) {
    return knex.schema.dropTable('makeup_presets');
}
