# Icons

Icons are symbols used for representation and identification of apps or services at a glance. Icons are most effective when they improve visual interest and grab the user's attention. They guide users while they're navigating a page.

Icons convey immediate meaning and provide shortcuts. Reading text requires more energy than deciphering an icon. Icons can be used to allow for scanning and increase readability.

## When to use icons?

Icon design is a blend of professional and playful. Icons should be simple, approachable, and legible, distinguished by negative space and large rounded corners. Icons should be recognizable and easy to remember. Icons and imagery are noticed before anything else, because we can eye-scan over them faster than text.

You Should use icons When Text Labels Are Overkill. Naturally, you should use an icon when you don’t have enough space for a text label, but this isn’t always the best reason to use an icon. First you should consider creating space in other ways; this might include simplifying the layout or removing unnecessary distractions

### Do’s

* Use icons with meaning text labels
* Use a single icon for clarity
* Use single icon per concept
* Use simple continuous line icons
* Use monochrome line icons
* Use white icon glyphs in object icons
* Use approved business process model
* Do center-align icons when they’re next to text

## When Not to use icons?

You Shouldn’t use icons Simply Because, By using icons unnecessarily you’re creating more visual distractions, and too many visual distractions make it harder for the user to scan through content for useful information.

You Shouldn't use icons when the Design is crowded, However images rarely give us the information we need. Using too many icons will become nothing more than decoration.

### Dont’s

* Icons without labels can be unclear
* Too many icons in UI create visual clutter
* Multiple icon variations should not for the same concept
* Avoid multiple/ complex icon elements with cuts inbetween
* Avoid multicolor line icons
* Don’t use non-white icon glyphs in object icons
* Don’t use unapproved shapes.
* Don’t baseline-align icons to the text



### Allowed formats


| Format | Description |
 | :------  | :-----------|
 | *SVG icon*    | The primary purpose of SVG icons is to define vector-based graphics in XML format. However, for icon browsers consider them as text, so the icons are anti-aliased. With inline SVGs, they are vectors with no anti-aliasing issues even at small sizes, and they look crisper on retina displays.       |
 | *PNG icon*   | A PNG file is an image saved in the Portable Network Graphic (PNG) format, commonly used to store web graphics, digital photographs, and images with transparent backgrounds. It is a raster graphic similar to a . JPG image but is compressed with lossless compression and supports transparency. The advantages of the PNG format include: Lossless compression -- doesn't lose detail and quality after image compression. Supports a large number of colors -- the format is suitable for different types of digital images, including photographs and graphics.       |


*Raster formats* like PNG become pixilated when resized. SVG graphics are resolution-independent. Other image formats may require extra assets/data to fix resolution-based issues, depending on the device. For example, in retina screens, a @2x hack is required to display higher-resolution images.


## Visual properties

<!--  Provide a visual example of each of the subsection of the visual properties guidelines (Follow)

Example of a subsection:

 
 ## Subsection (Property type)

 Introduction (PLain text)

 ![Image]()
 _Caption of the image_

 | Property | Description |
 | :------  | :-----------|
 | Value    | Value       |
 
 
 -->



### Size

Icons have been designed to work best in four sizes: 16px, 24px, and 32px. We should use icons at their originally produced size. These are provided in SVG and PNG files.

 | Size | Description |
 | :------  | :-----------|
 | *16px (small)*    | Small icons are best used when space is limited. We use small icons in our components such as a chevron-down in the select component or a cross-circle-filled in populated text fields.       |
 | *24px (medium)*    | Medium icons are used in the majority of our interface. These are our standard size.       |
 | *32px (large)*    | Large icons are used sparingly to emphasize a concept or when space is plentiful. Wherever it’s used, consider the fidelity of the icon in the space it’s being used.

![icon sizes image](./iconsizes.png.png)       

_Examples of sizes of Icon_



<!--
### Type
-->


### Perspective

Icons should be of 2D. While creating a new icon to contribute to the library, please be sure to avoid dimensional representations. We should be using more authentic and simple as it is, shoudn't be decorating much as it distracts audience.

![Icon_Perspective](./Icon_Perspective.png)       

_Use icon as it is_


![Icon_Perspective_with_dimension](./Icon_Perspective_with_dimension.png)       

_Don’t create icon with dimension_



### Roundness

We should use a consistent corner radius of 2px for rounded shapes. The 2px radius can be increased by a multiple of two when necessary to make the icon’s metaphor understandable or object shape clearly defined. We should use an additional radius to make the metaphor reflect the real form of the object.


![Icon_roundness](./Icon_roundness.png)       

_Use icon as it is_


![Icon_roundness_when_needed](./Icon_roundness_when_needed.png)       

_We should be using roundness when needed to reflect the real form of the metaphor_


![Icon_roundness_when_not_needed](./Icon_roundness_when_not_needed.png)       

_We shouldn't be forcing rounded corners if they don’t work for metaphor._




## Accessibility
All icons should have a text-based equivalent for screen readers. If icon allows interactivity, give it a text label. Screen readers handle the two major icon types differently. Informational icons are read to convey information to users, while decorative icons are ignored. Choose the right icon type for each use case

Icons have different accessibility requirements depending on the context they are being used in. There are three main use cases for icons and how they should be implemented in an accessible way

* Default
* Interactive
* Status/Indicator



## Suggested icon libraries

### Material design
This has principal and guidelines to set of icons available in the library. It has vast collections of Icons, which has verity of collections such as Outlined, Rounded, Filled, Sharp, two tone. It also explicitly explains about implementationr

https://material.io/design/iconography/product-icons.html#design-principles

https://fonts.google.com/icons

### Font Awesome

The library includes a collection of more than 1,500 icons you can use for free. It supports popular web development frameworks such as React, Angular, and Vue as well popular design tools such as Sketch and Adobe apps.

### What happens when an Icon I need is not provided by the suggested libraries?

Go to flat icons and find a incon that follow the guidelines we list below.




-------------------------

[Edit this page on Github](https://github.com/dxc-technology/halstack-style-guide/blob/master/guidelines/components/accordion/README.md)
