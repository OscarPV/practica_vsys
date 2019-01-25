const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema
const UsuarioSchema = new Schema({
    usuario: String,
    nombre_completo: String,
    nombre: String,
    apellidos: String,
    correo: String
});

module.exports = Usuario = mongoose.model('usuario', UsuarioSchema);