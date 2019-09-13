const db = require('../../data/db-config.js');

// GET PROJECTS
function getProjects() {
   return db('projects')
    .select('name', 'description', 'completed')
    .then(res => {
        return res;
    })
}

// GET TASKS FOR SPECIFIC PROJECT
function getProjectTasks(project_id) {
    return db('projects')
    .select('projects.name', 'projects.project_description', 'tasks.task_description', 'tasks.notes', 'tasks.completed')
    .join('tasks', 'projects.id', '=', 'tasks.project_id')
    .where({ project_id })
    .then(res => {
        return res;
    })
}

module.exports = {
    getProjects,
    getProjectTasks
}