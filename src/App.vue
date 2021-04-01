<template>
  <app-header class="mb-3" />
  <div class="container"><router-view /></div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    "app-header": Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
