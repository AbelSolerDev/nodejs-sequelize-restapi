import { Task } from '../models/Task.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    console.log(tasks);
    res.json(tasks);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}

export const createTask = async (req, res) => {
  try {
    const { name, done, projectid } = req.body;
    const newTask = await Task.create({ name, done, projectid  });
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    task.set(req.body);
    await task.save();
    res.json(task);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Task.destroy({
      where: {id}
    });
    if (!result) {
      return res.status(404).json({ message: 'Task not found' });
    }
    return res.sendStatus(204).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}

export const getOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id,
      { attributes: ['name', 'done', 'projectId'] });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}

