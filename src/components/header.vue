<template>
  <header>
      <h1 v-on:click="updateTitleHeader">{{ title }}</h1>
  </header>
</template>

<script>
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
            this.$emit('updateTitleHeader', 'Vue wizards - updated by emiting header component')
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