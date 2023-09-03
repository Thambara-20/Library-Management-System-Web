module.exports = (app) => {
    const users = require('../controllers/userController.js');
  
    var router = require('express').Router();
  
    // Create a new user (signup)
    // router.post('/signup', users.signup);
  
    // User login
    router.post('/', users.create);
    
    router.post('/login', users.login);
  
    // Retrieve all users (example)
    router.get('/find', users.findAll);
  
    // Other routes can be added here
  
    app.use('/api/users', router);
  };
  