<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {

  data () {
    return {
      title: 'First Vue - woooo!'
    }
  },
  methods: {
    greeting: function () {
      return 'Yipy kay yey! &;0)'
    }
  }
}
</script>

<style>

</style>
