const db = require('../../data/db-config.js');

function getProjects() {
   return db('projects')
    .select('name', 'description', 'completed')
    .then(res => {
        return res;
    })
}

module.exports = {
    getProjects
}