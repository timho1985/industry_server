const express = require("express");
const app = express();
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const PORT = 8080;

// Middleware
app.use(express.json()); // sets the req.body
app.use(express.static("public")); // make resources from the "public" folder available from the client
app.use(cors()); // avoid CORS errors: allow clients from different domains to access server

// Routes
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
