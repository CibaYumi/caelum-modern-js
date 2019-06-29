function CakeEnderecoInvalidoError(endereco) {
  this.endereco = endereco;
  this.message = `Não consegui entender o endereço: \n\n ${endereco}`
};

CakeEnderecoInvalidoError.prototype = Error.prototype;

export { CakeEnderecoInvalidoError };