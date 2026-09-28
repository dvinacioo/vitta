function voltarHome(){
    window.location.href="index.html"
}

function confirmarAgendamento(){
    let name = document.getElementById("nomePaciente").value;

    window.alert("Olá " + name + ", sua solicitação de agendamento foi registrada com sucesso!");

    document.querySelector("form").reset();
}

const parametros = new URLSearchParams(window.location.search);
const especialidade = parametros.get("especialidade");

const selectEspecialidade = document.getElementById("especialidade");

if (especialidade && selectEspecialidade) {
    selectEspecialidade.value = especialidade;
}