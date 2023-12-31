
const auth = require("../middleware/auth")
const admin = require("../middleware/admin")


module.exports = (app) => {
    const users = require('../controllers/userController.js');
  
    var router = require('express').Router();

    router.get('/me',auth,users.get)

    router.post('/signup' ,users.signup);
    
    router.post('/login', users.login);

    router.get('/find', [auth,admin],users.findAll);

    router.delete('/delete',[auth,admin],users.deleteUser);

    router.put('/update',auth,users.updateUser);

    router.get('/count',users.usersCount)

    app.use('/api/users', router);
  };
  