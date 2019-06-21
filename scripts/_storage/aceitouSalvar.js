// Encapsulamento
export let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'));

// Ambiente onde ele foi criado
// Acesso a variáveis do ambiente
// function setAceitouSalvar é uma closure
export function setAceitouSalvar(param) {
  aceitouSalvar = param;
  localStorage.setItem('aceitouSalvar', param);
}