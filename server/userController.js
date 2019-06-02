
const user = require('./UserSchema');
const bcrypt = require('bcryptjs');

function register(req, res) {

      const newUser = user({
        nombre: req.body.nombre,
        correo: req.body.correo,
        telefono: req.body.telefono,
        mensaje:req.body.mensaje,
      });

      bcrypt.bcryptHash(newUser.telefono)
        .then(hash => {
          newUser.telefono = hash;
          return newUser.save();
        })
        .then(() => {
          res.json({
            status: true,
            message: 'mensaje almacenado con éxito',
          });
        })
        .catch(err => {
          throw new Error(err);
        });

}



// function  getHello(req, res){
//     if(req)
//     {   console.log("hola")
//         .then(res.json({ nombre: "strombolli you are getting data from server!"}))
//         .catch(err => {throw new Error(err)});
//   }
// } 




module.exports = {
    register,

  }