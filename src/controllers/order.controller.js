const uuid = require('uuid/V4')
const orderController = (Order) => {
    // user passed in here would be our user model used to access our database

    const order = (req, res) => {
       const {price,buyer}= req.body;
       const orderId = uuid()+ price + buyer
        Order.create({
            orderId,price,buyer
        }).then((order) => {
            res.status(200).json({ message: "Sucessfully placed order.. " });
        }).catch((err) => {
            res.status(400).json({
                error: err,
            });
        });
        console.log(req.body);
    }

    return {
        order
    };
};

module.exports = orderController;
