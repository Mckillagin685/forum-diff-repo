
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          "id": 1,
          "title": "White-throated kingfisher",
          "user_id": 1,
          "thread_id": 1
        }, {
          "id": 2,
          "title": "Black-throated butcher bird",
          "user_id": 1,
          "thread_id": 3
        }, {
          "id": 3,
          "title": "Roseate cockatoo",
          "user_id": 1,
          "thread_id": 3
        }, {
          "id": 4,
          "title": "Badger, eurasian",
          "user_id": 1,
          "thread_id": 3
        }, {
          "id": 5,
          "title": "Flying fox (unidentified)",
          "user_id": 1,
          "thread_id": 2
        }, {
          "id": 6,
          "title": "Elk, Wapiti",
          "user_id": 1,
          "thread_id": 2
        }, {
          "id": 7,
          "title": "Corella, long-billed",
          "user_id": 1,
          "thread_id": 2
        }, {
          "id": 8,
          "title": "Siskin, pine",
          "user_id": 1,
          "thread_id": 2
        }, {
          "id": 9,
          "title": "Elephant, african",
          "user_id": 1,
          "thread_id": 3
        }, {
          "id": 10,
          "title": "Bare-faced go away bird",
          "user_id": 1,
          "thread_id": 1
        }, {
          "id": 11,
          "title": "Asian elephant",
          "user_id": 1,
          "thread_id": 3
        }, {
          "id": 12,
          "title": "Boa, malagasy ground",
          "user_id": 1,
          "thread_id": 2
        }, {
          "id": 13,
          "title": "Stick insect",
          "user_id": 1,
          "thread_id": 3
        }, {
          "id": 14,
          "title": "Colobus, black and white",
          "user_id": 1,
          "thread_id": 3
        }, {
          "id": 15,
          "title": "Bird, pied butcher",
          "user_id": 1,
          "thread_id": 3
        }, {
          "id": 16,
          "title": "Woolly-necked stork",
          "user_id": 1,
          "thread_id": 1
        }, {
          "id": 17,
          "title": "Moccasin, water",
          "user_id": 1,
          "thread_id": 2
        }, {
          "id": 18,
          "title": "Jackal, indian",
          "user_id": 1,
          "thread_id": 3
        }, {
          "id": 19,
          "title": "Red-legged pademelon",
          "user_id": 1,
          "thread_id": 2
        }, {
          "id": 20,
          "title": "Slender loris",
          "user_id": 1,
          "thread_id": 3
        }
      ]);
    });
};
