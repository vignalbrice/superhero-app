<template>
  <div class="home">
    <h3>All Superheroes</h3>
    <div class="content">
      <div v-for="hero in heroes" :key="hero.id">
        <div class="row-items">
        <Card v-on:click="onShowDetails(hero.id)">
          <template v-slot:card-header>
            <img :src="hero.images.md" class="card-img"/>
          </template>
          <template v-slot:card-content>
            <h4>{{ hero.name }}</h4>
            <p>Bio</p>
            <p>{{ hero.biography.fullName }}</p>
            <p>{{ hero.biography.alterEgos }}</p>
            <p>{{ hero.biography.aliases[0] }}</p>
          </template>
          <template v-slot:card-footer>
            <p>{{ hero.biography.pusblisher }}</p>
          </template>
        </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: "Home",
  components: {
    Card
  },
  created() {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then(response => response.json())
      .then(data => {
        this.heroes = data;
      })
      .catch(error => console.log(error));
  },
  data: () => {
    return {
      heroes: []
    };
  },
  methods: {
    onShowDetails(id) {
      this.$router.push({ path: `/detail/${id}` });
    },
  },
};
</script>
<style lang="scss" scoped>
h3 {
  position: absolute;
  top: 85px;
  left: 20px;
  color: rgba(255, 255, 255, 0.3);
  font-family: sans-serif;
  font-size: 4em;
  font-weight: bold;
  letter-spacing: -2px;
  &:hover {
      color: rgba(255, 255, 255, 0.5);
  }
}
.content {
  margin-top: 100px;
  padding-left: 15px;
  padding-right: 15px;
}
.card-img {
  width: 200px;
  float:left;
  margin-right: 20px;
  border: 1px solid lightslategray;
  border-radius: 2px;
}
.row-items {
  flex-direction: row;
}
</style>
