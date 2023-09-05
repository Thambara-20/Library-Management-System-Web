
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")


module.exports = (app) => {
    const users = require('../controllers/userController.js');
  
    var router = require('express').Router();

    router.get('/me',auth,users.get)

    router.post('/signup' ,users.signup);
    
    router.post('/login', users.login);

    router.get('/find', users.findAll);

    router.delete('/delete',[auth,admin],users.deleteUser);

  
    app.use('/api/users', router);
  };
  