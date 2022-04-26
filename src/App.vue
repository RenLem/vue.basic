<template>
  <div>
    <!-- <form-helper>
           <h2 slot="title">I'm slot title {{ title }}</h2>
           <h3 slot="paragraf">This is slot paragraf</h3>
       </form-helper> -->

    <form-helper>
      <div slot="form-header">
        <h3>Title of the Form</h3>
        <p>About the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from "./components/formHelper.vue";

export default {
  components: {
    "form-helper": formHelper,
  },
  data() {
    return {
      title: "--| Dynamic slot title |--",
    };
  },
  methods: {},
};
</script>

<style></style>
