
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task_name: "Imperial Action I",
          description: "This action is handed down to you by your Glorious Padishah-Emperor Project Correno I. Make more.",
          notes: "See my advisors for particulars.",
          project_id: 1
        },
        {
          task_name: "Without Rhythm",
          description: "Move without rhythm, lest Shai-hulud hear your footsteps.",
          notes: "",
          project_id: 2
        },
      ]);
    });
};
