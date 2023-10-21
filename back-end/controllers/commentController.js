const db = require("../models");
const Comments = db.comments;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.text) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }   

    const comment = {
        name: req.user.name,
        ISBN: req.body.ISBN,
        text: req.body.text,
    };

    Comments.create(comment)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Comment.",
            });
        });
}

exports.findBookComment = (req, res) => {
    const ISBN = req.query.ISBN;

    Comments.findAll({ where: { ISBN: ISBN } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
            message: err.message || "Some error occurred while retrieving comments.",
            });
        });
};