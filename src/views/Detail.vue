<template>
  <div class="content">
    <div v-for="detail in details" :key="detail.id">
      <h3>Details</h3>
      <card>
        <template v-slot:card-header>
          <img :src="images.sm" :alt="detail.name" />
        </template>
        <template v-slot:card-content>
          <div class="card-content">
            <div class="header-content">
              <h4>{{ detail.name }}</h4>
            </div>
            <small v-if="detail.biography.fullName"
              >({{ detail.biography.fullName }})</small
            >
            <p>{{ detail.biography.aliases[0] }}</p>
            <div class="eyes-content">
              <template v-if="detail.appearance.eyeColor">
                <span
                  :style="
                    `font-size: 32px; color: ${transformTextToLowerCase(
                      detail.appearance.eyeColor
                    )}; margin-top: -12px; margin-right: 15px;`
                  "
                >
                  <i class="far fa-eye" />
                </span>
              </template>
              <p>{{ detail.appearance.eyeColor }}</p>
              <div class="body-content">
                <span v-for="b in body" :key="b">
                  <p>{{ b }}</p>
                </span>
              </div>
            </div>
            <div class="appareance-content">
              <p>
                <i class="fas fa-venus-mars"></i> {{ detail.appearance.gender }}
              </p>
              <p>
                <i class="fas fa-american-sign-language-interpreting"></i>
                {{ detail.appearance.race }}
              </p>
            </div>
          </div>
        </template>
        <template v-slot:card-footer>
          <div class="card-footer">
            <p class="footer-text">By. {{ detail.biography.publisher }}</p>
          </div>
        </template>
      </card>
      <h3>Statistics</h3>
      <card>
        <template v-slot:card-content>
          <div id="chart">
            <apexchart
              type="radar"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </template>
        <template v-slot:card-footer></template>
      </card>
    </div>
  </div>
</template>

<script>
import card from "../components/Card";

export default {
  name: "Detail",
  components: {
    card
  },
  created() {
    /** Get all data of super hero by ID */
    fetch(
      `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${this.$route.params.id}.json`
    )
      .then(response => response.json())
      .then(data => {
        this.images = data.images;
        this.chartOptions.title.text = `Powerstats of ${data.name}`;
        this.body = [data.appearance.height[1], data.appearance.weight[1]].join(
          "/"
        );
        this.details = [...this.details, data];
        this.chartOptions.xaxis.categories = this.getStatsLabel(
          data.powerstats
        );
        this.series.map(s => {
          s.data = this.getStatsByTitle(data.powerstats);
        });
      });
  },
  data() {
    return {
      details: [],
      images: {},
      body: [],
      series: [
        {
          name: "Statistics",
          data: null
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "radar",
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: false,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: []
            }
          }
        },
        title: {
          text: undefined,
          align: "center",
          style: {
            fontSize: "18px",
            fontWeight: "600",
            fontFamily: "Roboto Slab",
            color: "#263238"
          }
        },
        xaxis: {
          categories: null
        }
      }
    };
  },
  computed: {},
  methods: {
    getStatsByTitle(stats) {
      let lastTitle = "";
      let powerstats = [];
      for (let key in stats) {
        if (stats[key] === lastTitle) {
          continue;
        }
        powerstats.push(stats[key]);
        lastTitle = stats[key];
      }
      return powerstats;
    },
    getStatsLabel(labels) {
      let lastLabel = "";
      let powerstats = [];
      for (let label in labels) {
        if (label === lastLabel) {
          continue;
        }
        powerstats.push(label);
        lastLabel = label;
      }
      return powerstats;
    },
    transformTextToLowerCase(text) {
      return text.toLowerCase();
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
h3 {
  color: rgba(255, 255, 255, 0.3);
  font-family: sans-serif;
  font-size: 4em;
  font-weight: bold;
  letter-spacing: -2px;
}
.card {
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.3) !important;
  width: 100%;
  position: relative;
  &:hover {
    transition: ease 3ms;
    animation: ease;
    animation-duration: 3s;
  }
  .card-content {
    padding-left: 15px;
  }
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#chart {
  width: 600px;
}
.card-footer {
  display: flex;
  flex-direction: column;
}
.footer-text {
  position: absolute;
  bottom: -10px;
  right: 16px;
}
@media (max-width: 500px) {
  #chart {
    width: 100% !important;
  }
  .footer-text {
    display: none;
  }
}
.eyes-content {
  display: flex;
  flex-direction: row;
}
.appareance-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header-content {
  flex-direction: row;
  justify-content: space-between;
}
.body-content {
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  p {
    font-size: 14px;
    font-weight: 600;
    margin-top: 2px;
  }
}
</style>
