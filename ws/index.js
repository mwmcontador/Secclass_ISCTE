// import express
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");  /////////////////
const database = require("./src/services/database");

// create new express app and assign it to `app` constant
const app = express();

// server port configuration
const PORT = 5003;

// import packages HTTPS
const http = require('http');
const https = require('https');
const fs = require('fs');

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

//addRevit();

// server starts listening the `PORT`
app.listen(PORT, () => {
  console.log(`.......Server is running at PORT ${PORT}`);
});

// serve the API with signed certificate on 443 (SSL/HTTPS) port
const httpsServer = https.createServer({
  key: fs.readFileSync('/usr/local/psa/var/modules/letsencrypt/privkey1.pem'),
  cert: fs.readFileSync('/usr/local/psa/var/modules/letsencrypt/cert1.pem'),
}, app);

httpsServer.listen(5004, () => {
    console.log('.......HTTPS Server running on port 443');
});
