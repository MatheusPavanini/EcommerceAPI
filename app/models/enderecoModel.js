const mongoose = require('mongoose');

let enderecoSchema = mongoose.Schema({
    idProduto: {
        type: mongoose.Schema.Types.ObjectId
    },
    cep: {
        type: String,
        required: [true, 'O campo nome é obrigatório'],
    },
    rua: {
        type: String,
        required: true
    },
    bairro: {
        type: Number,
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
    },

    logradouro: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('endereco', enderecoSchema);
