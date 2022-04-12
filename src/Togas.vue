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
