const toggle=document.querySelector('.menu-toggle input');
const ul = document.querySelector('nav ul');

toggle.addEventListener('click',function(){
    ul.classList.toggle('slide');
})