const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

// Esquema
const ConferenciaSchema = new Schema({
    fecha_alta: String,
    hora_alta: String,
    dias_habilitada: Number,
    folio_contratacion: String,
    participantes: Number,
    producto: String,
    status: Number,
    usuario: String
}, { toJSON: { virtuals: true } });

ConferenciaSchema.virtual('datos_usuario', {
    ref: 'usuario',
    localField: 'usuario',
    foreignField: 'usuario',
    justOne: true
});

ConferenciaSchema.plugin(mongoosePaginate);

module.exports = Conferencia = mongoose.model('conferencia', ConferenciaSchema);