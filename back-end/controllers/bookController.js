const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;
const storeImage = require("./firebaseImageController");

exports.create = async (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  const downloadUrl = await storeImage(req.body.url, req.body.title);

  const book = {
    bookid: req.body.id,
    ISBN: req.body.ISBN,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    publisher: req.body.publisher,
    abstract: req.body.abstract,
    status: true,
    url: downloadUrl,
  };

  Book.create(book)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Book.",
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Book.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving books.",
      });
    });
};

exports.findOne = (req, res) => {
  try {
    const id = req.params.id;
    Book.findByPk(id).then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Not found book with id " + id,
        });
      } else {
        res.send(data);
      }
    });
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving book with id=" + id,
    });
  }
};

exports.deleteBook = async (req, res) => {
  const bookid = req.params.id;
  console.log(req.params);

  try {
    // Find the user by id
    const book = await Book.findOne({ where: { bookid } });

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    await book.destroy();

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  console.log(req.body);
  try {
    const [num, updatedBook] = await Book.update(req.body, {
      where: { bookid: id },
      returning: true, // This returns the updated record
    });

    if (num === 1) {
      res.send({
        message: "Book was updated successfully.",
        updatedBook: updatedBook[0], // Send the updated book data
      });
    } else {
      res.status(404).send({
        message: `Cannot update Book with id=${id}. Maybe Book was not found or req.body is empty!`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }

};

exports.getNewArrival = async (req, res) => {
  // console.log(req.body);
  // res.send(req.body);
  try {
    const recentBooks = await Book.findAll({
      order: [["createdAt", "DESC"]],
      limit: 10,
    });
    const newList = recentBooks.map((item) => {
      return {
        name: item.title,
        price: 1,
        detail: item.author + " "+ item.category,
        image :item.url
      };
    });
    res.send(newList);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Can't fetch new arriaval books");
  }
};

exports.getPopular = async (req, res) => {
  // console.log(req.body);
  // res.send(req.body);
  try {
    const recentBooks = await Book.findAll({
      order: [["createdAt", "DESC"]],
      limit: 10,
    });

    res.json(recentBooks);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Can't fetch new arriaval books");
  }
};



exports.booksCount = async (req, res) => {
  try {
    const count = await Book.count();
    res.status(200).json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

