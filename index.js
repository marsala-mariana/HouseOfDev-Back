const express = require("express");
const app = express();
const db = require("./db/index");
const models = require("./models");
const routes = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: ["GET", "DELETE", "POST", "PUT"],
  })
);
app.use(express.json());
app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log("SERVIDOR LEVANTADO EN EL PUERTO 3001 😁");
  });
});
