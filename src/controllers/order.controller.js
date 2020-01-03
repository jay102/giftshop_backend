
const orderController = (Order) => {
    // user passed in here would be our user model used to access our database

    const order = (req, res) => {
       const {orderId,price,buyer,createdAt, updatedAt}= req.body;
        Order.create({
            orderId,price,buyer,createdAt, updatedAt 
        }).then((order) => {
            res.status(201).json({ message: "Sucessfully placed order.. " });
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
