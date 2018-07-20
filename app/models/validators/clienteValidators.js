const tratadorCpf = require('../../utils/tratadorCpf');

module.exports.cpfValidator = (cpf) => {
    //Verifica tamanho(pode conter caracteres especiais)
    let tamanhoValido = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/.test(cpf);
    
    //Se tamanho for valido, verifica digitos verificadores do cpf
    if (tamanhoValido) {

        cpf = tratadorCpf.convertToNumberArray(cpf);

        let primeiroDigito = tratadorCpf.obterDigitoVerificador(10, cpf, 9);
        let segundoDigito = tratadorCpf.obterDigitoVerificador(11, cpf, 10);

        if (primeiroDigito === cpf[9] && segundoDigito === cpf[10])
            return true;

    }
    return false;
}