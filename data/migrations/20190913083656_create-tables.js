
exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      // ID
      tbl.increments();

      // PROJECT NAME
      tbl.string('name', 255).notNullable();

      // PROJECT DESCRIPTION
      tbl.text('project_description');

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
      tbl.text('task_description').notNullable();

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
    // FOREIGN KEY TO PROJECTS TABLE
    tbl.integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

    // FOREIGN KEY TO RESOURCES TABLE
    tbl.integer('resource_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('resources')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project-resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
