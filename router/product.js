const router = require("express").Router();
const product=require('../controller/product')

// Create a new Products
router.post("/create",product.create);

// // Retrieve all Products
 router.get("/", product.findAll);

// // Retrieve a single Products with id
 router.get("/:id", product.findOne);

// // Update a Products with id
router.put("/:id", product.update);

// // Delete a Products with id
router.delete("/:id", product.delete);

// Delete all product a new Products
router.delete("/deleteAll", product.deleteAll);

module.exports=router;

