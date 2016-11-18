class listCtrl {
  constructor(pokedexService) {
    // get list of pokemon
    pokedexService.pokedex.get({
      limit: 150
    }, (res) => {
      this.pokemon = res.results.map((p, i) => {
        p.image = `http://pokeapi.co/media/sprites/pokemon/${(i + 1)}.png`
        return p
      })
    })
  }

}

listCtrl.$inject = ['pokedexService']

export default listCtrl
