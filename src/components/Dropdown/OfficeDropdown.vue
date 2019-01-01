<template>
    <div :class="classNames.root">
        <OfficeLabel v-if="label" :class="classNames.label" :id="id + '-label'" :for="id" :required="required"
                     :style="labelStyle"/>
        <div ref="dropdown"
             :id="id"
             :tabindex="disabled ? -1 : 0"
             :class="classNames.dropdown">
                <span :id="optionId" :class="classNames.title">
                    <span v-if="selectedOptions.length">{{placeholder}}</span>
                    <span v-else> {{selectedOptions.map(o => o.text).join(multiSelectDelimiter)}} </span>
                </span>
            <span :class="classNames.caretDownWrapper">
                    <OfficeIcon iconName="ChevronDown" :class="classNames.caretDown"/>
                </span>
        </div>
        <div v-if="isOpen">
            <!-- TODO -->
        </div>
        <div v-if="errorMessage && errorMessage.length > 0" :class="classNames.errorMessage">{{errorMessage}}</div>
    </div>
</template>

<script lang="ts">
    import {getStyles} from "@/components/Dropdown/OfficeDropdown.styles";
    import {IOfficeIconProps} from "@/components/Icon/OfficeIcon.types";
    import OfficeIcon from "@/components/Icon/OfficeIcon.vue";
    import OfficeLabel from "@/components/Label/OfficeLabel.vue";
    import {loadTheme} from "@/styling";
    import {getId} from "@/utility/object";
    import {mergeStyleSets} from "@uifabric/merge-styles";
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component({
        components: {OfficeLabel, OfficeIcon}
    })
    export default class OfficeDropdown extends Vue implements IOfficeIconProps {
        @Prop({type: String, default: null}) public label?: string;
        @Prop({type: String, default: ", "}) public multiSelectDelimiter!: string;
        @Prop({type: String, default: ""}) public placeholder!: string;
        @Prop({type: Boolean, default: false}) public required!: string;
        @Prop({type: Boolean, default: false}) public disabled!: string;

        private id: string = getId("Dropdown");
        private isOpen: boolean = false;

        private get classNames() {
            return mergeStyleSets(getStyles({
                theme: loadTheme({}),
                disabled: this.disabled,
                required: this.required,
                isOpen: this.isOpen
            }));
        }
    }
</script>
