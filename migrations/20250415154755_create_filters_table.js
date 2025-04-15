export function up(knex) {
    return knex.schema.createTable('filters', table => {
        table.increments('id').primary();
        table.string('name', 100).notNullable();
        table.text('s3_url').notNullable();
        table.string('type', 50).notNullable();
        table.integer('author_id').unsigned();
        table.timestamps(true, true);

        table.foreign('author_id').references('id').inTable('users');
    });
}

export function down(knex) {
    return knex.schema.dropTable('filters');
}
