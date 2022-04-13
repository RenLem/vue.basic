<template>
<div>
    <h1>{{ titleYogas }}</h1>
    <ul>
        <li v-for="yoga in yogas">{{ yoga }}</li>
    </ul>
</div>
    
</template>

<script>
export default {
    data () {
        return {
            titleYogas: 'Yoga Component',
            yogas: ['Tantric', 'Meditation', 'Outdors']
        }
    }
}
</script>

<style scoped>
h1{
    color: darkturquoise;
}
</style>