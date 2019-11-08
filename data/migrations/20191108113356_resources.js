exports.up = function(knex) {
  return knex.schema
    .createTable('resources', tbl => {
      tbl.increments();
      tbl
        .string('client_name', 255)
        .notNullable()
        .unique();
      tbl
        .text('description');
    })
    .createTable('project_resources', tbl => {
      tbl.increments()
      tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .notNullable();
      tbl
        .integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources');
};