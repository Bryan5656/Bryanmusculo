// Simulando um banco de dados simples na memória
let usuarios = [];

// Salva o tipo de usuário selecionado (aluno ou professor)
let tipoSelecionado = "";

function selecionarTipo(tipo) {
    tipoSelecionado = tipo;
    alert("Tipo selecionado: " + tipoSelecionado);
}

// Função para cadastro
function cadastrar() {
    const email = document.getElementById('cadastroEmail').value;
    const senha = document.getElementById('cadastroSenha').value;

    if (!email || !senha) {
        alert("Preencha todos os campos para se cadastrar.");
        return;
    }

    // Verifica se o usuário já existe
    const existe = usuarios.find(u => u.email === email);
    if (existe) {
        alert("Este email já está cadastrado.");
        return;
    }

    usuarios.push({ email, senha, tipo: tipoSelecionado });
    alert("Cadastro realizado com sucesso!");
    console.log("Usuários cadastrados:", usuarios);
}

// Função para login
function logar() {
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;


    if (!email || !senha) {
        alert("Preencha todos os campos para logar.");
        return;
    }

    const usuario = usuarios.find(u => u.email === email && u.senha === senha&& u.tipo);

    if (usuario) {
        alert(`Login realizado com sucesso! Bem-vindo, ${usuario.tipo || 'usuário'}.`);
        window.location.href="personal.html"
    } else {
        alert("Email ou senha incorretos.");
    }
}
