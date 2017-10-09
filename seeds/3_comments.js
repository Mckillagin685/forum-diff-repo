
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          "id": 1,
          "title": "Owl, snowy",
          "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
          "user_id": 1,
          "post_id": 1
        }, {
          "id": 2,
          "title": "Porcupine, tree",
          "body": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
          "user_id": 1,
          "post_id": 1
        }, {
          "id": 3,
          "title": "Bulbul, black-eyed",
          "body": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
          "user_id": 1,
          "post_id": 3
        }, {
          "id": 4,
          "title": "Skink, blue-tongued",
          "body": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
          "user_id": 1,
          "post_id": 1
        }, {
          "id": 5,
          "title": "North American porcupine",
          "body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          "user_id": 1,
          "post_id": 2
        }, {
          "id": 6,
          "title": "Otter, oriental short-clawed",
          "body": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          "user_id": 1,
          "post_id": 1
        }, {
          "id": 7,
          "title": "Baboon, savanna",
          "body": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
          "user_id": 1,
          "post_id": 1
        }, {
          "id": 8,
          "title": "Marshbird, brown and yellow",
          "body": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
          "user_id": 1,
          "post_id": 2
        }, {
          "id": 9,
          "title": "Cat, long-tailed spotted",
          "body": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          "user_id": 1,
          "post_id": 1
        }, {
          "id": 10,
          "title": "Beaver, north american",
          "body": "Fusce consequat. Nulla nisl. Nunc nisl.",
          "user_id": 1,
          "post_id": 2
        }, {
          "id": 11,
          "title": "Canadian tiger swallowtail butterfly",
          "body": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
          "user_id": 1,
          "post_id": 3
        }, {
          "id": 12,
          "title": "Common rhea",
          "body": "Fusce consequat. Nulla nisl. Nunc nisl.",
          "user_id": 1,
          "post_id": 2
        }, {
          "id": 13,
          "title": "Buffalo, african",
          "body": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
          "user_id": 1,
          "post_id": 2
        }, {
          "id": 14,
          "title": "Painted stork",
          "body": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
          "user_id": 1,
          "post_id": 2
        }, {
          "id": 15,
          "title": "Andean goose",
          "body": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
          "user_id": 1,
          "post_id": 3
        }, {
          "id": 16,
          "title": "Porcupine, north american",
          "body": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
          "user_id": 1,
          "post_id": 2
        }, {
          "id": 17,
          "title": "Hare, arctic",
          "body": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
          "user_id": 1,
          "post_id": 2
        }, {
          "id": 18,
          "title": "Kelp gull",
          "body": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
          "user_id": 1,
          "post_id": 1
        }, {
          "id": 19,
          "title": "Violet-crested turaco",
          "body": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
          "user_id": 1,
          "post_id": 3
        }, {
          "id": 20,
          "title": "Phalarope, red-necked",
          "body": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
          "user_id": 1,
          "post_id": 1
        }
      ]);
    });
};
