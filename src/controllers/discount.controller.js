
const discountController = (Discount) => {
    // user passed in here would be our user model used to access our database

    const discount = (req, res) => {
        const { couponName, couponAmount, active } = req.body;
        Discount.create({
            couponName, couponAmount, active
        }).then((discount) => {
            res.status(200).json({ message: "discount coupon added .. ", discount });
        }).catch((err) => {
            res.status(400).json({
                error: err,
            });
        });
        console.log(req.body);
    }

    const retrieveDiscount = (req, res) => {
        const {couponName } = req.body;
        Discount.findOne({
            where: { couponName }
        }).then((coupon) => {
            if (!coupon) {
                return res.status(400).json({
                    error: "no discount coupon found"
                })
            }
            return res.status(200).json({
                message: "Discount coupon found"
            });
        }).catch((err) => res.status(400).json({
            error: err,
        }));

    }

    const deleteCoupon = (req, res) => {
        const { id } = req.params;
        
            Discount.destroy({where:{id}}).then(coupon => {
                if(coupon ===1){
                    res.status(200).json({ message: 'Discount coupon deleted ', coupon })
                }
                else{
                    res.status(200).json({ message: 'Discount coupon not deleted ', coupon })
                }
               
            }).catch(err => {
                console.log(err)
                res.status(400).json({ error: err })
            })
    

    }

    return {
        discount,
        retrieveDiscount,
        deleteCoupon
    };
};

module.exports = discountController;
