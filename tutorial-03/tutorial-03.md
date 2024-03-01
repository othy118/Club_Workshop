# Flexbox Tutorial

## Introduction

* **What is Flexbox?** Flexbox (Flexible Box) is a CSS layout module designed for creating flexible and adaptable web layouts. It excels at aligning items, distributing space, and adapting to different screen sizes.

* **Why use Flexbox?**
    * **Efficiency:** Simplifies layout creation compared to older techniques.
    * **Responsiveness:** Ideal for creating layouts that dynamically adjust to different screen sizes.
    * **Control:** Provides granular control over item placement and sizing.

## Key Concepts

* **Flex Container:** 
    * A parent element with `display: flex` or `display: inline-flex`.
    * Defines the context for the Flexbox layout.
* **Flex Items:**
    * Direct children of a flex container.
    * Laid out according to Flexbox rules.
* **Main Axis:** 
    * Defined by `flex-direction`. Items are arranged along this axis.
    * Can be horizontal (row) or vertical (column).
* **Cross Axis:**
    * Perpendicular to the main axis.
    * Used for alignment and spacing perpendicular to the main flow.

## Flexbox Properties

### Flex Container Properties

* **flex-direction** (`row`, `row-reverse`, `column`, `column-reverse`)
    * Sets the direction of the main axis.
* **flex-wrap** (`nowrap`, `wrap`, `wrap-reverse`)
   * Controls whether items wrap to multiple lines.
* **justify-content** (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`)
    * Aligns items along the main axis.
* **align-items** (`flex-start`, `flex-end`, `center`, `stretch`, `baseline`)
    * Aligns items along the cross axis.

### Flex Item Properties

* **order**
    * Changes the default display order of items.
* **flex-grow**
    * Controls how much an item can grow relative to others.
* **flex-shrink**
    * Controls how much an item can shrink relative to others.
* **flex-basis**
    * Sets an initial size for an item before growing/shrinking.
* **align-self** 
    * Overrides the default cross-axis alignment for an individual item.

## Common Examples

* **Simple Horizontal Layout**
* **Responsive Navigation**
* **Equal Height Columns**
* **Vertical and Horizontal Centering** 

(Provide code examples for each of these)

## Resources

* **CSS Tricks - A Complete Guide to Flexbox:** [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* **MDN Web Docs - Using CSS Flexible Boxes:** [https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
* **Flexbox Froggy:** [https://flexboxfroggy.com/](https://flexboxfroggy.com/) 

## Let's Get Flexible!

Flexbox is a powerful CSS tool.  Experiment and practice to master it for adaptable and elegant web layouts. 