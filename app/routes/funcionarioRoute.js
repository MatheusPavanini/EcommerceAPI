module.exports = (application, req, res) => {
      //lista Funcionarios
      application.get('/api/v1/funcionarios', (req, res) => {
        application.app.controllers.funcionarioController.buscarFuncionarios(req, res);
      });
      
      //retorna Funcionario
      application.get('/api/v1/funcionarios/:id', (req, res) => {
        application.app.controllers.funcionarioController.buscarFuncionarioPeloId(req, res);
      });
    
      //insere Funcionario
      application.post('/api/v1/funcionarios', (req, res) => {
        application.app.controllers.funcionarioController.salvarFuncionario(req, res);
      });
    
      //atualiza Funcionario
      application.patch('/api/v1/funcionarios/:id', (req, res) => {
        application.app.controllers.funcionarioController.alterarFuncionario(req, res);
      });
    
      //remove Funcionario
      application.delete('/api/v1/funcionarios/:id', (req, res) => {
        application.app.controllers.funcionarioController.removerFuncionario(req, res);
      });
    }
    