const express = require('express');
//const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const mongo = require('mongodb').MongoClient;
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//const db = process.env.DATABASE;

mongoose.connect('mongodb://localhost:27017/unamtrx')
  .then(() => console.log('Conectado a la Database'))
  .catch(err => {
    throw new Error(err)
  });


app.listen(port, () => console.log(`Listening on port ${port}`));


















































// var User = mongoose.model('User', );



// API calls
// app.post('/api/contactsave', (req, res) => {
// const doc = new User({ nombre: req.body.nombre,
//                         correo: req.body.correo,
//                         telefono: req.body.telefono,
//                         mensaje:req.body.mensaje
//                       })
  
//   var userData = new User({ nombre: "Jacob", correo:"jacobvargas@hotmail.com", telefono:12345678, mensaje:"second register from application" });
//   userData.save(function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       doc.save();
//       res.send({ response: "Envío exitoso"});
//     }
//   });
  

 
// });


// var MongoClient = require('mongodb').MongoClient;

// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/unamtrx", function (err, db) {

//     db.collection('User', function (err, collection) {
        
//         collection.insert({ nombre: String,
//           correo: String,
//           telefono: Number,
//           mensaje:String});

        // db.collection('Persons').count(function (err, count) {
        //     if (err) throw err;
            
        //     console.log('Total Rows: ' + count);
    //     });
    // });
                




// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'client/build')));

//   // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }







// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(3001, function () {
//   console.log('Example app listening on port 3001!');
// });



// function SendDataFormulario(){
//     fetch("https://localhost:3001/backend/loginController/enterData")
//     .then(function(respuesta){
//        return respuesta.json;        
//     }).then({function(respuesta){
//         var nombre = document.getElementById("nombre");
//         nombre.innerHTML = respuesta.nombre;
//         }
//     })
// }


//dentro de src va el backend y el frontEnd




// app.post('/api/contactsave', (req, res) => {
//     const doc = new user({  nombre: req.body.nombre,
//                             correo: req.body.correo,
//                             telefono: req.body.telefono,
//                             mensaje:req.body.mensaje
//                          })
//                         }