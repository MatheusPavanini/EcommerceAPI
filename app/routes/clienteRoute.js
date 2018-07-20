module.exports = (application, req, res) => {
  const auth = require('../../auth')();
      //lista clientes
      application.get('/api/v1/clientes', (req, res) => {
        application.app.controllers.clienteController.buscarClientes(req, res);
      });
      
      //retorna cliente
      application.get('/api/v1/clientes/:id', (req, res) => {
        application.app.controllers.clienteController.buscarClientePeloId(req, res);
      });
    
      //insere cliente
      application.post('/api/v1/clientes', (req, res) => {
        application.app.controllers.clienteController.salvarCliente(req, res);
      });
    
      //atualiza cliente
      application.patch('/api/v1/clientes/:id', (req, res) => {
        application.app.controllers.clienteController.alterarCliente(req, res);
      });
    
      //remove cliente
      application.delete('/api/v1/clientes/:id', (req, res) => {
        application.app.controllers.clienteController.removerCliente(req, res);
      });
    }
    