<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SellVehicleForm from '@/components/SellVehicleForm.vue';
import Car from '@/models/Car';

@Component({
  components: { SellVehicleForm },
})
export default class SellView extends Vue {

}
</script>

<template>
  <div>
    <sell-vehicle-form />
  </div>

</template>

<style scoped>

</style>
