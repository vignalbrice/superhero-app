<template>
  <div class="search">
    <input type="text" class="search-bar" v-model="search" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data: () => {
    return {
      search: ""
    };
  }
};
</script>

<style lang="scss" scoped></style>
