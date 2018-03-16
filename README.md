# Font Animate
Library for adding a drawing animation to Font Awesome 5 icons.

![Font Animate Preview](https://raw.githubusercontent.com/innovato/fontanimate/master/assets/fontanimate-preview.gif)

## Quick start
Several quick start options are available:

- [Download the latest release.](https://github.com/innovato/fontanimate/archive/master.zip)
- Clone the repo: `git clone https://github.com/innovato/fontanimate.git`
- Install with [npm](https://www.npmjs.com/): `npm install fontanimate`
- Install with [yarn](https://yarnpkg.com/): `yarn add fontanimate`

## Usage
Add the dependencies to your HTML:
```html
<script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

Add some [Font Awesome Icons](https://fontawesome.com/icons?d=gallery) (note the `font-animate` class):
```html
<i class="fab fa-500px font-animate"></i>
<i class="fab fa-apple font-animate"></i>
```

Initiate Font Animate:

```javascript
$(document).ready(function () {
  $('.font-animate').fontAnimate();
});
```
Done!

## Options
The plugin options are divided in two parts:
* Font Animate options
* [Vivus](https://github.com/maxwellito/vivus) options (dependency for SVG animation)

### Font Animate options
| Name        | Type     | Description |
|-------------|----------|-------------|
|`stroke`     | string   | The stroke color. E.g. `red`, `#000`, `#00FF00`, [Default: `currentColor` (inherits color)] |
|`fill`       | string   | The fill color. E.g. `red`, `#000`, `#00FF00`, [Default: `transparent`] |
|`strokeWidth`| integer  | The stroke width. Default: `1` |

### Vivus options
Refer to [Vivus](https://github.com/maxwellito/vivus) for animation specific options. All Vivus options are available for use in this library.

#### Example with mixed Font Animate/Vivus options
```javascript
$(document).ready(function () {
  $('.font-animate').fontAnimate({
    stroke: 'red',
    duration: 500 // Vivus specific animation option
  });
});
```

### Options through HTML attributes
It is possible to override the initial options through HTML attributes:
```html
<i data-stroke="red" data-stroke-width="5" data-fill="green" data-duration="1000" class="fab fa-apple font-animate"></i>
```

## Credits
A big thanks to:
- [Vivus](https://github.com/maxwellito/vivus) for the SVG animation library!
- [Font Awesome](https://github.com/FortAwesome/Font-Awesome) for the awesome SVG icons!


## Copyright and license
Code and documentation copyright 2018 [Innovato](https://innovato.nl/). Code released under the [MIT License](https://github.com/innovato/fontanimate/blob/master/LICENSE).
