<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator';
import { BCard } from 'bootstrap-vue';
import BrowseVehiclesForm from '@/components/BrowseVehiclesForm.vue';
import GlobalMixin from '@/mixins/global-mixin';

@Component({
  components: { BrowseVehiclesForm },
})
export default class BrowseVehicles extends Mixins(GlobalMixin) {
  $refs!: {
    carCard: BCard;
  };

  fields = [
    { key: 'id', sortable: true },
    { key: 'make', sortable: true },
    { key: 'model', sortable: true },
    { key: 'year', sortable: true },
    { key: 'km', sortable: true },
    { key: 'price', sortable: true },
    { key: 'transmission', sortable: true },
    { key: 'drivetrain', sortable: true },
    { key: 'numUpVotes', sortable: true },
    { key: 'numDownVotes', sortable: true },
  ];
}
</script>

<template>
  <div>
    <b-card>
      <!--      DONE: Add Car form here once completed-->
      <browse-vehicles-form>
        <b-card
          ref="carCard"
          :fields="fields"
          api-url="http://localhost:3000/cars"
        />
      </browse-vehicles-form>
    </b-card>
  </div>
</template>

<style scoped>

</style>
