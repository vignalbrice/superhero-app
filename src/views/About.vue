<template>
  <div class="about">
    <h3>This is an about page</h3>
    <div class="container">
      <span style="font-size: 128px">
        <i class="fas fa-mask"></i>
      </span>
      <p>Multiple universes of superheroes around the decades</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
}
</script>
<style lang="scss" scoped>
.container {
    margin-top: 100px;
}
h3 {
  position: absolute;
  top: 85px;
  left: 20px;
  color: rgba(255, 255, 255, 0.3);
  font-family: sans-serif;
  font-size: 4em;
  font-weight: bold;
  letter-spacing: -2px;
}
</style>
