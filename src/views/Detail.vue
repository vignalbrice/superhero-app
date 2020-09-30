<template>
  <div class="container">
    <Card></Card>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  name: "Detail",
  components: {
    Card
  },
  mounted() {
    console.log(this.$route.params.id)
  },
  created() {
    console.log(this.details)
    fetch(
      `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${this.$route.params.id}.json`
    )
      .then(response => response.json())
      .then(data => {
        this.details = data;
      });
    console.log(this.details);
  },
  data() {
    return {
      details: []
    };
  }
};
</script>

<style></style>
