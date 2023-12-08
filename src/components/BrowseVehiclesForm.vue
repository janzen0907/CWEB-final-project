<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import axios from 'axios';
import oauthSignIn from '@/assets/GoogleAuth';
import Car from '@/models/Car';
import Trader from '@/models/Trader';
import store from '@/store';


@Component({})
export default class BrowseVehicles extends Vue {
  //   Add the props in as needed everything to fill this will be an API call to the DB
  @Prop({ type: Car, validator: (c) => c instanceof Car })
  readonly car!: Car;

  @Prop({ type: Trader, validator: (t) => t instanceof Trader })
  readonly trader!: Trader;

  cars: Car = new Car();

  traders: Trader = new Trader();

  loading = true;

  /**
   * Getting the cars from the database
   */
  async fetchCarData() {
    const response = await fetch('http://localhost:3000/cars');
    const data = await response.json();
    this.cars = data;
    this.loading = false;
  }


  // Testing
  getAccessTokenFromUrl() {
    // Get the access token for the user from google
    const hash = window.location.hash.substring(1);
    const urlParams = new URLSearchParams(hash);
    const accessToken = urlParams.get('access_token');
    console.log(`Access Token: ${accessToken}`);
    return accessToken;
  }

  /**
   * Takes in the access token which allows us to get the user's name and email from their google account
   * @param accessToken   Access token from the url
   */
  getUserInfo(accessToken: any) {
    fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`User's Email:${data.email}`);
        console.log(`User's Name: ${data.name}`);
        console.log(accessToken);

        // Handle the trader
        this.handleTrader(data.email, data.name);
        console.log(data.name, data.email);
        this.$store.commit('setUser', data);
      });
  }

  /**
   * Calls Google Oauth from assets and saves access token to local storage
   */
  googleSignIn() {
    oauthSignIn(store);
    console.log(store.getters.isAuthenticated);
    const accessToken = this.getAccessTokenFromUrl();
    if (accessToken !== 'null') {
      localStorage.setItem('isAuthenticated', 'true');
      this.getUserInfo(accessToken);
    }
  }


  /**
   * This method checks if they are in the Trader DB
   * If they are, post the email and name of the Trader
   * If they aren't, catch the error
   * @param newEmail  Email of the trader
   * @param newName   Full name of the trader
   */
  async handleTrader(newEmail: string, newName: string) {
    // Check to see if the user already exists
    const response = await axios.get('http://localhost:3000/traders', {
      params: {
        email: newEmail,
      },
    });
    if (this.traders.email !== newEmail) {
      await axios.post('http://localhost:3000/traders', {
        email: newEmail,
        name: newName,
      })
        // We should probably change this eventually but for now just ignore the 500
        // its because a user with that email is already in the DB
        .catch((err) => {
          if (err.response && err.response.status === 500) {
            console.log('Ignore the error');
          } else {
            throw err;
          }
        });
    }
  }


  // Get to see number of likes
  // Post to the database
  /**
   * Send a put request to the database to increment the amount of up votes a vehicle has
   */
  async like() {
    try {
      const response = await axios.put(`http://localhost:3000/cars/${this.cars.id}`);
    } catch (err) {
      console.log(err);
    }
    // async like() {
    //   try {
    //     const currentUpVotes = this.cars.numUpVotes;
    //     console.log(currentUpVotes);
    //     // await this.fetchCarData();
    //     const idString = this.cars.id || '';
    //     console.log(idString);
    //     const result = await fetch(`http://localhost:3000/cars/${idString}`, {
    //       method: 'PUT',
    //       body: JSON.stringify(this.cars.numUpVotes + 1),
    //       headers: { 'Content-Type': 'application/json; charset=utf-8' },
    //     });
    //     console.log(result);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // eslint-disable-next-line no-shadow
    // const tempCar = this.cars.find((tempCar: { id: number; }) => tempCar.id === carID);


    // const currentUpVotes = this.cars.numUpVotes;
    // const currentID = this.cars.id;
    //   console.log(currentUpVotes);
    //   const incrementedUpVotes = currentUpVotes + 1;
    //   console.log(incrementedUpVotes);
    //
    //   await this.postLikes(incrementedUpVotes, currentID);
    // } catch (error) {
    //   console.error('Error fetching/updating upvotes:', error);
    // }


    // async postLikes(upVotes: number, id: number) {
    //   try {
    //     await axios.put(`http://localhost:3000/cars/${id}`, {
    //       numUpVotes: upVotes,
    //     });
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }
  }

  /**
   * Called when the page is loaded to immediately load the cars from the database
   */
  mounted() {
    this.fetchCarData();

    const accessToken = this.getAccessTokenFromUrl();
    if (accessToken !== 'null') {
      this.getUserInfo(accessToken);
    } else { /* empty */
    }

  }
}


</script>
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
            <b-row>
              <b-col>
                <b-button variant="success" size="lg" class="mb-3" v-b-modal:modal-1>Rate this
                  seller
                </b-button>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="6">
                <p>Seller Name: {{ carLoop.traderName }}</p>

              </b-col>
              <b-col cols="6">
                <label for="rating-inline">Seller Rating:</label>
                <!--                TODO: Get rating from DB per seller-->
                <b-form-rating id="rating-inline" inline value="4" :readonly="true" />
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-button class="m-3" @click="like" variant="info">


                  <b-icon icon="hand-thumbs-up" />
                  <p>{{ carLoop.numUpVotes }}</p>
                </b-button>

              </b-col>
              <b-col cols="6">
                <!--  TODO:    Write the dislike method-->
                <b-button class="m-3" @click="dislike" variant="danger">
                  <b-icon icon="hand-thumbs-down" />
                  <p>{{ carLoop.numDownVotes }}</p>
                </b-button>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-modal id="modal-1" title="Please Sign In to continue" @ok="googleSignIn">
      <p>Please sign in to your Google Account</p>
      <!--                  Google sign in method-->
      <template #modal-ok>Sign in</template>
    </b-modal>
    <!--    hand-thumbs-up-->
    <!--hand-thumbs-down-->
  </div>
</template>
<style scoped/>
