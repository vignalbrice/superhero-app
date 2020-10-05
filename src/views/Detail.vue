<template>
  <div class="content">
    <div v-for="detail in details" :key="detail.id">
      <h3>Details</h3>
      <Card>
        <template v-slot:card-header>
          <img :src="images.sm" :alt="detail.name">
        </template>
        <template v-slot:card-content>
          <div class="card-content">
          <h4>{{ detail.name }}</h4>
          <small v-if="detail.biography.fullName">({{ detail.biography.fullName }})</small>
          <p>{{ detail.biography.aliases[0] }}</p>
          <div class="eyes-content">
            <span :style="`font-size: 32px; color: ${transformTextToLowerCase(detail.appearance.eyeColor)}; margin-top: -12px; margin-right: 15px;`">
              <i class="far fa-eye"/>
            </span>
            <p>{{ detail.appearance.eyeColor }}</p>
          </div>
          <div class="appareance-content">
            <p><i class="fas fa-venus-mars"></i> {{ detail.appearance.gender }}</p>
            <p><i class="fas fa-american-sign-language-interpreting"></i> {{ detail.appearance.race }}</p>
          </div>
          </div>
        </template>
        <template v-slot:card-footer>
          <div class=card-footer>
            <p class="footer-text">By. {{ detail.biography.publisher }}</p>
          </div>
        </template>
      </Card>
      <h3>Statistics</h3>
      <Card>
        <template v-slot:card-content>
          <div id="chart">
            <apexchart type="radar" :options="chartOptions" :series="series"></apexchart>
          </div>        
        </template>
        <template v-slot:card-footer></template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  name: "Detail",
  components: {
    Card,
  },
  created() {
    /** Get all data of super hero by ID */
    fetch(
      `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${this.$route.params.id}.json`
    )
      .then(response => response.json())
      .then(data => {
        this.images = data.images
        this.chartOptions.title.text = `Powerstats of ${data.name}`
        this.details = [...this.details, data];
        this.chartOptions.xaxis.categories = this.getStatsLabel(data.powerstats);
        this.series.map(s => {
          s.data = this.getStatsByTitle(data.powerstats);
        })
      });
  },
  data() {
    return {
      details: [],
      images: {},
      series: [{
            name: 'Statistics',
            data: [],
          }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radar',
        },
        title: {
          text: 'PowerStats of '
        },
        xaxis: {
          categories: []
        }
      },
    };
  },
  computed: { },
  methods: {
    getStatsByTitle (stats) {
      let lastTitle = ''
      let powerstats = []
      for(let key in stats) {
        if(stats[key] === lastTitle) {
          continue
        }
        powerstats.push(stats[key])
        lastTitle = stats[key]
      }
      return powerstats;
    },
    getStatsLabel (labels) {
      let lastLabel = ''
      let powerstats = []
      for(let label in labels) {
        if(label === lastLabel) {
          continue
        }
        powerstats.push(label)
        lastLabel = label
      }
      return powerstats;
    },
    transformTextToLowerCase (text) {
      return text.toLowerCase()
    }
  },
  mounted () { }
};
</script>

<style lang="scss" scoped>
  .card {
    box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.3)!important;
    width:100%;
      position: relative;

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
      width: 100%!important;
    }
    .footer-text {
      display: none;
    }
  }
  h3 {
  color: rgba(255, 255, 255, 0.3);
  font-family: sans-serif;
  font-size: 4em;
  font-weight: bold;
  letter-spacing: -2px;
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
</style>
