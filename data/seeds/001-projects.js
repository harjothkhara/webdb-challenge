
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('projects').insert([

        { 
        name: 'Insta-Clone', 
        description: "add backend functionality",
        completed: false
        },

        { 
        name: 'Restaurant Passport', 
        description: "reverse engineer backend",
        completed: true
        },
      ]);
};
