const db = require("../models");
const Barrow = db.barrows;

exports.create = async (req, res) => {
    

    try {
        const barrows = await Barrow.findAll({
            where: {
                is_returned: false
            },
        });
        res.send(barrows);
    } catch (err) {
        res.status(500).send({
            message: "Some error occurred while retrieving barrows."
        });
    }
}