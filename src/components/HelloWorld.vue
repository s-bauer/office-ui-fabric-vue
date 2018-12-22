<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <OfficeCheckbox v-model="checked" :disabled="disabled" label="Test"></OfficeCheckbox>
    <label>Disabled: </label>
    <OfficeCheckbox v-model="disabled" label="Disabled"></OfficeCheckbox>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import OfficeCheckbox from "./Checkbox/OfficeCheckbox.vue";

@Component({
  components: {
    OfficeCheckbox,
  },
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private checked: boolean = false;
  private disabled: boolean = false;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
