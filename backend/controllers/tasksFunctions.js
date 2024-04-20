const taskSchema=require('../models/tasksSchema');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId; // Import the ObjectId constructor
exports.getTasks = async (req, res) => {
    try {
        //using mongodb function directly
        const tasks = await taskSchema.find({});
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).send('Error fetching tasks');
    }
};
exports.addTask = async (req, res) => {
    const { title } = req.body;
    const status = 0;

    try {
        const task = new taskSchema();
        const taskId = await task.addTask(title, status);
        // Send the _id of the newly created task in the response
        res.status(201).json({ taskId, message: 'Task added successfully' });
    } catch (error) {
        console.error('Error adding task:', error);
        res.status(500).send('Error adding task');
    }
};
exports.updateTask = async (req, res) => {
    const { id, title, status } = req.body;

    try {
        //using mongodb function directly
        const task = await taskSchema.findOneAndUpdate({ _id: id }, { title, status }, { new: true });
        if (!task) {
            return res.status(404).send('Task not found');
        }
        res.status(200).json({ message: 'Task updated successfully'});
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).send('Error updating task');
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.body;

    try {
        if (!id) {
            return res.status(404).send('Task not received');
        }

        // Convert the string ID to a valid ObjectId
        const objectId = new ObjectId(id);

        // Find the task by its ObjectId
        const task = await taskSchema.findOne({ _id: objectId });

        if (!task) {
            return res.status(404).send('Task not found');
        }

        await task.deleteTask();
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).send('Error deleting task');
    }
};
