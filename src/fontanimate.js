'use strict';

import Vivus from 'vivus';

/**
 *  Font Animate 0.1.0
 *
 *  Copyright (c) 2018 by Innovato
 *  This code is licensed under MIT license (see LICENSE file for details)
 */
class FontAnimate {

  static init(className, options = {}) {
    var settings = Object.assign({}, options, {
      stroke: 'currentColor',
      fill: 'transparent',
      strokeWidth: 1,
      callback: (obj) => {
      }
    });

    var elements = document.querySelector(className);

    elements.forEach(function (e, i) {
      var id = "font-animate-" + i;


      var elements = e.children

      $(this).attr('id', id).find('path').each(function () {
        $(this)
          .attr('fill', settings.fill)
          .attr('stroke', settings.stroke)
          .attr('stroke-width', settings.strokeWidth);
      });
      new Vivus(id, settings, settings.callback);
    });
  }
}
