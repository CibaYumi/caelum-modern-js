/*
	Declaração
	Içamento
	Hoisting

	com hoisting
	var paginaInicial = undefined
	sem hoisting
	const paginaInicial
*/

// var urlInicial = undefined
// const urlInicial = "http://google.com"



// const urlInicial = "http://" + prompt("Oi!!! =)")
// retorna o valor digitado


import aceitouSalvar from './aceitouSalvar.js';

if(aceitouSalvar === null || aceitouSalvar == true) {
	let paginaInicial = localStorage.getItem('paginaInicial');
	
	// if (paginaInicial == null) => best practices
	if (!paginaInicial) {
		paginaInicial = prompt("Escolha a página inicial");
	}
	
	if(paginaInicial) {
		if( paginaInicial.substring(0, 7) !== 'http://' && paginaInicial.substring(0, 8) !== 'https://' ) {
			paginaInicial = 'http://' + paginaInicial;
		}
	
		$janelaPrincipal.src = paginaInicial;
		$inputEndereco.value = paginaInicial;
		localStorage.setItem('paginaInicial', paginaInicial);
	}
}


