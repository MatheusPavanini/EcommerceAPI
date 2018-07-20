const mongoose = require('mongoose');
const consoleM = require('../models/consoleModel');
const consoleModel = mongoose.model('console');
const consoleDAO = require('../DAO/consoleDAO');
const jsonValidator = require('../utils/jsonValidator');


module.exports.buscarConsoles = (req, res) => {
 
  consoleDAO.buscarConsoleDAO(query,(err, consoles) => {
    if (err) {
      res.status(500).json(err);
    } else {
      if(jsonValidator.isEmpty(consoles[0])) {
        res.status(204).send();
      } else {
        res.status(200).json(consoles);
      }
    }
  });
}

module.exports.buscarConsolePorId = (req, res) => {
  let id = { _id: req.params.id };
  consoleDAO.buscarConsolePorIdDAO(id, (err, consoles) => {
    if (err) {
      res.status(500).json(err)
    } else {
      if(jsonValidator.isEmpty(consoles)) {
        res.status(204).send();
      } else {
        res.status(200).json(consoles);
      }
    }
  });
}

module.exports.salvarConsole = (req, res) => {
  let console = new consoleM(req.body);
  consoleDAO.cadastraConsoleDAO(console,(err, consoles) => {
    if (err) {
      res.status(500).json(err);
    } else {
      if(jsonValidator.isEmpty(consoles)) {
        res.status(204).send();
      } else {
        res.status(201).json(consoles);
      }
    }
  });
}

module.exports.alterarConsole = (req, res) => {
  let id = { _id: req.params.id };    
  let consoleAtualizado = req.body;
    consoleDAO.alteraConsoleDAO(id, consoleAtualizado, (err, consoles) => {
        if (err) {
          res.status(500).json(err);
        } else {
          if(jsonValidator.isEmpty(consoles)) {
            res.status(204).send();
          } else {
          res.status(200).json(consoles);
        }
      }
    });
}

module.exports.removerConsole = (req, res) => {
  let id = { _id: req.params.id };
  consoleDAO.removerConsoleDAO(id,(err,consoles) => {
    if (err) {
      res.status(500).json(err);
    } else {
      if(jsonValidator.isEmpty(consoles)) {
        res.status(204).send();
      } else {
        res.status(200).json(consoles);
      }
    }
  })
}

