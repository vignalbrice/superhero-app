<template>
  <div class="card">
    <slot name="card-header"></slot>
    <slot name="card-content"></slot>
    <slot name="card-footer"></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  methods: {}
};
</script>

<style lang="scss" scoped>
.card {
  transition: 0.3s;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 0 0 auto;
  background: #fff;
  max-width: 700px;
  margin: 80px 0;
  border-radius: 5px;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>
