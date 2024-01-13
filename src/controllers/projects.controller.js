import {Project} from '../models/Project.js'


export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll()
    console.log(projects)
    res.json(projects)
  } catch (error) {
      console.error(error)
      return res.status(500).json({ message: error.message })
  }
}

export const createProject = async (req, res) => {
  try {
    const {name, priority, description} = req.body
    const newProject = await Project.create({
      name,
      description,
      priority
    })
    console.log(newProject)
    res.json(newProject)
  } catch (error) {
      console.error(error)
      return res.status(500).json({ message: error.message })
  }
}

export const updateProject = async (req, res) => {
  try {
    const {id} = req.params;
    const {name, priority, description} = req.body;
    const project = await Project.findByPk(id)
      project.name = name;
      project.priority = priority;
      project.description = description;
    await project.save()
    res.json(project)

  } catch (error) {
      console.error(error)
      return res.status(500).json({ message: error.message })
  }
}

export const deleteProject = async (req, res) => {
  try {
    const {id} = req.params;
    await Project.destroy({
      where: {
        id,
      }
    })
    res.sendStatus(204)
  } catch (error) {
      console.error(error)
      return res.status(500).json({ message: error.message })
  }
}

export const getOneProject = async (req, res) => {
  try {
    const {id} = req.params;
    const project = await Project.findOne({
      where: {
        id,
      }
    })
    if (!project) {
      return res.status(404).json({ message: 'Project not found' })
    }

    res.json(project)
  } catch (error) { 
    console.error(error)
    return res.status(500).json({ message: error.message })
  }
} 