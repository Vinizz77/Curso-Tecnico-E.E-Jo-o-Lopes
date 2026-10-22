let botao = document.getElementById("botaoAdicionar");

botao.addEventListener("click", adicinarTarefa);

function adicionarTarefa(){
    let campoTarefa = document.getElementById("tarefa");

    let textoTarefa = campoTarefa.value;

    let lista = document.getElementById("lista");

    let item = document.createElement("li");

    item.innerText= textoTarefa;
    lista.appendChild(item);

    campoTarefa.value = "";
}