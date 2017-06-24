const express = require('express')
const router = express.Router()
const knex = require('../db')

router.get('/:project_id/comments', (req, res, next) => {
  knex('comments')
    .where({project_id: req.params.project_id})
    .then(comments => res.json(comments))
    .catch(err => next(err))
})

router.post('/:project_id/comments', validate, (req, res, next) => {
  knex('comments')
    .insert({content: req.body.content, project_id: req.params.project_id})
    .where({project_id: req.params.project_id})
    .returning('*')
    .then(comments => res.json(comments[0]))
    .catch(err => next(err))
})

router.patch('/:project_id/comments/:id', validate, (req, res, next) => {
  knex('comments')
    .update({content: req.body.content})
    .where({project_id: req.params.project_id, id: req.params.id})
    .returning('*')
    .then(comments => res.json(comments[0]))
    .catch(err => next(err))
})

router.delete('/:project_id/comments/:id', (req, res, next) => {
  knex('comments')
    .del()
    .where({project_id: req.params.project_id, id: req.params.id})
    .then(() => res.end())
    .catch(err => next(err))
})

function validate(req, res, next) {
  const errors = [];
  ['content'].forEach(field => {
    if (!req.body[field] || req.body[field].trim() === '') {
      errors.push({field, messages: ["cannot be blank"]})
    }
  })
  if (errors.length) return res.status(422).json({errors})
  next()
}

module.exports = router
