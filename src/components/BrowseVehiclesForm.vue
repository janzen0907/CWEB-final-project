<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Car from '@/models/Car';
import Trader from '@/models/Trader';

@Component({})
export default class BrowseVehicles extends Vue {
  //   Add the props in as needed everything to fill this will be an API call to the DB
  @Prop({ type: Car, validator: (c) => c instanceof Car })
  readonly car!: Car;

  cars: Car = new Car();

  loading = true;

  async fetchCarData() {
    const response = await fetch('http://localhost:3000/cars');
    const data = await response.json();
    this.cars = data;
    this.loading = false;
  }

  mounted() {
    this.fetchCarData();
  }
}
</script>
<!--<template v-for="carLoop in cars">-->
<template>
  <div>
    <h1 class="text-center">Browse Vehicles</h1>
    <p class="text-center">Welcome to our Browse Vehicles page! Here you can
      view cars being sold</p>

    <b-row>
      <b-col cols="6" v-for="carLoop in cars" :key="carLoop.id">
        <b-card border-variant="primary">
          <b-card-text>
            <p>Make: {{ carLoop.make }}</p>
            <p>Model: {{ carLoop.model }}</p>
            <p>Year: {{ carLoop.year }}</p>
            <p>Kilometers: {{ carLoop.km }}</p>
            <p>Price: {{ carLoop.price }}</p>
            <p>Transmission: {{ carLoop.transmission }}</p>
            <p>Drivetrain: {{ carLoop.drivetrain }}</p>
          </b-card-text>
          <!--    TODO: Add seller information, buttons and upvotes and downvotes-->
          <!--          Going to need another loop for seller information -->
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<style scoped/>
