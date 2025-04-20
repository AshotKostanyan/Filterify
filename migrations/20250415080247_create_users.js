export function up(knex) {
  return knex.schema.createTable('users', (table) => {
      table.bigIncrements('id').primary();
      table.string('name', 30).notNullable();
      table.string('email', 255).notNullable();
      table.string('password', 255).notNullable();
      table.string('avatar', 255);
      table.timestamps(true, true);
  })
}

export function down(knex) {
  return knex.schema.dropTable('users')
}
