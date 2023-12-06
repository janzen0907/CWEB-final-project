<script lang="ts">
import {
  Vue, Component, Prop, Mixins,
} from 'vue-property-decorator';
import { readonly } from 'vue';
import axios from 'axios';
import Car from '@/models/Car';
import Trader from '@/models/Trader';
import GlobalMixin from '@/mixins/global-mixin';
// ADd the JS script for auth.

@Component({})
export default class SellVehicleForm extends Mixins(GlobalMixin) {
  @Prop({ type: Car, validator: (c) => c instanceof Car })
  readonly car!: Car;

  @Prop({ type: Trader, validator: (t) => t instanceof Trader })
  readonly trader!: Trader;

  cars: Car = new Car();

  traders: Trader = new Trader();

  violation: any = {};

  dt = {
    mk: 'make',
    md: 'model',
    yr: 'year',
    km: 'km',
    pr: 'price',
    tr: 'transmission',
    dt: 'drivetrain',
  };

  data() {
    return {
      // id: '',
      make: '',
      model: '',
      year: '',
      km: '',
      price: '',
      transmission: '',
      drivetrain: '',
      numUpVotes: '',
      numDownVotes: '',
      traderEmail: '',
      traderName: '',

    };
  }

  dataTrader() {
    return {
      name: '',
      email: '',
      rating: '',
      ratingCount: '',
    };
  }

  submitCar() {
    // if (this.cars.make === '') {
    //   this.violation.make = 'Make is Required';
    //   console.log(this.violation);
    // }
    //
    // if (Object.keys(this.violation).length > 0) {
    //   alert('Please correct the errors before you submit the form.');
    //   return;
    // }
    axios.post('http://localhost:3000/cars', {
      // id: this.cars.id,
      make: this.cars.make,
      model: this.cars.model,
      year: this.cars.year,
      km: this.cars.km,
      price: this.cars.price,
      transmission: this.cars.transmission,
      drivetrain: this.cars.drivetrain,
      numUpVotes: this.cars.numUpVotes,
      numDownVotes: this.cars.numDownVotes,
      traderEmail: this.cars.traderEmail,
      traderName: this.cars.traderName,

    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        this.violation = err.data || {};
      });
  }

  submitTrader() {
    axios.post('http://localhost:3000/traders', {
      // id: this.cars.id,
      name: this.traders.name,
      email: this.traders.email,
      rating: this.traders.rating,
      ratingCount: this.traders.ratingCount,

    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        this.violation = err.data || {};
      });
  }

  cancel() {
    this.violation = {};
    this.cars = { ...this.car };
    this.$emit('cancelled', this.car);
  }

  get hasErr(): any {
    return {
      // id: this.violation.id ? false : null,
      mk: this.violation.make ? false : null,
      md: this.violation.model ? false : null,
      yr: this.violation.year ? false : null,
      km: this.violation.km ? false : null,
      pr: this.violation.price ? false : null,
      tr: this.violation.transmission ? false : null,
      dt: this.violation.drivetrain ? false : null,
    };
  }
}

</script>
<template>
  <div class="m-auto border">
    <h1 class="text-center">Sell Your Car</h1>
    <b-form>
      <!--    Seller Name-->
      <!--      TODO: Add validation for the seller fields-->
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
            @submit.prevent="submitTrader"
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
            @submit.prevent="submitTrader"
            id="email-horizontal"
            v-model="traders.email"
          />
        </b-input-group>
      </b-form-group>
      <!--Make-->
      <b-form-group
        :invalid-feedback="violation.make"
        :has-err="hasErr.mk"
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
            @submit.prevent="submitCar"
            id="make-horizontal"
            v-model="cars.make"
            :has-err="hasErr.mk"
            @keydown="violation.make = null"
            required
          />

        </b-input-group>
      </b-form-group>
      <!--Model-->
      <b-form-group
        :invalid-feedback="violation.model"
        :has-err="hasErr.md"
        class="m-4"
        label="Model"
        label-cols-sm="2"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="5"
        label-for="model-horizontal"
      >
        <b-input-group>
          <b-form-input
            @submit.prevent="submitCar"
            id="model-horizontal"
            v-model="cars.model"
            @keydown="violation.model = null"
            :has-err="hasErr.md"
            required
          />
        </b-input-group>
      </b-form-group>

      <!--    Year-->
      <b-form-group
        :invalid-feedback="violation.year"
        :has-err="hasErr.yr"
        class="m-4"
        label="Year"
        label-cols-sm="2"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="5"
        label-for="year-horizontal"
      >
        <b-input-group>
          <b-form-input
            @submit.prevent="submitCar"
            id="year-horizontal"
            v-model="cars.year"
            @keydown="violation.year = null"
            :has-err="hasErr.yr"
            required
          />
        </b-input-group>
      </b-form-group>
      <!--    Kilometer-->
      <b-form-group
        :invalid-feedback="violation.km"
        :has-err="hasErr.km"
        class="m-4"
        label="Kilometers"
        label-cols-sm="2"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="5"
        label-for="km-horizontal"
      >
        <b-input-group>
          <b-form-input
            @submit.prevent="submitCar"
            id="km-horizontal"
            v-model="cars.km"
            @keydown="violation.km = null"
            :has-err="hasErr.km"
            required

          />

        </b-input-group>
      </b-form-group>
      <!--Price-->
      <b-form-group
        :invalid-feedback="violation.price"
        :has-err="hasErr.pr"
        class="m-4"
        label="Price"
        label-cols-sm="2"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="5"
        label-for="price-horizontal"
      >
        <b-input-group>
          <b-form-input
            @submit.prevent="submitCar"
            id="price-horizontal"
            v-model="cars.price"
            @keydown="violation.price = null"
            :has-err="hasErr.pr"
            required

          />

        </b-input-group>
      </b-form-group>
      <!--Transmission-->
      <b-form-group
        :invalid-feedback="violation.transmission"
        :has-err="hasErr.tr"
        class="m-4"
        label="Transmission"
        label-cols-sm="2"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="5"
        label-for="trans-horizontal"
      >
        <b-input-group>
          <b-form-input
            @submit.prevent="submitCar"
            id="trans-horizontal"
            v-model="cars.transmission"
            :invalid-feedback="violation.transmission"
            :has-err="hasErr.tr"
            required
          />

        </b-input-group>
      </b-form-group>
      <!--Drivetrain-->
      <b-form-group
        :invalid-feedback="violation.drivetrain"
        :has-err="hasErr.dt"
        class="m-4"
        label="Drivetrain"
        label-cols-sm="2"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="5"
        label-for="drive-horizontal"
      >
        <b-input-group>
          <b-form-input
            @submit.prevent="submitCar"
            id="drive-horizontal"
            v-model="cars.drivetrain"
            :invalid-feedback="violation.drivetrain"
            :has-err="hasErr.dt"
            required />

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
