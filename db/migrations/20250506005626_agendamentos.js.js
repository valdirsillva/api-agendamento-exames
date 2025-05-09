/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("agendamentos", tbl => {
    tbl.increments('id')
    tbl.integer('exame_id').unsigned().notNullable()
    tbl.text('dataCriacao', 32).notNullable()
    tbl.text('observacao', 130).nullable()
    tbl.foreign('exame_id').references('id').inTable('exames')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("agendamentos")
};
