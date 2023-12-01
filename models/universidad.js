const { Schema, model } = require('mongoose');

const UniversidadSchema = Schema({
    nombre: {
        type: String,        
        required: true
    },
    direccion: {
        type: String,        
        required: true
    },
    telefono: {
        type: String,        
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = model('Universidad', UniversidadSchema);
