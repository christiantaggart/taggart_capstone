exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table => {
    table.increments()
    table.text("content")
    table.integer("project_id").index().references("id").inTable("projects").onDelete("cascade").notNull()
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
}
