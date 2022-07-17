const express = require('express');
const app = require('../server');
const apiRouter = express.Router();


// Import and mount the minions router
const minionsRouter = require('../server/routes/minions');
app.use('/api/minions', minionsRouter);

// Import and mount the ideas router
const ideasRouter = require('../server/routes/ideas');
app.use('/api/ideas', ideasRouter);

// Import and mount the meetings router
const meetingsRouter = require('../server/routes/meetings');
app.use('/api/meetings', meetingsRouter)

// Import and mount work router
const workRouter = require('../server/routes/work');
app.use('/api/minions', workRouter)


module.exports = apiRouter;
