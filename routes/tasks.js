const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// POST a new task
router.post('/', async (req, res) => {
    const newTask = new Task({
        name: req.body.name,
        description: req.body.description,
        isCompleted: req.body.isCompleted
    });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
});

// PUT (update) a task
router.put('/:id', async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { $set: { name: req.body.name, description: req.body.description, isCompleted: req.body.isCompleted } },
        { new: true }
    );
    res.json(updatedTask);
});

// DELETE a task
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;