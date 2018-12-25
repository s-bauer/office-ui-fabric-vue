<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <OfficeCheckbox v-model="disabled" label="Disabled"></OfficeCheckbox>
    <hr>
    <OfficeCheckbox v-model="checked" :disabled="disabled" label="Checkbox"></OfficeCheckbox>
    <OfficeButton label="TestButton" :disabled="disabled" style="margin: 5px;"></OfficeButton>
    <OfficeButton label="TestButton" :primary="true" :disabled="disabled" style="margin: 5px;"></OfficeButton>
      <OfficeLabel>TestLabel</OfficeLabel>
  </div>
</template>

<script lang="ts">
    import OfficeLabel from "@/components/Label/OfficeLabel.vue";
    import {Component, Prop, Vue} from "vue-property-decorator";
    import OfficeButton from "./Button/OfficeButton.vue";
    import OfficeCheckbox from "./Checkbox/OfficeCheckbox.vue";

    @Component({
  components: {
      OfficeLabel,
    OfficeCheckbox,
    OfficeButton
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
