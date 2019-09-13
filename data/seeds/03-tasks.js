
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Wake up before 8 AM', notes: 'Meh, not too difficult', completed: false, project_id: 1},
        {description: 'Work on computer for 3 hours', completed: false, project_id: 1},
        {description: 'Install express', notes: 'Use npm i express', completed: false, project_id: 2},
        {description: 'Set up server and routes', notes: '', completed: false, project_id: 2},
        {description: 'Pick up garbage bag', notes: '', completed: false, project_id: 3},
        {description: 'Walk 10 feet', notes: 'GET SOME EXERCISE BRUH', completed: false, project_id: 3},
      ]);
    });
};
