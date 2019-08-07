var pokemon = "ivysaur";

var url = `https://pokeapi.co/api/v2/pokemon/?limit=964`

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        var Data = data.results
    for(eachpokemon of Data){
        var newBox = document.createElement("div");
        
        var pokeName = document.createElement("h1")
        pokeName.innerHTML = eachpokemon.name
        newBox.appendChild(pokeName)

        document.getElementById("content").appendChild(newBox)
    }
})