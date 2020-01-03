
const productController = (Product) => {
    // user passed in here would be our user model used to access our database

    const product = (req, res) => {
       const { productName, productPrice, productDesc, productImage, productCoupon, productPromo}= req.body;
        Product.create({
            productName, productPrice, productDesc,productImage,productCoupon,productPromo
        }).then((pdt) => {
            res.status(201).json({ message: "Sucessfully created product.. " });
        }).catch((err) => {
            res.status(400).json({
                error: err,
            });
        });
        console.log(req.body);
    }

    const productDetail = (req, res) => {
        const { productName } = req.body;
        Product.findAll({
            where: { productName }
        }).then((pdt) => {
            if (!pdt) {
                return res.status(400).json({
                    error: 'Product not available'
                });
            }
            return res.status(200).json({
                message: 'success',
                productName,
            });
        }).catch((err) => res.status(400).json({
            error: err,
        }));
    };
    return {
        product, productDetail
    };
};
module.exports = productController;
