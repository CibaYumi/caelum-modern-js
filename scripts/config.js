import paginaInicial, { setPaginaInicial } from '/scripts/_storage/paginaInicial.js';
import aceitouSalvar, { setAceitouSalvar } from '/scripts/_storage/aceitouSalvar.js';

$inputPaginaInicial.value = paginaInicial;
$inputPermissao.checked = aceitouSalvar;

// o que vai ser executado quando clicar
// o que vai ser executado quando o evento de click acontecer
// salvar é uma função e é um tipo de dado também
$btnSalvar.onclick = salvar;

// função de callback
function salvar() {
  setAceitouSalvar($inputPermissao.checked);
  setPaginaInicial($inputPaginaInicial.value);
}
