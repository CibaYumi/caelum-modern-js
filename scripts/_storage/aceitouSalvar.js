// Encapsulamento
let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'));

// Ambiente onde ele foi criado
// Acesso a variáveis do ambiente
// function setAceitouSalvar é uma closure
function setAceitouSalvar(param) {
  aceitouSalvar = param;
  localStorage.setItem('aceitouSalvar', param);
};


function setAceitou(){
  setAceitouSalvar(true);
};

function setNaoAceitou(){
  setAceitouSalvar(false);
};

export {
  aceitouSalvar,
  setAceitou,
  setNaoAceitou
};

/*
Outra forma de exportar todas as funções para não ter que exportar uma por uma
export {
  setAceitou,
  setNegou
}
*/