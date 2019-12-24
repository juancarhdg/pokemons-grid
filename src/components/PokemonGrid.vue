<template>
  <div class="container-fluid h-100 pokemons-container">
    <div class="row">
      <div class="col-4 col-md-3 "
        v-for="(pokemon, index) in pokemons"
        :key="index"
        :style="{ backgroundColor: randomBgColor() }">
          <div class="pokemons-container__image">
            <img v-bind:src="pokemon.image" />
          </div>
          <p class="pokemons-container__name">
            {{ pokemon.name }}
          </p>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "PokemonGrid",
  data() {
    return {
      pokemons: []
    };
  },
  mounted() {
    Axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then(response => {
        response.data.results.forEach(pokemon => {
          Axios.get(pokemon.url)
            .then(pokemonDetail => {
              pokemon.image = pokemonDetail.data.sprites.front_default
              this.pokemons.push(pokemon);
            });
        });
      });
  },
  methods: {
    randomBgColor: () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
};
</script>

<style scoped lang="scss">
  $break-small: 768px;
  .pokemons-container {
    width: 90%;
    @media screen and (max-width: $break-small) {
      width: 100%;
      float: none;
    }
  }

  .pokemons-container__image {
    margin: 0 auto;
    width: 120px;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .pokemons-container__name {
    margin-bottom: 2%;
    text-align: center;
    font-weight: bold;
    text-transform: capitalize;
  }
</style>
