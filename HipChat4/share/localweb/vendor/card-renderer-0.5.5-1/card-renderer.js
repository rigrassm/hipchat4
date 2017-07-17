(function () {

  // DO NOT REMOVE THIS LINE
  var RENDER = {
link: function (locals, escape, include, rethrow
/**/) {
rethrow = rethrow || function rethrow(err, str, filename, lineno){
  var lines = str.split('\n')
    , start = Math.max(lineno - 3, 0)
    , end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escape = escape || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
        .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div class=\"atlascard <%= locals._options.className %>\" data-card=\"<%= JSON.stringify(locals.metaData) %>\">\n    <% include views/thumbnail.ejs %>\n    <section class=\"meta\">\n        <% include views/title-domain-description.ejs %>\n    </section>\n    <% include views/feedback.ejs %>\n</div>\n"
  , __filename = "cards/link.ejs";
try {
  var __output = [], __append = __output.push.bind(__output);
  with (locals || {}) {
    ; __append("<div class=\"atlascard ")
    ; __append(escape(locals._options.className))
    ; __append("\" data-card=\"")
    ; __append(escape(JSON.stringify(locals.metaData)))
    ; __append("\">\n    ")
    ; __line = 2
    ; (function(){
    ;  if (locals._options.className.indexOf("noimage") == -1) { 
    ; __append("\n<figure class=\"thumbnail\">\n    ")
    ; __line = 3
    ;  if (locals.url) { 
    ; __append("\n    <a href=\"")
    ; __line = 4
    ; __append(escape(locals.url))
    ; __append("\" target=\"_blank\">\n    ")
    ; __line = 5
    ;  } 
    ; __append("\n      <div class=\"thumbnail-wrapper\">\n        <img ")
    ; __line = 7
    ;  if (locals.thumbnailAspectClass) { 
    ; __append("\n        		class=\"")
    ; __line = 8
    ; __append(escape(locals.thumbnailAspectClass))
    ; __append("\" \n        	 ")
    ; __line = 9
    ;  } 
    ; __append(" src=\"")
    ; __append(escape(locals.thumbnail.url))
    ; __append("\" alt=\"Thumbnail image\" onerror=\"(")
    ; __append(escape(locals.thumbnailErrorCb))
    ; __append(").call(this);\">\n      </div>\n    ")
    ; __line = 11
    ;  if (locals.url) { 
    ; __append("\n    </a>\n    ")
    ; __line = 13
    ;  } 
    ; __append("\n</figure>\n")
    ; __line = 15
    ;  } 
    ; __append("\n")
    ; __line = 16
    ; })()
    ; __append("\n    <section class=\"meta\">\n        ")
    ; __line = 4
    ; (function(){
    ; __append("<div class=\"title-wrapper\">\n  ")
    ; __line = 2
    ;  var iconUrl = getIconUrl(locals.icon) 
    ; __append("\n  ")
    ; __line = 3
    ;  if (iconUrl && iconUrl.length > 0) { 
    ; __append("\n  <img class=\"favicon\" src=\"")
    ; __line = 4
    ; __append(escape(iconUrl))
    ; __append("\" onerror=\"(")
    ; __append(escape(locals.faviconErrorCb))
    ; __append(").call(this);\">\n  ")
    ; __line = 5
    ;  } 
    ; __append("\n  <div class=\"title-group\">\n    <span class=\"title\" title=\"")
    ; __line = 7
    ; __append(escape(locals.title))
    ; __append("\">\n      ")
    ; __line = 8
    ;  if (locals.url) { 
    ; __append("\n      <a href=\"")
    ; __line = 9
    ; __append(escape(locals.url))
    ; __append("\" target=\"_blank\">\n      ")
    ; __line = 10
    ;  } 
    ; __append("\n        ")
    ; __line = 11
    ; __append(escape(locals.title))
    ; __append("\n      ")
    ; __line = 12
    ;  if (locals.url) { 
    ; __append("\n      </a>\n      ")
    ; __line = 14
    ;  } 
    ; __append("\n    </span>\n    ")
    ; __line = 16
    ;  if (locals.domain) { 
    ; __append("\n      <span class=\"subtitle\" >")
    ; __line = 17
    ; __append(escape(locals.domain))
    ; __append("</span>\n    ")
    ; __line = 18
    ;  } 
    ; __append("\n  </div>\n</div>\n")
    ; __line = 21
    ;  if (locals.descriptionHtml) { 
    ; __append("\n<p class=\"description\">")
    ; __line = 22
    ; __append(locals.descriptionHtml)
    ; __append("</p>\n")
    ; __line = 23
    ;  } else if (locals.descriptionText) { 
    ; __append("\n<p class=\"description\">")
    ; __line = 24
    ; __append(escape(locals.descriptionText))
    ; __append("</p>\n")
    ; __line = 25
    ;  } 
    ; __append("\n")
    ; __line = 26
    ; })()
    ; __append("\n    </section>\n    ")
    ; __line = 6
    ; (function(){
    ;   if (locals.feedback) { 
      var feedback = locals.feedback;
      // Required properties:
      if (feedback.url && feedback.label) {

    ; __line = 5
    ; __append("\n      	<section class=\"feedback\">\n        		<a href=\"")
    ; __line = 7
    ; __append(escape(feedback.url))
    ; __append("\" \n        			")
    ; __line = 8
    ;  if (feedback.tooltip) { 
        				
    ; __line = 9
    ; __append("title=\"")
    ; __append(escape(feedback.tooltip))
    ; __append("\"")
    ;  
        			} 
        			if (feedback.data) {
        				for(var key in feedback.data) {
        					if (feedback.data.hasOwnProperty(key)) {
        						var value = feedback.data[key];
        						if (typeof(value) === 'object') {
        							value = JSON.stringify(value);
        						}
        						
    ; __line = 18
    ; __append("data-")
    ; __append(escape(key))
    ; __append("=\"")
    ; __append(escape(value))
    ; __append("\"")
    ; 
        					}
        				}
        			}
        			
    ; __line = 22
    ; __append("\n        		 >")
    ; __line = 23
    ; __append(escape(feedback.label))
    ; __append("</a>\n      	</section>\n")
    ; __line = 25
    ;     }
    } 

    ; __line = 27
    ; })()
    ; __append("\n</div>\n")
    ; __line = 8
  }
  return __output.join("");
} catch (e) {
  rethrow(e, __lines, __filename, __line);
}

},application: function (locals, escape, include, rethrow
/**/) {
rethrow = rethrow || function rethrow(err, str, filename, lineno){
  var lines = str.split('\n')
    , start = Math.max(lineno - 3, 0)
    , end = Math.min(lines.length, lineno + 3);

  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escape = escape || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
        .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<div id=\"atlas-card-<%= locals.domId %>\" class=\"atlascard <%= locals._options.className %>\">\n  <% include views/activity.ejs %>\n  <% include views/thumbnail.ejs %>\n  <section class=\"meta\">\n    <% include views/title-domain-description.ejs %>\n    <%\n    if (locals.attributes && locals.attributes.length) {\n    %>\n    <div class=\"application-attributes\">\n      <%\n      for (var i = 0; i < locals.attributes.length;i++) {\n        var attribute = locals.attributes[i]; %>\n      <% include views/application-attribute.ejs %>\n      <% } %>\n    </div>\n    <% } %>\n  </section>\n  <% include views/feedback.ejs %>\n</div>\n\n"
  , __filename = "cards/application.ejs";
try {
  var __output = [], __append = __output.push.bind(__output);
  with (locals || {}) {
    ; __append("<div id=\"atlas-card-")
    ; __append(escape(locals.domId))
    ; __append("\" class=\"atlascard ")
    ; __append(escape(locals._options.className))
    ; __append("\">\n  ")
    ; __line = 2
    ; (function(){
    ;  if (locals.activity) { 
    ; __append("\n\n    <div class=\"activity\">\n\n        ")
    ; __line = 5
    ;  if (locals.activity.icon) { 
    ; __append("\n            <img src=\"")
    ; __line = 6
    ; __append(escape(locals.getIconUrl(locals.activity.icon)))
    ; __append("\"\n                 class=\"activity-icon\"/>\n        ")
    ; __line = 8
    ;  } 
    ; __append("\n        <span class=\"activity-html\">\n            ")
    ; __line = 10
    ; __append(locals.activity.html)
    ; __append("\n        </span>\n\n        <span class=\"aui-icon aui-icon-small aui-iconfont-arrows-down aui-expander-trigger activity-expander\"\n              aria-controls=\"atlas-card-")
    ; __line = 14
    ; __append(escape(locals.domId))
    ; __append("\"\n              onclick=\"$(this).toggleClass('aui-iconfont-arrows-up')\"></span>\n    </div>\n\n")
    ; __line = 18
    ;  } 
    ; __append("\n")
    ; __line = 19
    ; })()
    ; __append("\n  ")
    ; __line = 3
    ; (function(){
    ;  if (locals._options.className.indexOf("noimage") == -1) { 
    ; __append("\n<figure class=\"thumbnail\">\n    ")
    ; __line = 3
    ;  if (locals.url) { 
    ; __append("\n    <a href=\"")
    ; __line = 4
    ; __append(escape(locals.url))
    ; __append("\" target=\"_blank\">\n    ")
    ; __line = 5
    ;  } 
    ; __append("\n      <div class=\"thumbnail-wrapper\">\n        <img ")
    ; __line = 7
    ;  if (locals.thumbnailAspectClass) { 
    ; __append("\n        		class=\"")
    ; __line = 8
    ; __append(escape(locals.thumbnailAspectClass))
    ; __append("\" \n        	 ")
    ; __line = 9
    ;  } 
    ; __append(" src=\"")
    ; __append(escape(locals.thumbnail.url))
    ; __append("\" alt=\"Thumbnail image\" onerror=\"(")
    ; __append(escape(locals.thumbnailErrorCb))
    ; __append(").call(this);\">\n      </div>\n    ")
    ; __line = 11
    ;  if (locals.url) { 
    ; __append("\n    </a>\n    ")
    ; __line = 13
    ;  } 
    ; __append("\n</figure>\n")
    ; __line = 15
    ;  } 
    ; __append("\n")
    ; __line = 16
    ; })()
    ; __append("\n  <section class=\"meta\">\n    ")
    ; __line = 5
    ; (function(){
    ; __append("<div class=\"title-wrapper\">\n  ")
    ; __line = 2
    ;  var iconUrl = getIconUrl(locals.icon) 
    ; __append("\n  ")
    ; __line = 3
    ;  if (iconUrl && iconUrl.length > 0) { 
    ; __append("\n  <img class=\"favicon\" src=\"")
    ; __line = 4
    ; __append(escape(iconUrl))
    ; __append("\" onerror=\"(")
    ; __append(escape(locals.faviconErrorCb))
    ; __append(").call(this);\">\n  ")
    ; __line = 5
    ;  } 
    ; __append("\n  <div class=\"title-group\">\n    <span class=\"title\" title=\"")
    ; __line = 7
    ; __append(escape(locals.title))
    ; __append("\">\n      ")
    ; __line = 8
    ;  if (locals.url) { 
    ; __append("\n      <a href=\"")
    ; __line = 9
    ; __append(escape(locals.url))
    ; __append("\" target=\"_blank\">\n      ")
    ; __line = 10
    ;  } 
    ; __append("\n        ")
    ; __line = 11
    ; __append(escape(locals.title))
    ; __append("\n      ")
    ; __line = 12
    ;  if (locals.url) { 
    ; __append("\n      </a>\n      ")
    ; __line = 14
    ;  } 
    ; __append("\n    </span>\n    ")
    ; __line = 16
    ;  if (locals.domain) { 
    ; __append("\n      <span class=\"subtitle\" >")
    ; __line = 17
    ; __append(escape(locals.domain))
    ; __append("</span>\n    ")
    ; __line = 18
    ;  } 
    ; __append("\n  </div>\n</div>\n")
    ; __line = 21
    ;  if (locals.descriptionHtml) { 
    ; __append("\n<p class=\"description\">")
    ; __line = 22
    ; __append(locals.descriptionHtml)
    ; __append("</p>\n")
    ; __line = 23
    ;  } else if (locals.descriptionText) { 
    ; __append("\n<p class=\"description\">")
    ; __line = 24
    ; __append(escape(locals.descriptionText))
    ; __append("</p>\n")
    ; __line = 25
    ;  } 
    ; __append("\n")
    ; __line = 26
    ; })()
    ; __append("\n    ")
    ; __line = 6
    ; 
    if (locals.attributes && locals.attributes.length) {
    
    ; __line = 8
    ; __append("\n    <div class=\"application-attributes\">\n      ")
    ; __line = 10
    ; 
      for (var i = 0; i < locals.attributes.length;i++) {
        var attribute = locals.attributes[i]; 
    ; __line = 12
    ; __append("\n      ")
    ; __line = 13
    ; (function(){
    ; __append("<div class=\"application-field\">\n    ")
    ; __line = 2
    ;  if (attribute.label)  { 
    ; __append("\n      <span class=\"application-label\">")
    ; __line = 3
    ; __append(escape(attribute.label))
    ; __append(":</span>\n    ")
    ; __line = 4
    ;  } 
    ; __append("\n    ")
    ; __line = 5
    ;  if (attribute.value) {
        var value = attribute.value; 
    ; __line = 6
    ; __append("\n    <span class=\"application-value\">\n        ")
    ; __line = 8
    ;  if (value.icon) { 
    ; __append(" <img width=\"14\" height=\"14\" class=\"application-icon\" src=\"")
    ; __append(escape(locals.getIconUrl(value.icon)))
    ; __append("\"/>\n        ")
    ; __line = 9
    ;  } if (value.label) {
        if (value.url) { 
    ; __line = 10
    ; __append("\n        <a href=\"")
    ; __line = 11
    ; __append(escape(value.url))
    ; __append("\"><strong>")
    ; __append(escape(value.label))
    ; __append("</strong></a>\n        ")
    ; __line = 12
    ;  } else if (value.style){
        if (value.style.indexOf('lozenge') == 0){ 
    ; __line = 13
    ; __append("\n        <span class=\"aui-lozenge aui-")
    ; __line = 14
    ; __append(escape(value.style))
    ; __append("\">")
    ; __append(escape(value.label))
    ; __append("</span>\n        ")
    ; __line = 15
    ;  }
        } else { 
    ; __line = 16
    ; __append(" ")
    ; __append(escape(value.label))
    ;  } 
    ; __append("\n        ")
    ; __line = 17
    ;  } 
    ; __append("\n    </span>\n    ")
    ; __line = 19
    ;  } 
    ; __append("\n</div>\n")
    ; __line = 21
    ; })()
    ; __append("\n      ")
    ; __line = 14
    ;  } 
    ; __append("\n    </div>\n    ")
    ; __line = 16
    ;  } 
    ; __append("\n  </section>\n  ")
    ; __line = 18
    ; (function(){
    ;   if (locals.feedback) { 
      var feedback = locals.feedback;
      // Required properties:
      if (feedback.url && feedback.label) {

    ; __line = 5
    ; __append("\n      	<section class=\"feedback\">\n        		<a href=\"")
    ; __line = 7
    ; __append(escape(feedback.url))
    ; __append("\" \n        			")
    ; __line = 8
    ;  if (feedback.tooltip) { 
        				
    ; __line = 9
    ; __append("title=\"")
    ; __append(escape(feedback.tooltip))
    ; __append("\"")
    ;  
        			} 
        			if (feedback.data) {
        				for(var key in feedback.data) {
        					if (feedback.data.hasOwnProperty(key)) {
        						var value = feedback.data[key];
        						if (typeof(value) === 'object') {
        							value = JSON.stringify(value);
        						}
        						
    ; __line = 18
    ; __append("data-")
    ; __append(escape(key))
    ; __append("=\"")
    ; __append(escape(value))
    ; __append("\"")
    ; 
        					}
        				}
        			}
        			
    ; __line = 22
    ; __append("\n        		 >")
    ; __line = 23
    ; __append(escape(feedback.label))
    ; __append("</a>\n      	</section>\n")
    ; __line = 25
    ;     }
    } 

    ; __line = 27
    ; })()
    ; __append("\n</div>\n\n")
    ; __line = 21
  }
  return __output.join("");
} catch (e) {
  rethrow(e, __lines, __filename, __line);
}

}
};

  var ID_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
  var ID_LENGTH = 16;

  var IMAGE_ASPECT = 16 / 9;

  // These sizes are based around not upscaling by more than 20%. Based on the
  // "designer vomit factor". See HC-21199.
  var MIN_IMAGE_SIZES = {
    compact: {
      width: 162,
      height: 92
    },
    small: {
      width: 162,
      height: 92
    },
    default: {
      width: 250,
      height: 162
    }
  };

  var generateUniqueDomId = function () {
    var uniqueId = '';
    for (var j = 0; j < ID_LENGTH; j++) {
      uniqueId += ID_ALPHABET[Math.floor(Math.random() * ID_ALPHABET.length)];
    }
    return uniqueId;
  };


  var hideFavicon = function () {
    this.parentElement
        .parentElement
        .parentElement
        .parentElement
        .className += ' no-favicon';

    this.parentElement.removeChild(this);
  };

  var hideThumbnail = function () {
    this.parentElement
        .parentElement
        .parentElement
        .parentElement
        .className += ' no-thumbnail';

    this.parentElement.removeChild(this);
  };

  var resolution = function() {
    return ('devicePixelRatio' in window ? window.devicePixelRatio : 1);
  };

  var getIconUrl = function (icon) {

    if (typeof icon === 'string') {
      return icon;
    }

    if (typeof icon === 'object') {
      if (resolution() > 1 && icon['url@2x']) {
        return icon['url@2x'];
      } else {
        return icon.url;
      }
    }
  };

  var minifyFunctionString = function (string) {
    return string.replace(/\n/g, '')
                 .replace(/\s+/g, ' ');
  };

  var sanitizeDate = function (timestamp) {
    var d = new Date(timestamp * 1000);
    if (!d.getTime()) {
      return;
    }

    return [
      d.toLocaleDateString('en-EN'),
      d.toLocaleTimeString('en-EN', {
        hour: '2-digit',
        minute: '2-digit'
      })
    ].join(' - ');
  };

  // If aspect ratio > 16/9, then it's "wide", otherwise it's narrow (no class, i.e. default)
  var deriveThumbnailAspectClass = function(thumbnail) {
    if (thumbnail) {
      var width = thumbnail.width;
      var height = thumbnail.height;
      if (width && height) {
        var aspect = width / height;
        if (aspect > IMAGE_ASPECT) {
          return 'wide';
        }
      }
    }
    return '';
  };

  /**
   * CardDrawer
   * @param {Object} metaData - Parsed page meta data as JSON
   * @param {String} [metaData.url] - If given thumbnail and card title will link to this URL.
   * @param {Object} options - Options object
   * @param {String} options.type
   */
  var CardDrawer = function (metaData, options) {
    var defaults = {
      type: 'link'
    };

    // this.metaData = metaData || {};
    this.options  = this._extend(defaults, options);
    this.metaData  = this._extend({
      icon: {
        url: null
      }
    }, metaData);
  };

  /**
   * Render template to HTML
   * @param  {Object} options
   * @param {Object} options.feedback - object describing a feedback link to show on the card
   *                   (optional)
   * @param {String} options.feedback.url - the url for the feedback link to open (required if
   *                   feedback present)
   * @param {String} options.feedback.label - the label to appear on the card for the feedback link
   *                   (required if feedback present)
   * @param {String} options.feedback.tooltip - the tooltip for the link (optional)
   * @param {Object} options.feedback.data - an object containing key values, which are added to
   *                   the link as data-<key> attributes (optional)
   * @param {Object,String} options.description - The description can be an Object specifying a
   *                    format or a String implying a simple text description. The html format
   *                    is not sanitized for now
   * @param {String} options.description.format - Specifies the format of the description
   *                    (html or text)
   * @param {String} options.description.value - the value in the specific format desired
   *
   * @return {String} - Rendered HTML
   */
  CardDrawer.prototype.render = function (options) {
    options = this._extend(this.options, options);
    var locals  = this._prepareTemplateLocals(options);

    locals.faviconErrorCb = minifyFunctionString(hideFavicon.toString());
    locals.thumbnailErrorCb = minifyFunctionString(hideThumbnail.toString());
    locals.thumbnailAspectClass = deriveThumbnailAspectClass(locals.thumbnail);
    locals.hideThumb = this._isThumbnailTooSmall(options.format, locals.thumbnail);
    locals.getIconUrl = getIconUrl;
    locals.domId =  generateUniqueDomId();
    locals.metaData = this.metaData;
    locals.feedback = options.feedback;
    this._setClassName(locals);
    this._setDomain(locals);
    this._parseDescription(locals);

    var html = '';
    try {

      if (!RENDER[options.type]) {
        console.warn(' Card type [' + options.type + '] does not exist, default to link');
        options.type = 'link';
      }

      html = RENDER[options.type](locals);

    } catch (error) {
      console.log(error);
    }

    return html;
  };

  /**
   * Update content of DOM Element matching `selector` with rendered template
   * @param  {String} selector - Dom Selector
   * @param  {Object} options
   */
  CardDrawer.prototype.draw = function (selector, options) {
    var target       = document.querySelector(selector);
    target.innerHTML = this.render(options);
  };

  // Add options object as _object to this.metaData
  // to give template access to the option values
  CardDrawer.prototype._prepareTemplateLocals = function (options) {
    var data      = JSON.parse(JSON.stringify(this.metaData));
    data.date     = sanitizeDate(data.date);
    data._options = options;

    return data;
  };

  /**
   * Merge source properties and destination objects properties and overwrite
   * source properties with destination properties of same name.
   * Returns a new merged object.
   * @param  {Object} source
   * @param  {Object} destination
   * @return {Object}
   */
  CardDrawer.prototype._extend = function (source, destination) {
    var prop;
    var extended = {};

    for (prop in source) {
      if (Object.prototype.hasOwnProperty.call(source, prop)) {
        extended[prop] = source[prop];
      }
    }

    for (prop in destination) {
      if (Object.prototype.hasOwnProperty.call(destination, prop)) {
        extended[prop] = destination[prop];
      }
    }

    return extended;
  };

  CardDrawer.prototype._setClassName = function (locals) {
    var classNames = [];
    classNames.push(locals._options.format);

    if (locals.activity) {
      classNames.push('aui-expander-content');
    }

    if (!locals.thumbnail || !locals.thumbnail.url || locals.hideThumb || locals._options.noThumb) {
      classNames.push('noimage');
    } else {
      classNames.push('image');
    }

    if (!locals.icon || !locals.icon.url) {
      classNames.push('nofavicon');
    }

    if (locals._options.type === 'application' && locals.attributes && locals.attributes.length) {
      classNames.push('attributes');
    }

    locals._options.className = classNames.join(' ');
  };

  CardDrawer.prototype._setDomain = function (locals) {
    if (locals.domain || !locals.url) {
      return;
    }
    var startIdx = locals.url.indexOf('://');

    if (startIdx >= 0) {
      var domain = locals.url.substr(startIdx + 3);
      var endIdx = domain.indexOf('/');
      if (endIdx >= 0) {
        domain = domain.substr(0, endIdx);
      }
      locals.domain = domain;
    }
  };

  /**
   * Parses the description to check if we have html or text.
   * Description can be sent as a simple string implying text based
   * or sending an object specifying the format to allow html
   * in the card
   * @param locals the card variables
   * @private
   */
  CardDrawer.prototype._parseDescription = function (locals) {

    if (typeof locals.description === 'object') {
      if (locals.description.format === 'html') {
        locals.descriptionHtml = locals.description.value;
      } else {
        locals.descriptionText = locals.description.value;
      }
    } else {
      locals.descriptionText = locals.description;
    }
  };

  CardDrawer.prototype._isThumbnailTooSmall = function(format, thumbnail) {
    if (thumbnail) {
      var width = thumbnail.width;
      var height = thumbnail.height;
      if (width === undefined || height === undefined) {
        // Err on the side that the image is big enough if we're not given the size.
        return false;
      }
      var minSize = CardDrawer._getMinImageSizes(format);
      return width < minSize.width ||
             height < minSize.height;
    }
    return true;
  };

  // Exposed for testing
  CardDrawer._getMinImageSizes = function (format) {
    var sizes = MIN_IMAGE_SIZES[format];
    if (!sizes) {
      sizes = MIN_IMAGE_SIZES['default'];
    }
    return sizes;
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      module.exports = CardDrawer;
    }
    exports.CardDrawer = CardDrawer;
  } else {
    this.CardDrawer = CardDrawer;
  }

}());
