
    var form = document.querySelector('.poke-form');

    function pesquisarPokemon(e){
        e.preventDefault()
        let urlForm = " https://pokeapi.co/api/v2/pokemon/";

        let nameForm = document.querySelector('#pokeName');

        urlForm += this.pokeName.value;

        urlForm = urlForm.toLocaleLowerCase()

        let resposta = document.getElementById('content');
        
        let pokeImage = document.getElementById('imgPokemon');

        let html = '';

        fetch(urlForm)
            .then(resposta => resposta.json())
            .then(function(data){
                console.log(data);
                html = html + 'Nome: ' + maiuscula(data.name) + '<br>';
                html = html + 'type: ' + maiuscula(data.types[0].type.name);
                resposta.innerHTML = html;

                pokeImage.innerHTML = "<img src='"+ data.sprites.front_default +"'><img src='"+ data.sprites.back_default +"'>"
            })
           .catch(function(err){
                if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                    html = 'Pokémon não encontrado! :('
                }
                else{
                    html = 'Erro:' + err
                }
                resposta.innerHTML = html
           })

    }
    function maiuscula(val){
        return val[0].toUpperCase() + val.substr(1);
    }
form.addEventListener('submit',pesquisarPokemon);
