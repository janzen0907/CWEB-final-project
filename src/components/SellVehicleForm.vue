<script lang="ts">
import {Vue, Component, Prop, Mixins} from 'vue-property-decorator';
import axios from 'axios';
import Car from '@/models/Car';
import Trader from '@/models/Trader';
import Violation from "@/models/Violation";
import {validate, ValidationError} from "class-validator";
import GlobalMixin from "@/mixins/global-mixin";

@Component({})
export default class SellVehicleForm extends Mixins(GlobalMixin) {
  @Prop({ type: Car, validator: (c) => c instanceof Car })
  readonly car!: Car;

  @Prop({ type: Trader, validator: (t) => t instanceof Trader })
  readonly trader!: Trader;

  cars: Car = new Car();

  traders: Trader = new Trader();

  violation: Violation = new Violation();

  // Display text
  dt = {
    mk: 'Make',
    md: 'Model',
    yr: 'Year',
    km: 'Km',
    pr: 'Price',
    tr: 'Transmission',
    dt: 'Drivetrain',
    sn: 'Seller Name',
    te: 'Email',
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

  /**
   * This method checks to see if all inputs have valid information
   * If validation passes, post to the database
   * If invalid, show errors and don't post
   */
  async submitCar() {
    this.violation = new Violation();

    const errors = await validate(this.cars);
    if (errors.length > 0) {
      const tempVio = new Violation();
      errors.forEach((vio: ValidationError) => {
        Object.assign(tempVio, {
          [vio.property]: vio.constraints![Object.keys(vio.constraints!)[0]],
        });
      });
      console.log(tempVio);
      this.violation = tempVio;
    } else if (this.traders.email) { // Check that the trader email is valid
      axios.post('http://localhost:3000/cars', {
        make: this.cars.make,
        model: this.cars.model,
        year: this.cars.year,
        km: this.cars.km,
        price: this.cars.price,
        transmission: this.cars.transmission,
        drivetrain: this.cars.drivetrain,
        traderEmail: this.traders.email, // Associate the car with the trader by email
        traderName: this.traders.name,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          this.violation = err.data || new Violation();
        });
    } else {
      // Handle the case where trader email is not provided
      alert('Please enter your email before submitting the car details.');
    }
  }

  cancel() {
    this.violation = new Violation();
    this.cars = { ...this.car };
    this.$emit('cancelled', this.car);
  }
}


</script>
<template>
  <div class="m-auto border">
    <h1 class="text-center">Sell Your Car</h1>
    <b-form>
      <!--    Seller Name-->
      <!--      DONE: Add validation for the seller fields-->
      <b-form-group
        :invalid-feedback="violation.name"
        :state="violation.name ? false : null"
        class="m-4"
        :label="dt.sn"
        label-cols-sm="2"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="5"
        label-for="name-horizontal"
      >
        <b-input-group>
          <b-form-input
            :state="violation.name ? false : null"
            id="name-horizontal"
            v-model="traders.name"
            required
          />
        </b-input-group>
      </b-form-group>
      <!--Email-->
      <b-form-group
        :invalid-feedback="violation.email"
        :state="violation.email ? false : null"
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
            :state="violation.email ? false : null"
            id="email-horizontal"
            v-model="traders.email"
            required
          />
        </b-input-group>
      </b-form-group>
      <!--Make-->
      <b-form-group
        :invalid-feedback="violation.make"
        :state="violation.make ? false : null"
        class="m-4"
        :label="dt.mk"
        label-cols-sm="2"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="5"
        label-for="make-horizontal"
      >
        <b-input-group>
          <b-form-input
            :state="violation.make ? false : null"
            id="make-horizontal"
            v-model="cars.make"
            required
          />

        </b-input-group>
      </b-form-group>
      <!--Model-->
      <b-form-group
        :invalid-feedback="violation.model"
        :state="violation.model ? false : null"
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
            :state="violation.model ? false : null"
            id="model-horizontal"
            v-model="cars.model"
            required
          />
        </b-input-group>
      </b-form-group>

      <!--    Year-->
      <b-form-group
        :invalid-feedback="violation.year"
        :state="violation.year ? false : null"
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
            :state="violation.year ? false : null"
            id="year-horizontal"
            v-model="cars.year"
            required
          />
        </b-input-group>
      </b-form-group>
      <!--    Kilometer-->
      <b-form-group
        :invalid-feedback="violation.km"
        :state="violation.km ? false : null"
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
            :state="violation.km ? false : null"
            id="km-horizontal"
            v-model="cars.km"
            required

          />

        </b-input-group>
      </b-form-group>
      <!--Price-->
      <b-form-group
        :invalid-feedback="violation.price"
        :state="violation.price ? false : null"
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
            :state="violation.price ? false : null"
            id="price-horizontal"
            v-model="cars.price"
            required
          />

        </b-input-group>
      </b-form-group>
      <!--Transmission-->
      <b-form-group
        :invalid-feedback="violation.transmission"
        :state="violation.transmission ? false : null"
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
            :state="violation.transmission ? false : null"
            id="trans-horizontal"
            v-model="cars.transmission"
            required
          />

        </b-input-group>
      </b-form-group>
      <!--Drivetrain-->
      <b-form-group
        :invalid-feedback="violation.drivetrain"
        :state="violation.drivetrain ? false : null"
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
            :state="violation.drivetrain ? false : null"
            id="drive-horizontal"
            v-model="cars.drivetrain"
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
