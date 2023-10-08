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


exports.find = (req, res) => {
    const name = req.user.name;
    console.log(name)
    

    Reservation.findAll({
        where: { name: name },
        include: [{
            model: Book,
            
        },
        // {
        //     model: User,
        //     attributes: ['email']
        // },
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

exports.findAll = (req, res) => {
    Reservation.findAll({
        include: [{
            model: Book,
        }
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
}

exports.deleteOne = (req, res) => {
    const id = req.params.id;
     console.log(id);
    Reservation.findOne({ where: { reservation_id: id } })
    .then(async (reservation) => {
      if (reservation) {
        const bookId = reservation.bookid; // Replace with the actual field name that stores the bookId in the Reservation model
        await reservation.destroy();

        const book = await Book.findOne({ where: { bookid: bookId } });
          if (book) {
          // Update the book status to true
          await book.update({ status: true });
          res.send({
            message: "Reservation was deleted successfully, and book status updated"
          });
        } else {
          res.send({
            message: "Book status cannot be updated"
          });
        }
      } else {
        res.send({
          message: "Reservation was not found"
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Reservation"
      });
    });

}
  