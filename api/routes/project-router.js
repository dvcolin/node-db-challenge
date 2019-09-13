const express = require('express');
const router = express.Router();

const Projects = require('../models/project-model.js');

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({ error: 'Error retrieving projects from server.' });
    })
})

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;

    Projects.getProjectTasks(id)
    .then(tasks => {
        if (tasks.length) {
            res.status(200).json(tasks);
        } else {
            res.status(404).json({ message: 'A project with that ID could not be found.' })
        }
    })
    .catch(err => {
        res.status(500).json({ error: 'Error retrieving project tasks from server.' });
    })
})



module.exports = router;