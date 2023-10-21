const admin = require("../middleware/admin.js");
const auth = require("../middleware/auth.js");

module.exports = app => {
    const barrows = require("../controllers/barrowingController.js");
  
    var router = require("express").Router();
  
    router.post("/",[auth,admin],barrows.create);
    
    router.put("/return",[auth,admin], barrows.returnBook);
  
    router.get("/find",[auth,admin], barrows.find);

    router.get("/findone",[auth], barrows.findOne);

    router.get("/count",barrows.borrowedCount)
    
    app.use('/api/barrows', router);

   

  };
  