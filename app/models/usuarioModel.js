const mongoose = require('mongoose');
//Arrumar Validators
const clienteValidators = require('./validators/clienteValidators');

let usuarioSchema = mongoose.Schema({


  nome: {
    type: String,
    get: nome => nome,
    set: nome => nome,
    required: [true, 'O campo nome é obrigatório']
  },
  
  telefone: {
    type: String
  },
  dataNascimento: {
    type: Date,
    required: true
  },

  cpf: {
    type: String,
    unique: true,
    validate: {
      validator: (cpf) => {
        return clienteValidators.cpfValidator(cpf);
      },
      message: 'O cpf informado não é um cpf válido'
    },
    required: [true, 'O campo cpf é obrigatório']
  },

  email: {
    type: String,
    unique: true,
    required: true
  },

  senha: {
    type: String,
    select: false,
    required: true,
    minlength: [6, 'O campo senha precisa de no minimo 6 caracteres']
  },

  login: {
    type: String,
    unique: true,
    required: true,
    minlength: [6, 'O campo login precisa de no minimo 6 caracteres']
  }

});

module.exports = mongoose.model('usuario', usuarioSchema);
