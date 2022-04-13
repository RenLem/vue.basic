<template>
    <div>
        
        <ninjas></ninjas>

        
        <yogas></yogas>

        <!-- Not active becouse it has to be in component -->
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
        // Not active becouse it has to be in component
          titleTogas: 'Toga Component',
        }
    }
}
</script>

<style>
h1{
    /* Global not scoped */
    color: slateblue;
}
</style>
