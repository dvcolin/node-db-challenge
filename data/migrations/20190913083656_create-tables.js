
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      // ID
      tbl.increments();

      // PROJECT NAME
      tbl.string('name', 255).notNullable();

      // PROJECT DESCRIPTION
      tbl.string('description', 1000);

      // PROJECT COMPLETED BOOLEAN
      tbl.boolean('completed').defaultTo(false);
      
  })
  .createTable('resources', tbl => {

  })
  .createTable('tasks', tbl => {

  })
  .createTable('project-resources', tbl => {

  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project-resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
