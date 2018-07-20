const mongoose = require('mongoose');
const consoleM = require('../models/consoleModel');
const consoleModel = mongoose.model('console');


module.exports.buscarConsoleDAO = (query,callback) => {
    consoleModel.find(query,(err, consoles) => { 
    
    
   
    callback(err, consoles);

  });
};

module.exports.buscarConsolePorIdDAO = (id,callback) => {
    consoleModel.findById(id,(err, consoles) => {
      
      
   
      callback(err, consoles);

  });
};

module.exports.cadastraConsoleDAO = (console,callback) => {
  
  console.save((err, consoles) => {    
   
    
   
    callback(err, consoles);

  });
};

module.exports.alteraConsoleDAO = (id,consoleAtualizado, callback) => {
  consoleModel.findOneAndUpdate({ _id: id }, consoleAtualizado, {new: true}, (err, consoles) => {
    
    

    callback(err, consoles);
    
  });
};


module.exports.removerConsoleDAO = (id, callback) => {
  consoleModel.find(id)
  .remove((err, consoles) => {
    
    
   
    callback(err, consoles);
   
  });
};
