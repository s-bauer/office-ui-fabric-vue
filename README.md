# Office UI Fabric for Vue

## Information

The goal of this project is to build a fully functional Vue.js implementation of 
the [Office UI Fabric components](https://developer.microsoft.com/en-us/fabric#/components). 
It should behave just like the official 
[Office Fabric for React](https://github.com/OfficeDev/office-ui-fabric-react) library, provided by Microsoft. 

In contrast to other **Office Fabric** implementations in Vue.js (which there are only a few uncompleted ones) 
this librarytries to use as many of the original unmodified source code from the 
[Office Fabric React](https://github.com/OfficeDev/office-ui-fabric-react) library.

This is achieved by utilizing the [@uifabric/merge-styles](https://www.npmjs.com/package/@uifabric/merge-styles) library
together with some of the source code of [@uifabric/utilities](https://www.npmjs.com/package/@uifabric/utilities) and 
[@uifabric/styling](https://www.npmjs.com/package/@uifabric/styling). This allows us utilize the same **Theme** as the 
official react library, meaning all colors, fonts, animations, ... are exactly the same and will be always up-2-date!

This library is in early alpha stage. The list of supported components is pretty small right now, but it will expand constantly.

## Supported Components

- Checkbox
    - Model: checked
    - Props: disabled, label
- Button
    - Props: disabled, checked, primary
    - Info: ``<button>`` is exposed, so all events and props can be used
- Label
    - Props: disabled, required

## In-Progress Components

- TextField
- ChoiceGroup
- Icon

## Contribution

Feel free to contribute to this project. 
Make sure to take a look at the [React implementation](https://github.com/OfficeDev/office-ui-fabric-react) provided by Microsoft. 
