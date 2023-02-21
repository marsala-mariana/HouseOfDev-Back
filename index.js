const express = require("express");
const app = express();
const db = require("./db/index");
const cors = require("cors");
const models = require("./models");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(cors());
app.use(express.json());

db.sync({ force: false }).then(() => {
  app.listen(5000, () => {
    console.log("SERVIDOR LEVANTADO EN EL PUERTO 5000 😁");
  });
});
