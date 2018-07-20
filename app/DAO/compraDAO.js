const mongoose = require('mongoose');
const compraM = require('../models/compraModel');
const compraModel = mongoose.model('compra');


module.exports.buscarCompraDAO = (query,callback) => {
    compraModel.find(query,(err, compras) => { 
    
    
   
    callback(err, compras);

  });
};

module.exports.buscarCompraPorIdDAO = (id,callback) => {
    compraModel.findById(id,(err, compras) => {
      
      
   
      callback(err, compras);

  });
};

module.exports.cadastraCompraDAO = (compra,callback) => {
  
  compra.save((err, compras) => {    
   
    
   
    callback(err, compras);

  });
};

module.exports.alteraCompraDAO = (id,compraAtualizado, callback) => {
  compraModel.findOneAndUpdate({ _id: id }, compraAtualizado, {new: true}, (err, compras) => {
    
    

    callback(err, compras);
    
  });
};


module.exports.removerCompraDAO = (id, callback) => {
  compraModel.find(id)
  .remove((err, compras) => {
    
    
   
    callback(err, compras);
   
  });
};
