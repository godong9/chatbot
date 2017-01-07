'use strict';

const logger = require('log4js').getLogger('controllers/users');

let ChatController = {
  chat: function getUser(req, res) {
    res.json({id: 'test'});
  }
};

module.exports = ChatController;
