module.exports = (application, req, res) => {
    application.post("/api/v1/login", function(req, res) {
        usuario = application.app.controllers.usuarioController.validarAutenticacao(req, res);
    });
}

    