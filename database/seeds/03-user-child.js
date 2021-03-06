
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('User_child').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('User_child').insert([
        { User_id: 1, name: 'John', username: 'JohnDoe', password: 'john123', age: 8, points: 0, child: true, },
        { User_id: 1, name: 'Jenna', username: 'JennaStones', password: 'jenna123', age: 5, points: 0, child: true,},
        { User_id: 1, name: 'Shaw', username: 'Shawty', password: 'shaw123', age: 9, points: 0, child: true,}
      ]);
    });
};
