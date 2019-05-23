<template>
  <div class="weather-widget">
    <p class="weather-widget__city">{{ weather.data[0].city_name }}</p>
    <h2 class="weather-widget__temp">{{ weather.data[0].temp }}</h2>
    <p class="weather-widget__status">{{ weather.data[0].weather.description }}</p>
  </div>
</template>

<script>
  import service from '@/services/service.js'

  export default {
    data() {
      return {
        weather: {}
      }
    },
    created() {
      service.getWeather()
        .then(response => {
          this.weather = response.data
          console.log(this.weather)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  }
</script>

<style lang="scss" scoped>
  .weather-widget {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .weather-widget__city {
    font-size: 20px;
    margin: 0;
  }

  .weather-widget__temp {
    font-size: 200px;
    font-weight: 200;
    margin: 0;
  }

  .weather-widget__status {
    font-size: 20px;
    margin: 0;
  }
</style>
