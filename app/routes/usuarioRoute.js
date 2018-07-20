module.exports = (application, req, res) => {
  //lista usuarios
  application.get('/api/v1/usuarios', (req, res) => {
    application.app.controllers.usuarioController.buscarUsuario(req, res);
  });
  
  //retorna usuario especifico
  application.get('/api/v1/usuarios/:id', (req, res) => {
    application.app.controllers.usuarioController.buscarUsuarioPorId(req, res);
  });

  //insere usuario
  application.post('/api/v1/usuarios', (req, res) => {
    application.app.controllers.usuarioController.cadastraUsuario(req, res);
  });

  //atualiza usuario
  application.patch('/api/v1/usuarios/:id', (req, res) => {
    application.app.controllers.usuarioController.alteraUsuario(req, res);
  });

  //remove usuario
  application.delete('/api/v1/usuarios/:id', (req, res) => {
    application.app.controllers.usuarioController.removerUsuario(req, res);
  });
}
