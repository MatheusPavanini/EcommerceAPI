const mongoose = require('mongoose');
const funcionarioM = require('../models/funcionarioModel');
const funcionarioModel = mongoose.model('funcionario');


module.exports.buscarFuncionarioDAO = (query,callback) => {
    funcionarioModel.find(query,(err, funcionarios) => { 
    
    
   
    callback(err, funcionarios);

  });
};

module.exports.buscarFuncionarioPorIdDAO = (id,callback) => {
    funcionarioModel.findById(id,(err, funcionarios) => {
      
      
   
      callback(err, funcionarios);

  });
};

module.exports.cadastraFuncionarioDAO = (funcionario,callback) => {
  
  funcionario.save((err, funcionarios) => {    
   
    
   
    callback(err, funcionarios);

  });
};

module.exports.alteraFuncionarioDAO = (id,funcionarioAtualizado, callback) => {
  funcionarioModel.findOneAndUpdate({ _id: id }, funcionarioAtualizado, {new: true}, (err, funcionarios) => {
    
    

    callback(err, funcionarios);
    
  });
};


module.exports.removerFuncionarioDAO = (id, callback) => {
  funcionarioModel.find(id)
  .remove((err, funcionarios) => {
    
    
   
    callback(err, funcionarios);
   
  });
};
