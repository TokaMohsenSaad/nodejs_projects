// const express = require("express");
// const router = express.Router();
// const homeController = require("../controllers/index.js");
// const productsController = require("../controllers/products.js");
// router.get("/", homeController);
// router.get("/products", productsController);

// module.exports = router;

const express = require("express");
const router = express.Router();
const controller = require("../controllers/index.js");
const {
  indexController,
  createProductController,
  addProductController,
  editProductController,
  updateProductController,
  deleteProductController,
} = require("../controllers/products.js");

router.get("/", controller);
router.get("/products", indexController);
router.get("/products/new", createProductController);
router.post("/products", addProductController);
router.get("/products/:id/edit", editProductController);
router.put("/products/:id", updateProductController);
router.delete("/products/:id", deleteProductController);

module.exports = router;
