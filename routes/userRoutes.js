const router = require('express').Router()
const { User } = require('../models')

router.get('/users', (req, res) => {
    User.find()
    .then(user => res.json(user))
    .catch(err => console.log(err))
})


router.post('/users', (req, res) => {
    User.create(req.body)
    .then(book => res.json(book))
    .catch(err => console.log(err))
})


module.exports = router