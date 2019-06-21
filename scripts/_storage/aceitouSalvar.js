export default JSON.parse(localStorage.getItem('aceitouSalvar'));

export function setAceitouSalvar(param) {
  localStorage.setItem('aceitouSalvar', param);
}