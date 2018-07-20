const mongoose = require('mongoose');

let compraSchema = mongoose.Schema({
    data: {
        type: Date,
        required: true,
        default: Date.now 
    },
    valorTotal: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        required: true
    },

    cartao: {
        numero: {
            type: Number
        },
    
        dataVencimento: {
            type: Date
        },
    
        codigoSeguranca: {
            type: Number
        },
        bandeira: {
            type: String
        },
        nomeTitular: {
            type: String
        },
        cpfTitular: {
            type: String
        }
    }

});

module.exports = mongoose.model('compra', compraSchema);
