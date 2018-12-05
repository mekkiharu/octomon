<template lang="pug">
  section
    button.poke-cell(@click="handleOnClick(pokeKey)" v-bind:style='getPokeCellStyle')
    .pokeName {{pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}}

</template>

<script>
import axios from 'axios'

export default {
  name: 'PokeCell',
  props: ['pokeKey', 'pokeName', 'pokeClass', 'sprites'],
  data () {
    return {
      id: '',
      name: '',
      sprite: '',
      type: '',
      type2:'',
      pokeSpeed:'',
      pokeSDef:'',
      pokeSAtk:'',
      pokeDef:'',
      pokeAtk:'',
      pokeHp:'',
     
    }
  },
  computed: {
    getPokeCellStyle: function () {
      return { 
          'background-image': `url(${this.sprites})`,
          'background-position': this.pokeClass.backgroundPosition
        }
    },
  },
  methods: {
    handleOnClick(pokeKey) {
      this.$store.dispatch('showLoader', true)
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeKey}/`)
        .then(response => {
          if (response.status === 200) {
            this.$store.dispatch('showLoader', false)
            let data = response.data
            
            let pokeData = {
              id: data.id,
              name: data.name,
              sprite: data.sprites.front_default,
              type: data.types[1] == undefined ? data.types[0].type.name: data.types[1].type.name,
              type2: data.types[1] != undefined ? 'and ' + data.types[0].type.name: "none",
              pokeHp: data.stats[5].base_stat,
              pokeAtk: data.stats[4].base_stat,
              pokeDef: data.stats[3].base_stat,
              pokeSAtk: data.stats[2].base_stat,
              pokeSDef: data.stats[1].base_stat,
              pokeSpeed: data.stats[0].base_stat,
              
            }
            this.$store.dispatch('showPokemon', pokeData)
          }
        }).catch(err => {
          this.$store.dispatch('showLoader', false)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
