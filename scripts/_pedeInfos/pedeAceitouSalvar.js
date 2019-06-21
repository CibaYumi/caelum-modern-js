// Função Anônima Imadiatamente Invocada
// IIFE => cria escopo
// O único jeito de criar escopo não sendo global < ES6

// Ativando o modo restrito / strict mode

// Módulo em js => Module Pattern

// const aceitouSalvar = (function () {
//   'use strict';
//   const aceitouAnteriormente = localStorage.getItem('aceitouSalvar');
  
//   if(!aceitouAnteriormente) {
//     const aceitouSalvar = confirm('Você aceita que a gente salve suas informações?');
//     if(!aceitouSalvar) {
//       alert('Você pode mudar isso na página de configurações');
//     }
//     localStorage.setItem("aceitouSalvar", aceitouSalvar);
//   }
//   alert("oi");
// })()



// const aceitouAnteriormente = localStorage.getItem('aceitouSalvar');

// if(!aceitouAnteriormente) {
//   const aceitouSalvar = confirm('Você aceita que a gente salve suas informações?');
//   if(!aceitouSalvar) {
//     alert('Você pode mudar isso na página de configurações');
//   }
//   localStorage.setItem("aceitouSalvar", aceitouSalvar);
// }

import * as storageAceitouSalvar from '/scripts/_storage/aceitouSalvar.js'

if(storageAceitouSalvar.aceitouSalvar === null) {
  // shadowing / sombra do módulo
  // redeclarando com o mesmo nome
  const aceitouSalvar = confirm('Você aceita que a gente salve as suas informações?');
  if(!aceitouSalvar) {
    alert('Você pode mudar isso na página de configurações');
  }
  storageAceitouSalvar.setAceitouSalvar(aceitouSalvar);
}

export default storageAceitouSalvar.aceitouSalvar


