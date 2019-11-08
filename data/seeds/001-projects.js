
exports.seed = function(knex) {
  return knex('projects')
    .truncate()
    .then(function () {
      return knex('projects').insert([
        {
          project_name: "Imperial Initiative",
          description: "In the name of the His Majesty Project Correno I, Padishah-Emperor of the Imperium of Man and the Known Universe, create actions for yourself associated with your Sovereign.",
          completed: false
        }, {
          project_name: "Fremen Freedom Project",
          completed: false
        }
      ]);
    });
};
