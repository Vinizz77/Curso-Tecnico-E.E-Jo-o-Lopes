//AArray que vai armazenas todas as verifocaçoes
let historico = [];
//Variavel que guarda todas as entradas
let totalentradasPermitidas = 0;


// executada ao clicar no botão
function verificarEntrada(){

    

    let uniforme = document.getElementById("uniforme").value === "true";
    let lista = document.getElementById("lista").value === "true";
    let atraso = Number(document.getElementById("atraso").value);
    let autorizacao = document.getElementById("autorizacao").value === "true";
    let pendencia = document.getElementById("pendencia").value === "true";
    let lotado = document.getElementById("lotado").value === "false";

    let resultado = document.getElementById("resultado");
    let contador = document.getElementById("contador");
    let listaHistorico = document.getElementById("listaHistorico");

    if (isNaN(atraso)){
        resultado.innerText = "informe o atraso em minutos.";
        resultado.style.color ="orange";
        return;
    }

    let mensagem = "";
    
    if (!lotado){
        mensagem = "entrada negada - laboratorio lotado";
        resultado.style.color = "red";
    }
    else if (!uniforme){
        mensagem = "entrada negada - uniforme inadequado";
        resultado.style.color = "red";
    }
    else if (!lista){
        mensagem = "aluno nao esta na lista";
        resultado.style.color = "red";
    }
    else if (!pendencia){
        mensagem = "entrada negada - aluno com pendencia";
        resultado.style.color = "red";
    }
    else if (atraso > 10 && !autorizacao){
        mensagem = "entrada negada - atraso acima de 10 minutos e sem autorização";
        resultado.style.color = "red";
    }
    else {
        mensagem = "entrada permitida";
        resultado.style.color = "green";
        totalentradasPermitidas++;
    }

    resultado.innerText = mensagem;
    contador.innerText = totalentradasPermitidas;

    historico.push(mensagem);

    let item = document.createElement("li");
    item.innerText = mensagem;
    listaHistorico.appendChild(item);
}