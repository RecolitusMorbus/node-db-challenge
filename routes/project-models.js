const db = require('../data/db-config.js');

module.exports = {
  get,
  getProject,
  getTasks,
  // getResources,
  insert,
  update,
  remove
};

function get() {
  return db('projects');
}

function getProject(id) {
  return db('projects')
    .where({ id })
    .first();
};

function getTasks(id) {
  return db('projects')
    .join('tasks', 'projects.id', '=', 'tasks.project_id')
    .where('project_id', id)
    .select('task');
};

function getResources(id) {
  return db('projects')
    .from('resources')
    .select('resources.*', id);
};

async function insert(project) {
  const [id] = await db('projects')
    .insert(project);

  return getProject(id);
};

function update(changes, id) {
  return db('projects')
    .where({ id })
    .update(changes);
};

function remove(id) {
  return db('projects')
    .where({ id })
    .delete();
};