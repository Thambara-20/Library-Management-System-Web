const { where } = require("sequelize");
const db = require("../models");
const Barrow = db.barrows;
const { User } = db.users
const Op = db.Sequelize.Op;
const Book = db.books;
const Notification = db.notifications;

async function notifications(req, res) {
    try {
        const name = req.user.name;
        console.log(name);
        const data = await Notification.findAll({where :{name,is_read:false}});
        res.json(data); // Send the retrieved data as a JSON response
    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function markAsRead(req, res) {
    try {
        const notification_id = req.body.id;
        const data = await Notification.update({ is_read: true }, { where: { notification_id } });
        res.json(data);
    } catch (error) {
        console.error('Error updating notification:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function countunRead(req,res){
    try{
        const name = req.user.name;
        const data = await Notification.count({where :{name,is_read:false}});
        res.json(data);
    }catch(error){
        console.error('Error counting unread notifications:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function checkOverdueItems() {
    const currentDate = new Date();
    const overdueDate = new Date(currentDate);
    overdueDate.setDate(currentDate.getDate() - 4); // Calculate the date 4 days ago (the due date)

    console.log("Checking for overdue items.");
    await Notification.sync({ force: true });

    const overdueBarrows = await Barrow.findAll({
        where: {
            return_date: {
                [Op.lt]: overdueDate, 
            },
            is_returned: false,
        },
        include: [{
            model: User,
            attributes: ['email']
        }, {
            model: Book,
            attributes: ['title']
        }]

    });

    if (overdueBarrows.length > 0) {

        for (i = 0; i < overdueBarrows.length; i++) {
            try {
                Notification.create({
                    name: overdueBarrows[i].name,
                    bookid: overdueBarrows[i].bookid,
                    book: overdueBarrows[i].book.title,
                    return_date: overdueBarrows[i].return_date,
                    is_returned: overdueBarrows[i].is_returned,
                    email: overdueBarrows[i].user.email,
                    is_read: false
                     })
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}

module.exports = { checkOverdueItems, notifications, markAsRead, countunRead };






