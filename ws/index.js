const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");/////////////////
const database = require("./src/services/database");

const app = express();

const usuarioRoutes = require("./src/routes/usuario.routes");
const tabelaRoutes = require("./src/routes/tabela.routes");
const itemRoutes = require("./src/routes/item.routes");
const searchRoutes = require("./src/routes/search.routes");
const commentRoutes = require("./src/routes/comment.routes");

//MIDDLEAWARES
app.use(express.json());
//Controle de Acesso
app.use(cors());
//Logar automatico para ambiente dev
app.use(morgan("dev"));

//ROUTES
console.log("Rota User");
app.use("/usuario/", usuarioRoutes);

console.log("Rota Tabela");
app.use("/tabela/", tabelaRoutes);


console.log("Rota Item");
app.use("/", itemRoutes);

console.log("Rota Search");
app.use("/", searchRoutes);

console.log("Rota Comentarios");
app.use("/", commentRoutes);

//console.log("Rota Complexos");
//app.use("/lista", itemRoutes);

//START PORT SERVER
app.listen(5003, () => {
  console.log("Meu Servidor está funcionando..");
});
