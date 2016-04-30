// Dependencies
var express = require('express');
var router = express.Router();
var app = express();
var personaController = require(__dirname+'/controllers/personaController');
var loginController = require(__dirname+'/controllers/loginController');

// Models
/*var Task = require('./models/task');

Task.methods(['get','put','post','delete']);

Task.register(router, '/task');
*/
router.use('/personas',personaController);
router.use('/login',loginController);



module.exports = router;