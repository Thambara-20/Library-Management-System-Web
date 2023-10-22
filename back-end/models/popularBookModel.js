module.exports = (sequelize, Sequelize) => {
    const popularBook = sequelize.define("popularBook", {
      pid:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
        ISBN: {
            type: Sequelize.STRING,
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
      url:{
        type: Sequelize.STRING
        },
        count: {
          type:Sequelize.INTEGER
      }
      
    });
 

    return popularBook;

  };
  