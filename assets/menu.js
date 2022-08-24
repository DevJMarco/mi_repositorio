const button = document.querySelector('.button_menu')
const nav = document.querySelector('.navbar')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})