<script lang="ts">
import {
  Vue, Component, Prop, Mixins,
} from 'vue-property-decorator';
import { readonly } from 'vue';
import axios from 'axios';
import Car from '@/models/Car';
import Trader from '@/models/Trader';
import GlobalMixin from '@/mixins/global-mixin';

@Component({})
export default class SellVehicleForm extends Mixins(GlobalMixin) {
  @Prop({ type: Car, validator: (c) => c instanceof Car })
  readonly car!: Car;

  @Prop({ type: Trader, validator: (t) => t instanceof Trader })
  readonly trader!: Trader;

  cars: Car = new Car();

  traders: Trader = new Trader();

  violation: any = {};

  data() {
    return {
      make: '',
      model: '',
      year: '',
      km: '',
      price: '',
      transmission: '',
      drivetrain: '',
    };
  }

  submitCar() {
    axios.post('http://localhost:3000/cars', {
      make: this.cars.make,
      model: this.cars.model,
      year: this.cars.year,
      km: this.cars.km,
      price: this.cars.price,
      transmission: this.cars.transmission,
      drivetrain: this.cars.drivetrain,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        this.violation = err.data || {};
      });
  }
}

// saveCar() {
//   // Add a busy thing
//   this.violation = {};
//
//   const url = this.CAR_API + (this.isNew ? '' : `${this.car.id}`);
//   const method = this.isNew ? 'post' : 'put';
//   this.callAPI(url, method, this.cars)
//     .then((data) => {
//       // We may be able to change this as this is not where a user should be
//       // updating the car
//       this.$emit('added');
//     })
//     .catch((err) => {
//       this.violation = err.data || {};
//     });
// }
//
// get isNew(): boolean {
//   return !this.car || !this.cars.id;
// }

function submitCar() {
  throw new Error('Function not implemented.');
}
</script>
<template>
  <div class="m-auto border">
    <h1 class="text-center">Sell Your Car</h1>
    <b-form @submit.prevent="submitCar">
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
          <b-form-input
            id="name-horizontal"
            v-model="traders.name"
          />
        </b-input-group>
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
          <b-form-input
            id="email-horizontal"
            v-model="traders.email"
          />
        </b-input-group>
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
          <b-form-input
            id="make-horizontal"
            v-model="cars.make" />
        </b-input-group>
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
          <b-form-input id="model-horizontal" v-model="cars.model" />
        </b-input-group>
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
          <b-form-input id="year-horizontal" v-model="cars.year" />
        </b-input-group>
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
          <b-form-input id="km-horizontal" v-model="cars.km" />
        </b-input-group>
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
          <b-form-input id="price-horizontal" v-model="cars.price" />
        </b-input-group>
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
          <b-form-input id="trans-horizontal" v-model="cars.transmission" />
        </b-input-group>
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
          <b-form-input id="drive-horizontal" v-model="cars.drivetrain" />
        </b-input-group>
      </b-form-group>
      <b-row class="justify-content-center">
        <b-button class="m-3" v-on:click="submitCar">Post For Sale</b-button>
        <b-button class="mb-3" variant="danger">Reset</b-button>
      </b-row>
    </b-form>

  </div>
</template>

<style scoped>

</style>
