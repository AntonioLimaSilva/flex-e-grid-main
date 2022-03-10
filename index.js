const botaoMenu = document.querySelector('.cabecalho__menu');
const menuLateral =  document.querySelector('.menu-laterial');

botaoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('menu-laterial--ativo');
});
