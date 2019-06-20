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


import aceitouSalvar from '/scripts/_storage/aceitouSalvar.js';
import paginaInicial from '/scripts/_storage/paginaInicial.js';

if(aceitouSalvar === null || aceitouSalvar == true) {
	// sem shadowing
	let paginaInicialDefault = paginaInicial;
	
	// if (paginaInicial == null) => best practices
	if (!paginaInicialDefault) {
		paginaInicialDefault = prompt("Escolha a página inicial");
	}
	
	if(paginaInicialDefault) {
		if( paginaInicialDefault.substring(0, 7) !== 'http://' && paginaInicialDefault.substring(0, 8) !== 'https://' ) {
			paginaInicialDefault = 'http://' + paginaInicialDefault;
		}
	
		$janelaPrincipal.src = paginaInicialDefault;
		$inputEndereco.value = paginaInicialDefault;
		localStorage.setItem('paginaInicial', paginaInicialDefault);
	}
}


