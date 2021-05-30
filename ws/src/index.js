const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const database = require(".src/services/database");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

app.listen(3000, () => {
  console.log("Meu Servidor está funcionando");
});
