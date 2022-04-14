<template>
  <header>
      <h1 v-on:click="updateTitleHeader">{{ title }}</h1>
  </header>
</template>

<script>

// Imported BUS for transfering data
import { bus } from '../main'

export default {
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            title: 'Header component'
        }
    },
    methods: {
        updateTitleHeader: function () {
            //this.$emit('updateTitleHeader', 'Vue wizards - updated by emiting header component')
            this.title = 'Updated in header component by function - updateTitleHeader'
            // It should bi set on whatever emit the bus becouse 
            // we do not listening for even on this component 
            this.title = 'Vue non listened - updated by function before BUS'
            bus.$emit('titleUpdated', 'Vue updated by BUS');
        }
    }

}
</script>

<style scoped>
header{
    background: lightseagreen;
    padding: 10rem;
}

h1{
    color: aquamarine;
    text-align: center;
}
    

</style>