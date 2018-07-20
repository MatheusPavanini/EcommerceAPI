module.exports = (application, req, res) => {
  const upload = require('../utils/multer');
  //TODO: Incluir inserção de imagens
    //lista consoles
  application.get('/api/v1/consoles', (req, res) => {
    application.app.controllers.consoleController.buscarConsoles(req, res);
  });
    
  //retorna console especifico
  application.get('/api/v1/consoles/:id', (req, res) => {
    let parametro = req.params.id;
    application.app.controllers.consoleController.buscarConsolePorId(req, res, parametro);
  });
  
  //insere console
  application.post('/api/v1/consoles', (req, res) => {
    application.app.controllers.consoleController.salvarConsole(req, res);
  });
  
    //atualiza console
  application.patch('/api/v1/consoles/:id', (req, res) => {
   application.app.controllers.consoleController.alterarConsole(req, res);
  });
  
    //remove console
  application.delete('/api/v1/consoles/:id', (req, res) => {
    application.app.controllers.consoleController.removerConsole(req, res);
  });
}
  