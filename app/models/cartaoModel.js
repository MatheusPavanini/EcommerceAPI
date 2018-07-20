const mongoose = require('mongoose');

let cartao = mongoose.Schema('cartao', mongoose.Schema({
    numero: {
        type: number,
        required: true
    },

    dataVencimento: {
        type: number,
        required: true
    },

    codigoSeguranca: {
        type: number,
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

