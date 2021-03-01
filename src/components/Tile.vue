<template>
  <div :class="position % 2 === 0 ? 'dark' : 'light'">
    <!--<h1>{{ fileLetterOpp + (rank + 1) }}</h1>-->
    <h1>{{ fileLetter + rankNumber }}</h1>
    <div>Tower level: {{towerLevel}}</div>
  </div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    position: {
      type: Number,
    },
    file: {
      type: Number,
      required: true,
      default: null,
    },
    rank: {
      type: Number,
      required: true,
      default: null,
    },
  },
  computed: {
    fileLetter: function () {
      const letters = ["A", "B", "C", "D", "E", "F", "G"];
      return letters.[this.file];
    },
    fileLetterOpp: function () {
      const reverse = ["G", "F", "E", "D", "C", "B", "A"];
      return reverse.[this.file]
    },
    rankNumber: function () {
      const reverse = [7, 6, 5, 4, 3, 2, 1];
      return reverse.[this.rank]
    },
    
    towerLevel: function () {
      return this.$store.state.board[this.rank][this.file].towerLevel;
    },
  },
};
</script>

<style scoped>
.dark {
  background: black;
  color: white;
}
.light {
  background: white;
}
</style>