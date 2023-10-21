const admin = require("../middleware/admin.js");
const auth = require("../middleware/auth.js");


module.exports = app => {
    const comments = require("../controllers/commentController.js");

    var router = require("express").Router();

    router.post("/", auth,comments.create);

    router.get("/find", comments.findBookComment);

    app.use('/api/comments', router);
}