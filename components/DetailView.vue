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
      h1.data-name ID: {{$store.state.pokemon.id}} {{$store.state.pokemon.name}}
      p.data-char Type: {{$store.state.pokemon.type}}
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
