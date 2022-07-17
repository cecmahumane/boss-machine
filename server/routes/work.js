const express = require('express');

workRouter = express.Router();

const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('../db')

// Get all work
workRouter.get('/:minionId/work', (req, res, next) => {
    if (Number(req.params.minionId)) {
        let arr = getAllFromDatabase('work');
        res.send(arr);
    }

})

// Create work
workRouter.post('/:minionId/work', (req, res, next) => {
    // console.log(req.body)
    if (Object.keys(req.body).length > 0) {
        let instance = addToDatabase('work', req.body);
        // console.log(instance)
        res.status(201).send(instance);
    } else {
        res.status(400).send();
    }
})

// Get a single minions work
minionsRouter.get('/:minionId/work', (req, res, next) => {
    let instance = getFromDatabaseById('work', req.params.minionId);
    if (instance) {
        res.send(instance);
    } else {
        res.status(404).send();
    }
})

// Update work
workRouter.put('/:minionId/work/:workId', (req, res, next) => {
    if (Number(req.params.minionId) && Number(req.params.workId) && Number(req.params.workId) > 0) {
        let instance = updateInstanceInDatabase('work', req.body);
        if (instance) {
            // console.log(instance)
            res.send(instance);
        } else {
            res.status(404).send();
        }
    } else {
        res.status(404).send(); 
    }
   
})

// Delete a minion
minionsRouter.delete('/:minionId/work/:workId', (req, res, next) => {
    console.log(req.params)
    let minionId = req.params.minionId;
    let workId = req.params.workId;
    if (Number(minionId) && Number(workId) && minionId > 0) {
        let bool = deleteFromDatabasebyId('work', workId)
        if (bool) {
            res.status(204).send();
        } else {
            res.status(404).send();
        }
    } else {
        res.status(404).send();
    }
    
})



module.exports = workRouter;