const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./Back/app/models");
db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routes 
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Yanni Node application." });
});

// port de la bdd
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});