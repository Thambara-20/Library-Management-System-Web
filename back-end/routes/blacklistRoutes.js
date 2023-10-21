const admin = require("../middleware/admin.js");
const auth = require("../middleware/auth.js");

module.exports = app => {
    const blacklist = require("../controllers/blacklistController.js");
  
    var router = require("express").Router();
  
    router.post("/", auth,blacklist.create);
  
    router.get("/find", blacklist.findAll);

    app.use('/api/blacklist', router);
  };
  