let search=document.querySelector('.input');
let btn=document.querySelector('.btn');
let input=document.querySelector('.input');


btn.addEventListener('click', () => {
    
    search.classList.toggle('active');
    input.focus();
});

