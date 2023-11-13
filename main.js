// let consultarCep = fetch('https://viacep.com.br/ws/13468490/json/')

    // Exemplo 1 para requisições assíncronas utilizando Promise.

    // .then(response => response.json())
    // .then(r => {
    //     if (r.erro) {
    //         throw Error('CEP inválido!');
    //     } else {
    //         console.log(r)
    //     }
    // })

    // .catch(erro => console.log(erro))
    // .finally(mensagem => console.log('Processamento finalizado!'));

    // console.log(consultarCep);



    // Exemplo 2 e melhor para requisições assíncronas utilizando Async/Await.

    async function buscarEndereco(cep) {

        var mensagemErroCep = document.getElementById('erro')
        mensagemErroCep.innerHTML = "";

        try {

            let consultarCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            let cepConvertido = await consultarCep.json()
            
            if(cepConvertido.erro) {
                throw Error ('CEP NÃO EXISTENTE!');
            }

            var endereco = document.getElementById('endereco');
            var bairro = document.getElementById('bairro');
            var cidade = document.getElementById('cidade');
            var uf = document.getElementById('estado');

            endereco.value = cepConvertido.logradouro;
            bairro.value = cepConvertido.bairro;
            cidade.value = cepConvertido.localidade;
            uf.value = cepConvertido.uf;
            
            // console.log(cepConvertido);
            
            return cepConvertido;

        } catch(erro) {

            mensagemErroCep.innerHTML = `<p>CEP inválido, tente novamente.</p>`
            // console.log(erro);

        }
    }

// let ceps = ['01001000', '13468490']
// let conjuntoCeps = ceps.map(valores => buscarEndereco(valores));
// console.log(conjuntoCeps);
// Promise.all(conjuntoCeps).then(resp => console.log(resp));

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscarEndereco(cep.value));
