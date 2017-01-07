// Database Setup
const mongoose = require('mongoose');
const config = require('../config/index');
const logger = require('log4js').getLogger('db');

let dbUri = config.mongo.uri + config.mongo.db;
let dbOptions = { username: config.mongo.username, password: config.mongo.password };
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  logger.info('Mongoose connection open!');
});

mongoose.connect(dbUri, dbOptions);