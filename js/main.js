import { adicionarTarefa } from "./tarefas.js";

const input = document.getElementById("lista-input-nome")

input.addEventListener("keypress", (event) => {
    if(event.key === 'Enter' && input.value.trim()){
        adicionarTarefa(input)
    }
})