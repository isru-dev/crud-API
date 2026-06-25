const express = require("express");

require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoutes=require('./routes/product.routes.js');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/products", productRoutes);
mongoose
  .connect(process.env.MONGO_URI)
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
