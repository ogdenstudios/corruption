<template>
  <div class="board">
    <Rank
      v-for="(rank, index) in ranks"
      :key="index"
      :data-something="rank"
      :offset="index"
    />
  </div>
</template>

<script>
import Rank from "./Rank";

export default {
  name: "Board",
  components: {
    Rank,
  },
  data() {
    return {
      ranks: new Array(7).fill({ placeholder: "placeholder" }),
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