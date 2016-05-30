class listCtrl {
  constructor(pokedexService) {
    // get list of pokemon
    pokedexService.pokedex.get({
      limit: 150
    }, (res) => {
      this.pokemon = res.results
      this.pokemon.forEach(function(pokemon, index) {
        pokemon.image = `http://pokeapi.co/media/sprites/pokemon/${(index + 1)}.png`
      })
    })
  }

}

listCtrl.$inject = ['pokedexService']

export default listCtrl
