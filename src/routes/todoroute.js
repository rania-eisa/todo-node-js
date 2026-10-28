
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const todo = require('../models/Todo')
const {posttodos,gettodos,gettodobyid,updatetodo,deletetodo}=require('../controllers/todocontroller')

router.post('/todos',posttodos )
router.get('/todos',gettodos )
router.get('/todos/:id',gettodobyid )
router.put('/todos/:id',updatetodo )
router.delete('/todos/:id',deletetodo )

// router.use((req, res, next) => {
//     console.log(`method is ${req.method} url is ${req.url}`)
//     next()
// })
// router.get('/', (req, res) => {
//     res.send('hello todo router')
// })

// router.get('/api/todos', (req, res) => {
//     res.json({ message: "all todos in database" })
// })
// router.get('/api/todos/:id', (req, res) => {
//     const id = req.params.id
//     res.json({ message: `single  todo in database id=${id}` })
// })

// router.post('/api/todos', (req, res) => {
//     const title = req.body.title
//     res.status(201).json({ message: `single  todo in database title=${title}` })
// })
// router.put('/api/todos/:id', (req, res) => {
//     const id = req.params.id
//     const title = req.body.title
//     res.json({ message: `single  todo in database is updated id=${id},title=${title}` })
// })
// router.delete('/api/todos/:id', (req, res) => {
//     const id = req.params.id
//     res.json({ message: `single  todo in database is deleted id=${id}` })
// })
module.exports = router