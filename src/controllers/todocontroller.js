const todo=require('../models/Todo')
const mongoose=require('mongoose')
const posttodos=async (req, res) => {
    try {
        const { title, completed } = req.body
        if (!title || typeof title !== 'string' || !title.trim()) {
            return res.status(400).json({ message: "title is required and must be no empty" })
        }
        const todor = new todo({
            title: title.trim(),
            completed: completed === true
        })
        await todor.save()
        res.status(201).json(todor)
    } catch (error) {
        res.status(500).json({ message: "error creating todo ", error: error.message })



    }
}
const gettodos=async (req, res) => {
    try {
        const todos = await todo.find().sort({ createdat: -1 })
        res.status(201).json(todos)
    } catch (error) {
        console.log(error)
    }
}
const gettodobyid=async (req, res) => {
    try {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "invalid id" })
        }
        const todoItem = await todo.findById(id);
        if (!todoItem) {
            return res.status(404).json({ message: "todo not found" })
        }
        res.status(200).json(todoItem)
    } catch (error) {
        console.log(error);

    }
}
const updatetodo=async (req, res) => {
    try {
        const { id } = req.params
        const { title, completed } = req.body
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "invalid id" })
        }
        const updates = {}
        if (title !== 'undefined') {
            updates.title = typeof title === 'string' ? title.trim() : title;

        }
        if (completed !== 'undefined') updates.completed = completed === true;
        const todou = await todo.findByIdAndUpdate(id, updates, { new: true })
        if (!todou) {
            return res.status(404).json({ message: "todo not found" })
        }
        return res.status(200).json(todou)

    } catch (error) {
        console.log(error);

    }
}
const deletetodo=async (req, res) => {
    try {
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "invalid id" })
        }
        const todoitem = await todo.findByIdAndDelete(id)
        if (!todoitem) {
            res.status(404).json({ message: "todo not found" })
        }
        res.status(204).json({ message: "todo deleted succeffully" })
    } catch (error) {
        console.log(error)
    }
}
module.exports={posttodos,gettodos,gettodobyid,updatetodo,deletetodo}