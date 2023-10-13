module.exports = (sequelize, Sequelize) => {
    const Barrow = sequelize.define("barrow", {
      barrow_id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      name: {
        type: Sequelize.STRING
      },
      bookid: {
        type: Sequelize.INTEGER
      },
      return_date: {
        type: Sequelize.DATE
      },
      is_returned: {
        type: Sequelize.BOOLEAN
      },
      
      }
      
      

    );
  
  
    return Barrow;
  };
  