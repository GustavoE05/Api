function pegaendereço()
{
    let Cep = document.querySelector('#cep').value;
    if(Cep.length !== 8)
    {
        alert('CEP invalido!');
        return;
    }
    let url = `https://viacep.com.br/ws/${Cep}/json/`;
    fetch(url).then(function(response)
    {
        response.json().then(mostraresultados);
    })
}
function mostraresultados(dados){
    let resultado = document.querySelector('.resultado');
    if(dados.erro){
        resultado.innerHTML = "Não foi possivel localizar este CEP";
    }else{
    resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                           <p>Complemento: ${dados.complemento}</p>
                           <p>Bairro: ${dados.bairro}</p>
                           <p>Cidade: ${dados.localidade} - ${dados.uf} </p>
                           <p>DDD: ${dados.ddd}</p>`
    }
}