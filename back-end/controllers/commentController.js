const db = require("../models");
const Comments = db.comments;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.comment) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }   

    const comment = {
        name: req.user.name,
        title: req.body.title,
        text: req.body.comment,
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
    const title = req.query.title;

    Comments.findAll({ where: { title: title } })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
            message: err.message || "Some error occurred while retrieving comments.",
            });
        });
};

exports.deleteComment = (req, res) => {
    const id = req.params.id;
    Comments.destroy({ where: { id: id } })
        .then((num) => {
            if (num == 1) {
                res.send({
                message: "Comment was deleted successfully!",
                });
            } else {
                res.send({
                message: `Cannot delete Comment with id=${id}. Maybe Comment was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
            message: "Could not delete Comment with id=" + id,
            });
        });
}