<template>
  <div class="home">
    <h3>All Superheroes</h3>
    <div class="content">
      <div class="row">
        <div v-for="hero in heroes" :key="hero.id">
          <div class="six columns card-container">
            <card @click.native="onShowDetails(hero.id)">
              <template v-slot:card-header>
                <img :src="hero.images.md" class="card-img" />
              </template>
              <template v-slot:card-content>
                <div class="card-content">
                  <h4>{{ hero.name }}</h4>
                  <p>Bio</p>
                  <p>{{ hero.biography.fullName }}</p>
                  <p>{{ hero.biography.alterEgos }}</p>
                  <p>{{ hero.biography.aliases[0] }}</p>
                </div>
              </template>
              <template v-slot:card-footer>
                <p>{{ hero.biography.pusblisher }}</p>
              </template>
            </card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "../components/Card.vue";
export default {
  name: "Home",
  components: {
    card
  },
  created() {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then(response => response.json())
      .then(data => {
        this.heroes = data;
      })
      .catch(error => alert(error));
  },
  data: () => {
    return {
      heroes: []
    };
  },
  methods: {
    onShowDetails(id) {
      this.$router.push({ path: `/detail/${id}`, params: { id: id } });
    }
  }
};
</script>
<style lang="scss" scoped>
.card {
  cursor: pointer;
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
  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
}
.content {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
}
.card-img {
  margin-right: 20px;
  border: 1px solid lightslategray;
  border-radius: 5px 0 0 5px;
  width: 200px;
  flex: 0 0 auto;
  position: relative;
  img {
    position: absolute;
    bottom: 3em;
    left: 50%;
    margin-left: -175px;
    width: 350px;
    -webkit-box-reflect: below -1px -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(transparent),
        color-stop(90%, transparent),
        to(rgba(250, 250, 250, 0.15))
      );
  }
}
.card-content {
  display: flex;
  flex-direction: column;
}
.card-container {
  margin: 10px;
}
a {
  text-decoration: none;
  color: #333;
}
@media (max-width: 500px) {
  body {
    overflow-x: hidden;
  }
  .card {
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .card-img {
    width: 100%;
    border-radius: 5px 5px 0 0;
    img {
      bottom: 20px;
      position: relative;
    }
  }
  .card-content {
    padding: 2em 2em 1em;
  }
}
</style>
