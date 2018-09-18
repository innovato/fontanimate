'use strict';

import Vivus from 'vivus';

/**
 *  Font Animate 0.1.0
 *
 *  Copyright (c) 2018 by Innovato
 *  This code is licensed under MIT license (see LICENSE file for details)
 */
(function ($) {
  $.fn.fontAnimate = function (options) {
    var settings = $.extend({
      stroke: 'currentColor',
      fill: 'transparent',
      strokeWidth: 1,
      callback: (obj) => {}
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
      new Vivus(id, settings, settings.callback);
    });
  };
}(jQuery));