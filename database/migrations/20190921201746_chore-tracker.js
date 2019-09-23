
exports.up = function(knex) {
  return knex.schema
    .createTable('User', tbl => {
        tbl.increments(); //Id's auto increment

        tbl
            .string('name')
            .notNullable()
        tbl
            .string('username')
            .unique()
            .notNullable()
        tbl
            .string('email')
            .unique()
        tbl
            .string('password')
            .notNullable()
    })
    .createTable('Chore', tbl => {
        tbl.increments(); //Id's auto increment

        tbl
            .string('name')
            .notNullable()
        tbl
            .string('how_long')
            .notNullable()
        tbl
            .integer('points')
            .notNullable()
        tbl
            .string('due_date')
            .notNullable()
        tbl
            .string('notes')
    })
    .createTable('User_child', tbl => {
        tbl.increments(); //Id's auto increment

        tbl
            .string('name')
        tbl
            .string('username')
        tbl
            .integer('age')
            .notNullable()
            
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Chore')
    .dropTableIfExists('User_Child')
    .dropTableIfExists('User')
};
