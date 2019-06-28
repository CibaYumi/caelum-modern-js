function formataEndereco(enderecoParaFormatar){

  if(!enderecoParaFormatar || enderecoParaFormatar === 'blank'){
    return 'blank';
  }
  if( enderecoParaFormatar.substring(0, 7) !== 'http://' && enderecoParaFormatar.substring(0, 8) !== 'https://' ) {
    // Assignement Atribuição
    enderecoParaFormatar = 'http://' + enderecoParaFormatar;
  }
  return enderecoParaFormatar;
}

export { formataEndereco };