const express = require('express');

minionsRouter = express.Router();

const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('../db');

let minions = [];

// Get all minions
minionsRouter.get('/', (req, res, next) => {
    let arr = getAllFromDatabase('minions');
    console.log(arr)

    res.send(arr);
})

// Create a minion
minionsRouter.post('/', (req, res, next) => {
    // console.log(req.body)
    if (Object.keys(req.body).length > 0) {
        let instance = addToDatabase('minions', req.body);
        console.log(instance)
        res.status(201).send(instance);
    } else {
        res.status(400).send();
    }
})

// Get a single minion
minionsRouter.get('/:minionId', (req, res, next) => {
    let instance = getFromDatabaseById('minions', req.params.id);
    if (instance) {
        res.send(instance);
    } else {
        res.status(404).send();
    }
})

// Update an expression



module.exports = minionsRouter;