<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Car from '@/models/Car';

@Component({})
export default class SellVehicleForm extends Vue {
  @Prop({ type: Car, validator: (c) => c instanceof Car })
  readonly car!: Car;

  cars: Car = new Car();
}
</script>
<template>
  <div class="m-auto border">
    <h1 class="text-center">Sell Your Car</h1>
    <!--    Seller Name-->
    <b-form-group
      class="m-4"
      label="Seller Name"
      label-cols-sm="2"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="5"
      label-for="name-horizontal"
    >
      <b-input-group>
        <b-form-input id="name-horizontal"/></b-input-group>
    </b-form-group>
    <!--Email-->
    <b-form-group
      class="m-4"
      label="Email"
      label-cols-sm="2"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="5"
      label-for="email-horizontal"
    >
      <b-input-group>
        <b-form-input id="email-horizontal"/></b-input-group>
    </b-form-group>
    <!--Make-->
    <b-form-group
      class="m-4"
      label="Make"
      label-cols-sm="2"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="5"
      label-for="make-horizontal"
    >
      <b-input-group>
        <b-form-input id="make-horizontal"/></b-input-group>
    </b-form-group>
    <!--Model-->
    <b-form-group
      class="m-4"
      label="Model"
      label-cols-sm="2"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="5"
      label-for="model-horizontal"
    >
      <b-input-group>
        <b-form-input id="model-horizontal"/></b-input-group>
    </b-form-group>

    <!--    Year-->
    <b-form-group
      class="m-4"
      label="Year"
      label-cols-sm="2"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="5"
      label-for="year-horizontal"
    >
      <b-input-group>
        <b-form-input id="year-horizontal"/></b-input-group>
    </b-form-group>
    <!--    Kilometer-->
    <b-form-group
      class="m-4"
      label="Kilometers"
      label-cols-sm="2"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="5"
      label-for="km-horizontal"
    >
      <b-input-group>
        <b-form-input id="km-horizontal"/></b-input-group>
    </b-form-group>
    <!--Price-->
    <b-form-group
      class="m-4"
      label="Price"
      label-cols-sm="2"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="5"
      label-for="price-horizontal"
    >
      <b-input-group>
        <b-form-input id="price-horizontal"/></b-input-group>
    </b-form-group>
    <!--Transmission-->
    <b-form-group
      class="m-4"
      label="Transmission"
      label-cols-sm="2"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="5"
      label-for="trans-horizontal"
    >
      <b-input-group>
        <b-form-input id="trans-horizontal"/></b-input-group>
    </b-form-group>
    <!--Drivetrain-->
    <b-form-group
      class="m-4"
      label="Drivetrain"
      label-cols-sm="2"
      label-cols-lg="3"
      content-cols-sm
      content-cols-lg="5"
      label-for="drive-horizontal"
    >
      <b-input-group>
        <b-form-input id="drive-horizontal"/></b-input-group>
    </b-form-group>
    <b-row class="justify-content-center">
      <b-button class="m-3">Post For Sale</b-button>
      <b-button class="mb-3" variant="danger">Reset</b-button>
    </b-row>

  </div>
</template>

<style scoped>

</style>
