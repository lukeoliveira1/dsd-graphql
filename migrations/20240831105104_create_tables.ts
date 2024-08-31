import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('experiences', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('startDate').notNullable();
    table.string('endDate');
    table.json('technologies');
  });

  await knex.schema.createTable('projects', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('link');
  });

  await knex.schema.createTable('skills', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('level').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('experiences');
  await knex.schema.dropTableIfExists('projects');
  await knex.schema.dropTableIfExists('skills');
}
