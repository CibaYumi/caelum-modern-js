// Ambiente onde ele foi criado
// Acesso a variáveis do ambiente
// function setAceitouSalvar é uma closure
function setAceitouSalvar(param) {
  aceitouSalvar = param;
  localStorage.setItem('aceitouSalvar', param);
}

// Encapsulamento
let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'));

function setAceitou(){
  setAceitouSalvar(true);
}

function setNegou(){
  setAceitouSalvar(false);
}

export {
  aceitouSalvar,
  setAceitou,
  setNegou
}

/*
Outra forma de exportar todas as funções para não ter que exportar uma por uma
export {
  setAceitou,
  setNegou
}
*/