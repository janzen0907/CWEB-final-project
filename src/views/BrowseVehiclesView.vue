<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator';
import { BvTableCtxObject } from 'bootstrap-vue/src/components/table';
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

  // any logic for the card would go here
  // TODO: Finish working on this API call currently is not workig
  provider(ctx: BvTableCtxObject): Promise<any> {
    return this.callAPI(`${ctx.apiUrl}`);
  }

  get cars() {
    return this.$refs.carCard.localItems;
  }

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
      <!--      TODO: Add Car form here once completed-->
      <browse-vehicles-form>
        <!--        Emit needed events for the buttons-->
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
