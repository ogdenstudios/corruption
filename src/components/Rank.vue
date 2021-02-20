<template>
  <div class="rank">
    <Tile
      v-for="(tile, index) in tiles"
      :key="index"
      :data-something="tile"
      :position="offset % 2 === 0 ? index : index + 1"
    />
  </div>
</template>

<script>
import Tile from "./Tile";

export default {
  name: "Rank",
  components: {
    Tile,
  },
  props: {
    offset: {
      type: Number,
    },
  },
  data() {
    return {
      tiles: new Array(7).fill({ placeholder: "placeholder" }),
    };
  },
};
</script>

<style scoped>
.rank {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
</style>