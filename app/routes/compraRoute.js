module.exports = (application, req, res) => {
  const auth = require('../../auth')();
  //lista compras
  application.get('/api/v1/compras', auth.authenticate(), (req, res) => {
    application.app.controllers.compraController.buscarCompra(req, res);
  });
  
  //retorna compra especifica
  application.get('/api/v1/compras/:id', auth.authenticate(), (req, res) => {
    application.app.controllers.compraController.buscarCompraPorId(req, res);
  });

  //insere compra
  application.post('/api/v1/compras', auth.authenticate(), (req, res) => {
    application.app.controllers.compraController.registrarCompra(req, res);
  });
  
  //atualiza compra
  application.patch('/api/v1/compras/:id', auth.authenticate(), (req, res) => {
   
    application.app.controllers.compraController.alterarCompra(req, res);
  });

}
