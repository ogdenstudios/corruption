<template>
  <div class="rank">
    <Tile
      v-for="(tile, index) in tiles"
      :key="index"
      :data-something="tile"
      :position="offset % 2 === 0 ? index : index + 1"
      :rank="rank"
      :file="index"
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
    rank: {
      type: Number,
      required: true,
      default: null
    }
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