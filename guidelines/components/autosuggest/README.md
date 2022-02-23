## Autosuggest

Suggests a list of options to fill a text input. A user can either select a suggestion or enter their own answer.

## Usage

* Use the autosuggest component to help users select from a list of standard responses when needed
* If the value for the textbox must be chosen from a predefined set of allowed values, use the [select](https://developer.dxc.com/design/guidelines/components/select) component instead
* Keep Suggestions simple and avoid scroll

## States

List option states: **enabled**, **hover**, **active** and **system**.

![List option states examples](images/autosuggest_states_listItem.png)

_List option states examples_

## Anatomy

![Component anatomy](images/autosuggest_anatomy.png)

1. List dialog
2. Text input
3. List option
4. List option value

## Specs

![Component specifications](images/autosuggest_specs.png)

_Component specifications_

The specifications for the autosuggest input can be found in the [input text specs](https://developer.dxc.com/design/guidelines/components/text-input)
### Color

| Component token                     | Element                | Token                   | Value             |
| :---------------------------------- | :--------------------- | :---------------------- | :---------------- |
| `listOptionFontColor`               | List option value      | `color-black`           | #000000           |
| `listOptionDividerColor`            | List option divider    | `color-grey-200`        | #e6e6e6           |
| `listDialogBorderColor`             | List dialog            | `color-grey-400`        | #bfbfbf           |
| `listDialogBackgroundColor`         | List dialog            | `color-white`           | #ffffff           |
| `hoverListOptionBackgroundColor`    | List option:hover      | `color-grey-100`        | #f2f2f2           |
| `focusListOptionBorderColor`        | List option:focus      | `color-blue-600`        | #0095ff           |
| `activeListOptionBackgroundColor`   | List option:active     | `color-grey-300`        | #cccccc           |
| `systemMessageFontColor`            | System message         | `color-grey-700`        | #666666           |
| `errorListDialogFontColor`          | List dialog error      | `color-black`           | #000000           |
| `errorListDialogBackgroundColor`    | List dialog error      | `color-red-50`          | #fff5f6           |
| `errorListDialogBorderColor`        | List dialog error      | `color-red-700`         | #d0011b           |

### Typography

| Component token                     | Element                | Token                   | Value             |
| :---------------------------------- | :--------------------- | :---------------------- | :---------------- |
| `listOptionFontSize`                | List option            | `font-scale-02`         | 0.875rem / 14px   |
| `listOptionFontWeight`              | List option            | `font-weight-regular`   | 400               |
| `listOptionFontStyle`               | List option            | `font-style-normal`     | normal            |

| Property                            | Element                | Token                   | Value             |
| :---------------------------------- | :--------------------- | :---------------------- | :---------------- |
| `font-family`                       | List option            | `font-family-sans`      | Open Sans         |
| `font-weight`                       | List option typed      | `font-bold`             | 600               |
| `font-family`                       | System message         | `font-family-sans`      | Open Sans         |
| `font-size`                         | System message         | `font-scale-02`         | 0.875 / 14px      |
| `font-weight`                       | System message         | `font-regular`          | 400               |

### Border

| Property                            | Element               | Token                   | Value             |
| :---------------------------------- | :-------------------- | :---------------------- | :---------------- |
| `border-width`                      | List dialog           | `border-width-1`        | 1px               |
| `border-radius`                     | List dialog           | `border-radius-medium`  | 0.25rem / 4px     |
| `border-style`                      | List dialog           | `border-style-solid`    | Solid             |
| `border-width`                      | List option divider   | `border-width-1`        | 1px               |
| `border-style`                      | List option divider   | `border-style-solid`    | Solid             |
| `box-shadow`                        | List dialog           | `shadow-default`        | 0 8px 14px -2px rgba(0,0,0,0.1) |
### Spacing

| Property                            | Element               | Token                   | Value             |
| :---------------------------------- | :-------------------- | :---------------------- | :---------------- |
| `padding-top`                       |  List dialog          | `spacing-4`            | 0.25rem / 4px     |
| `padding-bottom`                    |  List dialog          | `spacing-4`            | 0.25rem / 4px     |
| `padding-left`                      |  List option          | `spacing-8`            | 0.5rem / 8px      |
| `padding-right`                     |  List option          | `spacing-8`            | 0.5rem / 8px      |
| `padding-top`                       |  List option          | `spacing-2`            | 0.125rem / 2px    |
| `padding-bottom`                    |  List option          | `spacing-2`            | 0.125rem / 2px    |
| `padding-left`                      |  List option value    | `spacing-8`            | 0.5rem / 8px      |
| `padding-right`                     |  List option value    | `spacing-8`            | 0.5rem / 8px      |

## Links and references

* [React component](https://developer.dxc.com/tools/react/next/#/components/autosuggest)
* [Angular component](https://developer.dxc.com/tools/angular/next/#/components/autosuggest)
* [Adobe XD component](https://xd.adobe.com/view/686bad80-5f5f-47d9-a7e4-9d36ed0cc216-3d38/)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/autosuggest/README.md)
