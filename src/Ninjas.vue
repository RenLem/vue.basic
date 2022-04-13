<template>
<div>
    <h1>{{ titleNinjas }}</h1>
    <ul>    
        <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
</div>
    
</template>

<script>
export default {
    data () {
        return {
            titleNinjas: 'Ninja Component',
            ninjas: ['Yoshi', 'Mario', 'Ryu']
        }
    }
}
</script>

<style scoped>
h1{
    color: orange
}
</style>
