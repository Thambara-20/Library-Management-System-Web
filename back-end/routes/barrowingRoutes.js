const admin = require("../middleware/admin.js");
const auth = require("../middleware/auth.js");

module.exports = app => {
    const barrows = require("../controllers/barrowingController.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/",[auth,admin],barrows.create);
    
    router.put("/return/:id", barrows.returnBook);
    // Retrieve all books
  
    router.get("/find", barrows.find);
  
    // // Delete all books
    // router.delete("/", books.deleteAll);
  
    app.use('/api/barrows', router);
  };
  