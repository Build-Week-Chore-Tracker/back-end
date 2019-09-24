
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('User').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('User').insert([
        {
          "name": "Martha",
          "username": "MarthaU",
          "email": "martha123@gmail.com",
          "password": "martha123"
        },
        {
          "name": "John",
          "username": "JohnDoe",
          "email": "johndoe@gmail.com",
          "password": "john123"
        },
        {
          "name": "Marco",
          "username": "MarcoSmith",
          "email": "marcoSmith@gmail.com",
          "password": "marco123"
        }
      ]);
    });
};
