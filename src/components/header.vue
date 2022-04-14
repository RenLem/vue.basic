<template>
  <header>
      <h1 v-on:click="updateTitle">{{ title }}</h1>
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
        updateTitle: function () {
            this.title = ':0) updated primitive type'
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