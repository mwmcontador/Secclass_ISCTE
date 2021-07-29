//Import the mongoose module
var mongoose = require('mongoose');

var username = "<root_out>";
const password = "<client_top>";
const cluster = "<cluster0.rfblu>";
const dbname = "SecClasS";

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://root_out:client_top@cluster0.rfblu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/SecClasS';
mongoose.connect(mongoDB,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log("BD Conectado");
console.log(mongoDB);

const Item = mongoose.model("Item", {
  idItem: {
    type: Number,
    required: true,
  },
  Versao_Uniclass: {
    type: String,
  },
  nivel_item: {
    type: Number,
  },
  code_item: {
    type: String,
    required: true,
  },
  Group: {
    type: Number,
  },
  Subgroup: {
    type: Number,
  },

  Section: {
    type: Number,
  },
  object_item: {
    type: Number,
  },
  title_item: {
    type: String,
  },
  titulo_SECClasS: {
    type: String,
  },
  descricao_SECClasS: {
    type: String,
  },
  Comentarios: {
    type: String,
  },
  Data_traducao: {
    type: Date,
  },
  Autor: {
    type: String,
  },
  nome_tabela: {
    type: String,
  },
});

const docs = await Item.findOne({ code_item: 'Co_20' }).
  catch(err => console.log('Caught:', err.message));;

  console.log(docs);

  const cursor = Item.find({ occupation: /host/ }).cursor();

  for (let doc = await cursor.next(); doc != null; doc = await cursor.next()) {
    console.log(doc); // Prints documents one at a time
  }


// MongoDB may return the docs in any order unless you explicitly sort
//docs.map(doc => doc.name).sort(); // ['Geordi La Forge', 'Worf']
