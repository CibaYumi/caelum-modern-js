export let paginaInicial = localStorage.getItem('paginaInicial');

export function setPaginaInicial(param) {
  paginaInicial = param;
  localStorage.setItem('paginaInicial', param);
}