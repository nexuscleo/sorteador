const resultadoTexto = document.querySelector(".solution");
const mensagemErro = document.querySelector(".message");
const inputMin = document.getElementById("min");
const inputMax = document.getElementById("max");

let sorteados = [];

function sortear() {
    const min = Math.ceil(inputMin.value);
    const max = Math.floor(inputMax.value);

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
    mensagemErro.innerHTML = "";
}

// 6. Função para resetar
function resetarSorteio() {
    sorteados = [];
    document.querySelector(".solution").innerHTML = "--";
    document.querySelector(".message").innerHTML = "";
}