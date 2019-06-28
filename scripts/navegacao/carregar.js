import { Endereco } from "/scripts/endereco/Endereco.js";

export function carregar(seiLah) {
  let endereco;

  if(typeof seiLah === 'string'){
    endereco = Endereco(seiLah);
  } else if(seiLah instanceof Endereco) {
    endereco = seiLah;
  } else {
    throw new Error(`
      Não foi possível carregar o seguinte endereço:
        Valor: ${JSON.stringify(seiLah)}
        Tipo: ${typeof seiLah}
    `);
  };

  $janelaPrincipal.src = endereco.urlCompleta;
  $inputEndereco.value = endereco.urlResumida;
}
