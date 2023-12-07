<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import axios from 'axios';
import Car from '@/models/Car';
import Trader from '@/models/Trader';

@Component({})
export default class MyInfoForm extends Vue {
  @Prop({ type: Car, validator: (c) => c instanceof Car })
  readonly car!: Car;

  @Prop({ type: Trader, validator: (t) => t instanceof Trader })
  readonly trader!: Trader;

  cars: Car = new Car();

  traders: Trader = new Trader();

  handleDelete() {
    axios.delete(`http://localhost:3000/traders/${this.traders.email}`, {});
  }
}


// A method to delete user from DB based on email
</script>
<template>

  <div class="m-auto border">
    <h1 class="text-center">My Info</h1>
    <p class="mb-1 text-center">Delete your account by entering your email</p>
    <b-form>
      <b-form-group
        label="Email"
        class="m-4"
        label-cols-sm="2"
        label-cols-lg="3"
        content-cols-sm
        content-cols-lg="5"
        label-for="email-horizontal">

        <b-input-group>
          <b-form-input
            id="email-horizontal"
            placeholder="Enter your email"
            v-model="traders.email"
          />
        </b-input-group>
      </b-form-group>
      <!--      TODO: make this centered-->
      <b-row class="justify-content-center">
        <b-button class="m-2" variant="danger" @click="handleDelete">DELETE YOUR ACCOUNT</b-button>
      </b-row>

    </b-form>

  </div>
</template>


<style scoped>

</style>
