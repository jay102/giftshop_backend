
const productController = (Product) => {
    // user passed in here would be our user model used to access our database

    const product = (req, res) => {
        var pdt = new Product();
        pdt.set("productName", req.body);
        pdt.set("productPrice", req.body);
        pdt.set("roductDesc", req.body);
        pdt.set("productImage", req.body);
        pdt.set("productCoupon", req.body);
        pdt.set("productPromo", req.body);

        pdt.save().then((pdt) => {
            res.status(200).json({ message: "Sucessfully added product : " + pdt });
        }).catch((err) => {
            res.status(400).json({
                error: err,
            });
        });
    }

    const productDetail = (req, res) => {
        const { productName } = req.body;
        const { productPrice } = req.body;
        const { productDesc } = req.body;
        Product.findAll({
            where: { productName, productPrice, productDesc }
        }).then((pdt) => {
            if (!pdt) {
                return res.status(400).json({
                    error: 'Product not available'
                });
            }
            return res.status(200).json({
                message: 'success',
                pdt,
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
