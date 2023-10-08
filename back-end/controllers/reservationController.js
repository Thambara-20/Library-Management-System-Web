const db = require("../models");
const Reservation = db.reservations;
const { User } = db.users;
const Book = db.books;
const Op = db.Sequelize.Op;
const storeImage = require("./Firebase");

exports.create = async (req, res) => {
    // Validate request
   
    if (!req.user.name || !req.body.bookid) {
        res.status(400).send({
            message: "Name and bookid are required fields."
        });
        return;
    }

    // Check if the book with the specified bookid exists
    Book.findOne({ where: { bookid: req.body.bookid } })
        .then(book => {
            if (!book) {
                res.status(404).send({ message: "Book not found" });
            } else if (book.status === true) {
                const reservation = {
                    name: req.user.name,
                    bookid: req.body.bookid
                };

                book.update({ status: false })
                    .then(() => {
                        Reservation.create(reservation)
                            .then(data => {
                                res.send(data);
                            })
                            .catch(err => {
                                res.status(500).send({
                                    message: "Some error occurred while creating reservation."
                                });
                            });
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: "Some error occurred while updating book status."
                        });
                    });
            } else {
                res.status(400).send({ message: "Book is not available for reservation" });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error occurred while checking book availability."
            });
        });
};


exports.findAll = (req, res) => {
    const name = req.body.name;

    Reservation.findAll({
        where: { name: name },
        include: [{
            model: Book,
            attributes: ['ISBN', 'title']
        },
        {
            model: User,
            attributes: ['email']
        },
        ]
    })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({ message: "Reservation not found" });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving reservation."
            });
        });
};

exports.findOne = (req, res) => {

    try {
        const id = req.params.id;
        Reservation.findByPk(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({
                        message: "Not found reservation with id " + id
                    });
                } else {
                    res.send(data);
                }

            })
    } catch (err) {
        res.status(500).send({
            message: "Error retrieving reservation with id=" + id
        });
    }
}

