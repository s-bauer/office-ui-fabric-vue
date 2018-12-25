<template>
  <div>
    <button
      role="checkbox"
      type="button"
      title="TestTitle"
      id="TestButton"
      class="ms-Checkbox"
      @onfocus="focused = true"
      @onfocusout="focused = false"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
      @click.prevent.stop="onClick"
    >
      <label :style="checkboxLabelStyle" class="ms-Checkbox-label" for="TestButton">
        <div :style="checkboxCheckboxStyle" class="ms-Checkbox-checkbox">
          <i class="ms-Icon ms-Icon--CheckMark" :style="checkboxCheckmarkStyle"></i>
        </div>
        <span :style="checkboxTextStyle" class="ms-Checkbox-text">{{ label }}</span>
      </label>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model } from "vue-property-decorator";

@Component
export default class OfficeCheckbox extends Vue {
  @Model("change", { type: Boolean }) private checked: boolean = false;
  @Prop({ type: Boolean }) private disabled = false;
  @Prop({ type: String }) private label!: string;

  private focused: boolean = false;
  private hovered: boolean = false;

  get checkboxLabelStyle() {
    return { cursor: this.disabled ? "default" : "pointer" };
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

    return { background, borderColor };
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
    return { color: this.disabled ? "#a6a6a6" : "#333333" };
  }

  private onClick() {
    if (!this.disabled) this.$emit("change", !this.checked);
  }
}
</script>

<style>
.ms-Checkbox {
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  outline: none;
  display: block;
  cursor: pointer;
  font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, "Roboto", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 400;
}

.ms-Checkbox-label {
  display: flex;
  margin: 0 -4px;
  align-items: flex-start;
  position: relative;
  user-select: none;
  text-align: left;
}

.ms-Checkbox-checkbox {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-width: 1px;
  border-style: solid;
  margin: 0 4px;
  box-sizing: border-box;
  transition-property: background, border, border-color;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.23, 1);
}

.ms-Checkbox-text {
  margin: 0 4px;
  font-size: 14px;
  line-height: 20px;
}
</style>