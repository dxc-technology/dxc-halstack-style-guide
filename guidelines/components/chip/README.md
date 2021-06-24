# Chip

Chips are elements that represent status, complementary information, or association between elements.

## Appereance

A rounded component defined by a label or a graphic element to indicate the information to be communicated to the user. Can be clickable on the icons, to perform an action in form of triggering a dialog or a modification in other element of the user interface. Also, they can be static or use it to categorize a different kinds of data.

![Chip appereance](images/chip_app.png)

### States

The only state that the design system specifies for the chip component is the hover interaction, which is very basic, changing the cursor from default to pointer in the case that the element is clickable. With the static version, the hover action doesn't need to be contemplated.

![Chip states](images/chip_states.png)

## Design tokens

| Tokens                  | Default value |
| ----------------------- | ------------: |
| backgroundColor         |     `#EEEEEE` |
| outlinedColor           |           `-` |
| fontColor               |     `#000000` |
| disabledBackgroundColor |     `#F9F9F9` |
| disabledFontColor       |     `#B1B1B1` |

## Design Specifications

| Property                    |     Value      |
| --------------------------- | :------------: |
| Padding                     |  `20px 10px`   |
| Width                       | `fit-content`  |
| Background Color            |   `#EEEEEE`    |
| Color                       |    `black`     |
| Disabled                    | `0.34 opacity` |
| Border Radius               |     `50%`      |
| Border Width                |     `1px`      |
| Space between text and icon |     `10px`     |
| Icon                        |  `24px 24px`   |

![Chip states](images/chip_specs.png)

### User Interface Design Considerations

- Use the color with some meaning, not for purely decoration
- Do not use chips instead of buttons they have a total different aim in the UI
- Make clear and simple the content of the label
- Use chips to make tasks easier for the user

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/6809ad30-8c5e-44e1-8e93-d85a3aa887f3/variables/

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/chip/README.md)
