module.exports = (app) => {
    const books = require("../controllers/bookController.js");
    var router = require("express").Router();
    router.get("/", books.getNewArrival);
    router.get("/popular", books.getPopular);
    app.use("/", router);
}