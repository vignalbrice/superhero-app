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
  padding: 30px;
  background: #fff;
  margin-bottom: 20px;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.3);
  height: 50vh;
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
}
</style>
