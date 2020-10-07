<template>
  <div class="library">
    <h3>Library</h3>
    <div class="content">
      <div class="row">
        <div
          v-for="(data, index) in images"
          :key="index"
          class="card-picture seven columns"
          @click="onShowModal(data.id)"
        >
          <img :src="data.images.sm" />
        </div>
      </div>
    </div>
    <modal v-show="showModal" v-for="detail in details" :key="detail.id">
      <template v-slot:modal-header>
        <div @click="onCloseModal" class="close">
          <i class="fas fa-times"></i>
        </div>
      </template>
      <template v-slot:modal-content>
        <div
          class="img-wrapper"
          on:mouseover="imageMouseOver($event)"
          v-on:mousemove="imageMouseMove($event)"
          v-on:mouseout="imageMouseOut($event)"
        >
          <div class="image">
            <img :src="detail.images.md" alt="" srcset="" />
          </div>
        </div>
      </template>
      <template v-slot:modal-footer>
        <h1>{{ detail.name }}</h1>
        <h4>{{ detail.biography.aliases[0] }}</h4>
      </template>
    </modal>
  </div>
</template>

<script>
import modal from "../components/Modal";

export default {
  name: "Library",
  created() {
    /** Get all pictures from API */
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then(response => response.json())
      .then(data => {
        this.resp = [...this.resp, data];
        data.map(d => {
          this.images = [...this.images, { id: d.id, images: d.images }];
        });
      });
  },
  components: {
    modal
  },
  data() {
    return {
      id: null,
      images: [],
      resp: [],
      details: [],
      showModal: false
    };
  },
  filters: {
    showModalDetails(id) {
      return this.resp.filter(r => r.id === id);
    }
  },
  methods: {
    onShowModal(id) {
      /** Set empty data for details array */
      this.details = [];
      /** Get picture by ID from API */
      fetch(
        `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`
      )
        .then(response => response.json())
        .then(data => {
          this.details = [data];
        });
      this.showModal = true;
    },
    onCloseModal() {
      this.showModal = false;
    },
    imageMouseOver: event => {
      event.target.style.transform = "scale(2)";
    },
    /** OnMouseMove into image function to zoom size of image */
    imageMouseMove: event => {
      event.target.style.transform = "scale(2)";

      setTimeout(() => {
        event.target.style.transformOrigin =
          ((event.pageX - event.target.getBoundingClientRect().left) /
            event.target.getBoundingClientRect().width) *
            100 +
          "% " +
          ((event.pageY -
            event.target.getBoundingClientRect().top -
            window.pageYOffset) /
            event.target.getBoundingClientRect().height) *
            100 +
          "%";
      }, 50);

      setTimeout(() => {
        event.target.style.transformOrigin =
          ((event.pageX - event.target.getBoundingClientRect().left) /
            event.target.getBoundingClientRect().width) *
            100 +
          "% " +
          ((event.pageY -
            event.target.getBoundingClientRect().top -
            window.pageYOffset) /
            event.target.getBoundingClientRect().height) *
            100 +
          "%";
      }, 100);
    },
    /** onImageMouseOut detect when the cursor is out of the image */
    imageMouseOut: event => {
      event.target.style.transform = "scale(1)";
    }
  }
};
</script>

<style lang="scss" scoped>
.library {
  margin: 0 auto;
  padding: 0.5em;
  text-align: center;
  .content {
    margin-top: 100px;
    display: flex;
    padding-left: 45px;
    padding-right: auto;
    .row {
      flex-direction: row;
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
.close {
  position: absolute;
  top: -1.2em;
  right: -0.5em;
  cursor: pointer;
  padding: 1em;
}
.card-picture {
  max-height: 200px;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  width: 124px;
  margin: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: 0.15s all ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    z-index: 100;
    background-color: #fff;
  }
  img {
    max-height: 100%;
    max-width: 100%;
  }
}
.img-wrapper {
  width: 25em;
  height: 25em;
  margin: 0.5em auto;
  overflow: hidden;

  .image {
    width: 100%;
    height: 100%;
    transition: transform 0.2s;
    z-index: 4;
    cursor: crosshair;
  }
}
</style>
