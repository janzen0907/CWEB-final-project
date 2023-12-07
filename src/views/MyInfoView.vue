<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MyInfoForm from '@/components/MyInfoForm.vue';

@Component({
  components: { MyInfoForm },
})
export default class MyInfo extends Vue {

}
</script>

<template>
  <my-info-form />
</template>

<style scoped>

</style>
