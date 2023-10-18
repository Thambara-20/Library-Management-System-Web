const db = require("../models");
const Barrow = db.barrows; 
const {User} = db.users
const Op = db.Sequelize.Op;
const Notification = db.notifications;

async function notifications (req, res)  {
    try {
        const data = await Notification.findAll();

        res.json(data); // Send the retrieved data as a JSON response
    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function checkOverdueItems() {
    const currentDate = new Date();
    console.log("Checking for overdue items.");
    await Notification.sync({ force: true }); 
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
        try{ 
           
            Notification.create({
        name:overdueBarrows[i].name,
        bookid:overdueBarrows[i].barrow_id,
        book:overdueBarrows[i].bookid,
        return_date:overdueBarrows[i].return_date,
        is_returned:overdueBarrows[i].is_returned,
        email:overdueBarrows[i].user.email

         })
        }
        catch(error){
            console.log(error);
} 
}
}
}

module.exports = { checkOverdueItems,notifications };






