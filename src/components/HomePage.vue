<template>
  <div class="home" align="center">
    <h1>{{ msg }}</h1>
    <p>I hope all you guys love cars just as much as we do.</p>
  </div>
</template>

<script lang="ts">
import {Component, Mixins, Prop, Vue} from 'vue-property-decorator';
import GlobalMixin from "@/mixins/global-mixin";

@Component({
  components: {},
})
export default class HomePage extends Mixins(GlobalMixin) {
  @Prop() private msg!: string;
}
</script>
