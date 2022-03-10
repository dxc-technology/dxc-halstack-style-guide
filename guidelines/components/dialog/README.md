# Dialog

A modal dialog is a message box or child window that requires user interaction before returning to the parent window. These boxes appear on top of the open parent window that is currently displayed on the screen.

## Usage


* The dialog always should have a title to introduce the actions or information that will get displayed on the screen  
* Can contain a descriptive text or a phrase related to the action that triggered the dialog
* Can have some combinations of actions, like buttons to accept/cancel the action. There can be one, two or more buttons
* If the dialog is not including a cancel action, provide a way to close it
* Modal dialog boxes should overlay only a portion of the underlying page to keep the user oriented within the workflow

 

## Anatomy

![Anatomy of the dialog component](images/dialog_anatomy.png)

1. Dialog container
2. Title
3. Close action
4. Dialog actions
5. Content

## Content

![Example of a dialog using Halstack components as content](images/dialog_content.png)

_Example of a dialog using Halstack components as content_

Any content (Halstack components or custom) can be placed inside the dialog component. Dialog tasks should be direct and easy to complete.

* Don’t use to display complex or large amounts of data.
* Don’t recreate a full app or page in a dialog
* Try always to avoid scrolling


## Overlay

![Example of the overlay usage](images/dialog_overlay.png)

_Example of the overlay usage_

The overlay element makes possible to get the user attention into the dialog creating a layer between the actual application and the modal information showed in the user interface.


## Design Specifications

![Design specifications for dialog component](images/dialog_specs.png)

_Design specifications for dialog component_

### Color

| Component token                | Element                     | Core token                    | Value                  |
| :----------------------------- | :-------------------------  | :---------------------------  | :--------------------  |
| `overlayColor`                 | Overlay                     | `color-grey-800-a`            | #000000b3              |
| `backgroundColor`              | Container                   | `color-white`                 | #ffffff                |
| `boxShadowColor`               | Container shadow            | -                             | rgba(0, 0, 0, 0.2)     |
| `closeIconColor`               | Icon close                  | `color-black`                 | #000000                |
| `closeIconBackgroundColor`     | Icon close                  | `none`                        | none                   |
| `closeIconBorderColor`         | Icon close                  | `none`                        | none                   |

### Typography

| Property                       | Element                     | Core token                    | Value                    |
| :----------------------------- | :-------------------------  | :---------------------------  | :----------------------- |
| `font-family`                  | Title                       | `font-family-sans`            | 'Open Sans, sans-serif'  |
| `font-size`                    | Title                       | `font-scale-05`               | 1.5rem / 24px            |
| `font-weight`                  | Title                       | `font-weight-semibold`        | 600                      |
| `fontFamily`                   | Content                     | `font-family-sans`            | 'Open Sans, sans-serif'  |
| `fontSize`                     | Content                     | `font-scale-03`               | 1rem / 16px              |
| `fontWeight`                   | Content                     | `font-weight-regular`         | 400                      |


### Border

| Component token                | Element                     | Core token                    | Value           |
| :----------------------------- | :-------------------------  | :---------------------------  | :-------------  |
| `closeIconBorderThickness`     | Icon close                  | `border-width-0`              | 0px             |
| `closeIconBorderStyle`         | Icon close                  | `border-style-solid`          | solid           |
| `closeIconBorderRadius`        | Icon close                  | `border-radius-none`          | 0               |


| Property                 | Element          | Core token                 | Value            |
| :----------------------- | :--------------- | :------------------------- | :--------------- |
| `border-width`           | Container        | `border-width-0`           | 0                |
| `border-style`           | Container        | `border-style-none`        | none             |
| `border-radius`          | Container        | `border-radius-medium`     | 0.25rem / 4px    |

### Spacing

| Property                 | Element          | Core token                 | Value            |
| :----------------------- | :--------------- | :------------------------- | :--------------- |
| `margin-right`           | Title icon       | `spacing-12`               | 0.75rem / 12px   |
| `margin-bottom`          | Title            | `spacing-24`               | 1.5rem / 24px    |


### Size

| Property                 | Element          | Core token                 | Value            |
| :----------------------- | :--------------- | :------------------------- | :--------------- |
| `min-width`              | Container        | -                          | 800px            |
| `max-width`              | Container        | -                          | 80%              |
| `width`                  | Close action     | -                          | 24px             |
| `height`                 | Close action     | -                          | 24px             |

### Overlay

| Component token          | Element          | Core token                 | Value            |
| :----------------------- | :--------------- | :------------------------- | :--------------- |
| `overlayOpacity`         | Overlay          | -                          | 0.7              |

| Property                 | Element          | Core token                 | Value            |
| :----------------------- | :--------------- | :------------------------- | :--------------- |
| `width`                  | Overlay          | -                          | 100vw            |
| `height`                 | Overlay          | -                          | 100vh            |


### Padding

| Padding             | Value  |
| :------------------ | :----- |
| `xxsmall`           | 6px    |
| `xsmall`            | 16px   |
| `small` _(default)_ | 24px   |
| `medium`            | 36px   |
| `large`             | 48px   |
| `xlarge`            | 64px   |
| `xxlarge`           | 100px  |

And also apply different values to each side of the component:
`top` `bottom` `left` `right`

## Accesibility

### WCAG

* Understanding WCAG 2.2 - [2.1.2 No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
* Understanding WCAG 2.2 - [2.4.3 Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)

### WAI-ARIA

* WAI-ARIA Authoring practices 1.2 - [3.9 Dialog (Modal)](https://www.w3.org/TR/wai-aria-practices-1.2/#dialog_modal)
* WAI-ARIA Authoring practices 1.2 - [Modal Dialog Example](https://www.w3.org/TR/wai-aria-practices-1.2/examples/dialog-modal/dialog.html)


## Links and references

* [React CDK component](https://developer.dxc.com/tools/react/next/#/components/dialog)
* [Angular CDK component](https://developer.dxc.com/tools/angular/next/#/components/dialog)
* [Adobe XD component](https://xd.adobe.com/view/533e8a6e-4ed4-4469-a8f8-6ad264d86822-066d/)

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/dialog/README.md)
