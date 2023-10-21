module.exports = (app) => {
    const books = require("../controllers/bookController.js");
    var router = require("express").Router();
    router.get("/", books.getNewArrival);
    app.use("/", router);
}