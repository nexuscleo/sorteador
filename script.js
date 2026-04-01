let sorteados = [];

function sortear() {
    const min = Math.ceil(document.getElementById("min").value);
    const max = Math.floor(document.getElementById("max").value);
    const resultadoTexto = document.querySelector(".solution");
    const mensagemErro = document.querySelector(".message");

    // Validação básica
    if (min >= max) {
        alert("O valor mínimo deve ser menor que o valor máximo!");
        return;
    }

    // 2. Cálculo do total de números possíveis no intervalo
    const totalPossibilidades = max - min + 1;

    // 3. Verificação de esgotamento
    if (sorteados.length >= totalPossibilidades) {
        mensagemErro.innerHTML = "Fim das opções de sorteio! Reinicie ou aumente a faixa.";
        resultadoTexto.innerHTML = "--";
        return;
    }

    let resultado;

    // 4. Lógica de não repetição (Loop)
    do {
        resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (sorteados.includes(resultado));

    // 5. Adiciona ao histórico e exibe
    sorteados.push(resultado);
    resultadoTexto.innerHTML = resultado;
    mensagemErro.innerHTML = ""; // Limpa mensagem se houver
}

// 6. Função para resetar (vincule a um novo botão ou mude o range)
function resetarSorteio() {
    sorteados = [];
    document.querySelector(".solution").innerHTML = "00";
    document.querySelector(".message").innerHTML = "";
}