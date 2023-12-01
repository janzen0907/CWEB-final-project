<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Car from '@/models/Car';

@Component({})
export default class BrowseVehicles extends Vue {
  //   Add the props in as needed everything to fill this will be an API call to the DB

  car = new Car();
}
</script>

<template>
  <!--TODO: Fields are not currently auto filling-->
  <b-form>
    <!--  Make-->
    <b-form-group class="m-2" label="Make">
      <b-input-group>
        <!--        TODO: Add loop logic for getting all entries from the db-->
        <b-form-input
          :readonly="true"
          v-model="car.make"
        />
      </b-input-group>
    </b-form-group>

    <!--  Model-->
    <b-form-group class="m-2" label="Model">
      <b-input-group>
        <b-form-input
          :readonly="true"
          v-model="car.model"
        />
      </b-input-group>
    </b-form-group>

    <!--  Year-->
    <b-form-group class="m-2" label="Year">
      <b-input-group>
        <b-form-input
          :readonly="true"
          v-model="car.year"
        />
      </b-input-group>
    </b-form-group>

    <!--  KM-->
    <b-form-group class="m-2" label="Kilometers">
      <b-input-group>
        <b-form-input
          :readonly="true"
          v-model="car.km"
        />
      </b-input-group>
    </b-form-group>

    <!--  Make-->
    <b-form-group class="m-2" label="Price">
      <b-input-group>
        <b-form-input
          :readonly="true"
          v-model="car.price"
        />
      </b-input-group>
    </b-form-group>

    <!--  Make-->
    <b-form-group class="m-2" label="Transmission">
      <b-input-group>
        <b-form-input
          :readonly="true"
          v-model="car.transmission"
        />
      </b-input-group>
    </b-form-group>

    <!--  Make-->
    <b-form-group class="m-2" label="Drivetrain">
      <b-input-group>
        <b-form-input
          :readonly="true"
          v-model="car.drivetrain"
        />
      </b-input-group>
    </b-form-group>

    <!--    TODO: Add seller information, buttons and upvotes and downvotes-->

  </b-form>
</template>

<style scoped>

</style>
