/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("exames", tbl => {
    tbl.increments('id')
    tbl.string('nome', 100).notNullable()
    tbl.string('especialidade', 75).notNullable()
    tbl.timestamp('dataCriacao').defaultTo(knex.fn.now())
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("exames")
};
