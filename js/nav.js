const close = document.getElementById('close');
const bar = document.querySelector('.bar');
const navbar = document.querySelector('.nav-content');

if(bar){
    bar.addEventListener('click', function(){
        navbar.classList.add('active');
    });
}
if (close) {
    close.addEventListener('click', function(){
        navbar.classList.remove('active');
    });
}