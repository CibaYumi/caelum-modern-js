import * as storagePaginaInicial from '/scripts/_storage/paginaInicial.js';
import { formataEndereco } from '../endereco/formataEndereco.js';

const paginaAtual = localStorage.getItem('paginaAtual');

if(paginaAtual != null){
  const enderecoCompleto = formataEndereco(paginaAtual);
  $janelaPrincipal.src = enderecoCompleto;
  $inputEndereco.value = enderecoCompleto;
} else {
  const enderecoCompleto = formataEndereco(storagePaginaInicial.paginaInicial);
  $janelaPrincipal.src = enderecoCompleto;
  $inputEndereco.value = enderecoCompleto;
};