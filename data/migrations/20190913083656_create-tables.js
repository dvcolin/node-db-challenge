
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      // ID
      tbl.increments();

      // PROJECT NAME
      tbl.string('name', 255).notNullable();

      // PROJECT DESCRIPTION
      tbl.text('description');

      // PROJECT COMPLETED BOOLEAN
      tbl.boolean('completed').defaultTo(false).notNullable();
      
  })
  .createTable('resources', tbl => {
      // ID
      tbl.increments();

      // RESOURCE NAME
      tbl.string('name', 255).unique().notNullable();

      // RESOURCE DESCRIPTION
      tbl.text('description');

  })
  .createTable('tasks', tbl => {
      // ID
      tbl.increments();

      // TASK DESCRIPTION
      tbl.text('description').notNullable();

      // TASK NOTES
      tbl.text('notes');

      // TASK COMPLETED BOOLEAN
      tbl.boolean('completed').defaultTo(false).notNullable();

      // FOREIGN KEY TO PROJECTS TABLE
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

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
