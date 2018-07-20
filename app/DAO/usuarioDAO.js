const mongoose = require('mongoose');
const usuarioM = require('../models/usuarioModel');
const usuarioModel = mongoose.model('usuario');


module.exports.buscarUsuarioDAO = (query,callback) => {
  usuarioModel.find(query,(err, usuarios) => { 
    
   
    callback(err, usuarios);

  });
}

module.exports.buscarUsuarioPorIdDAO = (id,callback) => {
    usuarioModel.findById(id,(err, usuarios) => {
      
      
      callback(err, usuarios);

  });
}

//Usado para autenticação por enquanto
module.exports.buscarUsuarioLogin = (reqLogin, reqSenha ,callback) => {
  
  //let query = {$and:[{login:{$regex: reqLogin, $options: 'i'}},{senha:{$regex: reqSenha, $options: 'i'}}]};
  let query = { login: reqLogin, senha: reqSenha };
  usuarioModel.find(query, (err, usuarios) => {
  
      callback(err, usuarios);
    
  });
}

//* Não tem
module.exports.cadastraUsuarioDAO = (callback) => {
  let usuario = new usuarioM(req.body);
  usuario.save((err, usuarios) => {    
   
   
   
    callback(err, usuarios);

  });
}

module.exports.alteraUsuarioDAO = (id, callback) => {
    usuarioModel.update({_id: id},
    req.body, (err,usuarios) => {
         

   
    callback(err, usuarios);

  });
}


module.exports.removerUsuarioDAO = (id, callback) => {
  usuarioModel.find({_id: id})
  .remove((err, usuarios) => {

   
    callback(err, usuarios);
   
  });
}
