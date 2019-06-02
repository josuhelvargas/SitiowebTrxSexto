const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  mensaje: {
    type: String,
    default:"mensaje default"
  }
 
});

module.exports = mongoose.model('user', userSchema);