const form = document.getElementById('form-atividade');

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    const inputDDD = document.getElementById('ddd');

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>+55 ${inputDDD.value} ${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
    inputDDD.value= '';
}


function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
