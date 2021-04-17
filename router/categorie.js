const router = require("express").Router();
const categore=require('../controller/categorie')

// Create a new Categores
router.post("/create",categore.create);

// // Retrieve all Categores
router.get("/", categore.findAll);

// // Retrieve a single Categores with id
router.get("/:id", categore.findOne);

// // Update a Categores with id
router.put("/:id", categore.update);

// // Delete a Categores with id
router.delete("/:id", categore.delete);

// // Create a new Categores
router.delete("/deleteAll", categore.deleteAll);

module.exports=router;

