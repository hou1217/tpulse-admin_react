export function getToken() {
  return localStorage.getItem("ticket")
}
export function setToken(ticket) {
  localStorage.setItem("ticket",ticket)
}
export function isLogin(ticket) {
  if(localStorage.getItem("ticket")){
    return true
  }else{
    return false
  }
}
export function clearToken(ticket) {
  localStorage.removeItem("ticket")
}