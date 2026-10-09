/*
Descrição: Aula 12 - Introdução aos Formulários Web
Nome do arquivo: login.js
Nome do exercício: Tela de Login com Formulário Web
Nome do aluno: Gabrielly Nilvane Magalhães Garcia
E-mail: gabrielly.garcia@portalsesisp.org.br
Turma: TDE-1BAA-26
*/

const formulario = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (email === "" || senha === "") {
        mensagem.textContent = "Preencha todos os campos.";
        mensagem.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        mensagem.textContent = "Digite um e-mail válido.";
        mensagem.style.color = "red";
        return;
    }

    if (senha.length < 6) {
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
        mensagem.style.color = "red";
        return;
    }

    mensagem.textContent = "Login realizado com sucesso!";
    mensagem.style.color = "green";

});
