//
// Patched for React-compatibility.
// AUI-3831: https://ecosystem.atlassian.net/browse/AUI-3831
//

(function ($) {
  'use strict';

  $.fn.tooltip = function (options) {

    // In order for this plugin to work properly with a collection of elements, we need to
    // return the entire collection.

    return this.each(function(){
      var $this = $(this);
      var allOptions = $.extend({}, $.fn.tooltip.defaults, options);

      // Pass string values straight to tipsy
      if (typeof options === 'string') {
        $this.tipsy(options);

        if(options === 'destroy'){
          if(allOptions.live){
            $($this.context).off('.tipsy', $this.selector);
          } else {
            $this.unbind('.tipsy');
          }
        }
        return;
      }

      $this.tipsy(allOptions);

      if (allOptions.hideOnClick && (allOptions.trigger === 'hover' || !allOptions.trigger && $this.tipsy.defaults.trigger === 'hover')) {
        var onClick = function() {
          $this.tipsy('hide');
        };

        if (allOptions.live) {
          $($this.context).on('click.tipsy', this.selector, onClick);
        } else {
          $this.bind('click.tipsy', onClick);
        }
      }
    });
  };

  $.fn.tooltip.defaults = {
    opacity: 1.0,
    offset: 1,
    delayIn: 500,
    hoverable: true,
    hideOnClick: true
  };

}(AJS.$));
