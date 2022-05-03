// Mongoose é a biblioteca para manipular o Mongodb com javascript
//##### Exemplo da blibioteca
const mongoose = require("mongoose");
const uri = "mongodb+srv://Admin_mongo:KwruOypOOnxV29pP@cluster0.y0okk.mongodb.net/SECClasS-DB?retryWrites=true&w=majority";
const localhostMongoDB = "mongodb://217.112.93.248:27017/SECClasS-DB";
//console.log(`URI MongoDB: ${uri}`);

var DB_backup;

// opcçoes de segurança e acesso - FUTURO
var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
}; //mongoose.connect(uri, options);

var options1 = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

console.log("Connecting DATABASE.........");
mongoose.connect(uri, options1).then(
  () => { console.log(".........Cluster0 Connected") /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
  err => { DB_backup = 0, console.log(`MongoDB err: ${err}`)/** handle initial connection error */ }
);

if (DB_backup == 0){
  console.log(`MongoDB err`);
  mongoose.connect(uri, options1).then(
    () => { console.log("ClusterDB Conectado") /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
    err => { console.log(`MongoDB err: ${err}`)/** handle initial connection error */ }
  );
}
