const express = require('express')

meetingsRouter = express.Router();

const {
  createMeeting,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
} = require('../db')

meetingsRouter.get('/', (req, res, next) => {
    let arr = getAllFromDatabase('meetings');
    // console.log(arr)

    res.json(arr);
})

// Create a meeting
meetingsRouter.post('/', (req, res, next) => {
  let meeting = createMeeting();
  let instance = addToDatabase('meetings', meeting)
  if (instance) {
    res.status(201).send(instance);
  } else {
    res.status(404).send()
  }
  
})

// Delete meetings
meetingsRouter.delete('/', (req, res, next) => {
  let arr = deleteAllFromDatabase('meetings');
  if(arr) {  
    res.status(204).send(arr);
  } else {
    res.status(404).send()
  }
})



module.exports = meetingsRouter;