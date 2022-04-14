<template>
<footer>
    <p>{{ copyright }} {{ title }}</p>
    <p v-for="localFooter in propsFooterApp">{{ localFooter }}</p>
</footer>
</template>

<script>

// Imported BUS for transfering data
import { bus } from '../main'

export default {
    props: {
        propsFooterApp:{
            type: Array,
            reqired: true
        },
        title: {
           type: String 
        }
    },
    data() {
        return {
            copyright: '© Copyright 2022 Vue 2 for everybody.'
        }
    },
    created() {
        bus.$on('titleUpdated', (data) => {
            this.title = data;
        })
    }

}
</script>

<style scoped>
footer{
    background: orange;
    padding: 6rem;
}
p{
    color: rgb(255, 217, 172);
    text-align: center;
}
</style>