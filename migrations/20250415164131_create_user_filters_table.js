export function up(knex) {
    return knex.schema.createTable('user_filters', table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.integer('filter_id').unsigned().references('id').inTable('filters').onDelete('CASCADE');
        table.tinyint('is_public').defaultTo(0);
        table.timestamps(true, true);
    });
}

export function down(knex) {
    return knex.schema.dropTable('user_filters');
}
