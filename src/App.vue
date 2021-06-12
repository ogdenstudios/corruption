<template>
  <p>Play with count function in `./components/HelloWorld.vue`</p>
  <HelloWorld />
  <Board />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Board,

  }
}

// Refractor to <script setup> once comfortable with traditional syntax
// https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
