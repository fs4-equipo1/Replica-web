document.getElementById('menu-mobile').addEventListener('click', function() {
    const menuList = document.querySelector('.menu-mobile');
    menuList.classList.toggle('active');
});
document.getElementById('menu-mobile').addEventListener('click', function() {
    const menuList = document.querySelector('.menu-mobile');
    menuList.classList.toggle('active');
});document.getElementById('menu-mobile').addEventListener('click', function() {
    const menuList = document.querySelector('.menu-mobile');
    menuList.classList.toggle('active');

    const bars = document.querySelectorAll('.menu-item');
    bars.forEach(bar => {
        bar.classList.toggle('change');
    });
});