<template>
  <div :class="position % 2 === 0 ? 'dark' : 'light'">This is a tile!</div>
</template>

<script>
export default {
  name: "Tile",
  props: {
    position: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.dark {
  background: black;
}
.light {
  background: white;
}
</style>