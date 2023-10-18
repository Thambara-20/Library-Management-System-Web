const db = require("../models");
const Barrow = db.barrows; 
const {User} = db.users
const Op = db.Sequelize.Op;

async function checkOverdueItems() {
    const currentDate = new Date();
    console.log("Checking for overdue items.");

    const overdueBarrows = await Barrow.findAll({
        where: {
            return_date: {
                [Op.gt]: currentDate, // Find items with return_date less than the current date
            },
            is_returned: false, // Item has not been returned
        },
        attributes:['barrow_id','name'],
        include: [{
            model: User,
            attributes:['email']
        }] 
     
    });

  if (overdueBarrows.length > 0) {
    for ( i=0;i<overdueBarrows.length;i++){
    console.log(overdueBarrows[i].user.email);} // Print a message if there are overdue items
  }
}


module.exports = { checkOverdueItems };
