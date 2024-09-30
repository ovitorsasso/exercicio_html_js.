const form = document.getElementById('form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const message = document.getElementById('message'); // Para exibir as mensagens

if (form && campoA && campoB) {
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita o envio do formulário

        const campoAValue = parseFloat(campoA.value); // Obtém o valor de campo A como número
        const campoBValue = parseFloat(campoB.value); // Obtém o valor de campo B como número

        if (campoBValue > campoAValue) {
            setSuccess("Formulário enviado com sucesso! O número B é maior que o número A.");
        } else {
            setError("Erro: O número B deve ser maior que o número A.");
        }
    });

    function setError(messageText) {
        message.textContent = messageText; // Define o texto da mensagem de erro
        message.style.color = "red"; // Define a cor vermelha para mensagem de erro
        message.style.display = "block"; // Exibe a mensagem
    }

    function setSuccess(messageText) {
        message.textContent = messageText; // Define o texto da mensagem de sucesso
        message.style.color = "green"; // Define a cor verde para mensagem de sucesso
        message.style.display = "block"; // Exibe a mensagem
    }
} else {
    console.error("Formulário ou campos não encontrados.");
}
