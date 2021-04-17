const Categore=require('../model/categories')
exports.create = (req, res) => {
    // Validate request
    if (!req.body.catName) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Tutorial
    const categore = new Categore({
        catName: req.body.catName,
        catId: req.body.catId,
    //   published: req.body.published ? req.body.published : false
    });
  
    // Save Tutorial in the database
    categore
      .save(categore)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

    // Find All products
    exports.findAll = (req, res) => {
      Categore.find({})
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving tutorials."
          });
        });
    };

  // Singale categore
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Categore.findById(id)
      .then(data => {
        if (!data)
          res.status(404).json(data);
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutorial with id=" + id });
      });
  };

    // Update product
    exports.update = (req, res) => {
      if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Categore.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
            });
          } else res.send({ message: "Tutorial was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Tutorial with id=" + id
          });
        });
    };

  // Delete Product
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Categore.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };

    // Delete All product
    exports.deleteAll = (req, res) => {
      Categore.deleteMany({})
        .then(data => {
          res.send({
            message: `${data.deletedCount} Tutorials were deleted successfully!`
          });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        });
    };
