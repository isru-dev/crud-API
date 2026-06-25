const Product = require("./models/product.model");

const postProducts= async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProducts= async (req, res) => {
     try {
      const product=await Product.find({});
      res.status(200).json(product);
     }catch(err) {
      res.status(500).json({message:message.err});
     }
};
const getProduct= async (req, res) => {
    try {  
        const {id}=req.params;
        const product=await Product.findById(id);
         if (!product) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }
    
         res.status(200).json(product);
         console.log(req.params);
      } catch (error) {
          res.status(500).json({message:message.err});
      }
};
const putProduct= async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    const updatedProduct = await Product.find({});
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: message.err });
  }
};
const deleteProduct= async (req, res) => {
   try {
       const { id } = req.params;
       const product = await Product.findByIdAndDelete(id);
       if (!product) {
         return res.status(404).json({
           message: "Product not found",
         });
       }
       res.status(200).json({ message: "product deleted successfully" });
     } catch (error) {
       res.status(500).json({ message: message.err });
     }
};

module.exports={
  getProducts,
  postProducts,
  getProduct,
  putProduct,
  deleteProduct
};