<template>
  <div class="hello" align="center">
    <h1>{{ msg }}</h1>
    <p>
      I hope all you guys love cars just as much as we do.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class HomePage extends Vue {
  @Prop() private msg!: string;
}
</script>
