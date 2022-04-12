<template>
    <div>
        <h1>{{ titleNinjas }}</h1>
        <ninjas></ninjas>

        <h1>{{ titleYogas }}</h1>
        <yogas></yogas>

        <h1>{{ titleTogas }}</h1>
        <togas></togas>
    </div>
</template>

<script>
// Imports
import Ninjas from './Ninjas.vue';
import Yogas from './Yogas.vue';

export default {
    components: {
        'ninjas': Ninjas,
        'yogas': Yogas
    },
    data () {
        return {
          titleNinjas: 'Ninja Component',
          titleYogas: 'Yoga Component',
          titleTogas: 'Toga Component',
        }
    }
}
</script>

<style>
</style>
