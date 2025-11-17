// Gnt, aqui é a parte onde vai aparecer as telinhas de login e cadastro
const botao_login = document.getElementById('botao-login');
const aparecer_login = document.getElementById('fundo-login');
const formulario_login = document.getElementById('formulario-login');
const formulario_cadastro = document.getElementById('formulario-cadastramento');
const icone_fechar = document.querySelector('.bi-x-circle');
const icone_verSenha = document.querySelector('.bi-eye');
const icone_esconderSenha = document.querySelector('.bi-eye-slash');
const input_email = document.getElementById('input-email-login');
const input_password = document.getElementById('input-password');
const botao_cadastrar = document.getElementById('cadastrar');
const icone_voltar_login = document.querySelector('.bi-arrow-left-circle');
const dadosUsuarios = [
  { nome: "teste", email: "teste@gmail.com", senha: "123456" },
  { nome: "admin", email: "admin@site.com", senha: "654321" }
];
const msg_error_login = document.getElementById('msg-error-login');
const msg_error_cadastro = document.getElementById('msg-error-cadastro');

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

    const emailDigitado = data.get('email-login');
    const senhaDigitada = data.get('senha-login');

    return {
        email: emailDigitado,
        senha: senhaDigitada
    };
}

//momento em que o submit da aba de login é clicado
formulario_login.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const dados = receberDadosForm();
    verificarLogin(dados.email, dados.senha);
});

formulario_cadastro.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    const data = new FormData(formulario_cadastro);

    const nomeDigitado = data.get('nome');
    const emailDigitado = data.get('email');
    const senhaDigitada = data.get('senha');
    const dadosEnviados = {
        nome: nomeDigitado,
        email: emailDigitado,
        senha: senhaDigitada
    }

    if (nomeDigitado == null || emailDigitado == null || senhaDigitada == null) {
        msg_error_cadastro.textContent = "campos invalidos";
    } else {
        msg_error_cadastro.textContent = "";
        alert("cadastro concluido com sucesso");
        dadosUsuarios.push(dadosEnviados);
        console.log(dadosUsuarios);
    }
});

function verificarLogin(email, senha) {
    const usuarioEncontrado = dadosUsuarios.find(usuario => {
        return (usuario.email == email && usuario.senha == senha);
    });

    if (usuarioEncontrado) {
        msg_error_login.textContent = "";
        alert("login bem sucedido!");

        window.location.href = "/HTML/index.html";
    } else {
        msg_error_login.textContent = "Email ou senha invalida, tente novamente";
        input_password.value = "";
    }
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

//Gnt, aqui vai ser a troca de cores
const botao_icone_mudarCorLayout = document.querySelector('.bi-palette-fill');
const body = document.body;
const header = document.querySelector('header');
const headerLinks = document.querySelectorAll('header ul li a');
const botaoLogin = document.getElementById('botao-login');
const enviarForms = document.querySelectorAll('.enviar-form');
const labelInputs = document.querySelectorAll('.label-inputs');
const cardFilmes = document.querySelectorAll('.card-filme');
const cardSeries = document.querySelectorAll('.card-serie');
const cardAnimes = document.querySelectorAll('.card-anime');
const cardPopulares = document.querySelectorAll('.card-popular');
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
        cardSeries.forEach(card => card.classList.toggle('mudarCor'));
        cardAnimes.forEach(card => card.classList.toggle('mudarCor'));
        cardPopulares.forEach(card => card.classList.toggle('mudarCor'));
    });
}

//                   Menu Burguer (Parte de Glauber)
// const menuBotao = document.getElementById("menu-hamburguer");

// const menuNav = document.getElementById("menu-principal");

// const botaoBuscaMobile = document.getElementById("botao-busca-mobile");

// const formBuscador = document.querySelector(".buscador");

// menuBotao.addEventListener("click", function () {
//   menuNav.classList.toggle("active");

//   menuBotao.classList.toggle("open");

//   formBuscador.classList.remove("visivel-mobile");
// });

// botaoBuscaMobile.addEventListener("click", function () {
//   menuNav.classList.remove("active");

//   menuBotao.classList.remove("open");

//   formBuscador.classList.add("visivel-mobile");

//   const inputBusca = formBuscador.querySelector('input[type="search"]');

//   if (inputBusca) {
//     inputBusca.focus();
//   }
// });
