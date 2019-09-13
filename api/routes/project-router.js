const express = require('express');
const router = express.Router();

const Projects = require('../models/project-model.js');

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        projects.forEach(project => {
            project.completed === 0? project.completed = false : project.completed = true;
        })
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
            tasks.forEach(task => {
                task.completed === 0? task.completed = false : task.completed = true;
            })
            res.status(200).json(tasks);
        } else {
            res.status(404).json({ message: 'A project with that ID could not be found.' })
        }
    })
    .catch(err => {
        res.status(500).json({ error: 'Error retrieving project tasks from server.' });
    })
})

router.get('/resources', (req, res) => {
    Projects.getResources()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => {
        res.status(500).json({ error: 'Error retrieving resources from server.' });
    })
})

router.get('/:id/resources', (req, res) => {
    const { id } = req.params;

    Projects.getProjectResources(id)
    .then(resources => {
        if (resources.length) {
            res.status(200).json(resources);
        } else {
            res.status(404).json({ message: 'A project with that ID could not be found.' })
        }
    })
    .catch(err => {
        res.status(500).json({ error: 'Error retrieving resources from server.' });
    })
})


router.post('/', (req, res) => {
    const projectBody = req.body;

    if (!projectBody.name) {
        res.status(400).json({ message: 'Please provide a name for the project.' })
    } else {
        Projects.addProject(projectBody)
        .then(added => {
            res.status(201).json(added);
        })
        .catch(err => {
            res.status(500).json({ error: 'Error adding project to the database.' })
        })
    }
})

router.post('/resources', (req, res) => {
    const resourceBody = req.body;

    if (!resourceBody.name) {
        res.status(400).json({ message: 'Please provide a name for the resource.' })
    } else {
        Projects.addResource(resourceBody)
        .then(added => {
            res.status(201).json(added);
        })
        .catch(err => {
            res.status(500).json({ error: 'Error adding resource to the database.' })
        })
    }
})

router.post('/:id/tasks', (req, res) => {
    const { id } = req.params;
    const taskBody = req.body;

    if (!taskBody.task_description) {
        res.status(400).json({ message: 'Please provide a description and project_id for the task.' })
    } else {
        Projects.addTask(id, {...taskBody, project_id: id})
        .then(added => {
            res.status(201).json(added);
        })
        .catch(err => {
            res.status(500).json({ error: 'Error adding task to the database.' })
        })
    }
})


module.exports = router;