const router = require('express').Router()
const { Blog, User } = require('../models')

router.get('/blogs', (req, res) => {
    Blog.find()
    .populate('user')
    .then(user => res.json(user))
    .catch(err => console.log(err))
})


router.post('/blogs', (req, res) => {
    Blog.create(req.body)
    .then(blog => {
       User.findByIdAndUpdate(blog.user, { $push: { blogs: blog._id } })
       .then(() => res.json(blog))
       .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})


router.put('/posts/:id', (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/posts/:id', (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})


module.exports = router