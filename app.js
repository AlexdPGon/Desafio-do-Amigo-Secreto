//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();


    if(nome == "") {
        alert("Por favor, insira um nome")
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if(amigos.length == 0) {
        alert("Adicione pelo menos um amigo para sortear!");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    document.getElementById("resultado").innerHTML = `<li>Amigo secreto: <strong>${sorteado}</strong></li>`;
}