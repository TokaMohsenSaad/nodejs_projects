const productsModule = require("../models/products.js");

const indexController = (req, res) => {
  const searchQuery = req.query.search ? req.query.search.toLowerCase() : "";
  const filteredProducts = productsModule.filter((product) =>
    product.title.toLowerCase().includes(searchQuery)
  );

  res.status(200).render("products", { products: filteredProducts });
};

const createProductController = (req, res) => {
  res.status(200).render("createProduct");
};

const addProductController = (req, res) => {
  const { title, description, stock, expired } = req.body;

  // Create a new product object
  const newProduct = {
    id: productsModule.length + 1,
    title: title,
    description: description,
    stock: stock,
    expired: expired,
    cat: "New Category", // Add default category or modify as needed
  };

  // Add the new product to the products list
  productsModule.push(newProduct);

  // Redirect back to the products page
  res.redirect("/products");
};

const editProductController = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = productsModule.find((p) => p.id === productId);
  res.status(200).render("editProduct", { product });
};

const updateProductController = (req, res) => {
  const productId = parseInt(req.params.id);
  const { title, description, stock, expired } = req.body;

  const productIndex = productsModule.findIndex((p) => p.id === productId);
  if (productIndex > -1) {
    productsModule[productIndex] = {
      ...productsModule[productIndex],
      title: title,
      description: description,
      stock: stock,
      expired: expired,
    };
  }

  res.redirect("/products");
};

const deleteProductController = (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = productsModule.findIndex((p) => p.id === productId);

  if (productIndex > -1) {
    productsModule.splice(productIndex, 1);
  }

  res.status(200).send();
};

module.exports = {
  indexController,
  createProductController,
  addProductController,
  editProductController,
  updateProductController,
  deleteProductController,
};
