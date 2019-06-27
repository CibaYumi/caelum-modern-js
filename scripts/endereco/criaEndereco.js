// função construtora
// função factory
// fábrica de objetos

function Endereco(endereco) {
  const url = new URL(endereco);
  const enderecoLocal = ;
  let enderecoCompleto;
  let enderecoResumido;
  if(url.hostname === 'localhost'){
    enderecoCompleto = url.pathname.replace("/", "");
    enderecoResumido = url.pathname.replace("/", "");
  } else {
    enderecoCompleto = url.toString();
    enderecoResumido - url.hostname;
  };

  return {
    urlCompleta: enderecoCompleto,
    urlResumida: enderecoResumido
  };
};

export { Endereco };