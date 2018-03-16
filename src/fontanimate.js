'use strict';

import Vivus from 'vivus';

/**
 *  Font Animate 0.1.0
 *
 *  Copyright (c) 2018 by Innovato
 *  This code is licensed under MIT license (see LICENSE file for details)
 *
 *  Plugin options:
 *  stroke: the stroke color (hex or color name)
 *  fill: the fill color (hex or color name)
 *  strokeWidth: the stroke width - Integer
 *
 *  This plugin depends on Vivus and accepts all their options as well.
 *  See the official Vivus documentation:
 *  https://github.com/maxwellito/vivus
 */
(function ($) {
  $.fn.fontAnimate = function (options) {
    var settings = $.extend({
      stroke: 'currentColor',
      fill: 'transparent',
      strokeWidth: 1
    }, options);

    this.each(function (i) {
      settings = $.extend(settings, $(this).data());
      var id = "font-animate-" + i;
      $(this).attr('id', id).find('path').each(function () {
        $(this)
          .attr('fill', settings.fill)
          .attr('stroke', settings.stroke)
          .attr('stroke-width', settings.strokeWidth);
      });
      $(this).show();
      new Vivus(id, settings);
    });
  };
}(jQuery));