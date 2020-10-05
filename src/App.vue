<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
<style lang="scss">

* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
}
body {
  height: 100%;
  background: linear-gradient(to top, #27ae60, lighten(#27ae60, 15%)) no-repeat
    fixed;
}

#app {
  font-family: "Roboto Slab", serif;
}
</style>
