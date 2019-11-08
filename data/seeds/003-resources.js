
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          client_name: "Imperial Sadukar",
          description: "The Padishah-Emperor's soldier fanatics.",
          project_id: 1
        }, {
          client_name: "House Harkonnen",
          description: "That fat man's house.",
          project_id: 1
        }, {
          client_name: "House Atreides",
          description: "Landsraad Great House",
          project_id: 2
        }
      ]);
    });
};
