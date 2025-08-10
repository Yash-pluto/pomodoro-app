const Task = require("../models/Tasks");

// Get all tasks for logged-in user
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error fetching tasks" });
  }
};

// Add new task
exports.addTask = async (req, res) => {
  const { title } = req.body;

  if (!title)
    return res.status(400).json({ message: "Task title is required" });

  try {
    const newTask = new Task({
      user: req.user,
      title,
      completed: false,
    });

    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error creating task" });
  }
};

// Update task (e.g., toggle completed, edit title)
exports.updateTask = async (req, res) => {
  const taskId = req.params.id;
  const { title, completed } = req.body;

  try {
    let task = await Task.findOne({ _id: taskId, user: req.user });

    if (!task) return res.status(404).json({ message: "Task not found" });

    if (title !== undefined) task.title = title;
    if (completed !== undefined) task.completed = completed;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error updating task" });
  }
};

// Delete task
exports.deleteTask = async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findOneAndDelete({ _id: taskId, user: req.user });

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error deleting task" });
  }
};
