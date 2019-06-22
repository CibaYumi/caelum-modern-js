export function formataEndereco(endereroParaFormatar){
  if( endereroParaFormatar.substring(0, 7) !== 'http://' && endereroParaFormatar.substring(0, 8) !== 'https://' ) {
    endereroParaFormatar = 'http://' + endereroParaFormatar;
  }
  return endereroParaFormatar;
}