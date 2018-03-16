# Font Animate
Library for adding a drawing animation for Font Awesome icons.

## Usage
Add the dependencies to your HTML:
```html
<script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

Add some Font Awesome Icons (note the `font-animate` class):
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
| Name        | Type     | Description |
|-------------|----------|-------------|
|`stroke`     | string   | The stroke color. E.g. `red`, `#000`, `#00FF00`, [Default: `currentColor` (inherits color)] |
|`fill`       | string   | The fill color. E.g. `red`, `#000`, `#00FF00`, [Default: `transparent`] |
|`strokeWidth`| integer  | The stroke width. Default: `1` |

Refer to [Vivus](https://github.com/maxwellito/vivus) for animation-specific options. All Vivus options are available for use in this library.

### Example with mixed Font Animate/Vivus options
```javascript
$(document).ready(function () {
  $('.font-animate').fontAnimate({
    stroke: 'red',
    start: 'autostart' // Vivus-specific animation option
  });
});
```

## Credits
A big thanks to:
- [Vivus](https://github.com/maxwellito/vivus) for the SVG animation library!
- [Font Awesome](https://github.com/FortAwesome/Font-Awesome) for the awesome SVG icons!


## Copyright and license
Code and documentation copyright 2018 [Innovato](https://innovato.nl/). Code released under the [MIT License](https://github.com/innovato/fontanimate/blob/master/LICENSE).