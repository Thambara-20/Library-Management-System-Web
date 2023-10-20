const admin = require("../middleware/admin.js");
const auth = require("../middleware/auth.js");

module.exports = app => {
    const notification = require("../controllers/notificationController.js");
  
    var router = require("express").Router();
  
    router.get("/notifications",[auth], notification.notifications);

    router.put("/markasread",[auth], notification.markAsRead);

    router.get("/count",[auth], notification.countunRead);

    app.use('/api/notification', router);
   

  };
  