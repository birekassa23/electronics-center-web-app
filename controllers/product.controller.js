// controllers/product.controller.js 

const db = require("../db");

// Create a new product
const createProduct = (req, res) => {
  const { name, price, description } = req.body;
  const sql =
    "INSERT INTO products (name, price, description) VALUES (?, ?, ?)";
  db.query(sql, [name, price, description], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Product created", id: result.insertId });
  });
};

// Get all products
const getProducts = (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};

// Get a single product by ID
const getProduct = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM products WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (!result.length)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json(result[0]);
  });
};

// Update a product by ID
const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  const sql =
    "UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?";
  db.query(sql, [name, price, description, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product updated" });
  });
};

// Delete a product by ID
const deleteProduct = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM products WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted" });
  });
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
