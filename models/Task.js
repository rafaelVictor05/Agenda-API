const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    isCompleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', TaskSchema);