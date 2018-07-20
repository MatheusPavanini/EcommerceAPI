const mongoose = require('mongoose');
const funcionarioM = require('../models/funcionarioModel');
const funcionarioModel = mongoose.model('funcionario');
const funcionarioDAO = require('../DAO/funcionarioDAO');
const jsonValidator = require('../utils/jsonValidator');

module.exports.buscarFuncionarios = (req, res) => {

  funcionarioDAO.buscarFuncionarioDAO(query,(err, funcionarios) => {
    if (err) {
      res.status(500).json(err);
    } else {
      if(jsonValidator.isEmpty(funcionarios[0])) {
        res.status(204).send();
      } else {
        res.status(200).json(funcionarios);
      }
    }
  });
}

module.exports.buscarFuncionarioPeloId = (req, res) => {
    let id = { _id: req.params.id };
    funcionarioDAO.buscarFuncionarioPorIdDAO(id, (err, funcionarios) => {
    if (err) {
      res.status(500).json(err)
    } else if(jsonValidator.isEmpty(funcionarios)) {
      res.status(204).send();
    } else {
      res.status(200).json(funcionarios);
    }
  });
}

module.exports.salvarFuncionario = (req, res) => {
  let funcionario = new funcionarioM(req.body);
  
  funcionarioDAO.cadastraFuncionarioDAO(funcionario,(err, funcionarios) => {
    if (err) {
      res.status(500).json(err);
    } else {
      if(jsonValidator.isEmpty(funcionarios)) {
        res.status(204).send();
      } else {
        res.status(201).json(funcionarios);
      }
    }
  });
}

module.exports.alterarFuncionario = (req, res) => {
    let id = { _id: req.params.id };
    let funcionariosAtualizados = req.body;
    funcionarioDAO.alteraFuncionarioDAO(id, funcionariosAtualizados, (err, funcionarios) => {
        if (err) {
          res.status(500).json(err);
        } else {
          if(jsonValidator.isEmpty(funcionarios)) {
            res.status(204).send();
          } else {
          res.status(200).json(funcionarios);
        }
      }
    });
}

module.exports.removerFuncionario = (req, res) => {
  let id = { _id: req.params.id };
    funcionarioDAO.removerFuncionarioDAO(id,(err,funcionarios) => {
    if (err) {
      res.status(500).json(err);
    } else {
      if(jsonValidator.isEmpty(funcionarios)) {
        res.status(204).send();
      } else {
        res.status(200).json(funcionarios);
      }
    }
  })
}
