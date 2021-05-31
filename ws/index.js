const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const database = require("./src/services/database");
const cors = require("cors");

const app = express();

const usuarioRoutes = require("./src/routes/usuario.routes");
const tabelaRoutes = require("./src/routes/tabela.routes");
const itemRoutes = require("./src/routes/item.routes");

//MIDDLEAWARES
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//ROUTES
console.log("Rota User");
app.use("/usuario/", usuarioRoutes);

console.log("Rota Tabela");
app.use("/", tabelaRoutes);

console.log("Rota Item");
app.use("/Lista_Item/", itemRoutes);

app.listen(8000, () => {
  console.log("Meu Servidor está funcionando..");
});
