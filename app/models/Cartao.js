const mongoose = require('mongoose');

let cartaoSchema = mongoose.Schema('cartao', mongoose.Schema({
    numero: {
        type: Number,
        required: true
    },

    dataVencimento: {
        type: Number,
        required: true
    },

    codigoSeguranca: {
        type: Number,
        required: true
    },
    bandeira: {
        type: String,
        required: true
    },
    nomeTitular: {
        type: String,
        required: true
    },
    cpfTitular: {
        type: String,
        required: true
    }
})); 

module.exports = mongoose.model('cartao', cartaoSchema);

