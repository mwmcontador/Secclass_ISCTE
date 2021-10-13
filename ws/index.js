const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");  /////////////////
const database = require("./src/services/database");

const app = express();

const usuarioRoutes = require("./src/routes/usuario.routes");
const tabelaRoutes = require("./src/routes/tabela.routes");
const itemRoutes = require("./src/routes/item.routes");
const reviewRoutes = require("./src/routes/review.routes");

const searchRoutes = require("./src/routes/search.routes");
const commentRoutes = require("./src/routes/comment.routes");
const listsRoutes = require("./src/routes/lists.routes");
const hierarchyRoutes = require("./src/routes/hierarchy.routes");

var timestamp = Date.now();
var format_date = new Date(timestamp).toISOString().slice(0, 19).replace('T', ' ')

console.log(`___ Server Power On -> ${format_date} ___`);

//MIDDLEAWARES
app.use(express.json());
//Controle de Acesso
app.use(cors());
//Logar automatico para ambiente dev
app.use(morgan("dev"));

//ROUTES
console.log("User Routes");
app.use("/usuario/", usuarioRoutes);

console.log("Tabela Route");
app.use("/", tabelaRoutes);

console.log("Item Routes");
app.use("/", itemRoutes);

console.log("Review Routes");
app.use("/", reviewRoutes);
/////////////////////////////////////////////////////////////////
console.log("Search Routes");
app.use("/", searchRoutes);

console.log("Comentarios Routes");
app.use("/", commentRoutes);

console.log("Lists Routes");
app.use("/", listsRoutes);

console.log("Family Routes");
app.use("/", hierarchyRoutes);

//START PORT SERVER
app.listen(5003, () => {
  console.log(".......Server is running");
});
