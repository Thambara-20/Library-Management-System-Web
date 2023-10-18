const admin = require("../middleware/admin.js");
const auth = require("../middleware/auth.js");

module.exports = app => {
    const notification = require("../controllers/notificationController.js");
  
    var router = require("express").Router();
  
    router.get("/notifications", notification.notifications);


    app.use('/api/notification', router);

   

  };
  