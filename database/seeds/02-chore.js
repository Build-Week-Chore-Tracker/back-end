
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Chore').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Chore').insert([
        {
          "name":"Gardening",
          "how_long": 2,
          "points": 15,
          "due_date":"08-01-2019",
          "done_date":"08-02-2019",
          "notes":"Water the garden"
        },
        {
          "name":"Clean room",
          "how_long": 5,
          "points": 25,
          "due_date":"03-12-2019",
          "done_date":"08-02-2019",
          "notes":"Make sure to clean under the bed"
        },
        {
          "name":"Walk the dog",
          "how_long": 20,
          "points": 30,
          "due_date":"09-06-2019",
          "done_date":"08-02-2019",
          "notes":"Make sure to walk doggo"
        }
      ]);
    });
};
