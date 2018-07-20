const mongoose = require('mongoose');
const usuarioM = require('../models/usuarioModel');
const usuarioModel = mongoose.model('usuario');
const tratadorCpf = require('../utils/tratadorCpf');
const usuarioDAO = require('../DAO/usuarioDAO');
const jwt = require('jwt-simple');
const cfg = require('../../config/authConfig');
const jsonValidator = require('../utils/jsonValidator');

module.exports.buscarUsuario = (req, res) => {
  
  const getAll = (err, usuarios) => {
    if(err) {
      res.status(500).json(err);
    }
    if(jsonValidator.isEmpty(usuarios[0])) {
     res.status(204).send(); 
    } else { 
     res.status(200).json(usuarios);
    }
}
  usuarioDAO.buscarUsuarioDAO(getAll);
}

//genero faixa etaria e valor plataforma

module.exports.buscarUsuarioPorId = (req, res) => {
  let id = { _id: req.params.id };
  usuarioDAO.buscarUsuarioPorIdDAO(id,(err, usuarios) => {
    if(err) {
      res.status(500).json(err);
    } else {
      if(jsonValidator.isEmpty(usuarios)) {
        res.status(204).send();
      } else {
        res.status(200).json(usuarios);
      }
    }
  });
}

module.exports.validarAutenticacao = (req, res) => {
  let login = req.body.login;
  let senha = req.body.senha;
  usuarioDAO.buscarUsuarioLogin(login, senha, (err, usuarios) => {
    if(err) {
      res.status(500).json(err);
    } else {
      if(jsonValidator.isEmpty(usuarios[0])) {
        res.status(401).send();
      } else if (usuarios[0]) {
       let payload = { id: usuarios[0] ? usuarios[0]._id : null };
       let token = jwt.encode(payload, cfg.jwtSecret);
       res.status(200).json({payload, usuarios,token: token});
      }
    }
  });
}

//*Não tem
module.exports.cadastraUsuario = (req, res) => {
  usuario.usuario.cpf = tratadorCpf.removeCaracteresEspeciais(usuario.usuario.cpf);

  usuarioDAO.cadastraUsuarioDAO((err, usuarios) => {
      if(err) {
        res.status(500).json(err);
      } else {
        if(jsonValidator.isEmpty(usuarios)) {
          res.status(204).send();
        } else {
          res.status(201).json(usuarios);
        }
      }
  });
}

//*Não tem ou se tiver precisa arrumar
module.exports.alteraUsuario = (req, res) => {
  let id = { _id: req.params.id };
  usuarioDAO.alteraUsuarioDAO(id,(err, usuarios) =>{
     if(err) {
     res.status(500).json(err);
     } else {
      if(jsonValidator.isEmpty(usuarios)) {
        res.status(204).send();
      } else {
        res.status(200).json(usuarios);
      }
    }
  });
}

//*Não tem ou se tiver precisa arrumar
module.exports.removerUsuario = (req, res) => {
  let id = { _id: req.params.id };
  usuarioDAO.removerUsuarioDAO(id,(err, usuarios) => {
    if(err) {
      res.status(500).json(err);
    } else {
      if(jsonValidator.isEmpty(usuarios)) {
        res.status(204).send();
      } else {
        res.status(200).json(usuarios);
      }
    }
  });
}
