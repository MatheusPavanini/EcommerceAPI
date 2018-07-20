const mongoose = require('mongoose');
const clienteM = require('../models/clienteModel');
const clienteModel = mongoose.model('cliente');
const clienteDAO = require('../DAO/clienteDAO');
const jsonValidator = require('../utils/jsonValidator');


module.exports.buscarClientes = (req, res) => {
 
  clienteDAO.buscarClienteDAO(query,(err, clientes) => {
    if (err) {
      res.status(500).json(err);
    } else {
      if(jsonValidator.isEmpty(clientes[0])) {
        res.status(204).send();
      } else {
        res.status(200).json(clientes);
      }
    }
  });
}

module.exports.buscarClientePeloId = (req, res) => {
  let id = { _id: req.params.id};
  clienteDAO.buscarClientePorIdDAO(id, (err, clientes) => {
    if (err) {
      res.status(500).json(err)
    } else {
      if(jsonValidator.isEmpty(clientes)) {
        res.status(204).send();
      } else {
        res.status(200).json(clientes);
      }
    }
  });
}

module.exports.salvarCliente = (req, res) => {
  let cliente = new clienteM(req.body);
  clienteDAO.cadastraClienteDAO(cliente,(err, clientes) => {
    if (err) {
      res.status(500).json(err);
    } else {
      if(jsonValidator.isEmpty(clientes)) {
        res.status(204).send();
      } else {
        res.status(201).json(clientes);
      }
    }
  });
}

module.exports.alterarCliente = (req, res) => {
    let clienteAtualizados = req.body;
    let id = { _id: req.params.id };
    clienteDAO.alteraClienteDAO(id, clienteAtualizados, (err, clientes) => {
        if (err) {
          // console.log('Deu erro');
          // console.log(err);
          res.status(500).json(err);
        } else {
          if(jsonValidator.isEmpty(clientes)) {
            res.status(204).send();
          } else {
          res.status(200).json(clientes);
        }
      }
    });
}

module.exports.removerCliente = (req, res) => {
  let id = { _id: req.params.id };
  clienteDAO.removerClienteDAO(id,(err,clientes) => {
    if (err) {
      res.status(500).json(err);
    } else {
      if(jsonValidator.isEmpty(clientes)) {
        res.status(204).send();
      } else {
        res.status(200).json(clientes);
      }
    }
  })
}
