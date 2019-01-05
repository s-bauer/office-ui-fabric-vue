# Office UI Fabric for Vue
> A Vue.js implementation of Office UI Fabric

[![NPM Version](https://img.shields.io/npm/v/office-vue-fabric.svg)](https://www.npmjs.com/package/office-vue-fabric)
[![NPM License](https://img.shields.io/npm/l/office-vue-fabric.svg)](https://www.npmjs.com/package/office-vue-fabric) \
[![GITHUB Issues Opened](https://img.shields.io/github/issues/s-bauer/office-ui-fabric-vue.svg)](https://github.com/s-bauer/office-ui-fabric-vue/issues)
[![GITHUB Issues Closed](https://img.shields.io/github/issues-closed/s-bauer/office-ui-fabric-vue.svg)](https://github.com/s-bauer/office-ui-fabric-vue/issues) \
[![GITHUB PR Opened](https://img.shields.io/github/issues-pr/s-bauer/office-ui-fabric-vue.svg)](https://github.com/s-bauer/office-ui-fabric-vue/pulls)
[![GITHUB PR Closed](https://img.shields.io/github/issues-pr-closed/s-bauer/office-ui-fabric-vue.svg)](https://github.com/s-bauer/office-ui-fabric-vue/pulls)

## Demo

[This small demo](https://s-bauer.github.io/office-ui-fabric-vue/) gives an overview of all supported components.

## Information

The goal of this project is to build a fully functional Vue.js implementation of 
the [Office UI Fabric components](https://developer.microsoft.com/en-us/fabric#/components). 
It should behave just like the official 
[Office Fabric for React](https://github.com/OfficeDev/office-ui-fabric-react) library, provided by Microsoft. 

In contrast to other **Office Fabric** implementations in Vue.js (which there are only a few uncompleted ones) 
this library tries to use as many of the original unmodified source code from the 
[Office Fabric React](https://github.com/OfficeDev/office-ui-fabric-react) library as possible.

This is achieved by utilizing the [@uifabric/merge-styles](https://www.npmjs.com/package/@uifabric/merge-styles) library
together with some of the source code of [@uifabric/utilities](https://www.npmjs.com/package/@uifabric/utilities), 
[@uifabric/styling](https://www.npmjs.com/package/@uifabric/styling) and [@uifabric/icons](https://www.npmjs.com/package/@uifabric/icons). This allows us utilize the same **Theme** as the 
official react library, meaning all colors, fonts, animations, ... are exactly the same and will always be up-2-date!
In addition this library uses the same CSS styling functions as the official ones. This eliminates the effort required to
convert the styling from the [@uifabric/merge-styles](https://www.npmjs.com/package/@uifabric/merge-styles) format into
plain CSS classes or Vue.js inline styles and any human error that could have occurred during that process.

This library is in early alpha stage. The list of supported components is pretty small right now, but it will expand constantly.

## Usage

Install using npm or yarn

```bash
npm install --save office-vue-fabric

or

yarn add office-vue-fabric
```

Then simply import the library to have global access to the Office Fabric components.

```vue
<template>
  <OfficeButton label="TestButton" primary></OfficeButton>
  <OfficeCheckbox label="TestCheckbox"></OfficeCheckbox>
  <OfficeIcon iconName="BingLogo"></OfficeIcon>
</template>

<script>
import "office-vue-fabric";

export default { name: 'app' }
</script>
```

## Supported Components

Take a look at the [Component Progress Issue](https://github.com/s-bauer/office-ui-fabric-vue/issues/17) to see which components are still missing!

- [Checkbox](https://developer.microsoft.com/en-us/fabric#/components/checkbox)
    - Model: :checked / @change
    - Props: disabled, label
- [Button](https://developer.microsoft.com/en-us/fabric#/components/button)
    - Props: disabled, checked, primary, label
    - Info: ``<button>`` is exposed, so all events and props can be used
- [Label](https://developer.microsoft.com/en-us/fabric#/components/label)
    - Props: disabled, required
    - Slot: text
- [Icon](https://developer.microsoft.com/en-us/fabric#/components/icon)
    - Props: iconName
- [Image](https://developer.microsoft.com/en-us/fabric#/components/image)
    - Info: Take a look at the [Official Documentation](https://developer.microsoft.com/en-us/fabric#/components/image). I implemented all features and the syntax is very similar!
- [TextField](https://developer.microsoft.com/en-us/fabric#/components/textfield)
    - Model: :text / @input
    - Props: label, disabled, multiline, borderless, required, resizable, underlined, inputClassName, iconProps, errorMessage, suffix, prefix, autoAdjustHeight, onChange, onFocus, onBlur
- [ChoiceGroup](https://developer.microsoft.com/en-us/fabric#/components/choicegroup)
    - Props: TODO
    - Model: TODO
- [Toggle](https://developer.microsoft.com/en-us/fabric#/components/toggle)
    - Model: :checked / @change 
    - Props: label, onText, offText, disabled
- [Link](https://developer.microsoft.com/en-us/fabric#/components/link)
    - Props: disabled, href
    - Info: `<button>` or `<a>` is exposed, so all events and props can be used
- [Slider](https://developer.microsoft.com/en-us/fabric#/components/slider)
    - Model: :value / @change
    - Props: disabled, vertical, showValue, min, max, step, label
- [FocusTrapZone](https://developer.microsoft.com/en-us/fabric#/components/focustrapzone)
    - Info: Take a look at the [Official Documentation](https://developer.microsoft.com/en-us/fabric#/components/focustrapzone)
- [Overlay](https://developer.microsoft.com/en-us/fabric#/components/overlay)
    - Props: visible, isDarkThemed


## CI / CD

For information about Continuous Integration (CI) and Continuous Delivery (CD) take a look at the public [Azure DevOps](https://dev.azure.com/simon-bauer-public/office-ui-fabric-vue) project.

## Contribution

Feel free to contribute to this project. \
Make sure to take a look at the [React implementation](https://github.com/OfficeDev/office-ui-fabric-react) provided by Microsoft. 

## License

This library is published under the MIT license.
Usage of the fonts and icons referenced in Office UI Fabric is subject to the terms of the [Microsoft Assets License Agreement](https://static2.sharepointonline.com/files/fabric/assets/microsoft_fabric_assets_license_agreement_sept092017.pdf).
Some parts of the libraries [@uifabric/utilities](https://www.npmjs.com/package/@uifabric/utilities), 
[@uifabric/styling](https://www.npmjs.com/package/@uifabric/styling) and [@uifabric/icons](https://www.npmjs.com/package/@uifabric/icons) are copied into this repository and modified. These can be found in the folders `/src/icons`, `/src/utility` and `/src/styling` and have their own license, which can be found in the directories.
In addition some code is taken from the [Office UI Fabric React](https://github.com/OfficeDev/office-ui-fabric-react) library and slightly modified. These files have a header with their respective license.

