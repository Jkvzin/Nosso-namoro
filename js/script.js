const dataInicio = new Date('2025-02-07T12:00:00');

function calcularDiferenca(dataInicio, dataFim) {
    let anos = dataFim.getFullYear() - dataInicio.getFullYear();
    let meses = dataFim.getMonth() - dataInicio.getMonth();
    let dias = dataFim.getDate() - dataInicio.getDate();

    if (dias < 0) {
        const ultimoDiaMesAnterior = new Date(dataFim.getFullYear(), dataFim.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
        meses--;
    }

    if (meses < 0) {
        meses += 12;
        anos--;
    }

    return { anos, meses, dias };
}

function atualizarContador() {
    const agora = new Date();
    const diferenca = calcularDiferenca(dataInicio, agora);

    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    document.getElementById('anos').innerHTML = `${diferenca.anos} anos`;
    document.getElementById('meses').innerHTML = `${diferenca.meses} meses`;
    document.getElementById('dias').innerHTML = `${diferenca.dias} dias`;
    document.getElementById('horas').innerHTML = `${horas} horas`;
    document.getElementById('minutos').innerHTML = `${minutos} minutos`;
    document.getElementById('segundos').innerHTML = `${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
