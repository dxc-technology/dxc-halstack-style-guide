# Tag

The Tag represents resources and global terms to identify and linked with a text section to provide to the user more context and information regarding a topic. It usually appears in the top or bottom of the section and multiple tags can be concatenated to generate a series of resources displayed with a visual hierarchy that calls the user's attention.

## Appearance

The tag appearance is similar to the button one (in raised mode) which gives a hint of the interactivity of the component, with a shadow that foregrounded the component calling the user's attention. In some cases there will be a link to a resource completing the information displayed on the page, in others there will be a simple representation of information but it will give to the user an overview resume of the content of the section/area that wants to be represented.

By default, the tag can include a label or/and an icon to represent the term and what is behind it.

### Modes

There are no predefined modes for this component. The user has the option to customize the background of the icon placeholder that by default will be the same color as the default value.

![Modes of the tag component](images/tag_modes.png)

### States

Also, this component is static, which means that there is only one difference between the default and hover state, changing the cursor from the default to the pointer cursor. The tag is merely a link to other resource or a place to display some information, so it is not intended that the flow of the component consider all the different states.

## Design tokens

| Tokens          | Default value |
| --------------- | ------------: |
| backgroundColor |     `#FFFFFF` |

As the Tag component is using the Box to be build, the values for the background are inherited from the definition in the component. By default, the background color is white and not themable, so it will be the same for both components.
The only way to customize the visuals of the tag component is using his own props for a specific background area.

## Design Specifications

| Property            |         Value |
| ------------------- | ------------: |
| Recommended Margin  | `30px - 12px` |
| Min width icon area |        `48px` |
| Margin icon area    |        `12px` |
| Min height          |        `43px` |
| Max width           |        `100%` |
| Font size           |        `14px` |
| Font weight         |     `Regular` |
| Icon size           |     `24x24px` |
| Text transform      |   `Uppercase` |

![Design specification for the tag component](images/tag_specs.png)

### Icon Usage

The icon can be included inside the tag component or not. It is apt to the user if he wants to represent the tag resource with a visual representation or just pure text. On the other hand, the text is optional too, so it can be the case that the tag element has only an icon or only a label.

The combination of both can be represented too, and the icon will lead the component representation if the position selected is before the label. It will be at the end if on the opposite the after position value is set.

As it is mentioned in this document, the background color of the icon area can change accordingly to the definition from the user, but please, make it consistent with the application and with the accessibility guidelines for the color contrast. That election is the user's responsibility, so keep this point in mind.

### User Interface Design Considerations

- Use tag for highlight properties of a section that want to remark
- Make consistent use of the component accross the application
- Be responsible of the use of background color and icons
- If there are multiple tags, make sure to space them properly

## Links and references

- https://xd.adobe.com/view/23e2cca4-5021-490a-a548-e99a9b4a2006-76b1/screen/9ee5fa2b-f1b0-4c24-b5b4-e2656c45a730/variables/

____________________________________________________________

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/tag/README.md)
