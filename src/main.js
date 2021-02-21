import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    board: [
      [{ towerLevel: 3 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }],
      [{ towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }],
      [{ towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }],
      [{ towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }],
      [{ towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }],
      [{ towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }],
      [{ towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }, { towerLevel: 0 }]
    ]
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
