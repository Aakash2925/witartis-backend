const mongoose = require("mongoose");
const taskModel = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    assignedTo: {
        type: String,
        required: true
    },
    completedDate: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },

 
    priority: {
        type: Number,
    },
});

module.exports = mongoose.model("task", taskModel);