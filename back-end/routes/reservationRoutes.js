const auth = require("../middleware/auth")
const admin = require("../middleware/admin")

module.exports = app => {
    const reservations = require("../controllers/reservationController.js");
  
    var router = require("express").Router();
  
    router.post("/",[auth], reservations.create);
  
    // Retrieve all books
    router.get("/find", reservations.findAll);
    
    // Retrieve all published books
    // router.get("/published", books.findAllPublished);
  
     router.get("/findone/:id", reservations.findOne);
  

  
    // // Delete all books
    // router.delete("/", books.deleteAll);
  
    app.use('/api/reservations', router);
  };
  