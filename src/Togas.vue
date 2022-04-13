<template>
    <ul>
        <li v-for="toga in togas">{{ toga }}</li>
    </ul>
</template>

<script>

export default ({
    data () {
        return {
            togas: ['Roman', 'Greek', 'Kartagian']
        }
       
    }
})
</script>

<style scoped>
h1{
    /* Not active becouse it has to be in this component*/
    color: yellowgreen;
}
</style>
