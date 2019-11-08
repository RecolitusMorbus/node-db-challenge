
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          client_name: "House Atreides",
          description: "Landsraad Great House"
        }, {
          client_name: "House Harkonnen",
          description: "That fat man's house."
        }
      ]);
    });
};
