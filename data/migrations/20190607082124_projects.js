//use migrations for your schema maintenance
exports.up = function(knex, Promise) {
    // the tables most be created in the right order,
  // tables with FK are created after the referenced table is created
  
  return knex.schema
  .createTable("projects", table => {
    table.increments();
    table
      .string("name", 128)
      .notNullable()
      .unique();
   table.string("description", 256).notNullable();
   table.boolean("completed");   
  })
  .createTable("actions", table => {
    table.increments();
    table
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id") //foreign key referencing the tracks table above - ORDER MATTERS
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .string("description", 256)
      .notNullable() //forcing a value to be entered
      .unique();
    table.string("notes", 256).notNullable();
    table.boolean("completed");          
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("actions")
    .dropTableIfExists("projects")        
};
