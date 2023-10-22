const db = require("../models");
const Barrow = db.barrows;
const Reservation = db.reservations;
const User = db.users; // Remove unnecessary curly braces
const Book = db.books;
const Op = db.Sequelize.Op;


exports.create = async (req, res) => {
    if (!req.body.bookid ) { // Check for both name and bookid
        res.status(400).send({
            message: "Name and bookid are required fields."
        });
        return;
    }

    const currentDate = new Date(); // Define currentDate

    Reservation.findOne({ where: { bookid: req.body.bookid } })
        .then(async reservation => {
            if (!reservation) {
                res.status(404).send({ message: "Reservation not found" });
            } 
            else {
                const barrow = {
                    name: reservation.name,
                    bookid: req.body.bookid,
                    return_date: new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000), // Add 7 days to currentDate
                    is_returned: false,
                };

                Reservation.destroy({ where: { reservation_id: reservation.reservation_id } }) // Use where clause
                try{
                    const barrowData = await Barrow.create(barrow);
                    res.send(barrowData);
                }
                catch(err){
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Barrow."
                    });
                }
                   
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error occurred while checking book reservation."
            });
        });
};


exports.returnBook = async (req, res) => {
    const id = req.body.barrow_id;
    console.log(id);

    try {
        const barrow = await Barrow.findByPk(id);
        if (!barrow) {
            res.status(404).send({
                message: "Borrow not found"
            });
            return;
        }

        barrow.is_returned = true;
        await barrow.save();

        const book = await Book.findByPk(barrow.bookid);
        if (book) {
            book.status = true;
            await book.save();
        }

        res.send({
            message: "Book returned successfully."
        });
    } catch (err) {
        res.status(500).send({
            message: "Some error occurred while returning book."
        });
    }
};

exports.find = async (req, res) => {    

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

exports.findOne = async (req, res) => {
    const name = req.user.name;
    console.log(name);

    try {
        const barrows = await Barrow.findAll({
            include: [{
                model: Book,
            }],
            where: {
                name: name,
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

exports.borrowedCount= async (req,res)=>{
    try {
        const count = await Barrow.count(
            {where : {
                is_returned:false
            }}
        );
        res.status(200).send({ count });
      } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while counting users");
      }
}

exports.borrowingHistoryByUser= async (req,res)=>{

    try {
        const { name } = req.query;
        const notReturned= await Barrow.count(
            {where : {
                name:name,
                is_returned:false
            }}
        );
        const returned= await Barrow.count(
            {where : {
                name:name,
                is_returned:true
            }}
        );
        res.send({notReturned,returned});
    } catch (err) {
        res.status(500).send({
            message: "Some error occurred while retrieving barrows."
        });
    }
}