const admin = require("../middleware/admin.js");
const auth = require("../middleware/auth.js");

module.exports = app => {
    const books = require("../controllers/bookController.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", [auth,admin],books.create);
  
    // Retrieve all books
    router.get("/find", books.findAll);
    
    // Retrieve all published books
    // router.get("/published", books.findAllPublished);
  
    // // Retrieve a single Tutorial with id
     router.get("/findone/:id", books.findOne);
  
    // // Update a Tutorial with id
     router.put("/update/:id",[auth,admin], books.update);

    // Delete a Tutorial with id
    router.delete("/delete/:id", [auth,admin],books.deleteBook);

  
    // // Delete all books
    // router.delete("/", books.deleteAll);
  
    app.use('/api/books', router);
  };
  