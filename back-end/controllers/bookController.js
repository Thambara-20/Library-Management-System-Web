const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const book = {
    title: req.body.title,
    author: req.body.author,
    category: req.body.category ,
    publisher: req.body.publisher
  };


  Book.create(book)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Book."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  

  Book.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving books."
      });
    });
};




exports.deleteBook = async (req, res) => {
  const id = req.body.id;
  console.log(id);

  try {
    // Find the user by id
    const book = await Book.findOne({ where: { id } });

    if (!book) {
      
      return res.status(404).json({ error: 'Book not found' });
    }

   
    await book.destroy();

    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

