import * as storagePaginaInicial from '/scripts/_storage/paginaInicial.js';
import * as storageAceitouSalvar from '/scripts/_storage/aceitouSalvar.js';

$inputPaginaInicial.value = storagePaginaInicial.paginaInicial;
$inputPermissao.checked = storageAceitouSalvar.aceitouSalvar;

// o que vai ser executado quando clicar
// o que vai ser executado quando o evento de click acontecer
// salvar é uma função e é um tipo de dado também
$btnSalvar.onclick = salvar;

// função de callback
function salvar() {
  storageAceitouSalvar.setAceitouSalvar($inputPermissao.checked);
  storagePaginaInicial.setPaginaInicial($inputPaginaInicial.value);
}

$inputSettings.value = 'cake://settings'
