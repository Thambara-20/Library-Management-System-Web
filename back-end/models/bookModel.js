module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
      bookid:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
        ISBN: {
        type: Sequelize.STRING
      },
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
      },
      abstract:{
        type: Sequelize.STRING
      },
      status:{
        type: Sequelize.BOOLEAN
      },
      url:{
        type: Sequelize.STRING
      }
      
      
    });
 
  

    return Book;

  };
  