// const express = require("express");
// const router = express.Router();
// const homeController = require("../controllers/index.js");
// const productsController = require("../controllers/products.js");
// router.get("/", homeController);
// router.get("/products", productsController);

// module.exports = router;

const express = require("express");
const router = express.Router();
const {
  indexController,
  createProductController,
  addProductController,
} = require("../controllers/products.js");

router.get("/", indexController);
router.get("/products", indexController);
router.get("/products/new", createProductController);
router.post("/products", addProductController);

module.exports = router;
