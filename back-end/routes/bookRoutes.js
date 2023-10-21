const admin = require("../middleware/admin.js");
const auth = require("../middleware/auth.js");


module.exports = app => {
    const books = require("../controllers/bookController.js");
  
    var router = require("express").Router();
  
    router.post("/", [auth,admin],books.create);
  
    router.get("/find", books.findAll);
 
    router.get("/findone/:id", books.findOne);
  
    router.put("/update/:id",[auth,admin], books.update);

    router.delete("/delete/:id", [auth,admin],books.deleteBook);

    router.get("/count",books.booksCount)

    app.use('/api/books', router);
  };
  
