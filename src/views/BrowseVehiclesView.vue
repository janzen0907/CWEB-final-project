<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator';
import { BvTableCtxObject } from 'bootstrap-vue/src/components/table';
import BrowseVehiclesForm from '@/components/BrowseVehiclesForm.vue';
import GlobalMixin from '@/mixins/global-mixin';

@Component({
  components: { BrowseVehiclesForm },
})
export default class BrowseVehicles extends Mixins(GlobalMixin) {
  // any logic for the card would go here
  // TODO: Finish working on this API call currently is not workig
  provider(ctx:BvTableCtxObject):Promise<any> {
    return this.callAPI(`${ctx.apiUrl}`);
  }

  fields=[]
}
</script>

<template>
  <div>
    <b-card>
      <!--      TODO: Add Car form here once completed-->
      <browse-vehicles-form>
        <!--        Emit needed events for the buttons-->
        <b-form
          :api-url="CAR_API"/>
      </browse-vehicles-form>
    </b-card>
  </div>
</template>

<style scoped>

</style>
