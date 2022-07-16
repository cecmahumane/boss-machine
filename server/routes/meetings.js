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

// Create an idea
meetingsRouter.post('/', (req, res, next) => {
  // console.log(createMeeting())
  if (createMeeting()) {
    res.status(201).send(createMeeting());
  } else {
    res.status(404).send()
  }
  
})

// Delete an idea
meetingsRouter.delete('/', (req, res, next) => {
  let arr = deleteAllFromDatabase('meetings');
  if(arr) {  
    res.status(204).send(arr);
  } else {
    res.status(404).send()
  }
})



module.exports = meetingsRouter;