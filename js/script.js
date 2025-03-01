const dataInicio = new Date('2025-02-07T12:00:00');

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('anos').innerHTML = `${anos} anos`;
    document.getElementById('meses').innerHTML = `${meses} meses`;
    document.getElementById('dias').innerHTML = `${dias} dias`;
    document.getElementById('horas').innerHTML = `${horas} horas`;
    document.getElementById('minutos').innerHTML = `${minutos} minutos`;
    document.getElementById('segundos').innerHTML = `${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();