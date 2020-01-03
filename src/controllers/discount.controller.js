
const discountController = (Discount) => {
    // user passed in here would be our user model used to access our database

    const discount = (req, res) => {
       const {couponName, couponAmount, active}= req.body;
       Discount.create({
        couponName, couponAmount, active
        }).then((discount) => {
            res.status(302).json({ message: "discount coupon found .. ",discount });
        }).catch((err) => {
            res.status(400).json({
                error: err,
            });
        });
        console.log(req.body);
    }

    return {
        discount
    };
};

module.exports = discountController;
