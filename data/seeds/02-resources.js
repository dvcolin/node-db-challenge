
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Laptop', description: 'Piece of metal that computes things'},
        {name: 'Mouse', description: 'Not the rodent'},
        {name: 'Garbage bag'},
        {name: 'Legs', description: 'Attached to torso'},
        {name: 'Arms', description: 'Attached to torso'},
      ]);
    });
};
