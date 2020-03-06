export function getToken() {
  return localStorage.getItem("token")
}
export function setToken(token) {
  localStorage.setItem("token",token)
}
export function isLogin(token) {
  if(localStorage.getItem("token")){
    return true
  }else{
    return false
  }
}
export function clearToken(token) {
  localStorage.removeItem("token")
}