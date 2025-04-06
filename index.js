// indexe.js  file

const express = require("express");
const cors = require("cors");
const path = require("path");
const productRoutes = require("./routes/product.route");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (like your HTML & CSS)
app.use(express.static(path.join(__dirname, "public")));

// When the user accesses the root URL ("/"), serve the index.html page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API Routes
app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
