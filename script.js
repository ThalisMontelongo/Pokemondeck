var formulario = document.querySelector('form')

formulario.addEventListener('submit', function (e) { 
    e.preventDefault()          //bloqueia o refresh da pagina
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";     // url da api
   
    let name = document.getElementById("name")       // valor da input Name
    urlForm = urlForm + this.name.value

    urlForm = urlForm.toLocaleLowerCase()  // transforma o valor minusculo
    let resposta = document.getElementById('content')
     // id content
    let imagem = document.getElementById('imgPokemon') // id img pokemon

    let html = ''  // reposta html

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function (data) {

             html = 'Name: ' + maiuscula(data.name) + '<br>'
             html = html + 'Type: ' + maiuscula(data.types[0].type.name)
             resposta.innerHtml = html

             imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
    })
    .catch(function(err) {
        if(err == 'SyntaxError : Unxpected token N in JSON at position 0'){
            html = 'Pokémon não encontrado!!'
        } else {
            html = err
        }
        resposta.innerHTML = html
    })

});
// função para deixar a primeira letra maiuscula
function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}