
exports.seed = function(knex, Promise) {
  return knex("actions").insert([
    {
      description: "Insta Clone action description",
      notes: "Insta Clone action notes",
      completed: false,
      project_id: 1
    },
    {
      description: "Another Insta Clone action description",
      notes: "Another Insta Clone action notes",
      completed: false,
      project_id: 1
    },
    {
      description: "Restaurant Passport action description",
      notes: "Restaurant Passport action notes",
      completed: false,
      project_id: 2
    },
    {
      description: "Another Restaurant Passport action description",
      notes: "Another Restaurant Passport action notes",
      completed: false,
      project_id: 2
    }
  ]);
};
