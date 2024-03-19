
const { editTask, createTask, deleteTask, allTask } = require("../controllers/TaskController");
const router = require("express").Router();
router.post("/createTask",createTask);
router.put("/editTask/:id", editTask);
router.post("/deleteTask/:id", deleteTask);
router.get("/allTask", allTask);
module.exports = router;