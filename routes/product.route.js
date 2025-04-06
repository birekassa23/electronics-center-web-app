// routes/product.route.js

const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

router.post("/", createProduct); // Create product
router.get("/", getProducts); // Get all products
router.get("/:id", getProduct); // Get a product by ID
router.put("/:id", updateProduct); // Update a product
router.delete("/:id", deleteProduct); // Delete a product

module.exports = router;
