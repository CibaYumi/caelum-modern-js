import * as storagePaginaInicial from '/scripts/_storage/paginaInicial.js';
import * as storageAceitouSalvar from '/scripts/_storage/aceitouSalvar.js';

import { formataEndereco } from './endereco/formataEndereco.js';

$inputPaginaInicial.value = storagePaginaInicial.paginaInicial;
$inputPermissao.checked = storageAceitouSalvar.aceitouSalvar;
$inputSettings.value = 'cake://settings'

// o que vai ser executado quando clicar
// o que vai ser executado quando o evento de click acontecer
// salvar é uma função e é um tipo de dado também
$btnSalvar.onclick = salvar;

// função de callback
function salvar() {
  const funcaoEscolhida = $inputPermissao.checked === true ? storageAceitouSalvar.setAceitou : storageAceitouSalvar.setNegou;

  funcaoEscolhida();

  const enderecoCompleto = formataEndereco($inputPaginaInicial.value);

  $inputPaginaInicial.value = enderecoCompleto;

  storagePaginaInicial.setPaginaInicial(enderecoCompleto);
}

$btnLimpaTudo.addEventListener('click', function(){
  const chavesPermanentes = [
    'aceitouSalvar',
    'aceitouTermosDeUso'
  ];

  const listaChavesLocalStorage = Object.keys(localStorage);
  for(let chave of listaChavesLocalStorage){
    const isChavePermanente = chavesPermanentes.includes(chave);
    
    if(!isChavePermanente){
      localStorage.removeItem(chave);
    };
  };

  const listaChavesSessionStorage = Object.keys(sessionStorage);
  for(let chave of listaChavesSessionStorage){
    sessionStorage.removeItem(chave);
  };
});
