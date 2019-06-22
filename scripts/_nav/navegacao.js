import * as storagePaginaInicial from '/scripts/_storage/paginaInicial.js';

const paginaAtual = localStorage.getItem('paginaAtual');

if(paginaAtual != null){
  const enderecoCompleto = formataEndereco(storagePaginaInicial.paginaAtual);

  $janelaPrincipal.src = enderecoCompleto;
  $inputEndereco.value = enderecoCompleto;
} else {
  const enderecoCompleto = formataEndereco
}