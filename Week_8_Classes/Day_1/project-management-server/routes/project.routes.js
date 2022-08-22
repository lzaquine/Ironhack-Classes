const router = require('express').Router();
const Project = require('../models/Project.model');
const Task = require('../models/Task.model');


router.post('/projects', (req, res, next) => {
    const { title, description } = req.body;

    Project.create({title, description, tasks: []})
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// Get all projects

router.get('/projects', (req, res, next) => {
    Project.find()
    .populate('tasks')
    .then((response) => res.status(200).json(response))
    .catch((err) => res.json(err));
})

// Get one project
router.get('/projects/:projectId', (req, res, next) => {
    const { projectId } = req.params;

    Project.findById(projectId)
    .populate('tasks')
    .then((response) => res.status(200).json(response))
    .catch((err) => res.json(err));
})

// Update one project
router.put('/projects/:projectId', (req, res, next) => {
    const { projectId } = req.params;
    const { title, description } = req.body;

    Project.findByIdAndUpdate(projectId, {title, description} , {new: true})
    .then((response) => res.status(200).json(response))
    .catch((err) => res.json(err));
})

// Delete one project
router.delete('/projects/:projectId', (req, res, next) => {
    const { projectId } = req.params;

    Project.findByIdAndDelete(projectId)
    .then(() => res.status(200).json({message: `Project ${projectId} deleted!`}))
    .catch((err) => res.json(err));
})

module.exports = router;