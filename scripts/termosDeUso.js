

if(!localStorage.getItem('aceitouTermosDeUso')) {
	const nome = prompt('Qual o seu nome?');
	
	const aceitouTermosDeUso = confirm(`
		Olá ${nome}!

		Antes de usar o Cake, precisamos que 
		você aceite nossos termos de uso:

		• Você aceita que este software foi 
				feito por pessoas que participaram 
				do curso de Java.
		• Você aceita que o código dessas 
				pessoas pode acessar tudo o que 
				você digitar aqui.
	`);
	
	if (!aceitouTermosDeUso) {
		alert('Que pena! Não podemos continuar juntos :(');
		window.close();
	} else {
		localStorage.setItem('aceitouTermosDeUso', aceitouTermosDeUso);
	}
}