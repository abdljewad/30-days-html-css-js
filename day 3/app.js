let open=document.getElementById('open');
let close=document.getElementById('close');
let container=document.getElementsByClassName('container');

open.addEventListener('click', () => {
    alert(container.innerHtml);
    container.classList.add('show-nav');
});
close.addEventListener('click', () => {
    
    container.classList.remove('show-nav');
});
//alert(open);
