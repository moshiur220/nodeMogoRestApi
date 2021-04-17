const express = require("express");
// database connection
require('./db');
const bodyParser = require("body-parser");
const cors = require("cors");
// Here s product route
const productRoute=require('./router/product')
const categoreRoute=require('./router/categorie')
const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// product Route
app.use('/api/v1/categores', categoreRoute);
app.use('/api/v1/products', productRoute);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});