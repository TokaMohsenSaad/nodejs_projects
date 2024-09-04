const productsModeule = require("../models/products.js");

const controller = (req, res) => {
  res.status(200).render("index", { products: productsModeule });
};
module.exports = controller;
