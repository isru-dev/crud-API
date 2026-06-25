const express = require("express");
const {getProducts,postProducts,getProduct,putProduct,deleteProduct}=require('../controllers/product.controller')
const router = express.Router();
router.get("/",getProducts);
router.post("/",postProducts);
router.get('/:id',getProduct);
router.put('/:id',putProduct);
router.delete('/:id',deleteProduct);



module.exports=router;

