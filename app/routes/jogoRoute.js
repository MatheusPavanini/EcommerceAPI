module.exports = (application, req, res) => {
  const upload = require('../utils/multer');
  //lista jogos
  application.get('/api/v1/jogos', (req, res) => {
    application.app.controllers.jogoController.buscarJogos(req, res);
  });

  //retorna jogo
  application.get('/api/v1/jogos/:id', (req, res) => {
    application.app.controllers.jogoController.buscarJogoPeloId(req, res);
  });

  //insere jogo
  application.post('/api/v1/jogos', (req, res) => {
    application.app.controllers.jogoController.salvarJogo(req, res);
  });

  //atualiza jogo
  application.patch('/api/v1/jogos/:id', (req, res) => {
    application.app.controllers.jogoController.alterarJogo(req, res);
  });

  //remove jogo
  application.delete('/api/v1/jogos/:id', (req, res) => {
    application.app.controllers.jogoController.removerJogo(req, res);
  });

  //Middleware para checar se arquivo existe
  application.patch('/api/v1/jogos/:id/imagens', (req, res, next) => {
    application.app.controllers.jogoController.validarJogoExistente(req, res, next);
  });

  application.patch('/api/v1/jogos/:id/imagens', upload.single('imagem'), (req, res) => {
    application.app.controllers.jogoController.inserirArquivoImagem(req, res);
  });
}
