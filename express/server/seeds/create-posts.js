
exports.seed = function(knex, Promise) {

  const text1 = [
    "Project Description #1",
  ].join("\n")

  const text2 = [
    "Project Description #2",
  ].join("\n\n")

  const text3 = [
    "Project Description #3",
  ].join("\n\n")

  return knex('comments').del()
    .then(() => knex('projects').del())
    .then(function () {
      return Promise.all([
        createPost(
          'My love of two wheels',
          text1,
          'R100_Ridr',
          'http://www.neverra.com/sites/default/files/IMCE/BMW_custom_CRD_65_04.jpg',
          new Date(2012, 12, 17)
        ),
        createPost(
          'Raw R100',
          text2,
          'Bmw_Brapps',
          'http://cdn.blessthisstuff.com/imagens/stuff/bmw-r100-crd-motorcycles-10.jpg',
          new Date(2017, 1, 11)
        ),
        createPost(
          "If your bike isn't black we can't be friends",
          text3,
          'bavarian-fistfighter',
          'http://www.wunderlichamerica.com/blog/wp-content/uploads/2016/03/bavarian-fistfighter-5.jpg',
          new Date(2017, 5, 12)
        ),
      ])
    }).then(function (projectIds) {
      return Promise.all([
        knex('comments').insert({project_id: projectIds[0], content: 'I can relate'}),
        knex('comments').insert({project_id: projectIds[0], content: 'Win'}),
        knex('comments').insert({project_id: projectIds[2], content: 'Welcome to my life'}),
      ])
    })

  function createPost(title, body, author, image_url, created_at) {
    return knex('projects')
      .insert({title, body, author, image_url, created_at})
      .returning('id')
      .then(ids => ids[0])
  }
};
