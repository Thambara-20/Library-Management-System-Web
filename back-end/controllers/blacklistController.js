const db = require("../models");
const Blacklist = db.blacklists;
const Op = db.Sequelize.Op;


// Create and Save a new Blacklist
exports.create = (req, res) => {
    console.log(req.body)
    // Validate request
    if (!req.body.message || req.body.user.isAdmin) {
        res.status(400).send({
            message: "Error"
        });
        return;
    }

    const blacklist = {
        name: req.body.user.name,
        token: req.body.message
    };

    Blacklist.create(blacklist)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });

};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? {
        name: {
            [Op.like]: `%${name}%`
        }
    } : null;

    Blacklist.findAll({
        where: condition
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });

};

exports.delete = (req, res) => {
    const name = req.params.name;

    Blacklist.destroy({
        where: {
            name: name
        }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Blacklist was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Blacklist with name=" + name
            });
        });
}

exports.isBlacklisted = async(req, res) => {
    try {
        const name = req.params.name;
        const finded = await Blacklist.findByPk(name)
        if (finded) {
            res.send(true);
        } else {
            res.send(false);
        }
    }
    catch (e) {

        res.send(e);
    }
}