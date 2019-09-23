
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('User').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('User').insert([
        {
          "name": null,
          "username": "JohnStones",
          "email_address": null
        }
      ]);
    });
};
