// função construtora
// função factory
// fábrica de objetos

function Endereco(endereco) {

  if(this === undefined || (this !== undefined && !(this instanceof Endereco))){
    return new Endereco(endereco);
  }

  let enderecoCompleto;
  let enderecoResumido;
  
  if(!endereco || endereco === 'blank'){
    enderecoCompleto = 'blank';
    enderecoResumido = 'blank';
  } else {
    const url = new URL(endereco);
    if(url.hostname === 'localhost'){
      const paginaLocal = url.pathname.replace("/", "");
      enderecoCompleto = paginaLocal;
      enderecoResumido = paginaLocal;
    } else {
      enderecoCompleto = url.toString();
      enderecoResumido = url.hostname;
    };
  }

  /*
    Quando executa com o new
    new é um operador
    modifica o this da sua função

    const this = {
      __proto__: Endereco
    }
  */



  /*
    Quando executa com new
    return this
  */

    this.urlCompleta = enderecoCompleto;
    this.urlResumida = enderecoResumido;

    this.toString = function() {
      return this.urlCompleta;
    }

  // Objeto literal - literal object
  // return {
  //   urlCompleta: enderecoCompleto,
  //   urlResumida: enderecoResumido
  // };

  Endereco.prototype = {
    .toString = function() {
      return this.urlCompleta;
  }

};

export { Endereco };