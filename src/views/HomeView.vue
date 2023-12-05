<template>
  <div class="home">
    <HomePage msg="Welcome to our Fun Cars site!" />
    <b-carousel
      id="cars"
      :interval="4000"
      controls
      indicators
    >
      <b-carousel-slide
        caption="Aston Martin Vantage"
        img-src="homeImages/AstonVantage.jpg"
      />
      <b-carousel-slide
        caption="Ferrari F40"
        img-src="homeImages/f40.jpg"
      />
      <b-carousel-slide
        caption="Nissan Skyline R32"
        img-src="homeImages/R32.jpg"
      />
      <b-carousel-slide
        caption="Subaru WRX STI"
        img-src="homeImages/hawkeye sti.jpg"
      />
    </b-carousel>

    <h2 class="mt-5">Us car lovers obviously have to have some nice cars ourselves. Here they are:</h2>
    <h3 class="mt-3">Adam's Car</h3>
    <b-carousel
      id="ourcars"
      :interval="4000"
      controls
      indicators
    >
      <b-carousel-slide img-src="homeImages/Adam_G35.jpg" />
      <b-carousel-slide img-src="homeImages/RearEndG35.jpg" />
      <b-carousel-slide>
        <b-embed
          type="video"
          aspect="16by9"
          controls
        >
          <source src="homeImages/Mini%20Pull.mp4" type="video/mp4">
        </b-embed>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomePage from '@/components/HomePage.vue'; // @ is an alias to /src

@Component({
  components: {
    HomePage,
  },
})
export default class HomeView extends Vue {

}

</script>
