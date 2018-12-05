import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import '~/assets/scss/main.scss'
Vue.use(Vuex)

const oladex = () => {
  return new Vuex.Store({
    state: {
      pokemon: {
        sprite: 'https://fontmeme.com/images/Pokemon-Logo.jpg'
      },
      showLoader: false
    },
    actions,
    mutations
  })
}

export default oladex