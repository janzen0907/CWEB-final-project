<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BrowseVehiclesForm from '@/components/BrowseVehiclesForm.vue';

@Component({
  components: { BrowseVehiclesForm },
})
export default class BrowseVehicles extends Vue {
// any logic for the card would go here
}
</script>

<template>
  <div>
    <b-card>
      <!--      TODO: Add Car form here once completed-->
      <browse-vehicles-form>
        <!--        Emit needed events for the buttons-->
      </browse-vehicles-form>
    </b-card>
  </div>
</template>

<style scoped>

</style>
