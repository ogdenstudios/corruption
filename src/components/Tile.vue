<template>
    <div 
    :class="position % 2 === 0 ? 'dark' : 'light'"
    class="tile-size"
    >
        <p>{{fileLetter + rankNumber}}</p>
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
        fileLetter: function() {
            const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
            return letters[this.file]
        },
        rankNumber: function() {
            const numbers = [1, 2, 3, 4, 5, 6, 7];
            const reverse = numbers.reverse();
            return reverse[this.rank]
        }
    }

}
</script>

<style scoped>
.dark {
    background:rgb(63, 78, 63);
    color:white;

}
.light {
    background: rgb(230, 230, 197);
    color:black;

}

.tile-size {
    aspect-ratio: 1 /1 ;
}
</style>