const mongoose = require('mongoose');
const clienteM = require('../models/clienteModel');
const clienteModel = mongoose.model('cliente');


module.exports.buscarClienteDAO = (query,callback) => {
    clienteModel.find(query,(err, clientes) => { 
    
   
    callback(err, clientes);

  });
};

module.exports.buscarClientePorIdDAO = (id,callback) => {
    clienteModel.findById(id,(err, clientes) => {
      
   
      callback(err, clientes);

  });
};

module.exports.cadastraClienteDAO = (cliente,callback) => {
  
  cliente.save((err, clientes) => {    
   
   
    callback(err, clientes);

  });
};

module.exports.alteraClienteDAO = (id,clienteAtualizado, callback) => {
  clienteModel.findOneAndUpdate({ _id: id }, clienteAtualizado, (err, clientes) => {

    
    callback(err, clientes);
    
  });
};


module.exports.removerClienteDAO = (id, callback) => {
  clienteModel.find(id).remove((err, clientes) => {
    
    callback(err, clientes);
   
  });
};
