

const categoryController = (Category,Product) => {

    const addCategory = (req, res) => {
        const { categoryName } = req.body;
        let categoryImage;
        const { file } = req;
        if (file) {
            categoryImage = file.url
            console.log(file);
        }
        console.log(req.body);
        Category.create({
            categoryName, categoryImage
        }).then((cat) => {
            res.status(201).json({ message: "Sucessfully added category.. ", cat });
        }).catch((err) => {
            res.status(400).json({
                error: err,
            });
        });
        console.log(req.body);
    }

    const findCategory=(req,res)=>{
       Category.findAll({where:{categoryName:req.params.categoryName},
    include: [Product]}).
       then(category=>{
           if(!category){
               return res.status(400).json({error:"this category doesn't exist"})
           }
           return res.status(200).json({message:"cateogory found",category})
       }).catch(err=>{
           res.status(400).json({error:err})
       })

       
    }

    const updateCategory = (req, res) => {
        let categoryImage;
        const { file } = req;
        if (file) {
            categoryImage = file.url
        }
        const values = {
            productCategoryName: req.body.productCategoryName,
            categoryImage: req.file.categoryImage
        }
        const selector = { where: { id: req.params.id } }
        Category.update(values, selector).then((cat) => {
            console.log(cat);
            if (cat[0] === 1) {
                res.status(200).json({ message: 'category updated successfully', cat })

            }
            else {
                res.status(200).json({ message: 'category not updated ', cat })
            }

        }).catch((err) => {
            console.log(err)
            res.status(400).json({ error: err })
        });
    }


    const deleteCategory = (req, res) => {
        const { id } = req.params;

        Category.destroy({ where: { id } }).then(cat => {
            console.log(cat)
            if (pdt === 1) {
                res.status(200).json({ message: 'Category deleted successfully', cat })
            }
            else {
                res.status(200).json({ message: 'Category is not deleted', cat })
            }

        }).catch(err => {
            console.log(err)
            res.status(400).json({ error: err })
        })

    }

    return {
        addCategory,
        updateCategory,
        deleteCategory,
        findCategory
    }
}
module.exports = categoryController;