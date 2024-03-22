const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuid } = require("uuid"); // make sure to npm install uuid (library for creating random id's)

// Get all comments
// -------------------
router.get("/", (req, res) => {
  // - read products data from json file
  // - parse json data into a javascript object
  const productsJSON = fs.readFileSync("./data/products.json");
  const products = JSON.parse(productsJSON);

  res.status(200).send(products);
});

// Get one comment using req.params
// ----------------------------------
router.get("/:productsId", (req, res) => {
  // Get the id from the request params
  //   const params = req.params;
  const { productsId } = req.params;
  console.log("params: ", productsId);

  // - read products data from json file
  // - parse json data into a javascript object
  const productsJSON = fs.readFileSync("./data/products.json");
  const products = JSON.parse(productsJSON);

  // find the products item using the productsId passed through params
  const selectedproducts = products.find(
    (productsItem) => productsItem.id === productsId
  );

  res.status(200).send(selectedproducts);
});

// // post new order
// // -------------------
// router.post("/", (req, res) => {
//   console.log(req.body);

//   // - read products data from json file
//   // - parse json data into a javascript object
//   const ordersJSON = fs.readFileSync("./data/orders.json");
//   const orders = JSON.parse(ordersJSON);

//   // create new products object using the information from the request body
//   orders.id = uuid();

//   // add new item to the products javascript array
//   products.push(orders);

//   // - stringify the products array to turn it back into JSON
//   // - write to the products.json file using the fs library
//   const productsSTRINGIFIED = JSON.stringify(products);
//   fs.writeFileSync("./data/products.json", productsSTRINGIFIED);

//   res.status(201).send("products submission success");
// });

module.exports = router;
