
exports.up = function(knex) {
  return knex.schema
    .createTable('user', tbl => {
        tbl.increments(); //Id's auto increment

        tbl
            .string('name', 100)
            .notNullable()
        tbl
            .string('email_address', 100)
            .unique()
            .notNullable()
        tbl
            .string('password', 100)
            .notNullable()
        tbl
            .boolean('child', 100)
    })
    .createTable('Chore_template', tbl => {
        tbl.increments(); //Id's auto increment

        tbl
            .string('name', 100)
            .notNullable()
            .unique()
        tbl
            .string('description', 500)
        tbl
            .string('period', 500)
        tbl
            .boolean('picture_evidence')
        tbl
            .integer('points')
        tbl
            .boolean('custom')
        tbl
            .string('notes', 500)
    })
    .createTable('Chore', tbl => {
        tbl.increments(); //Id's auto increment

        tbl
            .timestamp('created_date', true)
        tbl
            .timestamp('due_date', true)
        tbl
            .timestamp('done_date', true)
        tbl
            .timestamp('approved_date', true)
        tbl
            .string('assigned_comment', 150)
    })
    .createTable('Notes', tbl => {
        tbl.increments(); //Id's auto increment

        tbl
            .boolean('seen')
    })
    .createTable('Settings', tbl => {
        tbl.increments(); //Id's auto increment

        tbl
            .string('picture')
            // .integer('week_start_day')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Settings')
    .dropTableIfExists('Notes')
    .dropTableIfExists('Chore')
    .dropTableIfExists('Chore_template')
    .dropTableIfExists('user')
};
