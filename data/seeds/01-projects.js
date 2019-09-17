
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Complete Sprint Challenge', project_description: 'JUST DO IT BRO!', completed: false},
        {name: 'Build an API', completed: false},
        {name: 'Take out the garbage', project_description: 'Walk 10 feet', completed: false},
      ]);
    });
};
