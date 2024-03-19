const Task = require("../models/taskModel");
const createTask = async (req, res) => {
    try {
        console.log(req.body)
        const newdata = {
            taskName: req.body.taskName,
            assignedTo: req.body.assignedTo,
            completedDate: req.body.completedDate,
            category: req.body.category,
            priority: req.body.priority,
        }
        console.log(newdata)
        let result = await Task.create(newdata);
        res.status(200).json({
            succuss: 1,
            msg: "Task created successfully",
            result: result
        })
    } catch (error) {
        res.status(500).json({
            succuss: 0,
            msg: error

        })
    }

}


const editTask = async (req, res) => {
    try {
        const id = req.params.id
        const newdata = {
            taskName: req.body.taskName,
            assignedTo: req.body.assignedTo,
            completedDate: req.body.completedDate,
            category: req.body.category,
            priority: req.body.priority,
        }
        const details = await Task.findOneAndUpdate({ _id: Object(id) }, newdata);
        res.status(200).json({
            succuss: 1,
            msg: "Task updated successfully",
            result: details
        })
    } catch (error) {
        res.status(500).json({
            succuss: 0,
            msg: error
        })
    }
}
const deleteTask = async (req, res) => {
    try {
        const id = req.params.id
        const details = await Task.deleteOne({ _id: Object(id) });
        res.status(200).json({
            succuss: 1,
            msg: "Task deleted successfully",
            result: details
        })
    } catch (error) {
        res.status(500).json({
            succuss: 0,
            msg: error
        })
    }
}




const allTask = async (req, res) => {
    
    try {
        let data = await Task.find({}).sort({priority:1})
        res.status(200).json({
            succuss: 1,
            msg: "All Task",
            result: data
        })
    } catch (error) {
        res.status(500).json({
            succuss: 0,
            msg: error
        })
    }
}

module.exports = {
    createTask,
    editTask,
    allTask,
    deleteTask,
}