const auth = require("../middleware/auth")
const admin = require("../middleware/admin")

module.exports = app => {
    const reservations = require("../controllers/reservationController.js");
  
    var router = require("express").Router();
  
    router.post("/",[auth], reservations.create);
  
    // Retrieve all books
    router.get("/find",[auth],reservations.find);
    
    router.get("/findall",[auth,admin],reservations.findAll);
    
    // Retrieve all published books
    // router.get("/published", books.findAllPublished);

    router.delete("/delete/:id", [auth],reservations.deleteOne);
  
    app.use('/api/reservations', router);
  };
  