import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('caretaker_advertisement', (table) => {
    table.date('startDate').notNullable();
    table.date('endDate').notNullable();
    table.time('startTime').notNullable();
    table.time('endTime').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('caretaker_advertisement', (table) => {
    table.dropColumn('startDate');
    table.dropColumn('endDate');
    table.dropColumn('startTime');
    table.dropColumn('endTime');
  });
}
