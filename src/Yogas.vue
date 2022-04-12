<template>
    <ul>
        <li v-for="yoga in yogas">{{ yoga }}</li>
    </ul>
</template>

<script>
export default {
    data () {
        return {
          yogas: ['Tantric', 'Meditation', 'Outdors']
        }
    }
}
</script>

<style>
</style>