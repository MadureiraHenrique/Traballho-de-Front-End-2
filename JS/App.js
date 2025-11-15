document.addEventListener("DOMContentLoaded", (evento) => {
    // Implementar Toogle Dark(Purple)/White(Purple).
    // "" Componente para visualizar séries, videos, animes, etc, (...).
    // "" Validação Básica para caso venha alguém favoritar algo do catálogo.
});
    const menuBotao= document.getElementById('menu-hamburguer');
        const menuNav= document.getElementById('menu-principal');
        const botaoBuscaMobile = document.getElementById('botao-busca-mobile');
        const formBuscador = document.querySelector('.buscador');

        menuBotao.addEventListener('click', function(){
            menuNav.classList.toggle('active');
            menuBotao.classList.toggle('open');
            formBuscador.classList.remove('visivel-mobile');
        });

        botaoBuscaMobile.addEventListener('click', function() {
           
            menuNav.classList.remove('active');
            menuBotao.classList.remove('open');
            
            formBuscador.classList.add('visivel-mobile');
            
            const inputBusca = formBuscador.querySelector('input[type="search"]');
            if (inputBusca) {
                inputBusca.focus();
            }
        });
