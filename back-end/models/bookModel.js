module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
      title: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      publisher:{
        type: Sequelize.STRING
      }
    });
  
    return Book;
  };
  