const express = require('express')
const router = express.Router()

// Load model
const Todos = require('../models/Todos')

router.get('/', async (req, res) => {
  const todos = await Todos.find().lean().sort({ date: -1 })
  res.send(todos)
})

router.post('/', async (req, res) => {
  const { title, content } = req.body
  console.log(req.body);
  let errors = []

  if (!title) errors.push({ msg: 'Title required' })
  if (!content) errors.push({ msg: 'Text required' })
  if (errors.length > 0) res.send('thieu thong tin')
  else {
    const newPostData = { title, content }
    const newPost = new Todos(newPostData)
    await newPost.save()
    res.send('DONE')
  }
})

router.get('/:id', async (req, res) => {
  const todo = await Todos.findOne({ _id: req.params.id }).lean()
  res.send(todo)
})

router.put('/:id', async (req, res) => {
  console.log(req.body);
  const { title, content, status } = req.body
  await Todos.findOneAndUpdate({ _id: req.params.id }, { title, content, status })
  res.send('DONE')
})

router.delete('/:id', async (req, res) => {
  await Todos.findOneAndRemove({ _id: req.params.id })
})

module.exports = router