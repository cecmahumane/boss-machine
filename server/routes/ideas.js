const express = require('express');

ideasRouter = express.Router();


const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('../db');

const checkMillionDollarIdea = require('../checkMillionDollarIdea');


ideasRouter.get('/', (req, res, next) => {
    let arr = getAllFromDatabase('ideas');
    // console.log(arr)

    res.send(arr);
})

// Create an idea
ideasRouter.post('/', (req, res, next) => {
  // console.log(req.body)
  if (Object.keys(req.body).length > 0) {
    checkMillionDollarIdea(req, res, next);
      let instance = addToDatabase('ideas', req.body);
      // console.log(instance)
      res.status(201).send(instance);
  } else {
      res.status(400).send();
  }
})

// Get a single idea
ideasRouter.get('/:ideaId', (req, res, next) => {
  let instance = getFromDatabaseById('ideas', req.params.ideaId);
  if (instance) {
      res.send(instance);
  } else {
      res.status(404).send();
  }
})

// Update an idea
ideasRouter.put('/:ideaId', (req, res, next) => {
  // checkMillionDollarIdea(req, res, next)
  let instance = updateInstanceInDatabase('ideas', req.body);
  if (instance) {
      // console.log(instance)
      res.send(instance);
  } else {
      res.status(404).send();
  }
})

// Delete an idea
ideasRouter.delete('/:ideaId', (req, res, next) => {
  // console.log(req.params)
  let paramId = req.params.ideaId;
  let bool = deleteFromDatabasebyId('ideas', paramId)
  if (bool) {
      res.status(204).send();
  } else {
      res.status(404).send();
  }
})





module.exports = ideasRouter;