<template>
    <div class="board">
        <Rank 
        v-for="(rank, i) in ranks"
        :key="i"
        :data-something="rank"
        :offset="i"
        :rank="i" 
        />
    </div>
</template>

<script>
import Rank from "./Rank.vue";

export default {
    name: "Board",
    components: {
        Rank,
    },
    data() {
        return {
            ranks: new Array(7).fill({ placeholder: "placeholder" }),
        }
    }
}
</script>

<style scoped>
.board {
    display:grid;
    grid-template-rows: repeat(7, 1fr);
    aspect-ratio: 1 / 1;
    max-width:40vw;
    margin:4em auto;
}
</style>