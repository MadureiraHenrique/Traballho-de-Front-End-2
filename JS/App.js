const botao_login = document.getElementById('botao-login');
const aparecer_login = document.getElementById('fundo-login');
const formulario_login = document.getElementById('formulario-login');
const icone_fechar = document.querySelector('.bi-x-circle');
const icone_verSenha = document.querySelector('.bi-eye');
const icone_esconderSenha = document.querySelector('.bi-eye-slash');
const input_password = document.getElementById('input-password');

document.addEventListener("DOMContentLoaded", (evento) => {
   popUpLogin();
   disappearLogin();

});

function popUpLogin() {
    botao_login.addEventListener('click', () => {
        formulario_login.reset();
        aparecer_login.classList.toggle('show');
        icone_esconderSenha.style.display = 'none';
        mostrarOuEsconderSenha();
    });
}

function disappearLogin() {
    icone_fechar.addEventListener('click', () => {
        aparecer_login.classList.toggle('show');
    });
}

function mostrarOuEsconderSenha() {
    icone_verSenha.addEventListener('click', () => {
        input_password.type = 'text';
        mudarIcone(icone_esconderSenha, icone_verSenha);
    });

    icone_esconderSenha.addEventListener('click', () => {
        input_password.type = 'password';
        mudarIcone(icone_verSenha, icone_esconderSenha);
    });
}

function mudarIcone(icone1, icone2) {
    icone1.style.display = 'inline';
    icone2.style.display = 'none';
}