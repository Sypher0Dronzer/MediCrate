const login=document.getElementById('login-div')
const register=document.getElementById('register-div')
function getRegister(){
    login.style.transform='translateX(-100%)'
    register.style.transform='translateX(0%)'
}
function getLogin(){
    login.style.transform='translateX(0%)'
    register.style.transform='translateX(100%)'
}