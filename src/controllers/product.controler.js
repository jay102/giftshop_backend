
const productController = (Product) => {

    const addProduct = (req, res) => {
        const { productName, productPrice, productDesc, productCoupon, productPromo, categoryId } = req.body;
        let productImage;
        const { file } = req;
        if (file) {
            productImage = file.url
            console.log(file);
        }
        console.log(req.body);
        Product.create({
            productName, productPrice, productDesc, productImage, productCoupon, productPromo, categoryId
        }

        ).then((pdt) => {
            res.status(201).json({ message: "success", pdt });
        }).catch((err) => {
            console.log(err)
            res.status(400).json({
                error: err,
            });
        });
        console.log(req.body);
    }
    const fetchAllProduct= (req, res) => {
        Product.findAll({
            attributes: ['productName','productPrice', 'productDesc', 'productImage', 'productCoupon', 'productPromo', 'categoryId']
        }).
            then(product => {
                return res.status(200).json({ message: "fetched successfully", product })
            }).catch(err => {
                console.log(err)
                res.status(400).json({ error: err })
            })
    }

    const productDetail = (req, res) => {
        const { id } = req.params;
        Product.findAll({
            where: { id }
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

    const updateProduct = (req, res) => {
        let productImage;
        const { file } = req;
        if (file) {
            productImage = file.url
        }

        const values = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productDesc: req.body.productDesc,
            productImage: req.file.productImage,
            productCoupon: req.body.productCoupon,
            productPromo: req.body.productPromo,
            categoryId: req.body.categoryId,
        }
        const selector = { where: { id: req.params.id } }
        Product.update(values, selector).then((pdt) => {
            console.log(pdt);
            if (pdt[0] === 1) {
                res.status(200).json({ message: 'Products detail updated successfully', pdt })

            }
            else {
                res.status(200).json({ message: 'Products detail not updated ', pdt })
            }

        }).catch((err) => {
            console.log(err)
            res.status(400).json({ error: err })
        });
    }


    const deleteProduct = (req, res) => {
        const { id } = req.params;

        Product.destroy({ where: { id } }).then(pdt => {
            console.log(pdt)
            if (pdt === 1) {
                res.status(200).json({ message: 'Product deleted successfully', pdt })
            }
            else {
                res.status(200).json({ message: 'Product is not deleted', pdt })
            }

        }).catch(err => {
            console.log(err)
            res.status(400).json({ error: err })
        })

    }
    return {
        addProduct,
        productDetail,
        updateProduct,
        deleteProduct,
        fetchAllProduct
    };
};
module.exports = productController;
