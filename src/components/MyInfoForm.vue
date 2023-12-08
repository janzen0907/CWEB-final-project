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
  /**
   * A method to delete user from DB based on email
   * Please reload the backend when deleting
   */
  async handleDelete() {
    try {
      const response = await axios.delete(`http://localhost:3000/traders/${this.traders.email}`);
      // When deleting a user it breaks the browse page until the backend is restarted
      // i tried using VueX but im struggling with it and i tried an event bus that didnt seem to work.
  } catch (error) {
    console.error(error);
  }

  }
}



</script>
<template>

  <div class="m-auto border">
    <h1 class="text-center">My Info</h1>
    <p class="mb-1 text-center">Delete your account by entering your email</p>
    <p>This currently breaks the entire backend. Reload backend to "fix"</p>
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
      <b-row class="justify-content-center">
        <b-button class="m-2" variant="danger" v-b-modal:modal-delete>DELETE YOUR ACCOUNT</b-button>
      </b-row>

    </b-form>
    <b-modal
      id="modal-delete"
      title="Are you sure you want to delete your account?"
      @ok="handleDelete">
      <p>Click Delete if you would like to delete your account. This will get rid of any cars you
        have posted!</p>
      <template #modal-ok>Delete</template>
    </b-modal>
  </div>
</template>


<style scoped>

</style>
