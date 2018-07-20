const mongoose = require('mongoose');
const compraM = require('../models/compraModel');
const compraModel = mongoose.model('compra');
const compraDAO = require('../DAO/compraDAO');
const jsonValidator = require('../utils/jsonValidator');


/* ADICIONAR A PORRA DO MÉTODO REGISTRAR PAGAMENTO QUANDO CRIAR A MODEL */


module.exports.buscarCompra = (req, res) => {
  
  compraDAO.buscarCompraDAO(query,(err, compras) => {
      if(err) {
        res.status(500).json(err);
      } else {
        if(jsonValidator.isEmpty(compras[0])) {
          res.status(204).send();
        } else {
          res.status(200).json(compras);
        }
      }
  });
}

module.exports.buscarCompraPorId = (req, res) => {
  let id = { _id: req.params.id };  
  compraDAO.buscarCompraPorIdDAO(id,(err, compras) => {
    if(err) {
      res.status(500).json(err)
    } else {
      if(jsonValidator.isEmpty(compras)) {
        res.status(204).send();
      } else {
        res.status(200).json(compras);
      }
    }
  });
}

module.exports.registrarCompra = (req, res) => {
  let compra = new compraM(req.body);
  compraDAO.cadastraCompraDAO(compra, (err, compras) => {
      if(err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(compras);
      }
  });
}


module.exports.alterarCompra = (req, res) => {
  let id = {_id: req.params.id};
  
    compraModel.update(id,
    req.body, (err,compras) => {
    if(err) {
      console.log(err);
     res.status(500).json(err);
    } else {
      if(!compras){
        res.status(204).send();
      } else {
      res.status(200).json(compras);
    }
  }
  });
}


module.exports.removerCompra = (req, res) => {
  let id = { _id: req.params.id };
  compraDAO.removerCompraDAO(id,(err,compras) => {
    if (err) {
      res.status(500).json(err);
    } else {
      if(jsonValidator.isEmpty(compras)) {
        res.status(204).send();
      } else {
        res.status(200).json(compras);
      }
    }
  })
}

