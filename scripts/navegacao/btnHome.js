import { paginaInicial } from '/scripts/_storage/paginaInicial.js';
import { carregar } from '/scripts/navegacao/carregar.js';
import { Endereco } from '/scripts/endereco/Endereco.js';

//Como a função vaiParaHome não será reaproveitada em nenhum outro lugar, ela pode ser pasada direto como parâmetro do `addEventListener`
$btnHome.addEventListener('click', function vaiParaHome() {
  const endereco = Endereco(paginaInicial);
  carregar(paginaInicial);
})