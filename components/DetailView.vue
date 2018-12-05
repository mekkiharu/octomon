<template lang="pug">
  section.detail-view
    breeding-rhombus-spinner(v-if="$store.state.showLoader" :animation-duration="2000" :size="30" :color="'white'")
    .columns.mobile-indcator
      .column
        .color-change
      .column.indicator
        .dot.red
        .dot.yellow
        .dot.green
    img.sprite-image(:src="$store.state.pokemon.sprite" alt="sprite")
    //- div.data-wrapper
    //-   h1.data-name ID: {{$store.state.pokemon.id}} {{$store.state.pokemon.name}}
    //-   p.data-char Type: {{$store.state.pokemon.type}}
    .columns.controls
      .column
        .dot
      .column
        .light.red
      .column
        .light.blue
      //- .column.absolute
      //-   .horizontal
      //-   .vertical
    .green-screen
      h1.data-name ID: {{$store.state.pokemon.id}} 
      h2.data-name Name: {{$store.state.pokemon.name}}
      p.data-char Type: <em>{{$store.state.pokemon.type}}</em> <em v-if="$store.state.pokemon.type2 !='none' "> {{$store.state.pokemon.type2}} </em>
      h1.data-name Stats:
      p.data-char HP: {{$store.state.pokemon.pokeHp}}
      p.data-char ATK: {{$store.state.pokemon.pokeAtk}}
      p.data-char DEF: {{$store.state.pokemon.pokeDef}}
      p.data-char S.ATK: {{$store.state.pokemon.pokeSAtk}}
      p.data-char S.DEF: {{$store.state.pokemon.pokeSDef}}
      p.data-char SPEED: {{$store.state.pokemon.pokeSpeed}}


    
</template>

<script>
import { BreedingRhombusSpinner } from 'epic-spinners'

export default {
  name: 'PokeCell',
  props: ['pokeKey', 'pokeClass', 'sprites'],
  components: {
    BreedingRhombusSpinner
  },
  data () {
    return {
    }
  },
  computed: {
    getPokeCellStyle: function () {
      return { 
        'background-image': `url(${this.sprites})`,
        'background-position': this.pokeClass.backgroundPosition
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
