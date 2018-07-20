const mongoose = require('mongoose');
const usuarioModel = require('./usuarioModel');

let clienteModel = usuarioModel.discriminator('cliente', mongoose.Schema({
    
    cep: {
        type: String,
        required: [true, 'O campo nome é obrigatório'],
    },
    rua: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: [true, 'O campo preco é obrigatório']
    },
   
    cidade: {
        type: String,
        required: true
    },
    
    estado: {
        type: String,
        required: true
    },

    numero: {
        type: Number,
        required: true
    }

}));

module.exports = clienteModel;
