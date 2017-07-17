//
// Patched for React-compatibility.
//
// Explicitly sets spinner data explicitly
// and removes data on spinner.stop()
// to prevent memory leaks in $.cache
//
(function($) {
  $.fn.spin = function(optsOrPreset, opts) {
    var preset, options;

    if (typeof optsOrPreset === 'string') {
      if (! optsOrPreset in $.fn.spin.presets) {
        throw new Error("Preset '" + optsOrPreset + "' isn't defined");
      }
      preset = $.fn.spin.presets[optsOrPreset];
      options = opts || {};
    } else {
      if (opts) {
        throw new Error('Invalid arguments. Accepted arguments:\n' +
        '$.spin([String preset[, Object options]]),\n' +
        '$.spin(Object options),\n' +
        '$.spin(Boolean shouldSpin)');
      }
      preset = $.fn.spin.presets.small;
      options = $.isPlainObject(optsOrPreset) ? optsOrPreset : {};
    }

    if (window.Spinner) {
      return this.each(function() {
        var $this = $(this);
        var spinner = $this.data("spinner");

        if (spinner) {
          spinner.stop();
          $this.removeData();
        }

        if (optsOrPreset === false) { // just stop it spinning.
          return;
        }

        options = $.extend({ color: $this.css('color') }, preset, options);
        $this.data("spinner", new Spinner(options).spin(this));
      });
    } else {
      throw "Spinner class not available.";
    }
  };
  $.fn.spin.presets = {
    "small": { lines: 12, length: 3, width: 2, radius: 3, trail: 60, speed: 1.5 },
    "medium": { lines: 12, length: 5, width: 3, radius: 8, trail: 60, speed: 1.5 },
    "large": { lines: 12, length: 8, width: 4, radius: 10, trail: 60, speed: 1.5 }
  };

  $.fn.spinStop = function() {
    if (window.Spinner) {
      return this.each(function() {
        var $this = $(this);
        var spinner = $this.data("spinner");

        if (spinner) {
          spinner.stop();
          $this.removeData();
        }

      });
    } else {
      throw "Spinner class not available.";
    }
  };
})(AJS.$);