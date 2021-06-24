# Image usage

Images are used all across the design system documentation:

* [Creating and exporting images](#creating-and-exporting-images)
     * [Sizes](#sizes)
     * [Background](#background)
     * [Alignment and padding](#alignment-and-padding)
     * [File type](#file-type)
     * [Naming](#naming)
* [Specification images](#specification-images)
     * [Anatomy](#anatomy)
     * [Component specs](#component-specs)
* [Include images in the documentation markdown](#include-images-in-the-documentation-markdown)
     * [Image URL](#image-url)
     * [Alternative text](#alternative-text)

## Creating and exporting images

When creating image content for the Halstack documentation stick to the following:

### Sizes

All images present in the documentation have a predefined size depending on the content and purpose.

| Item         | Purpose                                                       | Width (px)    |   
| ------------ |-----------------------------------------------------------    | ------------- |
| `miniature`  | component miniature<sup>(*)</sup>                             | 272           |
| `half`       | Half width image, small components and cropped images         | 960           |
| `medium`     | Medium width image, standard components                       | 1440          |
| `large`      | Large width image, large components or big number of items    | 1920          |

(*)`miniature` image size is always 272x150px

### Background

| Item                       | Value          |
| -------------------------- | -------------- |
| `miniature`                | transparent    |
| `half`, `medium`, `large`  | #fafafa        |

### Alignment and padding

The `half`, `medium` and `large` images meant for documentation pages should follow the same principles:

* Be **center aligned**
* Have **80px fom the top border** of the background container
* Leave **96px to the bottom border** of the container
* **Don't apply any border radius** to the image container

### File type

Images can be exported in `PNG`, `SVG` formats:

#### PNG

* PNG is preferred for raster-graphics (to show component examples).
* They are a lossless image format, which means when they are compressed, they don’t lose any data. They also allow for alpha transparency.

:heavy_exclamation_mark: **Note**: Text inside of a png is not accessible and therefore a PNG should never contain important information that cannot be accessed elsewhere on the page.

#### SVG

* SVG (Scalable Vector Graphic) is preferred for vector-graphics.
* Use an SVG file format when you have a flat, relatively simple asset such as logos, icons or basic shapes. Accessible text inside SVGs is possible but long strands of copy should be avoided.

#### Exporting images from the design software

Some of the most popular design softwares image exporting guidelines:

* [Adobe XD](https://helpx.adobe.com/xd/help/export-design-assets.html)
* [Sketch](https://www.sketch.com/docs/importing-and-exporting/)
* [Figma](https://help.figma.com/hc/en-us/articles/360040028114-Guide-to-exports-in-Figma)

### Naming

In order to improve the consistency and the readability across the multiple files follow always the same naming convention.

#### Component images

For images updated or added to an existing/new component:

```
component_name.png 
```

![Example of the images folder of the select component](images/image/naming_example.png)

_Example of the images folder of the select component_

When needed, multiple words can be used in order to make the file name understandable:

```
component_name_other.png 
```

#### Principles

For images updated or added to an existing/new principle:

```
principle_name.png 
```

#### Miniatures

For miniature images:

```
miniature.png 
```


## Specification images

### Anatomy

Anatomy images help the reader to understand the individual parts of the whole

![Example of an anatomy image](images/image/specifications_anatomy.png)

_Example of an anatomy image_

* Number indicators are 24px sized circles with a 12px `font-size` label centered inside
* Place the number indicators 24px form the edge of the component container
* The line to the component element shoud be center aligned with the element and the number indicator


#### Anatomy items specs

| Property            | Element         | Value (HEX) |
| ------------------- | --------------- | ----------  |
| `background-color`  | Circle          | #0067b3     |
| `color`             | Line            | #0067b3     |
| `color`             | Label           | #ffffff     |

### Component specs

Technical images for design specifications follow the same general rules than the other image content in the documentation.

![Example of the date component specification image](images/image/specifications_component_specs.png)

_Example of the date component specification image_

#### Lines and measurements

![Specification items example](images/image/specifications_items.png)

_Specification items example_

##### Paddings and margins

* Use dotted lines and overlays to represent all the external and internal spacing units
* Avoid mixing the direction of the overlays in the same element (if overlays are place horizontally, don't mix with vertical)
* Try to place always the measurements outside the component, 8px from the border
* Place the measure text 8px from the measurement line

##### Border

* For `border-radius` use a squad 8px form the border of the element, and place the measurement text aligned with the rest of the component measurements
* For `border-width` use a 24x16px block placed always centered with the line stroke

##### Item sizes

* For items `width` and `height` properties, a sized squeare should be use drowing a direct line to the measure
* Measures using sized squares should be always aligned with the resto of the specs items

#### Specification item specs

##### Color

| Property            | Element         | Value (HEX) |
| ---------------     | ----------      | ----------  |
| `color`             | Line            | #ff74e8     |
| `color`             | Squad           | #ff74e8     |
| `color`             | Sized square    | #ff74e8     |
| `background color`  | Overlay         | #ff74e880   |
| `background color`  | Block           | #ff74e8     |

##### Typography

| Property            | Element         | Value (px)  |
| ---------------     | ----------      | ----------  |
| `font-size`         | Measurement     | 14          |
| `font-size`         | Squad           | 14          |
| `font-size`         | Sized square    | 14          |
| `font-size`         | Block           | 10          |
| `font-weight`       | All             | 400         |

##### Border

| Property            | Element         | Value       |
| ---------------     | ----------      | ----------  |
| `border`            | Line            | 1px dotted  |
| `border`            | Squad           | 1px solid   |
| `border`            | Sized square    | 1px solid   |


## Include images in the documentation markdown

### Image URL

Link the images to the page images folder:

```
![](images/your_image_name.png)
```

### Alternative text

Always provide an alternative text in the images for accessibility purposes:

```
![alt text goes here](image URL goes here)
```

Add also a caption below the image matching the `Alt text` used:

```
![alt text goes here](image URL goes here)

_caption matching the alt text goes here_
```



