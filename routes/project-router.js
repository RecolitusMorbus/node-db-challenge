const express = require('express');
const Projects = require('./project-models.js');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ err: "An error prevented the projects from retrieval." });
    });
});

router.get('/:id', (req, res) => {
  Projects.getProject()
    .then(project => {
      if(project) {
        res.status(200).json(project)
      } else {
        res.status(404).json({ message: "Project could not be found." });
      };
    })
    .catch(err => {
      res.status(500).json({ err: "An error prevented the project from retrieval." });
    });
});

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Recipes.getTasks(id)
    .then(tasks => {
      if(tasks.length) {
        res.status(200).json(tasks);
      } else {
        res.status(404).json({ message: 'The tasks could not be found.' });
      };
    })
    .catch(err => {
      res.status(500).json({ err: 'An error prevented the project\'s tasks from retrieval.' });
    });
});

router.post('/', (req, res) => {
  const newProject = req.body;

  Recipes.add(newProject)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ err: 'An error prevented the project from being added.' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Recipes.getProject(id)
    .then(project => {
      if(project) {
        Projects.update(changes, id)
          .then(updatedProject => {
            res.status(200).json(updatedProject);
          })
          .catch(err => {
            res.status(500).json({ err: "An error prevented the project from being updated." })
          })
      } else {
        res.status(404).json({ message: "The project could not be found." });
      };
    })
    .catch(err => {
      res.status(500).json({ err: "An error prevented the project from retrieval." });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Recipes.remove(id)
    .then(project => {
      if(project) {
        Projects.remove(id)
          .then(deletedProject => {
            res.status(200).json({ remove: deletedProject });
          })
          .catch(err => {
            res.status(500).json({ err: "An error prevented the project from being deleted." })
          })
      } else {
        res.status(404).json({ message: "The project could not be found." });
      };
    })
    .catch(err => {
      res.status(500).json({ err: "An error prevented the project from retrieval." });
    });
});

module.exports = router;