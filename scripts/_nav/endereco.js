$inputEndereco.onfocus = exibeEnderecoCompleto;
$inputEndereco.onblur = exibeEnderecoResumido;
$janelaPrincipal.onload = exibeEnderecoResumido;

function exibeEnderecoCompleto(){
  const urlCompleta = new URL($janelaPrincipal.contentWindow.location.href);
  const enderecoCompleto = urlCompleta.href;

  $inputEndereco.value = enderecoCompleto;
}

function exibeEnderecoResumido(){
  const url = new URL($janelaPrincipal.contentWindow.location.href);
  const enderecoResumido = url.hostname;

  $inputEndereco.value = enderecoResumido;
}
