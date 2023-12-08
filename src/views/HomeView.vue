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
      id="adamcars"
      class="mb-5"
      :interval="4000"
      controls
      indicators
    >
      <b-carousel-slide
        caption="2007 Infiniti G35"
        img-src="homeImages/Adam_G35.jpg" />
      <b-carousel-slide img-src="homeImages/RearEndG35.jpg" />
    </b-carousel>
    <h5>Mods List:</h5>
    <ul>
      <li>Aftermarket R32 Mirrors</li>
      <li>Avery Dark Gloss Grey Wrap</li>
      <li>Stage 2 Clutch</li>
      <li>Z1 Motorsports 5/16 Plenum Spacer</li>
      <li>NRG Oil Catch Can</li>
      <li>Z1 Motorsports Test Pipes</li>
      <li>Stillen Y Pipe</li>
      <li>Z1 Motorsports Single Exit Catback Exhaust</li>
      <li>Injen Dyno Proven True Cold Air Intake</li>
      <li>Mesh Front Grille</li>
      <li>Z1 Motorsports White Sidemarkers</li>
      <li>NISMO Front Bumper</li>
      <li>Brembo Brakes with Drilled and Slotted Rotors</li>
      <li>Z1 Motorsports Fully Adjustable Upper Control Arms</li>
      <li>ESR CS5 Wheels</li>
      <li>BC Racing Coilovers</li>
      <li>Z1 Motorsports Rear Differential Poly Urethane Bushings</li>
    </ul>
    <h3 class="mb-5">John's Cars</h3>
    <b-carousel
      id="johncars"
      class="mb-5"
      :interval="4000"
      controls
      indicators
    >
      <b-carousel-slide
        caption="1998 Nissan Silvia"
        img-src="homeImages/silvia.jpg"
      />
      <b-carousel-slide
        caption="2015 Subaru WRX STI"
        img-src="homeImages/subiesnow.jpg" />
      <b-carousel-slide img-src="homeImages/thetoys.jpg" />
    </b-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomePage from '@/components/HomePage.vue';

@Component({
  components: {
    HomePage,
  },
})
export default class HomeView extends Vue {

}

</script>
