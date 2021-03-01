<template>
  <div class="board">
    <Rank
      v-for="(rank, index) in ranks"
      :key="index"
      :data-something="rank"
      :offset="index"
      :rank="index"
    />
    <Pieces
      v-for="(piece, i) in pieces"
      :key="i"
      :data-something="piece"
      :piece="i"  
    />
  </div>
</template>

<script>
import Rank from "./Rank";
import Pieces from './Pieces';

export default {
  name: "Board",
  components: {
    Rank,
    Pieces,
  },
  data() {
    return {
      ranks: new Array(7).fill({ placeholder: "placeholder" }),
      pieces: new Array(4).fill({ placeholder: "placeholder" }),
    };
  },
};
</script>

<style scoped>
.board {
  display: grid;
  grid-template-rows: repeat(7, 1fr);
}
</style>