export default localStorage.getItem('paginaInicial');

export function setPaginaInicial(param) {
  localStorage.setItem('paginaInicial', param);
}