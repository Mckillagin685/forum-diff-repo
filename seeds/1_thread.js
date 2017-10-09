
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('threads').del()
    .then(function () {
      // Inserts seed entries
      return knex('threads').insert([
        {
          "id": 1,
          "title": "Stachydeoma graveolens (Chapm. ex A. Gray) Small",
          "user_id": 1
        }, {
          "id": 2,
          "title": "Acisanthera P. Br.",
          "user_id": 1
        }, {
          "id": 3,
          "title": "Chamaesyce jejuna (M.C. Johnst. & Warnock) Shinners",
          "user_id": 1
        }, {
          "id": 4,
          "title": "Micromitrium austinii Sull.",
          "user_id": 1
        }, {
          "id": 5,
          "title": "Scirpus pallidus (Britton) Fernald",
          "user_id": 1
        }, {
          "id": 6,
          "title": "Ribes uva-crispa L. var. sativum DC.",
          "user_id": 1
        }, {
          "id": 7,
          "title": "Salvia hierosolymitana Boiss.",
          "user_id": 1
        }, {
          "id": 8,
          "title": "Geranium dissectum L.",
          "user_id": 1
        }, {
          "id": 9,
          "title": "Silene salmonacea T.W. Nelson, J.P. Nelson & S.A. Erwin",
          "user_id": 1
        }, {
          "id": 10,
          "title": "Lavandula latifolia Medikus",
          "user_id": 1
        }
      ]);
    });
};
