<template>
  <div :class="position % 2 === 0 ? 'dark' : 'light'">
    {{ fileLetter + rank }}
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
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
      return letters[this.file];
    }
  }
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