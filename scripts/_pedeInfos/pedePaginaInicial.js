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


import { aceitouSalvar as storageAceitouSalvar } from '/scripts/_storage/aceitouSalvar.js';
import * as storagePaginaInicial from '/scripts/_storage/paginaInicial.js';
import { formataEndereco } from '/scripts/_utils/formataEndereco.js';

if(storageAceitouSalvar === null || storageAceitouSalvar === true) {
	// sem shadowing
	let paginaInicialDefault = storagePaginaInicial.paginaInicial;
	
	// if (paginaInicial == null) => best practices
	if (!paginaInicialDefault) {
		paginaInicialDefault = prompt("Escolha a página inicial");
	}
	
	if(paginaInicialDefault) {
		
		const enderecoCompleto = formataEndereco(paginaInicialDefault);
	
		$janelaPrincipal.src = enderecoCompleto;
		$inputEndereco.value = enderecoCompleto;

		storagePaginaInicial.setPaginaInicial(enderecoCompleto);
	}
}


