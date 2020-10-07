<template>
  <div class="about">
    <h3>About</h3>
    <div class="container">
      <card>
        <template v-slot:card-content>
          <div class="card-content">
            <span>
              <i class="fas fa-mask"></i>
              <i class="fab fa-superpowers"></i>
            </span>
            <p>Multiple universes of superheroes around the decades.</p>
            <p>
              Get all SuperHeroes and Villians data from all universes under a
              single API.
            </p>
            <p>
              Here's the API link :
              <a href="https://akabab.github.io/superhero-api/api/"
                >https://akabab.github.io/superhero-api/api/</a
              >
            </p>
            <p>Copyright By. <b>Vignal Brice</b></p>
            <div class="contact">
              <a href="https://github.com/vignalbrice"
                ><i class="fab fa-github"></i
              ></a>
              <a href="mailto:vignal.brice@gmail.com"
                ><i class="fas fa-envelope"></i
              ></a>
            </div>
          </div>
        </template>
      </card>
    </div>
  </div>
</template>
<script>
import card from "../components/Card";

export default {
  name: "About",
  components: {
    card
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card-content {
  padding: 6px;
  margin: auto;
  text-align: center;
  span {
    font-size: 128px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .contact {
    a {
      color: #333;
      text-decoration: none;
      margin-left: 10px;
      &:visited {
        color: #333;
      }
    }
  }
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
