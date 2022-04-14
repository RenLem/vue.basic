<template>
  <header>
      <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
    data() {
        return {
            title: 'Header component'
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