const express = require('express')
const router = express.Router()
const knex = require('../knex')

router.get('/', (req, res, next) => {
  knex('projects')
    .then(projects => {
      return knex('comments')
        .whereIn('project_id', projects.map(p => p.id))
        .then((comments) => {
          const commentsByprojectId = comments.reduce((result, comment) => {
            result[comment.project_id] = result[comment.project_id] || []
            result[comment.project_id].push(comment)
            return result
          }, {})
          projects.forEach(project => {
            project.comments = commentsByprojectId[project.id] || []
          })
          res.json(projects)
        })
    })
    .catch(err => next(err))
})

router.post('/', validate, (req, res, next) => {
  knex('projects')
    .insert(params(req))
    .returning('*')
    .then(projects => res.json(projects[0]))
    .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
  knex('projects')
    .where({id: req.params.id})
    .first()
    .then(project => res.json(project))
    .catch(err => next(err))
})

router.patch('/:id', validate, (req, res, next) => {
  knex('projects')
    .update(params(req))
    .where({id: req.params.id})
    .returning('*')
    .then(projects => res.json(projects[0]))
    .catch(err => next(err))
})

router.delete('/:id', (req, res, next) => {
  knex('projects')
    .del()
    .where({id: req.params.id})
    .then(() => res.end())
    .catch(err => next(err))
})

router.post('/:id/votes', (req, res, next) => {
  knex('projects')
    .update('vote_count', knex.raw('vote_count + 1'))
    .where({id: req.params.id})
    .then( () => knex('projects').where({id: req.params.id}).first() )
    .then( project => res.json({vote_count: project.vote_count}))
    .catch(err => next(err))
})

router.delete('/:id/votes', (req, res, next) => {
  knex('projects')
    .update('vote_count', knex.raw('vote_count - 1'))
    .where({id: req.params.id})
    .then( () => knex('projects').where({id: req.params.id}).first() )
    .then( project => res.json({vote_count: project.vote_count}))
    .catch(err => next(err))
})

function params(req) {
  return {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
    image_url: req.body.image_url,
  }
}

function validate(req, res, next) {
  const errors = [];
  ['title', 'body', 'author', 'image_url'].forEach(field => {
    if (!req.body[field] || req.body[field].trim() === '') {
      errors.push({field: field, messages: ["cannot be blank"]})
    }
  })
  if (errors.length) return res.status(422).json({errors})
  next()
}

module.exports = router
