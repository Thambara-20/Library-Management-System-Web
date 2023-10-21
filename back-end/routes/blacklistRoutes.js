const admin = require("../middleware/admin.js");
const auth = require("../middleware/auth.js");

module.exports = app => {
    const blacklist = require("../controllers/blacklistController.js");
  
    var router = require("express").Router();
  
    router.post("/create", blacklist.create);
  
    router.get("/find", blacklist.findAll);
    
    router.get("/isBlacklisted/:name", blacklist.isBlacklisted);

    router.delete("/delete/:name", blacklist.delete);

    app.use('/api/blacklist', router);
  };
  