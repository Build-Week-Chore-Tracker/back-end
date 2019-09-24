
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
        tbl
            .string('password')
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
            .string('done_date')
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
            .string('password')
        tbl
            .integer('age')
        tbl
            .boolean('child')
        tbl
            .integer('points')

        //FOREIGN KEYS 
        tbl
            .integer('User_id')
            .unsigned()
            .references('id')
            .inTable('User')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('Family', tbl => {

        tbl
            .string('name')
        tbl
            .string('username')
            
        tbl
            .string('email')
            .unique()
        tbl
            .integer('age')
            .notNullable()
        tbl
            .boolean('child')

        //FOREIGN KEYS 
        tbl
            .integer('User_id')
            .unsigned()
            .references('id')
            .inTable('User')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl
            .integer('User_child_id')
            .unsigned()
            .references('id')
            .inTable('User_child')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl.primary('User_id', 'User_child_id')
    })
    .createTable('User_child_chore', tbl => {

        //FOREIGN KEYS
        tbl
            .integer('User_child_id')
            .unsigned()
            .references('id')
            .inTable('User_child')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl
            .integer('User')
            .unsigned()
            .references('id')
            .inTable('User')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('User_child_chore')
    .dropTableIfExists('Family')
    .dropTableIfExists('User_Child')
    .dropTableIfExists('Chore')
    .dropTableIfExists('User')
};
