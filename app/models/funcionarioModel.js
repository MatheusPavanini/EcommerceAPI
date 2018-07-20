const mongoose = require('mongoose');
const usuarioModel = require('./usuarioModel');

let funcionarioModel = usuarioModel.discriminator('funcionario', mongoose.Schema({
    rg: {
        type: String
    }
}));

module.exports = funcionarioModel;
