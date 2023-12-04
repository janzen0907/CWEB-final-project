<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Car from '@/models/Car';

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

<template v-for="carLoop in cars">
  <div>
    <b-card>
      <!--      <p>Make:</p>-->
      <b-card-text>
        {{carLoop.make}}
      </b-card-text>

    <!--    TODO: Add seller information, buttons and upvotes and downvotes-->
    </b-card>
  </div>
</template>

  <style scoped/>
