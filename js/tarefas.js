const lista1 = document.getElementById("lista-1")
const lista2 = document.getElementById("lista-2")
const botaoApagarTudo = document.getElementById("btnExcluirTudo")

botaoApagarTudo.addEventListener("click", () => excluirTudo());


function criaTarefa(texto){
    const tarefa = document.createElement("li")

    
    const containerTexto = document.createElement("div")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.addEventListener("click", (evento) => {
        if(checkbox.checked){
            tarefa.classList.add("completo")
            lista2.appendChild(tarefa)
        } else {
            tarefa.classList.remove("completo")
            lista1.appendChild(tarefa)
        }
    })
    containerTexto.appendChild(checkbox);
    containerTexto.appendChild(document.createTextNode(texto))
    const containerIcon = document.createElement("div")
    const botaoExcluir = document.createElement("button")
    botaoExcluir.classList.add("botao-acao")
    const imgBotao = document.createElement("img")
    imgBotao.src = "./assets/close.png"
    imgBotao.classList.add("close")
    botaoExcluir.addEventListener("click", () => excluirTarefa(tarefa))
    botaoExcluir.appendChild(imgBotao);
    containerIcon.appendChild(botaoExcluir);
    tarefa.appendChild(containerTexto);
    tarefa.appendChild(containerIcon);
    return tarefa;
}

export function adicionarTarefa(input){
    const item = criaTarefa(input.value)
    lista1.appendChild(item);
    input.value = ""
}

function excluirTarefa(tarefa){
    tarefa.remove();
}

function excluirTudo(){
    document.querySelectorAll("li").forEach(tarefa => {
        tarefa.remove()
    })
}