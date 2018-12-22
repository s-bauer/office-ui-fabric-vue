<template>
  <div>
    <button
      role="checkbox"
      type="button"
      title="TestTitle"
      id="TestButton"
      :style="checkboxStyle"
      @onfocus="focused = true"
      @onfocusout="focused = false"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
      @click.prevent.stop="onClick"
    >
      <label :style="checkboxLabelStyle" for="TestButton">
        <div :style="checkboxCheckboxStyle">
          <i class="ms-Icon ms-Icon--CheckMark" :style="checkboxCheckmarkStyle" aria-hidden="true"/>
        </div>
        <span :style="checkboxTextStyle">Test</span>
      </label>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from "vue-property-decorator";
// import "office-ui-fabric-core/dist/css/fabric.min.css";

@Component
export default class HelloWorld extends Vue {
  @Model("change", { type: Boolean }) private checked: boolean = false;
  @Prop({ type: Boolean }) private disabled = false;

  private focused: boolean = false;
  private hovered: boolean = false;

  private onClick() {
    if (!this.disabled) this.$emit("change", !this.checked);
  }

  get checkboxStyle() {
    return {
      padding: 0,
      margin: 0,
      border: "none",
      background: "none",
      outline: "none",
      display: "block",
      cursor: "pointer",
      fontFamily:
        "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",
      fontSize: "14px",
      fontWeight: "400"
    };
  }

  get checkboxLabelStyle() {
    return {
      display: "flex",
      margin: "0 -4px",
      alignItems: "flex-start",
      cursor: this.disabled ? "default" : "pointer",
      position: "relative",
      userSelect: "none",
      textAlign: "left"
    };
  }

  get checkboxCheckboxStyle() {
    let borderColor = this.disabled ? "#c8c8c8" : "#666666";
    let background;

    if (!this.disabled && this.checked) {
      if (this.hovered || this.focused) {
        borderColor = "#106ebe";
        background = "#106ebe";
      } else {
        borderColor = "#0078d4";
        background = "#0078d4";
      }
    } else if (!this.disabled && !this.checked) {
      borderColor = "#333333";
    } else if (this.disabled && this.checked) {
      borderColor = "#c8c8c8";
      background = "#c8c8c8";
    }

    return {
      display: "flex",
      flexShrink: 0,
      alignItems: "center",
      justifyContent: "center",
      height: "20px",
      width: "20px",
      borderWidth: "1px",
      borderStyle: "solid",
      margin: "0 4px",
      boxSizing: "border-box",
      transitionProperty: "background, border, border-color",
      transitionDuration: "200ms",
      transitionTimingFunction: "cubic-bezier(.4, 0, .23, 1)",
      background,
      borderColor
    };
  }

  get checkboxCheckmarkStyle() {
    let color = this.checked && this.disabled ? "#f4f4f4" : "#ffffff";
    let opacity = this.checked ? 1 : 0;

    if (this.hovered && !this.checked && !this.disabled) {
      color = "#a6a6a6";
      opacity = 1;
    }

    return { color, opacity };
  }

  get checkboxTextStyle() {
    return {
      color: this.disabled ? "#a6a6a6" : "#333333",
      margin: "0 4px",
      fontSize: "14px"
    };
  }
}
</script>