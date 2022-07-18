const express = require('express');

workRouter = express.Router();

const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('../db')

// Get all work
workRouter.get('/:minionId/work', (req, res, next) => {
    let instance = getFromDatabaseById('minions', req.params.minionId);
    if (Number(req.params.minionId) && instance) {
        let data = getAllFromDatabase('work');
        // console.log(arr) filter down and return as an array
        let minionWork = data.filter((work) => {
            return work.minionId === req.params.minionId
        }) 
        res.send(minionWork);
    } else {
        res.status(404).send()
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

// Update work
workRouter.put('/:minionId/work/:workId', (req, res, next) => {
    let instance = getFromDatabaseById('minions', req.params.minionId);
    if (Number(req.params.minionId) && Number(req.params.workId) && Number(req.params.workId) > 0 && instance) {
        if (req.body.id === req.params.workId) {
            // console.log(req.body);
            let instance = updateInstanceInDatabase('work', req.body);
            if (instance) {
                // console.log(instance)
                res.send(instance);
            } else {
                res.status(404).send();
            }
        } else {
            res.status(400).send()
        }
    } else {
        res.status(404).send(); 
    }
})

// Delete a minion
minionsRouter.delete('/:minionId/work/:workId', (req, res, next) => {
    // console.log(req.params)
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