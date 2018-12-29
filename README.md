# Office UI Fabric for Vue

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
</template>

<script>
import "office-vue-fabric";

export default { name: 'app' }
</script>
```

## Supported Components

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
    - Props: label, disabled, multiline, borderless, required, resizable, underlined, inputClassName, iconProps, errorMessage
- [ChoiceGroup](https://developer.microsoft.com/en-us/fabric#/components/choicegroup)
    - Props: TODO
    - Model: TODO

## CI / CD

For information about Continuous Integration (CI) and Continuous Delivery (CD) take a look at the public [Azure DevOps](https://dev.azure.com/simon-bauer-public/office-ui-fabric-vue) project.

## Contribution

Feel free to contribute to this project. \
Make sure to take a look at the [React implementation](https://github.com/OfficeDev/office-ui-fabric-react) provided by Microsoft. 
