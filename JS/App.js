// Gnt aqui é a parte onde vai aparecer as telinhas de login e cadastro
const botao_login = document.getElementById('botao-login');
const aparecer_login = document.getElementById('fundo-login');
const formulario_login = document.getElementById('formulario-login');
const formulario_cadastro= document.getElementById('formulario-cadastramento');
const icone_fechar = document.querySelector('.bi-x-circle');
const icone_verSenha = document.querySelector('.bi-eye');
const icone_esconderSenha = document.querySelector('.bi-eye-slash');
const input_password = document.getElementById('input-password');
const botao_cadastrar = document.getElementById('cadastrar');
const icone_voltar_login = document.querySelector('.bi-arrow-left-circle');

document.addEventListener("DOMContentLoaded", (evento) => {
   popUpLogin();
   disappearLogin();
   mudarCorLayout();
});

function popUpLogin() {
    botao_login.addEventListener('click', () => {
        formulario_login.reset();
        aparecer_login.classList.toggle('show');
        mudarDisplay(icone_verSenha, icone_esconderSenha);
        mudarDisplay(formulario_login, formulario_cadastro);
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
        mudarDisplay(icone_esconderSenha, icone_verSenha);
    });

    icone_esconderSenha.addEventListener('click', () => {
        input_password.type = 'password';
        mudarDisplay(icone_verSenha, icone_esconderSenha);
    });
}

function mudarDisplay(icone1, icone2) {
    icone1.style.display = 'block';
    icone2.style.display = 'none';
}

function receberDadosForm() {
    const data = new FormData(formulario_login);

    const email = data.get('input-email');
    const password = data.get('input-password');

    return [email, password];
}

botao_cadastrar.addEventListener('click', (event) => {
    event.preventDefault();
    mudarDisplay(formulario_cadastro, formulario_login);
    formulario_cadastro.reset();
    voltarLogin();
});

function voltarLogin() {
    icone_voltar_login.addEventListener('click', () => {
        mudarDisplay(formulario_login, formulario_cadastro);
    });
}

//Gnt qqui vai ser a troca de cores

const botao_icone_mudarCorLayout = document.querySelector('.bi-palette-fill');
const body = document.body;
const header = document.querySelector('header');
const headerLinks = document.querySelectorAll('header ul li a');
const botaoLogin = document.getElementById('botao-login');
const enviarForms = document.querySelectorAll('.enviar-form');
const labelInputs = document.querySelectorAll('.label-inputs');
const cardFilmes = document.querySelectorAll('.card-filme');
const footer = document.querySelector('footer');

function mudarCorLayout() {
    botao_icone_mudarCorLayout.addEventListener('click', () => {
        body.classList.toggle('mudarCor');
        header.classList.toggle('mudarCor');
        botaoLogin.classList.toggle('mudarCor');
        botao_icone_mudarCorLayout.classList.toggle('mudarCor');
        footer.classList.toggle('mudarCor');

        headerLinks.forEach(link => link.classList.toggle('mudarCor'));
        enviarForms.forEach(form => form.classList.toggle('mudarCor'));
        labelInputs.forEach(label => label.classList.toggle('mudarCor'));
        cardFilmes.forEach(card => card.classList.toggle('mudarCor'));
    });
}
