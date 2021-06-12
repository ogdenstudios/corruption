<template>
    <div 
    :class="position % 2 === 0 ? 'dark' : 'light'"
    class="tile-size"
    >
        <h1>{{ fileLetter + rankNumber }}</h1>
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
        rankNumber: function() {
            const reverse = [7, 6, 5, 4, 3, 2, 1];
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