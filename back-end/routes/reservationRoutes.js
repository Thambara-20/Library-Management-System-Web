const auth = require("../middleware/auth")
const admin = require("../middleware/admin")

module.exports = app => {
    const reservations = require("../controllers/reservationController.js");
  
    var router = require("express").Router();
  
    router.post("/",[auth], reservations.create);

    router.get("/find",[auth],reservations.find);
    
    router.get("/findall",[auth,admin],reservations.findAll);
    
    router.delete("/delete/:id", [auth],reservations.deleteOne);
  
    app.use('/api/reservations', router);
  };
  