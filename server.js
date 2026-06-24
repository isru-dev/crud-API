const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/product.model");

const app = express();

app.use(express.json());
mongoose
  .connect(
   process.env.MONGO_URI
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("server running on port 3000 ");
    });
    console.log("Connected");
  })
  .catch((err) => {
    console.error(err);
  });
app.get("/", (req, res) => {
  res.send("hell yeah hhhh");
});
//insert a value
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//read all values
app.get('/api/products',async (req,res) =>{
     try {
      const product=await Product.find({});
      res.status(200).json(product);
     }catch(err) {
      res.status(500).json({message:message.err});
     }
});
//read one value
app.get('/api/product/:id',async (req,res)=>{
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
});
//update
app.put('/api/product/:id',async (req,res)=>{
  try {
    const {id}=req.params;
  const product= await Product.findByIdAndUpdate(id,req.body);
  if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
    const updatedProduct=await Product.find({});
    res.status(200).json(updatedProduct);
  } catch (error) {
     res.status(500).json({message:message.err});

  }
});
//delete
app.delete('/api/product/:id',async (req,res)=>{
  try {
    const {id}=req.params;
    const product=await Product.findByIdAndDelete(id);
     if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
    res.status(200).json({message: "product deleted successfully"});

  } catch (error) {
     res.status(500).json({message:message.err});
  }
});