exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl
        .string('project_name', 255)
        .notNullable()
        .unique();
      tbl
        .text('description')
        .notNullable()
        .unique();
      tbl
        .boolean('completed')
        .defaultTo(false);
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl
        .string('task_name', 255)
        .notNullable()
        .unique();
      tbl
        .text('instructions')
        .notNullable()
        .unique();
      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};