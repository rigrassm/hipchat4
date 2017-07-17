/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	(function () {
	  //Turn off right click menu
	  window.addEventListener("contextmenu", function (e) {
	    e.preventDefault();
	  }, false);
	
	  var target = document.querySelector('#hipchat-service-selector');
	  var ServiceSelector = __webpack_require__(1);
	  ReactDOM.render(React.createElement(ServiceSelector, null), target);
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _service_selector_choose_service = __webpack_require__(2);
	
	var _service_selector_choose_service2 = _interopRequireDefault(_service_selector_choose_service);
	
	var _service_selector_server_login = __webpack_require__(6);
	
	var _service_selector_server_login2 = _interopRequireDefault(_service_selector_server_login);
	
	var _service_selector_config = __webpack_require__(4);
	
	var _service_selector_config2 = _interopRequireDefault(_service_selector_config);
	
	var _spi = __webpack_require__(5);
	
	var _spi2 = _interopRequireDefault(_spi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = React.createClass({
	
	  displayName: "ServiceSelectorLayout",
	
	  getInitialState: function getInitialState() {
	    return {
	      activeView: _service_selector_config2.default.choose_login_key
	    };
	  },
	
	  _onUpdateView: function _onUpdateView(viewName) {
	    this.setState({
	      activeView: viewName
	    });
	  },
	
	  _getView: function _getView() {
	    if (this.state.activeView === _service_selector_config2.default.server_login_key) {
	      return React.createElement(_service_selector_server_login2.default, { defaultServerUrl: _spi2.default.getLastServerUrl(), onUpdateView: this._onUpdateView });
	    } else if (this.state.activeView === _service_selector_config2.default.choose_login_key) {
	      return React.createElement(_service_selector_choose_service2.default, { onUpdateView: this._onUpdateView });
	    }
	  },
	
	  render: function render() {
	    var view = this._getView();
	
	    return React.createElement(
	      "div",
	      { id: "hc-service-selector-layout" },
	      view
	    );
	  }
	
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _service_selector_strings = __webpack_require__(3);
	
	var _service_selector_strings2 = _interopRequireDefault(_service_selector_strings);
	
	var _service_selector_config = __webpack_require__(4);
	
	var _service_selector_config2 = _interopRequireDefault(_service_selector_config);
	
	var _spi = __webpack_require__(5);
	
	var _spi2 = _interopRequireDefault(_spi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = React.createClass({
	
	  displayName: "ServiceSelectorChooseService",
	
	  propTypes: {
	    onUpdateView: React.PropTypes.func.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onUpdateView: function onUpdateView() {}
	    };
	  },
	
	  _showCloudLogin: function _showCloudLogin() {
	    // call the spi so that the client can control what url to go to
	    _spi2.default.onCloudLoginShow();
	  },
	
	  _showServerLogin: function _showServerLogin(e) {
	    e.preventDefault();
	    if (this.props.onUpdateView) {
	      this.props.onUpdateView(_service_selector_config2.default.server_login_key);
	    }
	  },
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { id: "choose-service", className: "aui-group selector" },
	      React.createElement(
	        "div",
	        { className: "aui-item hc-service-selector-dark" },
	        React.createElement("div", { className: "hc-service-cloud-img" }),
	        React.createElement(
	          "h2",
	          null,
	          _service_selector_strings2.default.log_in_to_atlassian
	        ),
	        React.createElement(
	          "p",
	          null,
	          _service_selector_strings2.default.log_in_to_atlassian_desc
	        ),
	        React.createElement(
	          "a",
	          { ref: "cloud_login", id: "cloud_login", onClick: this._showCloudLogin, className: "aui-button aui-button-primary" },
	          _service_selector_strings2.default.choose_login_cta
	        )
	      ),
	      React.createElement(
	        "div",
	        { className: "aui-item" },
	        React.createElement("div", { className: "hc-service-server-img" }),
	        React.createElement(
	          "h2",
	          null,
	          _service_selector_strings2.default.log_in_to_server
	        ),
	        React.createElement(
	          "p",
	          null,
	          _service_selector_strings2.default.log_in_to_server_desc
	        ),
	        React.createElement(
	          "a",
	          { ref: "server_login", id: "server_login", onClick: this._showServerLogin, className: "aui-button" },
	          _service_selector_strings2.default.choose_login_cta
	        )
	      )
	    );
	  }
	
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  log_in_to_atlassian: "Log in with your HipChat account",
	  log_in_to_atlassian_desc: "If you're not sure, it's probably this one.",
	  log_in_to_server: "Log in to a HipChat team server",
	  log_in_to_server_desc: "If you've got a server address, this one's for you.",
	  server_url_input_desc: "Enter your team's server address to continue.",
	  choose_login_cta: "Get Started",
	  server_login_cta: "Continue",
	  server_login_cancel: "Cancel",
	  server_address_placeholder: "Server address",
	  download_legacy_client_linktext: "Download Compatible Client",
	  get_features_url: function get_features_url(url) {
	    return url + "/api/features";
	  },
	  sign_in_url: function sign_in_url(url) {
	    return url + "/sign_in";
	  },
	  form_errors: {
	    empty_url: "Please enter a HipChat Server address.",
	    invalid_url: "Not a valid HipChat Server.",
	    server_not_found: "HipChat Server not found. Please ensure that the address is correct.",
	    invalid_version: "This client requires HipChat Server 1.2.8 or above. Please download and install the compatible client to connect to your server."
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  server_login_key: "ServerLogin",
	  choose_login_key: "ChooseLogin"
	};
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("spi");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _service_selector_strings = __webpack_require__(3);
	
	var _service_selector_strings2 = _interopRequireDefault(_service_selector_strings);
	
	var _service_selector_config = __webpack_require__(4);
	
	var _service_selector_config2 = _interopRequireDefault(_service_selector_config);
	
	var _utils = __webpack_require__(7);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _spi = __webpack_require__(5);
	
	var _spi2 = _interopRequireDefault(_spi);
	
	var _spinner = __webpack_require__(125);
	
	var _spinner2 = _interopRequireDefault(_spinner);
	
	var _classnames = __webpack_require__(172);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = React.createClass({
	
	  displayName: "ServiceSelectorServerLogin",
	
	  getInitialState: function getInitialState() {
	    return {
	      error: false,
	      valid_url: false,
	      loading: false,
	      url: ''
	    };
	  },
	
	  componentWillMount: function componentWillMount() {
	    if (this.props.defaultServerUrl && !this.state.url) {
	      this.setState({
	        url: this.props.defaultServerUrl
	      });
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    this._focusAndSelect();
	    if (this.state.url) {
	      this._checkURLValidity(this.state.url);
	    }
	  },
	
	  _focusAndSelect: function _focusAndSelect() {
	    var input = ReactDOM.findDOMNode(this.refs.url_input);
	    if (input !== document.activeElement) {
	      input.focus();
	      input.select();
	    }
	  },
	
	  _navigateBack: function _navigateBack() {
	    this.props.onUpdateView(_service_selector_config2.default.choose_login_key);
	  },
	
	  _fullURL: function _fullURL(url) {
	    if (url && url !== '') {
	      return (/^https?:\/\//.test(url) ? url : 'https://' + url
	      );
	    }
	    return null;
	  },
	
	  _cleanUrl: function _cleanUrl(url) {
	    var cleanUrl;
	    if (typeof url === "string") {
	      cleanUrl = url.trim();
	      if (cleanUrl.slice(-1) === "/") {
	        // Remove Trailing slash on url
	        cleanUrl = cleanUrl.substring(0, cleanUrl.length - 1);
	      }
	    }
	    return cleanUrl;
	  },
	
	  _testUrl: function _testUrl(url) {
	    var _this = this;
	
	    var xhr = _utils2.default.request.getXHR(),
	        featuresUrl = _service_selector_strings2.default.get_features_url(url);
	
	    xhr.open("GET", featuresUrl, true);
	    xhr.onreadystatechange = function () {
	      if (xhr.readyState === 4) {
	        if (xhr.status === 200) {
	          _this._validateServerResponse(JSON.parse(xhr.responseText), url);
	        } else {
	          _this._submitFailure(_service_selector_strings2.default.form_errors.server_not_found);
	        }
	      }
	    };
	    xhr.send();
	  },
	
	  _submitFailure: function _submitFailure(error) {
	    this._checkURLValidity(this.state.url);
	    this._setError(error);
	    this._stopLoading();
	  },
	
	  _validateServerResponse: function _validateServerResponse(data, url) {
	    if (/devvm\.hipchat\.com/.test(url) || data && 'features' in data && data.features.btf) {
	      // check if we are connecting to a valid server (ie > 1.2.8)
	      // feature flag mapping to server version number:
	
	      var server_capabilities = _utils2.default.features.btf_capabilities(data.features);
	
	      if (server_capabilities.nonce === true) {
	        // make sure the wrapper knows we are logging into server and what the current
	        // url is in case we want to save it
	        _spi2.default.onServerLoginShow(url);
	        if (server_capabilities.oauth === true) {
	          // do oauth flow for 1.3.4
	          this._doServerOauthLogin(url);
	        } else {
	          this._doServerNonceLogin(url);
	        }
	      } else {
	        this._submitFailure(_service_selector_strings2.default.form_errors.invalid_version);
	      }
	    } else {
	      this._submitFailure(_service_selector_strings2.default.form_errors.invalid_url);
	    }
	  },
	
	  _validateURL: function _validateURL(address) {
	    var url = this._cleanUrl(address),
	        full_url = this._fullURL(url),
	        valid = false;
	
	    if (!url) {
	      this._setError(_service_selector_strings2.default.form_errors.empty_url);
	      this._setInvalidUrl();
	      valid = false;
	    } else if (!full_url) {
	      this._setError(_service_selector_strings2.default.form_errors.invalid_url);
	      this._setInvalidUrl();
	      valid = false;
	    } else {
	      this._setValidUrl();
	      this._clearError();
	      valid = full_url;
	    }
	    return valid;
	  },
	
	  _onChange: function _onChange(e) {
	    this.setState({
	      url: e.target.value
	    });
	    this._checkURLValidity(e.target.value);
	  },
	
	  _onKeyDown: function _onKeyDown(e) {
	    if (e.keycode === _utils2.default.keyCode.Enter) {
	      this._onSubmit(e);
	    }
	  },
	
	  _checkURLValidity: function _checkURLValidity(val) {
	    this._validateURL(val);
	  },
	
	  _onSubmit: function _onSubmit(e) {
	    e.preventDefault();
	
	    if (this.state.loading) {
	      return;
	    }
	
	    var val = this.state.url,
	        url = this._validateURL(val);
	
	    if (url) {
	      this._startLoading();
	      this._clearError();
	      this._testUrl(url);
	    }
	  },
	
	  _doServerNonceLogin: function _doServerNonceLogin(url) {
	    if (url) {
	      var location = _utils2.default.getWindowLocation();
	      this._setValidUrl();
	      location.href = _service_selector_strings2.default.sign_in_url(url);
	    }
	  },
	
	  _doServerOauthLogin: function _doServerOauthLogin(url) {
	    if (url) {
	      // this is where you set the url to the server's /users/authorize url
	      _spi2.default.onServerOauthLogin(url);
	    }
	  },
	
	  _startLoading: function _startLoading() {
	    this.setState({
	      loading: true
	    });
	  },
	
	  _stopLoading: function _stopLoading() {
	    this.setState({
	      loading: false
	    });
	  },
	
	  _setError: function _setError(msg) {
	    this.setState({
	      error: msg
	    });
	  },
	
	  _clearError: function _clearError() {
	    this.setState({
	      error: false
	    });
	  },
	
	  _setValidUrl: function _setValidUrl() {
	    this.setState({
	      valid_url: true
	    });
	  },
	
	  _setInvalidUrl: function _setInvalidUrl() {
	    this.setState({
	      valid_url: false
	    });
	  },
	
	  _onDownloadClicked: function _onDownloadClicked(e) {
	    e.preventDefault();
	    _spi2.default.onLegacyDownloadLinkClicked();
	  },
	
	  _getDownloadLink: function _getDownloadLink() {
	    if (this.state.error === _service_selector_strings2.default.form_errors.invalid_version) {
	      return React.createElement(
	        "a",
	        { href: "", id: "download_link", onClick: this._onDownloadClicked },
	        _service_selector_strings2.default.download_legacy_client_linktext
	      );
	    }
	  },
	
	  render: function render() {
	    var cancelClasses = (0, _classnames2.default)({
	      "cancel-button": true,
	      "hidden": this.state.loading
	    }),
	        submitDisabled = !this.state.valid_url || this.state.loading,
	        hrefLink = this._getDownloadLink();
	
	    return React.createElement(
	      "div",
	      { id: "server-login", className: "aui-group" },
	      React.createElement(
	        "div",
	        { className: "aui-item hc-service-server-login" },
	        React.createElement("div", { className: "hc-service-server-img" }),
	        React.createElement(
	          "h2",
	          null,
	          _service_selector_strings2.default.log_in_to_server
	        ),
	        React.createElement(
	          "p",
	          null,
	          _service_selector_strings2.default.server_url_input_desc
	        ),
	        React.createElement(
	          "form",
	          { ref: "server_form", className: "aui", onSubmit: this._onSubmit },
	          React.createElement("input", { id: "url_input", className: "text long-field", onChange: this._onChange, onKeyDown: this._onKeyDown, type: "text", ref: "url_input", placeholder: _service_selector_strings2.default.server_address_placeholder, value: this.state.url, disabled: this.state.loading }),
	          React.createElement("input", { type: "submit", id: "submit_btn", className: "aui-button aui-button-primary", value: _service_selector_strings2.default.server_login_cta, ref: "submitButton", "aria-disabled": submitDisabled }),
	          React.createElement(
	            "div",
	            { className: "cancel-wrap" },
	            React.createElement(_spinner2.default, { ref: "spinner", spin: this.state.loading, size: "small" }),
	            React.createElement(
	              "a",
	              { ref: "server_back", id: "server_back", href: "#", onClick: this._navigateBack, className: cancelClasses },
	              _service_selector_strings2.default.server_login_cancel
	            )
	          ),
	          React.createElement(
	            "div",
	            { className: "error-message-container" },
	            React.createElement(
	              "p",
	              { className: "error-message" },
	              this.state.error
	            ),
	            hrefLink
	          )
	        )
	      )
	    );
	  }
	
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promise = __webpack_require__(8);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _keys = __webpack_require__(63);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _moment = __webpack_require__(68);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _linkify = __webpack_require__(70);
	
	var _linkify2 = _interopRequireDefault(_linkify);
	
	var _emoticons = __webpack_require__(75);
	
	var _emoticons2 = _interopRequireDefault(_emoticons);
	
	var _file_utils = __webpack_require__(99);
	
	var _file_utils2 = _interopRequireDefault(_file_utils);
	
	var _jid_utils = __webpack_require__(74);
	
	var _jid_utils2 = _interopRequireDefault(_jid_utils);
	
	var _room_utils = __webpack_require__(102);
	
	var _room_utils2 = _interopRequireDefault(_room_utils);
	
	var _user_utils = __webpack_require__(103);
	
	var _user_utils2 = _interopRequireDefault(_user_utils);
	
	var _video_utils = __webpack_require__(109);
	
	var _video_utils2 = _interopRequireDefault(_video_utils);
	
	var _browser_utils = __webpack_require__(110);
	
	var _browser_utils2 = _interopRequireDefault(_browser_utils);
	
	var _versionInfo = __webpack_require__(118);
	
	var _versionInfo2 = _interopRequireDefault(_versionInfo);
	
	var _app_config = __webpack_require__(98);
	
	var _app_config2 = _interopRequireDefault(_app_config);
	
	var _uri = __webpack_require__(119);
	
	var _uri2 = _interopRequireDefault(_uri);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CONNECT_API_VERSION = _versionInfo2.default.connect_api_version;
	var randomBetween = function randomBetween(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	
	/**
	 * utils
	 * @module helpers/utils
	 */
	var utils = {
	
	  TRUNCATE_CHARS: 800,
	  TRUNCATE_LINES: 6,
	
	  emoticons: _emoticons2.default.init(),
	  file: _file_utils2.default,
	  jid: _jid_utils2.default,
	  room: _room_utils2.default,
	  user: _user_utils2.default,
	  browser: _browser_utils2.default,
	  video: _video_utils2.default,
	  platform: _browser_utils.platform,
	  clientSubType: _browser_utils.clientSubType,
	
	  roster_names: {}, // roster names keyed by mention name
	
	  now: function now() {
	    return new Date().getTime();
	  },
	
	
	  decorrelatedJitter: function decorrelatedJitter(cap, base, sleep, backoff_factor) {
	    return Math.min(cap, randomBetween(base, sleep * backoff_factor));
	  },
	
	  escapeRegEx: function escapeRegEx(str) {
	    return str.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
	  },
	
	  getWindowLocation: function getWindowLocation() {
	    return window.location;
	  },
	
	  url: {
	    clearWebCookies: function clearWebCookies(webServer) {
	      if (_.isString(webServer)) {
	        return 'https://' + webServer + '/users/clear_cookies';
	      }
	    },
	    revokeOauth2Token: function revokeOauth2Token(apiHost, token) {
	      if (_.isString(apiHost) && token) {
	        return 'https://' + apiHost + '/v2/oauth/token/' + token;
	      }
	    },
	    featureFlagsAPI: function featureFlagsAPI(baseUrl) {
	      if (_.isString(baseUrl)) {
	        return baseUrl + '/api/features';
	      }
	    },
	    networkCheckAPI: function networkCheckAPI(apiHost) {
	      if (_.isString(apiHost)) {
	        return 'https://' + apiHost + '/v2/health-check';
	      }
	    }
	  },
	
	  /**
	   * merges two objects then removes properties with leading underscores
	   * if the same property without an underscore already exists
	   * @param {object} data
	   * @param {object} data
	   */
	  mergeAndSquash: function mergeAndSquash(obj1, obj2) {
	    var newObj = _.merge(obj1, obj2);
	    if ('jid' in newObj) {
	      newObj.key = newObj.jid.split('@')[0];
	    }
	    _.forEach(newObj, function (v, k) {
	      if (/^_/.test(k) && newObj.hasOwnProperty(k.substring(1))) {
	        delete newObj[k];
	      }
	    });
	    return newObj;
	  },
	
	  camelToSnake: function camelToSnake(str) {
	    return str.replace(/\W+/g, '_').replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
	  },
	
	  /**
	   * Coerce a boolean from an unknown type value
	   * @param {*} val
	   * @param {*} [defaultValue=false]
	   * @returns {boolean}
	   */
	  coerceBoolean: function coerceBoolean(val) {
	    var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	    switch (val) {
	      case true:
	      case 'true':
	      case 'True':
	      case 1:
	      case '1':
	        return true;
	      case false:
	      case 'false':
	      case 'False':
	      case 0:
	      case '0':
	        return false;
	      default:
	        return defaultValue;
	    }
	  },
	
	
	  generateMID: function generateMID() {
	    var d = new Date().getTime();
	    var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	      var r = (d + Math.random() * 16) % 16 | 0;
	      d = Math.floor(d / 16);
	      return (c === 'x' ? r : r & 0x7 | 0x8).toString(16);
	    });
	    return id;
	  },
	
	  validateMID: function validateMID(mid) {
	    var re = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i;
	    return re.test(mid);
	  },
	
	  getAttachToMid: function getAttachToMid(msg) {
	    return _.get(msg, 'attach-to.id');
	  },
	
	  isAttachedCardsCollapsed: function isAttachedCardsCollapsed(msg) {
	    var defaultVal = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	    return _.get(msg, 'is_attached_cards_collapsed', defaultVal);
	  },
	  getRealMid: function getRealMid(mid) {
	    return mid.split('-link')[0];
	  },
	
	
	  /**
	   *
	   * @param {String|Number|undefined} time
	   * @param {Boolean} is24hr
	   * @returns {String} formatted time in user timezone
	   */
	  format_time: function format_time(time, is24hr) {
	    var format = is24hr ? "HH:mm" : "h:mm A";
	
	    if (!time) {
	      return this.getCurrentTime().format(format);
	    } else if (/^-?\d*\.?\d*$/.test(time)) {
	      time = _moment2.default.unix(time);
	    } else {
	      time = (0, _moment2.default)(time);
	    }
	
	    if (!this.getCurrentTime().isSame(time, 'day')) {
	      format = 'MMM-D ' + format;
	    }
	
	    return time.format(format);
	  },
	
	  /**
	   * Timestamps are in seconds with microsecond precision.
	   * Moment doesn't make this easy so working around it.
	   * @param {String} date - an ISO-8691 formatted date string. Example: '2015-10-15T21:28:13.122119+00:00'
	   * @returns {Number} timestamp formatted with microsecond precision. Example: 1445022940.211578
	   */
	  getTimestampFromIsoDate: function getTimestampFromIsoDate(date) {
	    var time = (0, _moment2.default)(date),
	        sec = date ? time.unix() : 0,
	        micro = date ? date.split('.')[1].split(/\+\d\d|Z/)[0] : 0;
	
	    return Number(sec + '.' + micro);
	  },
	
	  getCurrentTime: function getCurrentTime() {
	    return (0, _moment2.default)();
	  },
	
	  getDateDiff: function getDateDiff(first_date, second_date, unit) {
	    var date1 = (0, _moment2.default)(first_date),
	        date2 = (0, _moment2.default)(second_date);
	
	    return date2.diff(date1, unit);
	  },
	
	  format_time_for_history: function format_time_for_history(ts) {
	    var time = _moment2.default.utc(ts, 'X'),
	        iso = time.format('YYYY-MM-DDTHH:mm:ss'),
	        ms = time.format('SSSSSS');
	
	    return iso + 'Z ' + ms;
	  },
	
	  format_time_for_separator: function format_time_for_separator(time) {
	    return _moment2.default.unix(time).format("dddd MMMM D, YYYY");
	  },
	
	  getMoment: function getMoment(time) {
	    var m = time ? (0, _moment2.default)(time) : (0, _moment2.default)();
	    return parseInt(m.format('x'), 10) / 1000;
	  },
	
	  toArray: function toArray(obj) {
	    if (_.isArray(obj)) {
	      return obj;
	    }
	    return [obj];
	  },
	
	  escape: function escape(str) {
	    if (!str) {
	      return str;
	    }
	
	    str = str.replace(/&/g, '&amp;');
	    str = str.replace(/</g, '&lt;');
	    str = str.replace(/>/g, '&gt;');
	
	    return str;
	  },
	
	  get_roster_name: function get_roster_name(mention_name) {
	    var name = "";
	    if (!_.isEmpty(utils.roster_names)) {
	      var str = ' ' + (0, _keys2.default)(utils.roster_names).join(' ') + ' ';
	      var regexp = new RegExp('\\s' + mention_name + '\\s', 'i');
	      var match = regexp.exec(str);
	      if (match) {
	        name = utils.roster_names[match[0].trim()];
	      }
	    }
	    return name;
	  },
	
	  formatMessageBody: function formatMessageBody(message) {
	    //This gets extended by the message processor
	    return message;
	  },
	
	  replaceEmoteMessage: function replaceEmoteMessage(messageBody, senderName) {
	    return messageBody.replace(_app_config2.default.emote_regex, senderName + ' ');
	  },
	
	  escapeAndLinkify: function escapeAndLinkify(str, args) {
	    var _this = this;
	
	    if (!str) {
	      return str;
	    }
	
	    if (typeof str !== 'string') {
	      str = str.toString();
	    }
	    args = _.defaults(args || {}, {
	      name_tag_regex: null,
	      mention_regex: null,
	      escape_whitespace: false,
	      matches: null,
	      do_escape: true,
	      do_linkify: true,
	      do_emoticons: true,
	      do_word_breaks: true,
	      do_mentions: true,
	      do_hex_colors: true
	    });
	    var name_regex = _.result(args, "name_tag_regex");
	    var mention_regex = _.result(args, "mention_regex");
	    var guest_regex = _.result(args, "guest_regex");
	    var escape_whitespace = _.result(args, "escape_whitespace");
	    var matches = _.result(args, "matches");
	    var do_escape = _.result(args, "do_escape");
	    var do_linkify = _.result(args, "do_linkify");
	    var do_emoticons = _.result(args, "do_emoticons");
	    var do_word_breaks = _.result(args, "do_word_breaks");
	    var do_mentions = _.result(args, "do_mentions");
	    var do_hex_colors = _.result(args, "do_hex_colors");
	
	    var LINE_SEPARATOR = '\n';
	    var TOKEN_SEPARATOR = ' ';
	
	    str = str.split(LINE_SEPARATOR).map(function (line) {
	      return line.split(TOKEN_SEPARATOR).map(function (token) {
	        if (do_escape) {
	          token = _this.escape(token);
	        }
	
	        var linkified = false;
	        if (do_linkify) {
	          var token_matches = [];
	          token = _linkify2.default.linkify(token, token_matches, {
	            truncate_length: 100,
	            no_referrer: true,
	            add_wbrs: do_word_breaks
	          });
	          linkified = !_.isEmpty(token_matches);
	          // a nice little side-effect here with matches is that it acts as an accumulator
	          matches = _.union(matches, token_matches);
	        }
	
	        if (do_hex_colors) {
	          token = token.replace(/(?:^)(#[\da-fA-F]{6})\b/gm, "$1 <span class='hexPreview' style='background-color: $1'>&nbsp;</span>");
	        }
	
	        // Add check for emoticonification
	        if (!linkified && do_emoticons) {
	          token = _emoticons2.default.render(token);
	        }
	
	        if (!linkified && do_mentions) {
	          var name_matches = void 0,
	              mention_matches = void 0,
	              guest_matches = void 0;
	
	          if (name_regex) {
	            name_matches = token.match(name_regex);
	            if (name_matches && name_matches.length) {
	              var mentionKey = name_matches[0].substr(1);
	              var userName = _.escape(utils.get_roster_name(mentionKey));
	              var content = '<span class=\'hc-mention-user hc-mention-me\' aria-label=\'' + userName + '\'>@$1</span>';
	              token = token.replace(name_regex, content);
	            }
	          }
	          if (mention_regex) {
	            mention_matches = token.match(mention_regex);
	            if (mention_matches && mention_matches[0]) {
	              var _mentionKey = mention_matches[0].substr(1);
	              var _userName = _.escape(utils.get_roster_name(_mentionKey));
	              var _content = '<span class=\'hc-mention-user\'><a onClick=\'HC.Actions.AppActions.openChatByMentionName(this)\' aria-label=\'' + _userName + '\' data-mention-name=\'$1\'>@$1</a></span>';
	              token = token.replace(mention_regex, _content);
	            }
	          }
	          if (guest_regex) {
	            guest_matches = token.match(guest_regex);
	            if (guest_matches && guest_matches[0] && !name_matches && !mention_matches) {
	              var guestKey = guest_matches[0].substr(1);
	              var guestName = _.escape(utils.get_roster_name(guestKey));
	              var guest_content = '<span class=\'hc-mention-user\'><a title=\'' + guestName + '\' data-mention-name=\'$1\'>@$1</a></span>';
	              token = token.replace(guest_regex, guest_content);
	            }
	          }
	        }
	
	        return token;
	      }).join(TOKEN_SEPARATOR);
	    }).join(LINE_SEPARATOR);
	
	    // Add br's AFTER linkifying - doing it before could result in bad linkify
	    if (escape_whitespace) {
	      str = str.replace(/\r\n/g, '\n').replace(/[\r\n\u2028]/g, '<br />');
	    }
	
	    if (matches && matches.length === 0 && do_word_breaks && !/[<>]/.test(str)) {
	      // Break at commas first (for JSON)
	      str = str.replace(/(,)/g, '$1<wbr>');
	
	      // Also break if we have a string of 70 characters w/o spaces (and no wbrs)
	      str = str.replace(/([^<>\s&;]{70})/g, '$1<wbr>');
	    }
	
	    if (escape_whitespace) {
	      if (str.indexOf('  ') !== -1) {
	        str = str.replace(/ {2}/g, '&ensp;&ensp;');
	      }
	      if (str.indexOf('\t') !== -1) {
	        str = str.replace(/\t/g, '&ensp;&ensp;');
	      }
	    }
	
	    return str;
	  },
	
	  getNumberOfLines: function getNumberOfLines(messageBody) {
	    var matches = messageBody.match(/<br\s*\/?>/);
	    if (!matches || matches.length === 0) {
	      matches = messageBody.match(/[\n\r\u2028]+.+/g);
	    }
	    return matches ? matches.length + 1 : 1;
	  },
	
	  messageShouldBeTruncated: function messageShouldBeTruncated(messageBody) {
	    return utils.getNumberOfLines(messageBody) >= utils.TRUNCATE_LINES || messageBody.length >= utils.TRUNCATE_CHARS;
	  },
	
	  fetch: function fetch(val, dflt) {
	    return val || dflt;
	  },
	
	  formatNumber: function formatNumber(num) {
	    if (typeof num !== 'string' && num.toString) {
	      num = num.toString();
	    }
	    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",") || num;
	  },
	
	  formatMultilineBlock: function formatMultilineBlock(text) {
	    var matches = text.match(/\n.+/gm);
	    if (!matches) {
	      return text;
	    }
	
	    // Add one to numlines because the last line won't have a \n on it
	    var numLines = matches.length + 1;
	    if (numLines > 1) {
	      matches = text.match(/^( {2}|\t)/gm);
	      // remove leading whitespace common to all lines
	      while (matches && matches.length === numLines) {
	        text = text.replace(/^( {2}|\t)/gm, '');
	        matches = text.match(/^( {2}|\t)/gm);
	      }
	    }
	    return text;
	  },
	
	  isFormattedMessage: function isFormattedMessage(message) {
	    return message.format === 'monospace' || message.format === 'code' || message.format === 'quotation';
	  },
	
	
	  isHistoryMessage: function isHistoryMessage(message) {
	    return typeof message.delay !== 'undefined' && !message.id;
	  },
	
	  getSenderFromMeta: function getSenderFromMeta(type) {
	    var sender;
	
	    switch (type) {
	      case 'video':
	        sender = 'Video';
	        break;
	      case 'twitter_status':
	      case 'twitter_user':
	        sender = 'Twitter';
	        break;
	      case 'link':
	        sender = 'Link';
	        break;
	      default:
	        sender = 'HipChat';
	        break;
	    }
	
	    return sender;
	  },
	
	  getCaretPosition: function getCaretPosition(input) {
	    if ('selectionStart' in input) {
	      return input.selectionStart;
	    } else if (document.selection) {
	      // IE
	      input.focus();
	      var sel = document.selection.createRange();
	      var selLen = document.selection.createRange().text.length;
	      sel.moveStart('character', -input.value.length);
	      return sel.text.length - selLen;
	    }
	  },
	
	  getEndSelection: function getEndSelection(input) {
	    return input.selectionEnd;
	  },
	
	  setCaretPosition: function setCaretPosition(input, posn) {
	    try {
	      if (input.createTextRange) {
	        var range = input.createTextRange();
	        range.move('character', posn);
	        range.select();
	      } else {
	        if (!_.isUndefined(input.selectionStart)) {
	          input.focus();
	          input.setSelectionRange(posn, posn);
	          input.focus();
	        } else {
	          input.focus();
	        }
	      }
	    } catch (e) {/*ignored*/}
	  },
	
	  // Mimicks webkit's scrollIntoViewIfNeeded for other browsers
	  // https://gist.github.com/hsablonniere/2581101
	  scrollIntoViewIfNeeded: function scrollIntoViewIfNeeded(node, parent, centerIfNeeded) {
	    centerIfNeeded = arguments.length === 0 ? true : !!centerIfNeeded;
	
	    if (!node) {
	      return;
	    }
	
	    if ('scrollIntoViewIfNeeded' in node) {
	      node.scrollIntoViewIfNeeded(centerIfNeeded);
	      return;
	    }
	
	    var parentComputedStyle = window.getComputedStyle(parent, null),
	        parentBorderTopWidth = parseInt(parentComputedStyle.getPropertyValue('border-top-width'), 10) || 0,
	        parentBorderLeftWidth = parseInt(parentComputedStyle.getPropertyValue('border-left-width'), 10) || 0,
	        overTop = node.offsetTop - parent.offsetTop < parent.scrollTop,
	        overBottom = node.offsetTop - parent.offsetTop + node.clientHeight - parentBorderTopWidth > parent.scrollTop + parent.clientHeight,
	        overLeft = node.offsetLeft - parent.offsetLeft < parent.scrollLeft,
	        overRight = node.offsetLeft - parent.offsetLeft + node.clientWidth - parentBorderLeftWidth > parent.scrollLeft + parent.clientWidth,
	        alignWithTop = overTop && !overBottom;
	
	    if ((overTop || overBottom) && centerIfNeeded) {
	      parent.scrollTop = node.offsetTop - parent.offsetTop - parent.clientHeight / 2 - parentBorderTopWidth + node.clientHeight / 2;
	    }
	
	    if ((overLeft || overRight) && centerIfNeeded) {
	      parent.scrollLeft = node.offsetLeft - parent.offsetLeft - parent.clientWidth / 2 - parentBorderLeftWidth + node.clientWidth / 2;
	    }
	
	    if ((overTop || overBottom || overLeft || overRight) && !centerIfNeeded) {
	      node.scrollIntoView(alignWithTop);
	    }
	  },
	
	  createSafePredicate: function createSafePredicate(predicate, context) {
	    return function () {
	      try {
	        return predicate.apply(context, arguments);
	      } catch (e) {
	        return true;
	      }
	    };
	  },
	  appendQueryParameter: function appendQueryParameter(url, name, value) {
	    if (_.startsWith(url, 'data:')) {
	      return url;
	    }
	    var uri = _uri2.default.parse(url);
	    uri.setParameterValues(name, value);
	    return uri.toString();
	  },
	  setHashFragment: function setHashFragment(url, value) {
	    if (_.startsWith(url, 'data:')) {
	      return url;
	    }
	    var uri = _uri2.default.parse(url);
	    uri.setFragment(value);
	    return uri.toString();
	  },
	  addConnectApiVersionToUrl: function addConnectApiVersionToUrl(url) {
	    return this.appendQueryParameter(url, 'connect_client_api_version', CONNECT_API_VERSION);
	  },
	
	
	  strings: {
	    ellipsis: function ellipsis(content, max_length) {
	      var ellipsis = "...",
	          new_text;
	
	      if (_.isString(content)) {
	        content = content.trim();
	        if (content.length > max_length) {
	          new_text = content.substring(0, max_length - ellipsis.length);
	          new_text = new_text.trim();
	          new_text = new_text.concat(ellipsis);
	        } else {
	          new_text = content;
	        }
	      }
	      return new_text || "";
	    },
	
	    splitUnit: function splitUnit(unit) {
	      var match = unit.match("(^[0-9\.]+)(.*)$");
	      return match ? {
	        num: Number(match[1]),
	        unit: match[2]
	      } : null;
	    },
	
	    stripHiddenCharacters: function stripHiddenCharacters(str) {
	      if (typeof str !== 'string') {
	        return str;
	      }
	      return str.replace(/(?:[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, '');
	    }
	  },
	
	  roster: {
	    format_for_select2: function format_for_select2(participants, roster) {
	      var roster_jids = _.keys(roster),
	          invite_user_jids = _.difference(roster_jids, participants),
	          sorted_roster;
	
	      sorted_roster = _.sortBy(_.map(invite_user_jids, function (user_jid) {
	        return roster[user_jid];
	      }), function (person) {
	        return person.name;
	      });
	
	      return _.map(sorted_roster, function (person) {
	        return {
	          id: person.jid,
	          text: person.name
	        };
	      });
	    },
	    get_non_guest_users: function get_non_guest_users(users) {
	      return _.transform(users, function (acc, value, key) {
	        if (!value.is_guest) {
	          acc[key] = value;
	        }
	        return acc;
	      });
	    }
	  },
	
	  highlight_matches: function highlight_matches(text, matches) {
	    var escaped_text = _.escape(text);
	
	    if (_.isString(matches)) {
	      matches = _.escape(matches);
	      return escaped_text.replace(matches, '<strong>' + matches + '</strong>');
	    }
	
	    var idx = 0;
	
	    return _.reduce(matches, function (markup, match) {
	      match = _.escape(match);
	      var match_index = escaped_text.indexOf(match, idx),
	          text_between_matches = escaped_text.slice(idx, match_index);
	      idx = match_index + match.length;
	      return markup.concat(text_between_matches + '<strong>' + match + '</strong>');
	    }, '').concat(escaped_text.slice(idx));
	  },
	
	  promise: {
	
	    defer: function defer() {
	      var result = {};
	      result.promise = new _promise2.default(function (resolve, reject) {
	        result.resolve = resolve;
	        result.reject = reject;
	      });
	      return result;
	    }
	  },
	
	  alphaNumeric: function alphaNumeric(length) {
	    var alphanum = "abcdefghijklmnopqrstuvwxyz0123456789",
	        hash = '';
	    _.times(length, function () {
	      hash += alphanum.charAt(Math.floor(Math.random() * alphanum.length));
	    });
	    return hash;
	  },
	
	  timings: {
	    getPerfTiming: function getPerfTiming() {
	
	      var perfTimingKeys = [
	      //"navigationStart",
	      "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"];
	
	      if (window.performance && window.performance.timing && typeof window.performance.timing.navigationStart !== "undefined") {
	        var metrics = {};
	        perfTimingKeys.forEach(function (property) {
	          var value = window.performance.timing[property] - window.performance.timing['navigationStart'];
	          if (value > 0) {
	            metrics[property] = value;
	          }
	        });
	        return metrics;
	      }
	      return {};
	    },
	
	    now: function now() {
	      if (window.performance) {
	        return window.performance.now();
	      }
	      return Date.now();
	    }
	  },
	
	  keyCode: {
	    LeftArrow: 37,
	    UpArrow: 38,
	    RightArrow: 39,
	    DownArrow: 40,
	    Home: 36,
	    End: 35,
	    Enter: 13,
	    Esc: 27,
	    Tab: 9,
	    PageUp: 33,
	    PageDown: 34,
	    Delete: 46,
	    Backspace: 8,
	    Space: 32,
	    isSelected: function isSelected(evt) {
	      return evt.shiftKey && (evt.keyCode === this.LeftArrow || evt.keyCode === this.RightArrow);
	    },
	    isModified: function isModified(evt) {
	      return evt.shiftKey || evt.ctrlKey || evt.altKey || evt.metaKey;
	    }
	  },
	
	  /**
	   * Converts to valid html string
	   * @param {string} html Html string. For example: <a href='http://example.com'>which never ends!
	   * @returns {string} Valid html string For example: <a href="http://example.com">which never ends!</a>
	   */
	  getFixedHtml: function getFixedHtml(html) {
	    var el = document.createElement('div');
	    el.innerHTML = html;
	    return el.innerHTML;
	  },
	
	  urls: {
	    signOut: function signOut() {
	      return '/home?src=chat_exit';
	    },
	
	    guestSignOut: function guestSignOut(key) {
	      if (key) {
	        return '/g' + key + '?src=chat_exit';
	      }
	    }
	  },
	
	  request: {
	    getXHR: function getXHR() {
	      return new XMLHttpRequest();
	    },
	    simplePost: function simplePost(url) {
	      var cb = arguments.length <= 1 || arguments[1] === undefined ? _.noop : arguments[1];
	      var xhr = arguments.length <= 2 || arguments[2] === undefined ? this.getXHR() : arguments[2];
	
	      if (_.isString(url) && xhr) {
	        xhr.open("POST", url, true);
	        xhr.onreadystatechange = function () {
	          if (xhr.readyState === 4) {
	            cb(xhr.responseText);
	          }
	        };
	        xhr.send();
	      }
	    }
	  },
	
	  image: {
	    load: function load(src, loading_timeout) {
	
	      return new _promise2.default(function (resolve, reject) {
	
	        var img = new Image(),
	            timeout = null,
	            cleanup = function cleanup() {
	          if (timeout) {
	            clearTimeout(timeout);
	          }
	          img.onload = img.onerror = null;
	        };
	
	        img.onload = function () {
	          cleanup();
	          resolve(img);
	        };
	
	        img.onerror = function () {
	          cleanup();
	          reject();
	        };
	
	        timeout = setTimeout(function () {
	          cleanup();
	          reject();
	        }, loading_timeout);
	
	        img.src = src;
	      });
	    },
	
	
	    /**
	     * Promise wrapper for changing the source of image
	     * @param image
	     * @param src
	     * @param timeout
	     * @returns {Promise}
	     */
	    changeSrc: function changeSrc(image, src) {
	      var timeout = arguments.length <= 2 || arguments[2] === undefined ? 10000 : arguments[2];
	
	      return new _promise2.default(function (resolve, reject) {
	        var timeoutId = setTimeout(function () {
	          image.onload = image.onerror = null;
	          reject();
	        }, timeout);
	
	        image.onload = function () {
	          image._isLoaded = true;
	          clearTimeout(timeoutId);
	          resolve(image);
	        };
	        image.onerror = function () {
	          clearTimeout(timeoutId);
	          reject.apply(undefined, arguments);
	        };
	
	        image.src = src;
	      });
	    },
	
	
	    /**
	     * Resize image to appropriate sizes
	     * @param <Object> imageObjectURL - object URL for image
	     * @param <Integer> maxWidth
	     * @param <Integer> maxHeight
	     */
	    resizeImage: function resizeImage(imageObjectURL) {
	      var _this2 = this;
	
	      var maxWidth = arguments.length <= 1 || arguments[1] === undefined ? 150 : arguments[1];
	      var maxHeight = arguments.length <= 2 || arguments[2] === undefined ? 100 : arguments[2];
	
	      return new _promise2.default(function (resolve, reject) {
	        var canvas = document.createElement('canvas');
	        var ratio = void 0;
	
	        _this2.load(imageObjectURL, _app_config2.default.message_image_loading_timeout).then(function (img) {
	          var width = void 0;
	          var height = void 0;
	          ratio = img.naturalWidth / img.naturalHeight;
	
	          if (ratio >= 1 && img.naturalWidth > maxWidth) {
	            height = img.naturalHeight * (maxWidth / img.naturalWidth);
	            width = maxWidth;
	          } else if (img.naturalHeight > maxHeight) {
	            width = img.naturalWidth * (maxHeight / img.naturalHeight);
	            height = maxHeight;
	          } else {
	            width = img.naturalWidth;
	            height = img.naturalHeight;
	          }
	
	          canvas.width = width;
	          canvas.height = height;
	
	          var context = canvas.getContext('2d');
	          context.drawImage(img, 0, 0, width, height);
	
	          if (canvas.toBlob) {
	            canvas.toBlob(resolve);
	          } else if (canvas.msToBlob) {
	            var pngImageBlob = canvas.msToBlob();
	            resolve(pngImageBlob);
	          } else if (canvas.toDataURL && _this2._checkImageSize(img)) {
	            var dataURL = canvas.toDataURL();
	            resolve(utils.file.base64_to_blob(dataURL));
	          } else {
	            reject(new Error('Could not save processed image'));
	          }
	        });
	      });
	    },
	
	
	    /**
	     * Checks the size of image to convert it to base64
	     * @param {Image} img
	     * @returns {boolean}
	     * @private
	     */
	    _checkImageSize: function _checkImageSize(img) {
	      return img.naturalHeight <= _app_config2.default.max_image_size_for_base64 && img.naturalWidth <= _app_config2.default.max_image_size_for_base64;
	    }
	  },
	
	  features: {
	    reconcileFeatureFlags: function reconcileFeatureFlags(nativeFlags, featureFlags) {
	      var overrides = _.isObject(nativeFlags) ? nativeFlags : {},
	          flags = _.isObject(featureFlags) ? featureFlags : {};
	
	      return _.assign({}, flags, overrides);
	    },
	
	    btf_capabilities: function btf_capabilities(featureFlags) {
	      var is_128_or_higher = featureFlags.hasOwnProperty('xmpp_compression');
	      var is_137_or_higher = featureFlags.hasOwnProperty('web_client_reconnect_header');
	
	      // These are the other feature flag -> version number mappings that aren't used
	      //var is_125_or_higher = featureFlags.hasOwnProperty('gravatar');
	      //var is_131_or_higher = featureFlags.hasOwnProperty('web_client_per_room_notifications');
	      //var is_134_or_higher = featureFlags.hasOwnProperty('clinky');
	
	      var capabilities = {};
	      capabilities.nonce = is_128_or_higher;
	      capabilities.oauth = is_137_or_higher;
	      return capabilities;
	    }
	  },
	
	  dom: {
	    findParentMatching: function findParentMatching(element, selector) {
	      var until = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	      var currentElement = element;
	      var matchedParent = null;
	
	      while (currentElement) {
	        if (selector(currentElement)) {
	          matchedParent = currentElement;
	          break;
	        }
	
	        if (currentElement.parentElement === document.body || until && currentElement.parentElement === until) {
	          break;
	        }
	
	        currentElement = currentElement.parentElement;
	      }
	
	      return matchedParent;
	    },
	
	
	    matchers: {
	      tag: function tag(tagName) {
	        return function (e) {
	          return e.tagName === tagName.toUpperCase();
	        };
	      }
	    }
	  },
	
	  xml: {
	    toString: function toString(xml) {
	      return new XMLSerializer().serializeToString(xml);
	    }
	  },
	
	  mouseButton: {
	    left: 1,
	    middle: 2,
	    right: 3
	  }
	
	};
	
	exports.default = utils;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(35);
	__webpack_require__(42);
	module.exports = __webpack_require__(19).Promise;

/***/ },
/* 10 */
/***/ function(module, exports) {



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(12)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(15)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(13)
	  , defined   = __webpack_require__(14);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(16)
	  , $export        = __webpack_require__(17)
	  , redefine       = __webpack_require__(22)
	  , hide           = __webpack_require__(23)
	  , has            = __webpack_require__(28)
	  , Iterators      = __webpack_require__(29)
	  , $iterCreate    = __webpack_require__(30)
	  , setToStringTag = __webpack_require__(31)
	  , getProto       = __webpack_require__(24).getProto
	  , ITERATOR       = __webpack_require__(32)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , core      = __webpack_require__(19)
	  , ctx       = __webpack_require__(20)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 18 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(21);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(23);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(24)
	  , createDesc = __webpack_require__(25);
	module.exports = __webpack_require__(26) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(27)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(24)
	  , descriptor     = __webpack_require__(25)
	  , setToStringTag = __webpack_require__(31)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(23)(IteratorPrototype, __webpack_require__(32)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(24).setDesc
	  , has = __webpack_require__(28)
	  , TAG = __webpack_require__(32)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(33)('wks')
	  , uid    = __webpack_require__(34)
	  , Symbol = __webpack_require__(18).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(18)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	var Iterators = __webpack_require__(29);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(37)
	  , step             = __webpack_require__(38)
	  , Iterators        = __webpack_require__(29)
	  , toIObject        = __webpack_require__(39);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(15)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(40)
	  , defined = __webpack_require__(14);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(41);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(24)
	  , LIBRARY    = __webpack_require__(16)
	  , global     = __webpack_require__(18)
	  , ctx        = __webpack_require__(20)
	  , classof    = __webpack_require__(43)
	  , $export    = __webpack_require__(17)
	  , isObject   = __webpack_require__(44)
	  , anObject   = __webpack_require__(45)
	  , aFunction  = __webpack_require__(21)
	  , strictNew  = __webpack_require__(46)
	  , forOf      = __webpack_require__(47)
	  , setProto   = __webpack_require__(52).set
	  , same       = __webpack_require__(53)
	  , SPECIES    = __webpack_require__(32)('species')
	  , speciesConstructor = __webpack_require__(54)
	  , asap       = __webpack_require__(55)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(26)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(60)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(31)(P, PROMISE);
	__webpack_require__(61)(PROMISE);
	Wrapper = __webpack_require__(19)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(62)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(41)
	  , TAG = __webpack_require__(32)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(44);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(20)
	  , call        = __webpack_require__(48)
	  , isArrayIter = __webpack_require__(49)
	  , anObject    = __webpack_require__(45)
	  , toLength    = __webpack_require__(50)
	  , getIterFn   = __webpack_require__(51);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(45);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(29)
	  , ITERATOR   = __webpack_require__(32)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(13)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(43)
	  , ITERATOR  = __webpack_require__(32)('iterator')
	  , Iterators = __webpack_require__(29);
	module.exports = __webpack_require__(19).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(24).getDesc
	  , isObject = __webpack_require__(44)
	  , anObject = __webpack_require__(45);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(20)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(45)
	  , aFunction = __webpack_require__(21)
	  , SPECIES   = __webpack_require__(32)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , macrotask = __webpack_require__(56).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(41)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(20)
	  , invoke             = __webpack_require__(57)
	  , html               = __webpack_require__(58)
	  , cel                = __webpack_require__(59)
	  , global             = __webpack_require__(18)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(41)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18).document && document.documentElement;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(44)
	  , document = __webpack_require__(18).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(22);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(19)
	  , $           = __webpack_require__(24)
	  , DESCRIPTORS = __webpack_require__(26)
	  , SPECIES     = __webpack_require__(32)('species');
	
	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(32)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	module.exports = __webpack_require__(19).Object.keys;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(66);
	
	__webpack_require__(67)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(14);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(17)
	  , core    = __webpack_require__(19)
	  , fails   = __webpack_require__(27);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
	//! version : 2.12.0
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com
	
	;(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    global.moment = factory()
	}(this, function () { 'use strict';
	
	    var hookCallback;
	
	    function utils_hooks__hooks () {
	        return hookCallback.apply(null, arguments);
	    }
	
	    // This is done to register the method called with moment()
	    // without creating circular dependencies.
	    function setHookCallback (callback) {
	        hookCallback = callback;
	    }
	
	    function isArray(input) {
	        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
	    }
	
	    function isDate(input) {
	        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
	    }
	
	    function map(arr, fn) {
	        var res = [], i;
	        for (i = 0; i < arr.length; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }
	
	    function hasOwnProp(a, b) {
	        return Object.prototype.hasOwnProperty.call(a, b);
	    }
	
	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }
	
	        if (hasOwnProp(b, 'toString')) {
	            a.toString = b.toString;
	        }
	
	        if (hasOwnProp(b, 'valueOf')) {
	            a.valueOf = b.valueOf;
	        }
	
	        return a;
	    }
	
	    function create_utc__createUTC (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, true).utc();
	    }
	
	    function defaultParsingFlags() {
	        // We need to deep clone this object.
	        return {
	            empty           : false,
	            unusedTokens    : [],
	            unusedInput     : [],
	            overflow        : -2,
	            charsLeftOver   : 0,
	            nullInput       : false,
	            invalidMonth    : null,
	            invalidFormat   : false,
	            userInvalidated : false,
	            iso             : false
	        };
	    }
	
	    function getParsingFlags(m) {
	        if (m._pf == null) {
	            m._pf = defaultParsingFlags();
	        }
	        return m._pf;
	    }
	
	    function valid__isValid(m) {
	        if (m._isValid == null) {
	            var flags = getParsingFlags(m);
	            m._isValid = !isNaN(m._d.getTime()) &&
	                flags.overflow < 0 &&
	                !flags.empty &&
	                !flags.invalidMonth &&
	                !flags.invalidWeekday &&
	                !flags.nullInput &&
	                !flags.invalidFormat &&
	                !flags.userInvalidated;
	
	            if (m._strict) {
	                m._isValid = m._isValid &&
	                    flags.charsLeftOver === 0 &&
	                    flags.unusedTokens.length === 0 &&
	                    flags.bigHour === undefined;
	            }
	        }
	        return m._isValid;
	    }
	
	    function valid__createInvalid (flags) {
	        var m = create_utc__createUTC(NaN);
	        if (flags != null) {
	            extend(getParsingFlags(m), flags);
	        }
	        else {
	            getParsingFlags(m).userInvalidated = true;
	        }
	
	        return m;
	    }
	
	    function isUndefined(input) {
	        return input === void 0;
	    }
	
	    // Plugins that add properties should also add the key here (null value),
	    // so we can properly clone ourselves.
	    var momentProperties = utils_hooks__hooks.momentProperties = [];
	
	    function copyConfig(to, from) {
	        var i, prop, val;
	
	        if (!isUndefined(from._isAMomentObject)) {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (!isUndefined(from._i)) {
	            to._i = from._i;
	        }
	        if (!isUndefined(from._f)) {
	            to._f = from._f;
	        }
	        if (!isUndefined(from._l)) {
	            to._l = from._l;
	        }
	        if (!isUndefined(from._strict)) {
	            to._strict = from._strict;
	        }
	        if (!isUndefined(from._tzm)) {
	            to._tzm = from._tzm;
	        }
	        if (!isUndefined(from._isUTC)) {
	            to._isUTC = from._isUTC;
	        }
	        if (!isUndefined(from._offset)) {
	            to._offset = from._offset;
	        }
	        if (!isUndefined(from._pf)) {
	            to._pf = getParsingFlags(from);
	        }
	        if (!isUndefined(from._locale)) {
	            to._locale = from._locale;
	        }
	
	        if (momentProperties.length > 0) {
	            for (i in momentProperties) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (!isUndefined(val)) {
	                    to[prop] = val;
	                }
	            }
	        }
	
	        return to;
	    }
	
	    var updateInProgress = false;
	
	    // Moment prototype object
	    function Moment(config) {
	        copyConfig(this, config);
	        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            utils_hooks__hooks.updateOffset(this);
	            updateInProgress = false;
	        }
	    }
	
	    function isMoment (obj) {
	        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
	    }
	
	    function absFloor (number) {
	        if (number < 0) {
	            return Math.ceil(number);
	        } else {
	            return Math.floor(number);
	        }
	    }
	
	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;
	
	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            value = absFloor(coercedNumber);
	        }
	
	        return value;
	    }
	
	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if ((dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }
	
	    function warn(msg) {
	        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&
	                (typeof console !==  'undefined') && console.warn) {
	            console.warn('Deprecation warning: ' + msg);
	        }
	    }
	
	    function deprecate(msg, fn) {
	        var firstTime = true;
	
	        return extend(function () {
	            if (firstTime) {
	                warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }
	
	    var deprecations = {};
	
	    function deprecateSimple(name, msg) {
	        if (!deprecations[name]) {
	            warn(msg);
	            deprecations[name] = true;
	        }
	    }
	
	    utils_hooks__hooks.suppressDeprecationWarnings = false;
	
	    function isFunction(input) {
	        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	    }
	
	    function isObject(input) {
	        return Object.prototype.toString.call(input) === '[object Object]';
	    }
	
	    function locale_set__set (config) {
	        var prop, i;
	        for (i in config) {
	            prop = config[i];
	            if (isFunction(prop)) {
	                this[i] = prop;
	            } else {
	                this['_' + i] = prop;
	            }
	        }
	        this._config = config;
	        // Lenient ordinal parsing accepts just a number in addition to
	        // number + (possibly) stuff coming from _ordinalParseLenient.
	        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
	    }
	
	    function mergeConfigs(parentConfig, childConfig) {
	        var res = extend({}, parentConfig), prop;
	        for (prop in childConfig) {
	            if (hasOwnProp(childConfig, prop)) {
	                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
	                    res[prop] = {};
	                    extend(res[prop], parentConfig[prop]);
	                    extend(res[prop], childConfig[prop]);
	                } else if (childConfig[prop] != null) {
	                    res[prop] = childConfig[prop];
	                } else {
	                    delete res[prop];
	                }
	            }
	        }
	        return res;
	    }
	
	    function Locale(config) {
	        if (config != null) {
	            this.set(config);
	        }
	    }
	
	    // internal storage for locale config files
	    var locales = {};
	    var globalLocale;
	
	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace('_', '-') : key;
	    }
	
	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0, j, next, locale, split;
	
	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split('-');
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split('-') : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join('-'));
	                if (locale) {
	                    return locale;
	                }
	                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return null;
	    }
	
	    function loadLocale(name) {
	        var oldLocale = null;
	        // TODO: Find a better way to register and load all the locales in Node
	        if (!locales[name] && (typeof module !== 'undefined') &&
	                module && module.exports) {
	            try {
	                oldLocale = globalLocale._abbr;
	                !(function webpackMissingModule() { var e = new Error("Cannot find module \"./locale\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
	                // because defineLocale currently also sets the global locale, we
	                // want to undo that for lazy loaded locales
	                locale_locales__getSetGlobalLocale(oldLocale);
	            } catch (e) { }
	        }
	        return locales[name];
	    }
	
	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    function locale_locales__getSetGlobalLocale (key, values) {
	        var data;
	        if (key) {
	            if (isUndefined(values)) {
	                data = locale_locales__getLocale(key);
	            }
	            else {
	                data = defineLocale(key, values);
	            }
	
	            if (data) {
	                // moment.duration._locale = moment._locale = data;
	                globalLocale = data;
	            }
	        }
	
	        return globalLocale._abbr;
	    }
	
	    function defineLocale (name, config) {
	        if (config !== null) {
	            config.abbr = name;
	            if (locales[name] != null) {
	                deprecateSimple('defineLocaleOverride',
	                        'use moment.updateLocale(localeName, config) to change ' +
	                        'an existing locale. moment.defineLocale(localeName, ' +
	                        'config) should only be used for creating a new locale');
	                config = mergeConfigs(locales[name]._config, config);
	            } else if (config.parentLocale != null) {
	                if (locales[config.parentLocale] != null) {
	                    config = mergeConfigs(locales[config.parentLocale]._config, config);
	                } else {
	                    // treat as if there is no base config
	                    deprecateSimple('parentLocaleUndefined',
	                            'specified parentLocale is not defined yet');
	                }
	            }
	            locales[name] = new Locale(config);
	
	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);
	
	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    }
	
	    function updateLocale(name, config) {
	        if (config != null) {
	            var locale;
	            if (locales[name] != null) {
	                config = mergeConfigs(locales[name]._config, config);
	            }
	            locale = new Locale(config);
	            locale.parentLocale = locales[name];
	            locales[name] = locale;
	
	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);
	        } else {
	            // pass null for config to unupdate, useful for tests
	            if (locales[name] != null) {
	                if (locales[name].parentLocale != null) {
	                    locales[name] = locales[name].parentLocale;
	                } else if (locales[name] != null) {
	                    delete locales[name];
	                }
	            }
	        }
	        return locales[name];
	    }
	
	    // returns locale data
	    function locale_locales__getLocale (key) {
	        var locale;
	
	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }
	
	        if (!key) {
	            return globalLocale;
	        }
	
	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }
	
	        return chooseLocale(key);
	    }
	
	    function locale_locales__listLocales() {
	        return Object.keys(locales);
	    }
	
	    var aliases = {};
	
	    function addUnitAlias (unit, shorthand) {
	        var lowerCase = unit.toLowerCase();
	        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	    }
	
	    function normalizeUnits(units) {
	        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
	    }
	
	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;
	
	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }
	
	        return normalizedInput;
	    }
	
	    function makeGetSet (unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                get_set__set(this, unit, value);
	                utils_hooks__hooks.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return get_set__get(this, unit);
	            }
	        };
	    }
	
	    function get_set__get (mom, unit) {
	        return mom.isValid() ?
	            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
	    }
	
	    function get_set__set (mom, unit, value) {
	        if (mom.isValid()) {
	            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	        }
	    }
	
	    // MOMENTS
	
	    function getSet (units, value) {
	        var unit;
	        if (typeof units === 'object') {
	            for (unit in units) {
	                this.set(unit, units[unit]);
	            }
	        } else {
	            units = normalizeUnits(units);
	            if (isFunction(this[units])) {
	                return this[units](value);
	            }
	        }
	        return this;
	    }
	
	    function zeroFill(number, targetLength, forceSign) {
	        var absNumber = '' + Math.abs(number),
	            zerosToFill = targetLength - absNumber.length,
	            sign = number >= 0;
	        return (sign ? (forceSign ? '+' : '') : '-') +
	            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
	    }
	
	    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
	
	    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
	
	    var formatFunctions = {};
	
	    var formatTokenFunctions = {};
	
	    // token:    'M'
	    // padded:   ['MM', 2]
	    // ordinal:  'Mo'
	    // callback: function () { this.month() + 1 }
	    function addFormatToken (token, padded, ordinal, callback) {
	        var func = callback;
	        if (typeof callback === 'string') {
	            func = function () {
	                return this[callback]();
	            };
	        }
	        if (token) {
	            formatTokenFunctions[token] = func;
	        }
	        if (padded) {
	            formatTokenFunctions[padded[0]] = function () {
	                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	            };
	        }
	        if (ordinal) {
	            formatTokenFunctions[ordinal] = function () {
	                return this.localeData().ordinal(func.apply(this, arguments), token);
	            };
	        }
	    }
	
	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, '');
	        }
	        return input.replace(/\\/g, '');
	    }
	
	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens), i, length;
	
	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }
	
	        return function (mom) {
	            var output = '';
	            for (i = 0; i < length; i++) {
	                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }
	
	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }
	
	        format = expandFormat(format, m.localeData());
	        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
	
	        return formatFunctions[format](m);
	    }
	
	    function expandFormat(format, locale) {
	        var i = 5;
	
	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }
	
	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }
	
	        return format;
	    }
	
	    var match1         = /\d/;            //       0 - 9
	    var match2         = /\d\d/;          //      00 - 99
	    var match3         = /\d{3}/;         //     000 - 999
	    var match4         = /\d{4}/;         //    0000 - 9999
	    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
	    var match1to2      = /\d\d?/;         //       0 - 99
	    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
	    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
	    var match1to3      = /\d{1,3}/;       //       0 - 999
	    var match1to4      = /\d{1,4}/;       //       0 - 9999
	    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999
	
	    var matchUnsigned  = /\d+/;           //       0 - inf
	    var matchSigned    = /[+-]?\d+/;      //    -inf - inf
	
	    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
	    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
	
	    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
	
	    // any word (or two) characters or numbers including two/three word month in arabic.
	    // includes scottish gaelic two word and hyphenated months
	    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
	
	
	    var regexes = {};
	
	    function addRegexToken (token, regex, strictRegex) {
	        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
	            return (isStrict && strictRegex) ? strictRegex : regex;
	        };
	    }
	
	    function getParseRegexForToken (token, config) {
	        if (!hasOwnProp(regexes, token)) {
	            return new RegExp(unescapeFormat(token));
	        }
	
	        return regexes[token](config._strict, config._locale);
	    }
	
	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function unescapeFormat(s) {
	        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	            return p1 || p2 || p3 || p4;
	        }));
	    }
	
	    function regexEscape(s) {
	        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }
	
	    var tokens = {};
	
	    function addParseToken (token, callback) {
	        var i, func = callback;
	        if (typeof token === 'string') {
	            token = [token];
	        }
	        if (typeof callback === 'number') {
	            func = function (input, array) {
	                array[callback] = toInt(input);
	            };
	        }
	        for (i = 0; i < token.length; i++) {
	            tokens[token[i]] = func;
	        }
	    }
	
	    function addWeekParseToken (token, callback) {
	        addParseToken(token, function (input, array, config, token) {
	            config._w = config._w || {};
	            callback(input, config._w, config, token);
	        });
	    }
	
	    function addTimeToArrayFromToken(token, input, config) {
	        if (input != null && hasOwnProp(tokens, token)) {
	            tokens[token](input, config._a, config, token);
	        }
	    }
	
	    var YEAR = 0;
	    var MONTH = 1;
	    var DATE = 2;
	    var HOUR = 3;
	    var MINUTE = 4;
	    var SECOND = 5;
	    var MILLISECOND = 6;
	    var WEEK = 7;
	    var WEEKDAY = 8;
	
	    function daysInMonth(year, month) {
	        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	    }
	
	    // FORMATTING
	
	    addFormatToken('M', ['MM', 2], 'Mo', function () {
	        return this.month() + 1;
	    });
	
	    addFormatToken('MMM', 0, 0, function (format) {
	        return this.localeData().monthsShort(this, format);
	    });
	
	    addFormatToken('MMMM', 0, 0, function (format) {
	        return this.localeData().months(this, format);
	    });
	
	    // ALIASES
	
	    addUnitAlias('month', 'M');
	
	    // PARSING
	
	    addRegexToken('M',    match1to2);
	    addRegexToken('MM',   match1to2, match2);
	    addRegexToken('MMM',  function (isStrict, locale) {
	        return locale.monthsShortRegex(isStrict);
	    });
	    addRegexToken('MMMM', function (isStrict, locale) {
	        return locale.monthsRegex(isStrict);
	    });
	
	    addParseToken(['M', 'MM'], function (input, array) {
	        array[MONTH] = toInt(input) - 1;
	    });
	
	    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
	        var month = config._locale.monthsParse(input, token, config._strict);
	        // if we didn't find a month name, mark the date as invalid.
	        if (month != null) {
	            array[MONTH] = month;
	        } else {
	            getParsingFlags(config).invalidMonth = input;
	        }
	    });
	
	    // LOCALES
	
	    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
	    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
	    function localeMonths (m, format) {
	        return isArray(this._months) ? this._months[m.month()] :
	            this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	    }
	
	    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
	    function localeMonthsShort (m, format) {
	        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
	            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	    }
	
	    function localeMonthsParse (monthName, format, strict) {
	        var i, mom, regex;
	
	        if (!this._monthsParse) {
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	        }
	
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            if (strict && !this._longMonthsParse[i]) {
	                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
	                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
	            }
	            if (!strict && !this._monthsParse[i]) {
	                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (!strict && this._monthsParse[i].test(monthName)) {
	                return i;
	            }
	        }
	    }
	
	    // MOMENTS
	
	    function setMonth (mom, value) {
	        var dayOfMonth;
	
	        if (!mom.isValid()) {
	            // No op
	            return mom;
	        }
	
	        if (typeof value === 'string') {
	            if (/^\d+$/.test(value)) {
	                value = toInt(value);
	            } else {
	                value = mom.localeData().monthsParse(value);
	                // TODO: Another silent failure?
	                if (typeof value !== 'number') {
	                    return mom;
	                }
	            }
	        }
	
	        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	        return mom;
	    }
	
	    function getSetMonth (value) {
	        if (value != null) {
	            setMonth(this, value);
	            utils_hooks__hooks.updateOffset(this, true);
	            return this;
	        } else {
	            return get_set__get(this, 'Month');
	        }
	    }
	
	    function getDaysInMonth () {
	        return daysInMonth(this.year(), this.month());
	    }
	
	    var defaultMonthsShortRegex = matchWord;
	    function monthsShortRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsShortStrictRegex;
	            } else {
	                return this._monthsShortRegex;
	            }
	        } else {
	            return this._monthsShortStrictRegex && isStrict ?
	                this._monthsShortStrictRegex : this._monthsShortRegex;
	        }
	    }
	
	    var defaultMonthsRegex = matchWord;
	    function monthsRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsStrictRegex;
	            } else {
	                return this._monthsRegex;
	            }
	        } else {
	            return this._monthsStrictRegex && isStrict ?
	                this._monthsStrictRegex : this._monthsRegex;
	        }
	    }
	
	    function computeMonthsParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }
	
	        var shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom;
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            shortPieces.push(this.monthsShort(mom, ''));
	            longPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.monthsShort(mom, ''));
	        }
	        // Sorting makes sure if one month (or abbr) is a prefix of another it
	        // will match the longer piece.
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 12; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }
	
	        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._monthsShortRegex = this._monthsRegex;
	        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')$', 'i');
	        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')$', 'i');
	    }
	
	    function checkOverflow (m) {
	        var overflow;
	        var a = m._a;
	
	        if (a && getParsingFlags(m).overflow === -2) {
	            overflow =
	                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
	                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
	                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
	                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
	                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
	                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
	                -1;
	
	            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	                overflow = DATE;
	            }
	            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
	                overflow = WEEK;
	            }
	            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
	                overflow = WEEKDAY;
	            }
	
	            getParsingFlags(m).overflow = overflow;
	        }
	
	        return m;
	    }
	
	    // iso 8601 regex
	    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	
	    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
	
	    var isoDates = [
	        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
	        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
	        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
	        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
	        ['YYYY-DDD', /\d{4}-\d{3}/],
	        ['YYYY-MM', /\d{4}-\d\d/, false],
	        ['YYYYYYMMDD', /[+-]\d{10}/],
	        ['YYYYMMDD', /\d{8}/],
	        // YYYYMM is NOT allowed by the standard
	        ['GGGG[W]WWE', /\d{4}W\d{3}/],
	        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
	        ['YYYYDDD', /\d{7}/]
	    ];
	
	    // iso time formats and regexes
	    var isoTimes = [
	        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
	        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
	        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
	        ['HH:mm', /\d\d:\d\d/],
	        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
	        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
	        ['HHmmss', /\d\d\d\d\d\d/],
	        ['HHmm', /\d\d\d\d/],
	        ['HH', /\d\d/]
	    ];
	
	    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
	
	    // date from iso format
	    function configFromISO(config) {
	        var i, l,
	            string = config._i,
	            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
	            allowTime, dateFormat, timeFormat, tzFormat;
	
	        if (match) {
	            getParsingFlags(config).iso = true;
	
	            for (i = 0, l = isoDates.length; i < l; i++) {
	                if (isoDates[i][1].exec(match[1])) {
	                    dateFormat = isoDates[i][0];
	                    allowTime = isoDates[i][2] !== false;
	                    break;
	                }
	            }
	            if (dateFormat == null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[3]) {
	                for (i = 0, l = isoTimes.length; i < l; i++) {
	                    if (isoTimes[i][1].exec(match[3])) {
	                        // match[2] should be 'T' or space
	                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
	                        break;
	                    }
	                }
	                if (timeFormat == null) {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            if (!allowTime && timeFormat != null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[4]) {
	                if (tzRegex.exec(match[4])) {
	                    tzFormat = 'Z';
	                } else {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
	            configFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }
	
	    // date from iso format or fallback
	    function configFromString(config) {
	        var matched = aspNetJsonRegex.exec(config._i);
	
	        if (matched !== null) {
	            config._d = new Date(+matched[1]);
	            return;
	        }
	
	        configFromISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }
	
	    utils_hooks__hooks.createFromInputFallback = deprecate(
	        'moment construction falls back to js Date. This is ' +
	        'discouraged and will be removed in upcoming major ' +
	        'release. Please refer to ' +
	        'https://github.com/moment/moment/issues/1407 for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );
	
	    function createDate (y, m, d, h, M, s, ms) {
	        //can't just apply() to create a date:
	        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	        var date = new Date(y, m, d, h, M, s, ms);
	
	        //the date constructor remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
	            date.setFullYear(y);
	        }
	        return date;
	    }
	
	    function createUTCDate (y) {
	        var date = new Date(Date.UTC.apply(null, arguments));
	
	        //the Date.UTC function remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
	            date.setUTCFullYear(y);
	        }
	        return date;
	    }
	
	    // FORMATTING
	
	    addFormatToken('Y', 0, 0, function () {
	        var y = this.year();
	        return y <= 9999 ? '' + y : '+' + y;
	    });
	
	    addFormatToken(0, ['YY', 2], 0, function () {
	        return this.year() % 100;
	    });
	
	    addFormatToken(0, ['YYYY',   4],       0, 'year');
	    addFormatToken(0, ['YYYYY',  5],       0, 'year');
	    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
	
	    // ALIASES
	
	    addUnitAlias('year', 'y');
	
	    // PARSING
	
	    addRegexToken('Y',      matchSigned);
	    addRegexToken('YY',     match1to2, match2);
	    addRegexToken('YYYY',   match1to4, match4);
	    addRegexToken('YYYYY',  match1to6, match6);
	    addRegexToken('YYYYYY', match1to6, match6);
	
	    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	    addParseToken('YYYY', function (input, array) {
	        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
	    });
	    addParseToken('YY', function (input, array) {
	        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });
	    addParseToken('Y', function (input, array) {
	        array[YEAR] = parseInt(input, 10);
	    });
	
	    // HELPERS
	
	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }
	
	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }
	
	    // HOOKS
	
	    utils_hooks__hooks.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };
	
	    // MOMENTS
	
	    var getSetYear = makeGetSet('FullYear', false);
	
	    function getIsLeapYear () {
	        return isLeapYear(this.year());
	    }
	
	    // start-of-first-week - start-of-year
	    function firstWeekOffset(year, dow, doy) {
	        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
	            fwd = 7 + dow - doy,
	            // first-week day local weekday -- which local weekday is fwd
	            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
	
	        return -fwdlw + fwd - 1;
	    }
	
	    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
	        var localWeekday = (7 + weekday - dow) % 7,
	            weekOffset = firstWeekOffset(year, dow, doy),
	            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
	            resYear, resDayOfYear;
	
	        if (dayOfYear <= 0) {
	            resYear = year - 1;
	            resDayOfYear = daysInYear(resYear) + dayOfYear;
	        } else if (dayOfYear > daysInYear(year)) {
	            resYear = year + 1;
	            resDayOfYear = dayOfYear - daysInYear(year);
	        } else {
	            resYear = year;
	            resDayOfYear = dayOfYear;
	        }
	
	        return {
	            year: resYear,
	            dayOfYear: resDayOfYear
	        };
	    }
	
	    function weekOfYear(mom, dow, doy) {
	        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
	            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
	            resWeek, resYear;
	
	        if (week < 1) {
	            resYear = mom.year() - 1;
	            resWeek = week + weeksInYear(resYear, dow, doy);
	        } else if (week > weeksInYear(mom.year(), dow, doy)) {
	            resWeek = week - weeksInYear(mom.year(), dow, doy);
	            resYear = mom.year() + 1;
	        } else {
	            resYear = mom.year();
	            resWeek = week;
	        }
	
	        return {
	            week: resWeek,
	            year: resYear
	        };
	    }
	
	    function weeksInYear(year, dow, doy) {
	        var weekOffset = firstWeekOffset(year, dow, doy),
	            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
	        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	    }
	
	    // Pick the first defined of two or three arguments.
	    function defaults(a, b, c) {
	        if (a != null) {
	            return a;
	        }
	        if (b != null) {
	            return b;
	        }
	        return c;
	    }
	
	    function currentDateArray(config) {
	        // hooks is actually the exported moment object
	        var nowValue = new Date(utils_hooks__hooks.now());
	        if (config._useUTC) {
	            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
	        }
	        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	    }
	
	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function configFromArray (config) {
	        var i, date, input = [], currentDate, yearToUse;
	
	        if (config._d) {
	            return;
	        }
	
	        currentDate = currentDateArray(config);
	
	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }
	
	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear) {
	            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
	
	            if (config._dayOfYear > daysInYear(yearToUse)) {
	                getParsingFlags(config)._overflowDayOfYear = true;
	            }
	
	            date = createUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }
	
	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }
	
	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	        }
	
	        // Check for 24:00:00.000
	        if (config._a[HOUR] === 24 &&
	                config._a[MINUTE] === 0 &&
	                config._a[SECOND] === 0 &&
	                config._a[MILLISECOND] === 0) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }
	
	        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }
	
	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }
	    }
	
	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
	
	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;
	
	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
	            week = defaults(w.W, 1);
	            weekday = defaults(w.E, 1);
	            if (weekday < 1 || weekday > 7) {
	                weekdayOverflow = true;
	            }
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;
	
	            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
	            week = defaults(w.w, 1);
	
	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < 0 || weekday > 6) {
	                    weekdayOverflow = true;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from begining of week
	                weekday = w.e + dow;
	                if (w.e < 0 || w.e > 6) {
	                    weekdayOverflow = true;
	                }
	            } else {
	                // default to begining of week
	                weekday = dow;
	            }
	        }
	        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
	            getParsingFlags(config)._overflowWeeks = true;
	        } else if (weekdayOverflow != null) {
	            getParsingFlags(config)._overflowWeekday = true;
	        } else {
	            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
	            config._a[YEAR] = temp.year;
	            config._dayOfYear = temp.dayOfYear;
	        }
	    }
	
	    // constant that refers to the ISO standard
	    utils_hooks__hooks.ISO_8601 = function () {};
	
	    // date from string and format string
	    function configFromStringAndFormat(config) {
	        // TODO: Move this to another part of the creation flow to prevent circular deps
	        if (config._f === utils_hooks__hooks.ISO_8601) {
	            configFromISO(config);
	            return;
	        }
	
	        config._a = [];
	        getParsingFlags(config).empty = true;
	
	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = '' + config._i,
	            i, parsedInput, tokens, token, skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0;
	
	        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
	
	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	            // console.log('token', token, 'parsedInput', parsedInput,
	            //         'regex', getParseRegexForToken(token, config));
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    getParsingFlags(config).unusedInput.push(skipped);
	                }
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    getParsingFlags(config).empty = false;
	                }
	                else {
	                    getParsingFlags(config).unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            }
	            else if (config._strict && !parsedInput) {
	                getParsingFlags(config).unusedTokens.push(token);
	            }
	        }
	
	        // add remaining unparsed input length to the string
	        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            getParsingFlags(config).unusedInput.push(string);
	        }
	
	        // clear _12h flag if hour is <= 12
	        if (getParsingFlags(config).bigHour === true &&
	                config._a[HOUR] <= 12 &&
	                config._a[HOUR] > 0) {
	            getParsingFlags(config).bigHour = undefined;
	        }
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
	
	        configFromArray(config);
	        checkOverflow(config);
	    }
	
	
	    function meridiemFixWrap (locale, hour, meridiem) {
	        var isPm;
	
	        if (meridiem == null) {
	            // nothing to do
	            return hour;
	        }
	        if (locale.meridiemHour != null) {
	            return locale.meridiemHour(hour, meridiem);
	        } else if (locale.isPM != null) {
	            // Fallback
	            isPm = locale.isPM(meridiem);
	            if (isPm && hour < 12) {
	                hour += 12;
	            }
	            if (!isPm && hour === 12) {
	                hour = 0;
	            }
	            return hour;
	        } else {
	            // this is not supposed to happen
	            return hour;
	        }
	    }
	
	    // date from string and array of format strings
	    function configFromStringAndArray(config) {
	        var tempConfig,
	            bestMoment,
	
	            scoreToBeat,
	            i,
	            currentScore;
	
	        if (config._f.length === 0) {
	            getParsingFlags(config).invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }
	
	        for (i = 0; i < config._f.length; i++) {
	            currentScore = 0;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._f = config._f[i];
	            configFromStringAndFormat(tempConfig);
	
	            if (!valid__isValid(tempConfig)) {
	                continue;
	            }
	
	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += getParsingFlags(tempConfig).charsLeftOver;
	
	            //or tokens
	            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
	
	            getParsingFlags(tempConfig).score = currentScore;
	
	            if (scoreToBeat == null || currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempConfig;
	            }
	        }
	
	        extend(config, bestMoment || tempConfig);
	    }
	
	    function configFromObject(config) {
	        if (config._d) {
	            return;
	        }
	
	        var i = normalizeObjectUnits(config._i);
	        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
	            return obj && parseInt(obj, 10);
	        });
	
	        configFromArray(config);
	    }
	
	    function createFromConfig (config) {
	        var res = new Moment(checkOverflow(prepareConfig(config)));
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, 'd');
	            res._nextDay = undefined;
	        }
	
	        return res;
	    }
	
	    function prepareConfig (config) {
	        var input = config._i,
	            format = config._f;
	
	        config._locale = config._locale || locale_locales__getLocale(config._l);
	
	        if (input === null || (format === undefined && input === '')) {
	            return valid__createInvalid({nullInput: true});
	        }
	
	        if (typeof input === 'string') {
	            config._i = input = config._locale.preparse(input);
	        }
	
	        if (isMoment(input)) {
	            return new Moment(checkOverflow(input));
	        } else if (isArray(format)) {
	            configFromStringAndArray(config);
	        } else if (format) {
	            configFromStringAndFormat(config);
	        } else if (isDate(input)) {
	            config._d = input;
	        } else {
	            configFromInput(config);
	        }
	
	        if (!valid__isValid(config)) {
	            config._d = null;
	        }
	
	        return config;
	    }
	
	    function configFromInput(config) {
	        var input = config._i;
	        if (input === undefined) {
	            config._d = new Date(utils_hooks__hooks.now());
	        } else if (isDate(input)) {
	            config._d = new Date(+input);
	        } else if (typeof input === 'string') {
	            configFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            configFromArray(config);
	        } else if (typeof(input) === 'object') {
	            configFromObject(config);
	        } else if (typeof(input) === 'number') {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }
	
	    function createLocalOrUTC (input, format, locale, strict, isUTC) {
	        var c = {};
	
	        if (typeof(locale) === 'boolean') {
	            strict = locale;
	            locale = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c._isAMomentObject = true;
	        c._useUTC = c._isUTC = isUTC;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;
	
	        return createFromConfig(c);
	    }
	
	    function local__createLocal (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, false);
	    }
	
	    var prototypeMin = deprecate(
	         'moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
	         function () {
	             var other = local__createLocal.apply(null, arguments);
	             if (this.isValid() && other.isValid()) {
	                 return other < this ? this : other;
	             } else {
	                 return valid__createInvalid();
	             }
	         }
	     );
	
	    var prototypeMax = deprecate(
	        'moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
	        function () {
	            var other = local__createLocal.apply(null, arguments);
	            if (this.isValid() && other.isValid()) {
	                return other > this ? this : other;
	            } else {
	                return valid__createInvalid();
	            }
	        }
	    );
	
	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return local__createLocal();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (!moments[i].isValid() || moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }
	
	    // TODO: Use [].sort instead?
	    function min () {
	        var args = [].slice.call(arguments, 0);
	
	        return pickBy('isBefore', args);
	    }
	
	    function max () {
	        var args = [].slice.call(arguments, 0);
	
	        return pickBy('isAfter', args);
	    }
	
	    var now = function () {
	        return Date.now ? Date.now() : +(new Date());
	    };
	
	    function Duration (duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;
	
	        // representation for dateAddRemove
	        this._milliseconds = +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 36e5; // 1000 * 60 * 60
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days +
	            weeks * 7;
	        // It is impossible translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months +
	            quarters * 3 +
	            years * 12;
	
	        this._data = {};
	
	        this._locale = locale_locales__getLocale();
	
	        this._bubble();
	    }
	
	    function isDuration (obj) {
	        return obj instanceof Duration;
	    }
	
	    // FORMATTING
	
	    function offset (token, separator) {
	        addFormatToken(token, 0, 0, function () {
	            var offset = this.utcOffset();
	            var sign = '+';
	            if (offset < 0) {
	                offset = -offset;
	                sign = '-';
	            }
	            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
	        });
	    }
	
	    offset('Z', ':');
	    offset('ZZ', '');
	
	    // PARSING
	
	    addRegexToken('Z',  matchShortOffset);
	    addRegexToken('ZZ', matchShortOffset);
	    addParseToken(['Z', 'ZZ'], function (input, array, config) {
	        config._useUTC = true;
	        config._tzm = offsetFromString(matchShortOffset, input);
	    });
	
	    // HELPERS
	
	    // timezone chunker
	    // '+10:00' > ['10',  '00']
	    // '-1530'  > ['-15', '30']
	    var chunkOffset = /([\+\-]|\d\d)/gi;
	
	    function offsetFromString(matcher, string) {
	        var matches = ((string || '').match(matcher) || []);
	        var chunk   = matches[matches.length - 1] || [];
	        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	        var minutes = +(parts[1] * 60) + toInt(parts[2]);
	
	        return parts[0] === '+' ? minutes : -minutes;
	    }
	
	    // Return a moment from input, that is local/utc/zone equivalent to model.
	    function cloneWithOffset(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(+res._d + diff);
	            utils_hooks__hooks.updateOffset(res, false);
	            return res;
	        } else {
	            return local__createLocal(input).local();
	        }
	    }
	
	    function getDateOffset (m) {
	        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	        // https://github.com/moment/moment/pull/1871
	        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
	    }
	
	    // HOOKS
	
	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    utils_hooks__hooks.updateOffset = function () {};
	
	    // MOMENTS
	
	    // keepLocalTime = true means only change the timezone, without
	    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	    // +0200, so we adjust the time as needed, to be valid.
	    //
	    // Keeping the time actually adds/subtracts (one hour)
	    // from the actual represented time. That is why we call updateOffset
	    // a second time. In case it wants us to change the offset again
	    // _changeInProgress == true case, then we have to adjust, because
	    // there is no such time in the given timezone.
	    function getSetOffset (input, keepLocalTime) {
	        var offset = this._offset || 0,
	            localAdjust;
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        if (input != null) {
	            if (typeof input === 'string') {
	                input = offsetFromString(matchShortOffset, input);
	            } else if (Math.abs(input) < 16) {
	                input = input * 60;
	            }
	            if (!this._isUTC && keepLocalTime) {
	                localAdjust = getDateOffset(this);
	            }
	            this._offset = input;
	            this._isUTC = true;
	            if (localAdjust != null) {
	                this.add(localAdjust, 'm');
	            }
	            if (offset !== input) {
	                if (!keepLocalTime || this._changeInProgress) {
	                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
	                } else if (!this._changeInProgress) {
	                    this._changeInProgress = true;
	                    utils_hooks__hooks.updateOffset(this, true);
	                    this._changeInProgress = null;
	                }
	            }
	            return this;
	        } else {
	            return this._isUTC ? offset : getDateOffset(this);
	        }
	    }
	
	    function getSetZone (input, keepLocalTime) {
	        if (input != null) {
	            if (typeof input !== 'string') {
	                input = -input;
	            }
	
	            this.utcOffset(input, keepLocalTime);
	
	            return this;
	        } else {
	            return -this.utcOffset();
	        }
	    }
	
	    function setOffsetToUTC (keepLocalTime) {
	        return this.utcOffset(0, keepLocalTime);
	    }
	
	    function setOffsetToLocal (keepLocalTime) {
	        if (this._isUTC) {
	            this.utcOffset(0, keepLocalTime);
	            this._isUTC = false;
	
	            if (keepLocalTime) {
	                this.subtract(getDateOffset(this), 'm');
	            }
	        }
	        return this;
	    }
	
	    function setOffsetToParsedOffset () {
	        if (this._tzm) {
	            this.utcOffset(this._tzm);
	        } else if (typeof this._i === 'string') {
	            this.utcOffset(offsetFromString(matchOffset, this._i));
	        }
	        return this;
	    }
	
	    function hasAlignedHourOffset (input) {
	        if (!this.isValid()) {
	            return false;
	        }
	        input = input ? local__createLocal(input).utcOffset() : 0;
	
	        return (this.utcOffset() - input) % 60 === 0;
	    }
	
	    function isDaylightSavingTime () {
	        return (
	            this.utcOffset() > this.clone().month(0).utcOffset() ||
	            this.utcOffset() > this.clone().month(5).utcOffset()
	        );
	    }
	
	    function isDaylightSavingTimeShifted () {
	        if (!isUndefined(this._isDSTShifted)) {
	            return this._isDSTShifted;
	        }
	
	        var c = {};
	
	        copyConfig(c, this);
	        c = prepareConfig(c);
	
	        if (c._a) {
	            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
	            this._isDSTShifted = this.isValid() &&
	                compareArrays(c._a, other.toArray()) > 0;
	        } else {
	            this._isDSTShifted = false;
	        }
	
	        return this._isDSTShifted;
	    }
	
	    function isLocal () {
	        return this.isValid() ? !this._isUTC : false;
	    }
	
	    function isUtcOffset () {
	        return this.isValid() ? this._isUTC : false;
	    }
	
	    function isUtc () {
	        return this.isValid() ? this._isUTC && this._offset === 0 : false;
	    }
	
	    // ASP.NET json date format regex
	    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;
	
	    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	    // and further modified to allow for strings containing both week and day
	    var isoRegex = /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/;
	
	    function create__createDuration (input, key) {
	        var duration = input,
	            // matching against regexp is expensive, do it on demand
	            match = null,
	            sign,
	            ret,
	            diffRes;
	
	        if (isDuration(input)) {
	            duration = {
	                ms : input._milliseconds,
	                d  : input._days,
	                M  : input._months
	            };
	        } else if (typeof input === 'number') {
	            duration = {};
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (!!(match = aspNetRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y  : 0,
	                d  : toInt(match[DATE])        * sign,
	                h  : toInt(match[HOUR])        * sign,
	                m  : toInt(match[MINUTE])      * sign,
	                s  : toInt(match[SECOND])      * sign,
	                ms : toInt(match[MILLISECOND]) * sign
	            };
	        } else if (!!(match = isoRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y : parseIso(match[2], sign),
	                M : parseIso(match[3], sign),
	                w : parseIso(match[4], sign),
	                d : parseIso(match[5], sign),
	                h : parseIso(match[6], sign),
	                m : parseIso(match[7], sign),
	                s : parseIso(match[8], sign)
	            };
	        } else if (duration == null) {// checks for null or undefined
	            duration = {};
	        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
	            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));
	
	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }
	
	        ret = new Duration(duration);
	
	        if (isDuration(input) && hasOwnProp(input, '_locale')) {
	            ret._locale = input._locale;
	        }
	
	        return ret;
	    }
	
	    create__createDuration.fn = Duration.prototype;
	
	    function parseIso (inp, sign) {
	        // We'd normally use ~~inp for this, but unfortunately it also
	        // converts floats to ints.
	        // inp may be undefined, so careful calling replace on it.
	        var res = inp && parseFloat(inp.replace(',', '.'));
	        // apply sign while we're at it
	        return (isNaN(res) ? 0 : res) * sign;
	    }
	
	    function positiveMomentsDifference(base, other) {
	        var res = {milliseconds: 0, months: 0};
	
	        res.months = other.month() - base.month() +
	            (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }
	
	        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
	
	        return res;
	    }
	
	    function momentsDifference(base, other) {
	        var res;
	        if (!(base.isValid() && other.isValid())) {
	            return {milliseconds: 0, months: 0};
	        }
	
	        other = cloneWithOffset(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }
	
	        return res;
	    }
	
	    function absRound (number) {
	        if (number < 0) {
	            return Math.round(-1 * number) * -1;
	        } else {
	            return Math.round(number);
	        }
	    }
	
	    // TODO: remove 'name' arg after deprecation is removed
	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
	                tmp = val; val = period; period = tmp;
	            }
	
	            val = typeof val === 'string' ? +val : val;
	            dur = create__createDuration(val, period);
	            add_subtract__addSubtract(this, dur, direction);
	            return this;
	        };
	    }
	
	    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = absRound(duration._days),
	            months = absRound(duration._months);
	
	        if (!mom.isValid()) {
	            // No op
	            return;
	        }
	
	        updateOffset = updateOffset == null ? true : updateOffset;
	
	        if (milliseconds) {
	            mom._d.setTime(+mom._d + milliseconds * isAdding);
	        }
	        if (days) {
	            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
	        }
	        if (months) {
	            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
	        }
	        if (updateOffset) {
	            utils_hooks__hooks.updateOffset(mom, days || months);
	        }
	    }
	
	    var add_subtract__add      = createAdder(1, 'add');
	    var add_subtract__subtract = createAdder(-1, 'subtract');
	
	    function moment_calendar__calendar (time, formats) {
	        // We want to compare the start of today, vs this.
	        // Getting start-of-today depends on whether we're local/utc/offset or not.
	        var now = time || local__createLocal(),
	            sod = cloneWithOffset(now, this).startOf('day'),
	            diff = this.diff(sod, 'days', true),
	            format = diff < -6 ? 'sameElse' :
	                diff < -1 ? 'lastWeek' :
	                diff < 0 ? 'lastDay' :
	                diff < 1 ? 'sameDay' :
	                diff < 2 ? 'nextDay' :
	                diff < 7 ? 'nextWeek' : 'sameElse';
	
	        var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);
	
	        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
	    }
	
	    function clone () {
	        return new Moment(this);
	    }
	
	    function isAfter (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return +this > +localInput;
	        } else {
	            return +localInput < +this.clone().startOf(units);
	        }
	    }
	
	    function isBefore (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return +this < +localInput;
	        } else {
	            return +this.clone().endOf(units) < +localInput;
	        }
	    }
	
	    function isBetween (from, to, units) {
	        return this.isAfter(from, units) && this.isBefore(to, units);
	    }
	
	    function isSame (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input),
	            inputMs;
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units || 'millisecond');
	        if (units === 'millisecond') {
	            return +this === +localInput;
	        } else {
	            inputMs = +localInput;
	            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
	        }
	    }
	
	    function isSameOrAfter (input, units) {
	        return this.isSame(input, units) || this.isAfter(input,units);
	    }
	
	    function isSameOrBefore (input, units) {
	        return this.isSame(input, units) || this.isBefore(input,units);
	    }
	
	    function diff (input, units, asFloat) {
	        var that,
	            zoneDelta,
	            delta, output;
	
	        if (!this.isValid()) {
	            return NaN;
	        }
	
	        that = cloneWithOffset(input, this);
	
	        if (!that.isValid()) {
	            return NaN;
	        }
	
	        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
	
	        units = normalizeUnits(units);
	
	        if (units === 'year' || units === 'month' || units === 'quarter') {
	            output = monthDiff(this, that);
	            if (units === 'quarter') {
	                output = output / 3;
	            } else if (units === 'year') {
	                output = output / 12;
	            }
	        } else {
	            delta = this - that;
	            output = units === 'second' ? delta / 1e3 : // 1000
	                units === 'minute' ? delta / 6e4 : // 1000 * 60
	                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
	                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                delta;
	        }
	        return asFloat ? output : absFloor(output);
	    }
	
	    function monthDiff (a, b) {
	        // difference in months
	        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2, adjust;
	
	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }
	
	        return -(wholeMonthDiff + adjust);
	    }
	
	    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	
	    function toString () {
	        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	    }
	
	    function moment_format__toISOString () {
	        var m = this.clone().utc();
	        if (0 < m.year() && m.year() <= 9999) {
	            if (isFunction(Date.prototype.toISOString)) {
	                // native implementation is ~50x faster, use it when we can
	                return this.toDate().toISOString();
	            } else {
	                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	            }
	        } else {
	            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	        }
	    }
	
	    function format (inputString) {
	        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
	        return this.localeData().postformat(output);
	    }
	
	    function from (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }
	
	    function fromNow (withoutSuffix) {
	        return this.from(local__createLocal(), withoutSuffix);
	    }
	
	    function to (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }
	
	    function toNow (withoutSuffix) {
	        return this.to(local__createLocal(), withoutSuffix);
	    }
	
	    // If passed a locale key, it will set the locale for this
	    // instance.  Otherwise, it will return the locale configuration
	    // variables for this instance.
	    function locale (key) {
	        var newLocaleData;
	
	        if (key === undefined) {
	            return this._locale._abbr;
	        } else {
	            newLocaleData = locale_locales__getLocale(key);
	            if (newLocaleData != null) {
	                this._locale = newLocaleData;
	            }
	            return this;
	        }
	    }
	
	    var lang = deprecate(
	        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	        function (key) {
	            if (key === undefined) {
	                return this.localeData();
	            } else {
	                return this.locale(key);
	            }
	        }
	    );
	
	    function localeData () {
	        return this._locale;
	    }
	
	    function startOf (units) {
	        units = normalizeUnits(units);
	        // the following switch intentionally omits break keywords
	        // to utilize falling through the cases.
	        switch (units) {
	        case 'year':
	            this.month(0);
	            /* falls through */
	        case 'quarter':
	        case 'month':
	            this.date(1);
	            /* falls through */
	        case 'week':
	        case 'isoWeek':
	        case 'day':
	            this.hours(0);
	            /* falls through */
	        case 'hour':
	            this.minutes(0);
	            /* falls through */
	        case 'minute':
	            this.seconds(0);
	            /* falls through */
	        case 'second':
	            this.milliseconds(0);
	        }
	
	        // weeks are a special case
	        if (units === 'week') {
	            this.weekday(0);
	        }
	        if (units === 'isoWeek') {
	            this.isoWeekday(1);
	        }
	
	        // quarters are also special
	        if (units === 'quarter') {
	            this.month(Math.floor(this.month() / 3) * 3);
	        }
	
	        return this;
	    }
	
	    function endOf (units) {
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond') {
	            return this;
	        }
	        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	    }
	
	    function to_type__valueOf () {
	        return +this._d - ((this._offset || 0) * 60000);
	    }
	
	    function unix () {
	        return Math.floor(+this / 1000);
	    }
	
	    function toDate () {
	        return this._offset ? new Date(+this) : this._d;
	    }
	
	    function toArray () {
	        var m = this;
	        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
	    }
	
	    function toObject () {
	        var m = this;
	        return {
	            years: m.year(),
	            months: m.month(),
	            date: m.date(),
	            hours: m.hours(),
	            minutes: m.minutes(),
	            seconds: m.seconds(),
	            milliseconds: m.milliseconds()
	        };
	    }
	
	    function toJSON () {
	        // new Date(NaN).toJSON() === null
	        return this.isValid() ? this.toISOString() : null;
	    }
	
	    function moment_valid__isValid () {
	        return valid__isValid(this);
	    }
	
	    function parsingFlags () {
	        return extend({}, getParsingFlags(this));
	    }
	
	    function invalidAt () {
	        return getParsingFlags(this).overflow;
	    }
	
	    function creationData() {
	        return {
	            input: this._i,
	            format: this._f,
	            locale: this._locale,
	            isUTC: this._isUTC,
	            strict: this._strict
	        };
	    }
	
	    // FORMATTING
	
	    addFormatToken(0, ['gg', 2], 0, function () {
	        return this.weekYear() % 100;
	    });
	
	    addFormatToken(0, ['GG', 2], 0, function () {
	        return this.isoWeekYear() % 100;
	    });
	
	    function addWeekYearFormatToken (token, getter) {
	        addFormatToken(0, [token, token.length], 0, getter);
	    }
	
	    addWeekYearFormatToken('gggg',     'weekYear');
	    addWeekYearFormatToken('ggggg',    'weekYear');
	    addWeekYearFormatToken('GGGG',  'isoWeekYear');
	    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
	
	    // ALIASES
	
	    addUnitAlias('weekYear', 'gg');
	    addUnitAlias('isoWeekYear', 'GG');
	
	    // PARSING
	
	    addRegexToken('G',      matchSigned);
	    addRegexToken('g',      matchSigned);
	    addRegexToken('GG',     match1to2, match2);
	    addRegexToken('gg',     match1to2, match2);
	    addRegexToken('GGGG',   match1to4, match4);
	    addRegexToken('gggg',   match1to4, match4);
	    addRegexToken('GGGGG',  match1to6, match6);
	    addRegexToken('ggggg',  match1to6, match6);
	
	    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
	        week[token.substr(0, 2)] = toInt(input);
	    });
	
	    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });
	
	    // MOMENTS
	
	    function getSetWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input,
	                this.week(),
	                this.weekday(),
	                this.localeData()._week.dow,
	                this.localeData()._week.doy);
	    }
	
	    function getSetISOWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input, this.isoWeek(), this.isoWeekday(), 1, 4);
	    }
	
	    function getISOWeeksInYear () {
	        return weeksInYear(this.year(), 1, 4);
	    }
	
	    function getWeeksInYear () {
	        var weekInfo = this.localeData()._week;
	        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	    }
	
	    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
	        var weeksTarget;
	        if (input == null) {
	            return weekOfYear(this, dow, doy).year;
	        } else {
	            weeksTarget = weeksInYear(input, dow, doy);
	            if (week > weeksTarget) {
	                week = weeksTarget;
	            }
	            return setWeekAll.call(this, input, week, weekday, dow, doy);
	        }
	    }
	
	    function setWeekAll(weekYear, week, weekday, dow, doy) {
	        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
	            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
	
	        this.year(date.getUTCFullYear());
	        this.month(date.getUTCMonth());
	        this.date(date.getUTCDate());
	        return this;
	    }
	
	    // FORMATTING
	
	    addFormatToken('Q', 0, 'Qo', 'quarter');
	
	    // ALIASES
	
	    addUnitAlias('quarter', 'Q');
	
	    // PARSING
	
	    addRegexToken('Q', match1);
	    addParseToken('Q', function (input, array) {
	        array[MONTH] = (toInt(input) - 1) * 3;
	    });
	
	    // MOMENTS
	
	    function getSetQuarter (input) {
	        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	    }
	
	    // FORMATTING
	
	    addFormatToken('w', ['ww', 2], 'wo', 'week');
	    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
	
	    // ALIASES
	
	    addUnitAlias('week', 'w');
	    addUnitAlias('isoWeek', 'W');
	
	    // PARSING
	
	    addRegexToken('w',  match1to2);
	    addRegexToken('ww', match1to2, match2);
	    addRegexToken('W',  match1to2);
	    addRegexToken('WW', match1to2, match2);
	
	    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
	        week[token.substr(0, 1)] = toInt(input);
	    });
	
	    // HELPERS
	
	    // LOCALES
	
	    function localeWeek (mom) {
	        return weekOfYear(mom, this._week.dow, this._week.doy).week;
	    }
	
	    var defaultLocaleWeek = {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    };
	
	    function localeFirstDayOfWeek () {
	        return this._week.dow;
	    }
	
	    function localeFirstDayOfYear () {
	        return this._week.doy;
	    }
	
	    // MOMENTS
	
	    function getSetWeek (input) {
	        var week = this.localeData().week(this);
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	
	    function getSetISOWeek (input) {
	        var week = weekOfYear(this, 1, 4).week;
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	
	    // FORMATTING
	
	    addFormatToken('D', ['DD', 2], 'Do', 'date');
	
	    // ALIASES
	
	    addUnitAlias('date', 'D');
	
	    // PARSING
	
	    addRegexToken('D',  match1to2);
	    addRegexToken('DD', match1to2, match2);
	    addRegexToken('Do', function (isStrict, locale) {
	        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
	    });
	
	    addParseToken(['D', 'DD'], DATE);
	    addParseToken('Do', function (input, array) {
	        array[DATE] = toInt(input.match(match1to2)[0], 10);
	    });
	
	    // MOMENTS
	
	    var getSetDayOfMonth = makeGetSet('Date', true);
	
	    // FORMATTING
	
	    addFormatToken('d', 0, 'do', 'day');
	
	    addFormatToken('dd', 0, 0, function (format) {
	        return this.localeData().weekdaysMin(this, format);
	    });
	
	    addFormatToken('ddd', 0, 0, function (format) {
	        return this.localeData().weekdaysShort(this, format);
	    });
	
	    addFormatToken('dddd', 0, 0, function (format) {
	        return this.localeData().weekdays(this, format);
	    });
	
	    addFormatToken('e', 0, 0, 'weekday');
	    addFormatToken('E', 0, 0, 'isoWeekday');
	
	    // ALIASES
	
	    addUnitAlias('day', 'd');
	    addUnitAlias('weekday', 'e');
	    addUnitAlias('isoWeekday', 'E');
	
	    // PARSING
	
	    addRegexToken('d',    match1to2);
	    addRegexToken('e',    match1to2);
	    addRegexToken('E',    match1to2);
	    addRegexToken('dd',   matchWord);
	    addRegexToken('ddd',  matchWord);
	    addRegexToken('dddd', matchWord);
	
	    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
	        var weekday = config._locale.weekdaysParse(input, token, config._strict);
	        // if we didn't get a weekday name, mark the date as invalid
	        if (weekday != null) {
	            week.d = weekday;
	        } else {
	            getParsingFlags(config).invalidWeekday = input;
	        }
	    });
	
	    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	        week[token] = toInt(input);
	    });
	
	    // HELPERS
	
	    function parseWeekday(input, locale) {
	        if (typeof input !== 'string') {
	            return input;
	        }
	
	        if (!isNaN(input)) {
	            return parseInt(input, 10);
	        }
	
	        input = locale.weekdaysParse(input);
	        if (typeof input === 'number') {
	            return input;
	        }
	
	        return null;
	    }
	
	    // LOCALES
	
	    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
	    function localeWeekdays (m, format) {
	        return isArray(this._weekdays) ? this._weekdays[m.day()] :
	            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
	    }
	
	    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
	    function localeWeekdaysShort (m) {
	        return this._weekdaysShort[m.day()];
	    }
	
	    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
	    function localeWeekdaysMin (m) {
	        return this._weekdaysMin[m.day()];
	    }
	
	    function localeWeekdaysParse (weekdayName, format, strict) {
	        var i, mom, regex;
	
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._minWeekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._fullWeekdaysParse = [];
	        }
	
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	
	            mom = local__createLocal([2000, 1]).day(i);
	            if (strict && !this._fullWeekdaysParse[i]) {
	                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
	                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
	                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
	            }
	            if (!this._weekdaysParse[i]) {
	                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
	                return i;
	            }
	        }
	    }
	
	    // MOMENTS
	
	    function getSetDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	        if (input != null) {
	            input = parseWeekday(input, this.localeData());
	            return this.add(input - day, 'd');
	        } else {
	            return day;
	        }
	    }
	
	    function getSetLocaleDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	        return input == null ? weekday : this.add(input - weekday, 'd');
	    }
	
	    function getSetISODayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        // behaves the same as moment#day except
	        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	        // as a setter, sunday should belong to the previous week.
	        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
	    }
	
	    // FORMATTING
	
	    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
	
	    // ALIASES
	
	    addUnitAlias('dayOfYear', 'DDD');
	
	    // PARSING
	
	    addRegexToken('DDD',  match1to3);
	    addRegexToken('DDDD', match3);
	    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	        config._dayOfYear = toInt(input);
	    });
	
	    // HELPERS
	
	    // MOMENTS
	
	    function getSetDayOfYear (input) {
	        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
	        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	    }
	
	    // FORMATTING
	
	    function hFormat() {
	        return this.hours() % 12 || 12;
	    }
	
	    addFormatToken('H', ['HH', 2], 0, 'hour');
	    addFormatToken('h', ['hh', 2], 0, hFormat);
	
	    addFormatToken('hmm', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	    });
	
	    addFormatToken('hmmss', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });
	
	    addFormatToken('Hmm', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2);
	    });
	
	    addFormatToken('Hmmss', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });
	
	    function meridiem (token, lowercase) {
	        addFormatToken(token, 0, 0, function () {
	            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
	        });
	    }
	
	    meridiem('a', true);
	    meridiem('A', false);
	
	    // ALIASES
	
	    addUnitAlias('hour', 'h');
	
	    // PARSING
	
	    function matchMeridiem (isStrict, locale) {
	        return locale._meridiemParse;
	    }
	
	    addRegexToken('a',  matchMeridiem);
	    addRegexToken('A',  matchMeridiem);
	    addRegexToken('H',  match1to2);
	    addRegexToken('h',  match1to2);
	    addRegexToken('HH', match1to2, match2);
	    addRegexToken('hh', match1to2, match2);
	
	    addRegexToken('hmm', match3to4);
	    addRegexToken('hmmss', match5to6);
	    addRegexToken('Hmm', match3to4);
	    addRegexToken('Hmmss', match5to6);
	
	    addParseToken(['H', 'HH'], HOUR);
	    addParseToken(['a', 'A'], function (input, array, config) {
	        config._isPm = config._locale.isPM(input);
	        config._meridiem = input;
	    });
	    addParseToken(['h', 'hh'], function (input, array, config) {
	        array[HOUR] = toInt(input);
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('Hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	    });
	    addParseToken('Hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	    });
	
	    // LOCALES
	
	    function localeIsPM (input) {
	        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	        // Using charAt should be more compatible.
	        return ((input + '').toLowerCase().charAt(0) === 'p');
	    }
	
	    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
	    function localeMeridiem (hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'pm' : 'PM';
	        } else {
	            return isLower ? 'am' : 'AM';
	        }
	    }
	
	
	    // MOMENTS
	
	    // Setting the hour should keep the time, because the user explicitly
	    // specified which hour he wants. So trying to maintain the same hour (in
	    // a new timezone) makes sense. Adding/subtracting hours does not follow
	    // this rule.
	    var getSetHour = makeGetSet('Hours', true);
	
	    // FORMATTING
	
	    addFormatToken('m', ['mm', 2], 0, 'minute');
	
	    // ALIASES
	
	    addUnitAlias('minute', 'm');
	
	    // PARSING
	
	    addRegexToken('m',  match1to2);
	    addRegexToken('mm', match1to2, match2);
	    addParseToken(['m', 'mm'], MINUTE);
	
	    // MOMENTS
	
	    var getSetMinute = makeGetSet('Minutes', false);
	
	    // FORMATTING
	
	    addFormatToken('s', ['ss', 2], 0, 'second');
	
	    // ALIASES
	
	    addUnitAlias('second', 's');
	
	    // PARSING
	
	    addRegexToken('s',  match1to2);
	    addRegexToken('ss', match1to2, match2);
	    addParseToken(['s', 'ss'], SECOND);
	
	    // MOMENTS
	
	    var getSetSecond = makeGetSet('Seconds', false);
	
	    // FORMATTING
	
	    addFormatToken('S', 0, 0, function () {
	        return ~~(this.millisecond() / 100);
	    });
	
	    addFormatToken(0, ['SS', 2], 0, function () {
	        return ~~(this.millisecond() / 10);
	    });
	
	    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	    addFormatToken(0, ['SSSS', 4], 0, function () {
	        return this.millisecond() * 10;
	    });
	    addFormatToken(0, ['SSSSS', 5], 0, function () {
	        return this.millisecond() * 100;
	    });
	    addFormatToken(0, ['SSSSSS', 6], 0, function () {
	        return this.millisecond() * 1000;
	    });
	    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
	        return this.millisecond() * 10000;
	    });
	    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
	        return this.millisecond() * 100000;
	    });
	    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
	        return this.millisecond() * 1000000;
	    });
	
	
	    // ALIASES
	
	    addUnitAlias('millisecond', 'ms');
	
	    // PARSING
	
	    addRegexToken('S',    match1to3, match1);
	    addRegexToken('SS',   match1to3, match2);
	    addRegexToken('SSS',  match1to3, match3);
	
	    var token;
	    for (token = 'SSSS'; token.length <= 9; token += 'S') {
	        addRegexToken(token, matchUnsigned);
	    }
	
	    function parseMs(input, array) {
	        array[MILLISECOND] = toInt(('0.' + input) * 1000);
	    }
	
	    for (token = 'S'; token.length <= 9; token += 'S') {
	        addParseToken(token, parseMs);
	    }
	    // MOMENTS
	
	    var getSetMillisecond = makeGetSet('Milliseconds', false);
	
	    // FORMATTING
	
	    addFormatToken('z',  0, 0, 'zoneAbbr');
	    addFormatToken('zz', 0, 0, 'zoneName');
	
	    // MOMENTS
	
	    function getZoneAbbr () {
	        return this._isUTC ? 'UTC' : '';
	    }
	
	    function getZoneName () {
	        return this._isUTC ? 'Coordinated Universal Time' : '';
	    }
	
	    var momentPrototype__proto = Moment.prototype;
	
	    momentPrototype__proto.add               = add_subtract__add;
	    momentPrototype__proto.calendar          = moment_calendar__calendar;
	    momentPrototype__proto.clone             = clone;
	    momentPrototype__proto.diff              = diff;
	    momentPrototype__proto.endOf             = endOf;
	    momentPrototype__proto.format            = format;
	    momentPrototype__proto.from              = from;
	    momentPrototype__proto.fromNow           = fromNow;
	    momentPrototype__proto.to                = to;
	    momentPrototype__proto.toNow             = toNow;
	    momentPrototype__proto.get               = getSet;
	    momentPrototype__proto.invalidAt         = invalidAt;
	    momentPrototype__proto.isAfter           = isAfter;
	    momentPrototype__proto.isBefore          = isBefore;
	    momentPrototype__proto.isBetween         = isBetween;
	    momentPrototype__proto.isSame            = isSame;
	    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;
	    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;
	    momentPrototype__proto.isValid           = moment_valid__isValid;
	    momentPrototype__proto.lang              = lang;
	    momentPrototype__proto.locale            = locale;
	    momentPrototype__proto.localeData        = localeData;
	    momentPrototype__proto.max               = prototypeMax;
	    momentPrototype__proto.min               = prototypeMin;
	    momentPrototype__proto.parsingFlags      = parsingFlags;
	    momentPrototype__proto.set               = getSet;
	    momentPrototype__proto.startOf           = startOf;
	    momentPrototype__proto.subtract          = add_subtract__subtract;
	    momentPrototype__proto.toArray           = toArray;
	    momentPrototype__proto.toObject          = toObject;
	    momentPrototype__proto.toDate            = toDate;
	    momentPrototype__proto.toISOString       = moment_format__toISOString;
	    momentPrototype__proto.toJSON            = toJSON;
	    momentPrototype__proto.toString          = toString;
	    momentPrototype__proto.unix              = unix;
	    momentPrototype__proto.valueOf           = to_type__valueOf;
	    momentPrototype__proto.creationData      = creationData;
	
	    // Year
	    momentPrototype__proto.year       = getSetYear;
	    momentPrototype__proto.isLeapYear = getIsLeapYear;
	
	    // Week Year
	    momentPrototype__proto.weekYear    = getSetWeekYear;
	    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;
	
	    // Quarter
	    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;
	
	    // Month
	    momentPrototype__proto.month       = getSetMonth;
	    momentPrototype__proto.daysInMonth = getDaysInMonth;
	
	    // Week
	    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
	    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
	    momentPrototype__proto.weeksInYear    = getWeeksInYear;
	    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;
	
	    // Day
	    momentPrototype__proto.date       = getSetDayOfMonth;
	    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
	    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
	    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
	    momentPrototype__proto.dayOfYear  = getSetDayOfYear;
	
	    // Hour
	    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;
	
	    // Minute
	    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;
	
	    // Second
	    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;
	
	    // Millisecond
	    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;
	
	    // Offset
	    momentPrototype__proto.utcOffset            = getSetOffset;
	    momentPrototype__proto.utc                  = setOffsetToUTC;
	    momentPrototype__proto.local                = setOffsetToLocal;
	    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
	    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
	    momentPrototype__proto.isDST                = isDaylightSavingTime;
	    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;
	    momentPrototype__proto.isLocal              = isLocal;
	    momentPrototype__proto.isUtcOffset          = isUtcOffset;
	    momentPrototype__proto.isUtc                = isUtc;
	    momentPrototype__proto.isUTC                = isUtc;
	
	    // Timezone
	    momentPrototype__proto.zoneAbbr = getZoneAbbr;
	    momentPrototype__proto.zoneName = getZoneName;
	
	    // Deprecations
	    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
	    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
	    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
	    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);
	
	    var momentPrototype = momentPrototype__proto;
	
	    function moment__createUnix (input) {
	        return local__createLocal(input * 1000);
	    }
	
	    function moment__createInZone () {
	        return local__createLocal.apply(null, arguments).parseZone();
	    }
	
	    var defaultCalendar = {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    };
	
	    function locale_calendar__calendar (key, mom, now) {
	        var output = this._calendar[key];
	        return isFunction(output) ? output.call(mom, now) : output;
	    }
	
	    var defaultLongDateFormat = {
	        LTS  : 'h:mm:ss A',
	        LT   : 'h:mm A',
	        L    : 'MM/DD/YYYY',
	        LL   : 'MMMM D, YYYY',
	        LLL  : 'MMMM D, YYYY h:mm A',
	        LLLL : 'dddd, MMMM D, YYYY h:mm A'
	    };
	
	    function longDateFormat (key) {
	        var format = this._longDateFormat[key],
	            formatUpper = this._longDateFormat[key.toUpperCase()];
	
	        if (format || !formatUpper) {
	            return format;
	        }
	
	        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
	            return val.slice(1);
	        });
	
	        return this._longDateFormat[key];
	    }
	
	    var defaultInvalidDate = 'Invalid date';
	
	    function invalidDate () {
	        return this._invalidDate;
	    }
	
	    var defaultOrdinal = '%d';
	    var defaultOrdinalParse = /\d{1,2}/;
	
	    function ordinal (number) {
	        return this._ordinal.replace('%d', number);
	    }
	
	    function preParsePostFormat (string) {
	        return string;
	    }
	
	    var defaultRelativeTime = {
	        future : 'in %s',
	        past   : '%s ago',
	        s  : 'a few seconds',
	        m  : 'a minute',
	        mm : '%d minutes',
	        h  : 'an hour',
	        hh : '%d hours',
	        d  : 'a day',
	        dd : '%d days',
	        M  : 'a month',
	        MM : '%d months',
	        y  : 'a year',
	        yy : '%d years'
	    };
	
	    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
	        var output = this._relativeTime[string];
	        return (isFunction(output)) ?
	            output(number, withoutSuffix, string, isFuture) :
	            output.replace(/%d/i, number);
	    }
	
	    function pastFuture (diff, output) {
	        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	    }
	
	    var prototype__proto = Locale.prototype;
	
	    prototype__proto._calendar       = defaultCalendar;
	    prototype__proto.calendar        = locale_calendar__calendar;
	    prototype__proto._longDateFormat = defaultLongDateFormat;
	    prototype__proto.longDateFormat  = longDateFormat;
	    prototype__proto._invalidDate    = defaultInvalidDate;
	    prototype__proto.invalidDate     = invalidDate;
	    prototype__proto._ordinal        = defaultOrdinal;
	    prototype__proto.ordinal         = ordinal;
	    prototype__proto._ordinalParse   = defaultOrdinalParse;
	    prototype__proto.preparse        = preParsePostFormat;
	    prototype__proto.postformat      = preParsePostFormat;
	    prototype__proto._relativeTime   = defaultRelativeTime;
	    prototype__proto.relativeTime    = relative__relativeTime;
	    prototype__proto.pastFuture      = pastFuture;
	    prototype__proto.set             = locale_set__set;
	
	    // Month
	    prototype__proto.months            =        localeMonths;
	    prototype__proto._months           = defaultLocaleMonths;
	    prototype__proto.monthsShort       =        localeMonthsShort;
	    prototype__proto._monthsShort      = defaultLocaleMonthsShort;
	    prototype__proto.monthsParse       =        localeMonthsParse;
	    prototype__proto._monthsRegex      = defaultMonthsRegex;
	    prototype__proto.monthsRegex       = monthsRegex;
	    prototype__proto._monthsShortRegex = defaultMonthsShortRegex;
	    prototype__proto.monthsShortRegex  = monthsShortRegex;
	
	    // Week
	    prototype__proto.week = localeWeek;
	    prototype__proto._week = defaultLocaleWeek;
	    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
	    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;
	
	    // Day of Week
	    prototype__proto.weekdays       =        localeWeekdays;
	    prototype__proto._weekdays      = defaultLocaleWeekdays;
	    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
	    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;
	    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
	    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
	    prototype__proto.weekdaysParse  =        localeWeekdaysParse;
	
	    // Hours
	    prototype__proto.isPM = localeIsPM;
	    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
	    prototype__proto.meridiem = localeMeridiem;
	
	    function lists__get (format, index, field, setter) {
	        var locale = locale_locales__getLocale();
	        var utc = create_utc__createUTC().set(setter, index);
	        return locale[field](utc, format);
	    }
	
	    function list (format, index, field, count, setter) {
	        if (typeof format === 'number') {
	            index = format;
	            format = undefined;
	        }
	
	        format = format || '';
	
	        if (index != null) {
	            return lists__get(format, index, field, setter);
	        }
	
	        var i;
	        var out = [];
	        for (i = 0; i < count; i++) {
	            out[i] = lists__get(format, i, field, setter);
	        }
	        return out;
	    }
	
	    function lists__listMonths (format, index) {
	        return list(format, index, 'months', 12, 'month');
	    }
	
	    function lists__listMonthsShort (format, index) {
	        return list(format, index, 'monthsShort', 12, 'month');
	    }
	
	    function lists__listWeekdays (format, index) {
	        return list(format, index, 'weekdays', 7, 'day');
	    }
	
	    function lists__listWeekdaysShort (format, index) {
	        return list(format, index, 'weekdaysShort', 7, 'day');
	    }
	
	    function lists__listWeekdaysMin (format, index) {
	        return list(format, index, 'weekdaysMin', 7, 'day');
	    }
	
	    locale_locales__getSetGlobalLocale('en', {
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (toInt(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });
	
	    // Side effect imports
	    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
	    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
	
	    var mathAbs = Math.abs;
	
	    function duration_abs__abs () {
	        var data           = this._data;
	
	        this._milliseconds = mathAbs(this._milliseconds);
	        this._days         = mathAbs(this._days);
	        this._months       = mathAbs(this._months);
	
	        data.milliseconds  = mathAbs(data.milliseconds);
	        data.seconds       = mathAbs(data.seconds);
	        data.minutes       = mathAbs(data.minutes);
	        data.hours         = mathAbs(data.hours);
	        data.months        = mathAbs(data.months);
	        data.years         = mathAbs(data.years);
	
	        return this;
	    }
	
	    function duration_add_subtract__addSubtract (duration, input, value, direction) {
	        var other = create__createDuration(input, value);
	
	        duration._milliseconds += direction * other._milliseconds;
	        duration._days         += direction * other._days;
	        duration._months       += direction * other._months;
	
	        return duration._bubble();
	    }
	
	    // supports only 2.0-style add(1, 's') or add(duration)
	    function duration_add_subtract__add (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, 1);
	    }
	
	    // supports only 2.0-style subtract(1, 's') or subtract(duration)
	    function duration_add_subtract__subtract (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, -1);
	    }
	
	    function absCeil (number) {
	        if (number < 0) {
	            return Math.floor(number);
	        } else {
	            return Math.ceil(number);
	        }
	    }
	
	    function bubble () {
	        var milliseconds = this._milliseconds;
	        var days         = this._days;
	        var months       = this._months;
	        var data         = this._data;
	        var seconds, minutes, hours, years, monthsFromDays;
	
	        // if we have a mix of positive and negative values, bubble down first
	        // check: https://github.com/moment/moment/issues/2166
	        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
	                (milliseconds <= 0 && days <= 0 && months <= 0))) {
	            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
	            days = 0;
	            months = 0;
	        }
	
	        // The following code bubbles up values, see the tests for
	        // examples of what that means.
	        data.milliseconds = milliseconds % 1000;
	
	        seconds           = absFloor(milliseconds / 1000);
	        data.seconds      = seconds % 60;
	
	        minutes           = absFloor(seconds / 60);
	        data.minutes      = minutes % 60;
	
	        hours             = absFloor(minutes / 60);
	        data.hours        = hours % 24;
	
	        days += absFloor(hours / 24);
	
	        // convert days to months
	        monthsFromDays = absFloor(daysToMonths(days));
	        months += monthsFromDays;
	        days -= absCeil(monthsToDays(monthsFromDays));
	
	        // 12 months -> 1 year
	        years = absFloor(months / 12);
	        months %= 12;
	
	        data.days   = days;
	        data.months = months;
	        data.years  = years;
	
	        return this;
	    }
	
	    function daysToMonths (days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        // 400 years have 12 months === 4800
	        return days * 4800 / 146097;
	    }
	
	    function monthsToDays (months) {
	        // the reverse of daysToMonths
	        return months * 146097 / 4800;
	    }
	
	    function as (units) {
	        var days;
	        var months;
	        var milliseconds = this._milliseconds;
	
	        units = normalizeUnits(units);
	
	        if (units === 'month' || units === 'year') {
	            days   = this._days   + milliseconds / 864e5;
	            months = this._months + daysToMonths(days);
	            return units === 'month' ? months : months / 12;
	        } else {
	            // handle milliseconds separately because of floating point math errors (issue #1867)
	            days = this._days + Math.round(monthsToDays(this._months));
	            switch (units) {
	                case 'week'   : return days / 7     + milliseconds / 6048e5;
	                case 'day'    : return days         + milliseconds / 864e5;
	                case 'hour'   : return days * 24    + milliseconds / 36e5;
	                case 'minute' : return days * 1440  + milliseconds / 6e4;
	                case 'second' : return days * 86400 + milliseconds / 1000;
	                // Math.floor prevents floating point math errors here
	                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
	                default: throw new Error('Unknown unit ' + units);
	            }
	        }
	    }
	
	    // TODO: Use this.as('ms')?
	    function duration_as__valueOf () {
	        return (
	            this._milliseconds +
	            this._days * 864e5 +
	            (this._months % 12) * 2592e6 +
	            toInt(this._months / 12) * 31536e6
	        );
	    }
	
	    function makeAs (alias) {
	        return function () {
	            return this.as(alias);
	        };
	    }
	
	    var asMilliseconds = makeAs('ms');
	    var asSeconds      = makeAs('s');
	    var asMinutes      = makeAs('m');
	    var asHours        = makeAs('h');
	    var asDays         = makeAs('d');
	    var asWeeks        = makeAs('w');
	    var asMonths       = makeAs('M');
	    var asYears        = makeAs('y');
	
	    function duration_get__get (units) {
	        units = normalizeUnits(units);
	        return this[units + 's']();
	    }
	
	    function makeGetter(name) {
	        return function () {
	            return this._data[name];
	        };
	    }
	
	    var milliseconds = makeGetter('milliseconds');
	    var seconds      = makeGetter('seconds');
	    var minutes      = makeGetter('minutes');
	    var hours        = makeGetter('hours');
	    var days         = makeGetter('days');
	    var months       = makeGetter('months');
	    var years        = makeGetter('years');
	
	    function weeks () {
	        return absFloor(this.days() / 7);
	    }
	
	    var round = Math.round;
	    var thresholds = {
	        s: 45,  // seconds to minute
	        m: 45,  // minutes to hour
	        h: 22,  // hours to day
	        d: 26,  // days to month
	        M: 11   // months to year
	    };
	
	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }
	
	    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
	        var duration = create__createDuration(posNegDuration).abs();
	        var seconds  = round(duration.as('s'));
	        var minutes  = round(duration.as('m'));
	        var hours    = round(duration.as('h'));
	        var days     = round(duration.as('d'));
	        var months   = round(duration.as('M'));
	        var years    = round(duration.as('y'));
	
	        var a = seconds < thresholds.s && ['s', seconds]  ||
	                minutes <= 1           && ['m']           ||
	                minutes < thresholds.m && ['mm', minutes] ||
	                hours   <= 1           && ['h']           ||
	                hours   < thresholds.h && ['hh', hours]   ||
	                days    <= 1           && ['d']           ||
	                days    < thresholds.d && ['dd', days]    ||
	                months  <= 1           && ['M']           ||
	                months  < thresholds.M && ['MM', months]  ||
	                years   <= 1           && ['y']           || ['yy', years];
	
	        a[2] = withoutSuffix;
	        a[3] = +posNegDuration > 0;
	        a[4] = locale;
	        return substituteTimeAgo.apply(null, a);
	    }
	
	    // This function allows you to set a threshold for relative time strings
	    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
	        if (thresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return thresholds[threshold];
	        }
	        thresholds[threshold] = limit;
	        return true;
	    }
	
	    function humanize (withSuffix) {
	        var locale = this.localeData();
	        var output = duration_humanize__relativeTime(this, !withSuffix, locale);
	
	        if (withSuffix) {
	            output = locale.pastFuture(+this, output);
	        }
	
	        return locale.postformat(output);
	    }
	
	    var iso_string__abs = Math.abs;
	
	    function iso_string__toISOString() {
	        // for ISO strings we do not use the normal bubbling rules:
	        //  * milliseconds bubble up until they become hours
	        //  * days do not bubble at all
	        //  * months bubble up until they become years
	        // This is because there is no context-free conversion between hours and days
	        // (think of clock changes)
	        // and also not between days and months (28-31 days per month)
	        var seconds = iso_string__abs(this._milliseconds) / 1000;
	        var days         = iso_string__abs(this._days);
	        var months       = iso_string__abs(this._months);
	        var minutes, hours, years;
	
	        // 3600 seconds -> 60 minutes -> 1 hour
	        minutes           = absFloor(seconds / 60);
	        hours             = absFloor(minutes / 60);
	        seconds %= 60;
	        minutes %= 60;
	
	        // 12 months -> 1 year
	        years  = absFloor(months / 12);
	        months %= 12;
	
	
	        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	        var Y = years;
	        var M = months;
	        var D = days;
	        var h = hours;
	        var m = minutes;
	        var s = seconds;
	        var total = this.asSeconds();
	
	        if (!total) {
	            // this is the same as C#'s (Noda) and python (isodate)...
	            // but not other JS (goog.date)
	            return 'P0D';
	        }
	
	        return (total < 0 ? '-' : '') +
	            'P' +
	            (Y ? Y + 'Y' : '') +
	            (M ? M + 'M' : '') +
	            (D ? D + 'D' : '') +
	            ((h || m || s) ? 'T' : '') +
	            (h ? h + 'H' : '') +
	            (m ? m + 'M' : '') +
	            (s ? s + 'S' : '');
	    }
	
	    var duration_prototype__proto = Duration.prototype;
	
	    duration_prototype__proto.abs            = duration_abs__abs;
	    duration_prototype__proto.add            = duration_add_subtract__add;
	    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
	    duration_prototype__proto.as             = as;
	    duration_prototype__proto.asMilliseconds = asMilliseconds;
	    duration_prototype__proto.asSeconds      = asSeconds;
	    duration_prototype__proto.asMinutes      = asMinutes;
	    duration_prototype__proto.asHours        = asHours;
	    duration_prototype__proto.asDays         = asDays;
	    duration_prototype__proto.asWeeks        = asWeeks;
	    duration_prototype__proto.asMonths       = asMonths;
	    duration_prototype__proto.asYears        = asYears;
	    duration_prototype__proto.valueOf        = duration_as__valueOf;
	    duration_prototype__proto._bubble        = bubble;
	    duration_prototype__proto.get            = duration_get__get;
	    duration_prototype__proto.milliseconds   = milliseconds;
	    duration_prototype__proto.seconds        = seconds;
	    duration_prototype__proto.minutes        = minutes;
	    duration_prototype__proto.hours          = hours;
	    duration_prototype__proto.days           = days;
	    duration_prototype__proto.weeks          = weeks;
	    duration_prototype__proto.months         = months;
	    duration_prototype__proto.years          = years;
	    duration_prototype__proto.humanize       = humanize;
	    duration_prototype__proto.toISOString    = iso_string__toISOString;
	    duration_prototype__proto.toString       = iso_string__toISOString;
	    duration_prototype__proto.toJSON         = iso_string__toISOString;
	    duration_prototype__proto.locale         = locale;
	    duration_prototype__proto.localeData     = localeData;
	
	    // Deprecations
	    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
	    duration_prototype__proto.lang = lang;
	
	    // Side effect imports
	
	    // FORMATTING
	
	    addFormatToken('X', 0, 0, 'unix');
	    addFormatToken('x', 0, 0, 'valueOf');
	
	    // PARSING
	
	    addRegexToken('x', matchSigned);
	    addRegexToken('X', matchTimestamp);
	    addParseToken('X', function (input, array, config) {
	        config._d = new Date(parseFloat(input, 10) * 1000);
	    });
	    addParseToken('x', function (input, array, config) {
	        config._d = new Date(toInt(input));
	    });
	
	    // Side effect imports
	
	
	    utils_hooks__hooks.version = '2.12.0';
	
	    setHookCallback(local__createLocal);
	
	    utils_hooks__hooks.fn                    = momentPrototype;
	    utils_hooks__hooks.min                   = min;
	    utils_hooks__hooks.max                   = max;
	    utils_hooks__hooks.now                   = now;
	    utils_hooks__hooks.utc                   = create_utc__createUTC;
	    utils_hooks__hooks.unix                  = moment__createUnix;
	    utils_hooks__hooks.months                = lists__listMonths;
	    utils_hooks__hooks.isDate                = isDate;
	    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
	    utils_hooks__hooks.invalid               = valid__createInvalid;
	    utils_hooks__hooks.duration              = create__createDuration;
	    utils_hooks__hooks.isMoment              = isMoment;
	    utils_hooks__hooks.weekdays              = lists__listWeekdays;
	    utils_hooks__hooks.parseZone             = moment__createInZone;
	    utils_hooks__hooks.localeData            = locale_locales__getLocale;
	    utils_hooks__hooks.isDuration            = isDuration;
	    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
	    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
	    utils_hooks__hooks.defineLocale          = defineLocale;
	    utils_hooks__hooks.updateLocale          = updateLocale;
	    utils_hooks__hooks.locales               = locale_locales__listLocales;
	    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
	    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
	    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
	    utils_hooks__hooks.prototype             = momentPrototype;
	
	    var _moment = utils_hooks__hooks;
	
	    return _moment;
	
	}));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)(module)))

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regex_helpers = __webpack_require__(71);
	
	var _regex_helpers2 = _interopRequireDefault(_regex_helpers);
	
	var _link_utils = __webpack_require__(73);
	
	var _link_utils2 = _interopRequireDefault(_link_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MIN_URL_LENGTH = 4;
	var regExpStorage = {
	  simple_word: new RegExp(_regex_helpers2.default.simple_word, 'gi')
	};
	
	exports.default = {
	  /**
	   * Linkify a string, replacing text urls with <a href="url">url</a>
	   * Note: init must be called before this function can be used
	   *
	   * @param text - String to be linkified
	   * @param matched_links - Return param (pass by ref) - Array of links matched during linkification
	   * @param config - Hash of options for linkifier
	   *          add_wbrs (bool) - Add <wbr> tags to displayed text to allow wrapping?
	   *          truncate_length (int) - Truncate displayed links to this length
	   *          link_target (str) - Target attribute for links
	   *          link_titles (bool) - Add titles for links?
	   **/
	  linkify: function linkify(text, matched_links, config) {
	    regExpStorage.simple_word.lastIndex = 0;
	    if (text.length >= MIN_URL_LENGTH && !regExpStorage.simple_word.test(text)) {
	      text = this.match_and_replace(_regex_helpers2.default.email, text, true, false, matched_links, config);
	      text = this.match_and_replace(_regex_helpers2.default.url, text, false, true, matched_links, config);
	    }
	
	    return text;
	  },
	
	  /**
	   * Internal helper function for linkification
	   **/
	  match_and_replace: function match_and_replace(pattern, input, is_email, add_http, matched_links, config) {
	    var start = 0;
	    var offset = 0;
	    var match_length = 0;
	    var end_tag_pos = 0;
	    var close_anchor_re = /<\/[aA]>/;
	
	    if (!regExpStorage[pattern]) {
	      regExpStorage[pattern] = new RegExp(pattern, "gi");
	    }
	
	    var re = regExpStorage[pattern];
	    re.lastIndex = 0;
	
	    // config
	    var add_wbrs = config.hasOwnProperty("add_wbrs") ? config.add_wbrs : null;
	    var truncate_length = config.hasOwnProperty("truncate_length") ? config.truncate_length : 100;
	    var link_target = config.hasOwnProperty("link_target") ? config.link_target : "_blank";
	    var link_titles = config.hasOwnProperty("link_titles") ? config.link_titles : null;
	    var no_referrer = config.hasOwnProperty("no_referrer") ? config.no_referrer : null;
	
	    var match = {};
	    var max_iter = 20;
	    var cur_iter = 0;
	    while (match = re.exec(input)) {
	      cur_iter++;
	      if (cur_iter > max_iter) {
	        break;
	      }
	
	      start = match.index; // start of match
	
	      // If we find an opening a tag, advance to its end and continue looking
	      var substr = input.substring(offset, start);
	      if (substr.search(/<[aA]/) >= 0) {
	        close_anchor_re.lastIndex = offset;
	        var close_anchor_pos = input.substring(offset, input.length).search(close_anchor_re);
	
	        // If we find an opening tag without a matching closing tag, just return the input we have
	        if (close_anchor_pos < 0) {
	          return input;
	        }
	
	        end_tag_pos = close_anchor_pos + offset;
	
	        // RegExp.lastIndex is used to tell the regexp where to start matching
	        re.lastIndex = end_tag_pos + 4;
	        offset = end_tag_pos + 4;
	
	        continue;
	      }
	
	      /* if the last character of the url match ends in a punctuation character
	       * and the match index is not at the beginning of the text input,
	       * we should remove the last character of the match
	       *  ex: (http://en.wikipedia.org/wiki/PC_Tools_(Central_Point_Software)) should not convert the last
	       *  parenthesis as part of the link
	       */
	      match[0] = _link_utils2.default.wrapped_url_fix(input, match[0]);
	
	      /* if the first character after the match is not url end punctuation
	       * we should break and not replace the match in the input text
	       *  ex: sys.tr would be linkified in "sys.trace" without this fix
	       */
	      if (!_link_utils2.default.url_should_be_replaced(input, match[0])) {
	        break;
	      }
	
	      // Do the actual replacement of text with anchor tag
	      match_length = match[0].length;
	      var address = input.substr(start, match_length);
	
	      // Since we escape before linkifying, we need to make sure that the matched link
	      // doesn't actually end with an escaped character (< or >)
	      // If it does, move the match backwards so as not to include the escaped character
	      var escaped_char_match_pos = address.search(/&(gt|lt)$/);
	      if (escaped_char_match_pos > 0 && input.length > start + match_length && input[start + match_length] === ';') {
	        var num_chars_matched = address.length - escaped_char_match_pos;
	        match_length -= num_chars_matched;
	        address = input.substr(start, match_length);
	      }
	      var actual = address;
	
	      if (add_http && !match[2]) {
	        actual = 'http://' + actual;
	      }
	
	      var replacement = '<a';
	
	      // link target?
	      if (link_target) {
	        replacement += ' target="' + link_target + '"';
	      }
	
	      if (no_referrer) {
	        replacement += ' rel="noopener noreferrer"';
	      }
	
	      replacement += ' href="';
	
	      if (is_email) {
	        replacement += 'mailto:';
	      }
	
	      actual = actual.replace(/"/g, '%22');
	      replacement += actual + '"';
	
	      // add title
	      if (link_titles) {
	        var title = is_email ? 'Email ' + actual : actual;
	        replacement += ' title="' + title + '"';
	      }
	
	      // Truncate displayed text if requested
	      if (truncate_length && address.length > truncate_length) {
	        address = address.substr(0, truncate_length) + '...';
	      }
	
	      // Add word break tags to allow wrapping where appropriate
	      if (add_wbrs) {
	        address = address.replace(new RegExp("([/=])", 'g'), "<wbr>$1");
	      }
	
	      replacement += '>' + address + '</a>';
	
	      // Record what was matched
	      if (matched_links) {
	        matched_links.push(actual);
	      }
	
	      // Do the replacement
	      input = input.slice(0, start) + replacement + input.slice(start + match_length, input.length);
	      re.lastIndex = start + replacement.length;
	      offset = start + replacement.length;
	    }
	
	    return input;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tld_list = __webpack_require__(72);
	
	var _tld_list2 = _interopRequireDefault(_tld_list);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Create TLD list
	var tld_blacklist = ["py", "sh"]; // remove py and sh to avoid linking script filenames
	var tlds = _.pullAll(_tld_list2.default, tld_blacklist).join("|");
	
	var url_fragments = {
	  // url protocol blacklist taken from https://extranet.atlassian.com/display/SECURITY/URI+scheme+whitelisting
	  required_url_protocol: "((?:(?!javascript|file|vbscript|view-source|resource|about|chrome|livescript|mocha|data)[a-z][\\w\\-]+:)(?:/{1,3}))",
	  optional_url_protocol: "((?:(?!javascript|file|vbscript|view-source|resource|about|chrome|livescript|mocha|data)[a-z][\\w\\-]+:)?(?:/{1,3}))?",
	  optional_user_pass_auth: "(?:\\S+(?::\\S*)?@.+)?",
	  ip_address_exclusion:
	  // IP address exclusion
	  // private & local networks
	  "(?!(?:10|127)(?:\\.\\d{1,3}){3})" + "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" + "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})",
	  ip_dotted_notation:
	  // IP address dotted notation octets
	  // excludes loopback network 0.0.0.0
	  // excludes reserved space >= 224.0.0.0
	  // excludes network & broacast addresses
	  // (first & last IP address of each class)
	  "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))",
	  host_name: "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)",
	  domain_name: "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)?",
	  tld_identifier: "(?:\\.(?:" + tlds + "))\\.?(?:" + tlds + ")?",
	  tld_matcher: "(?:\\.(?:[a-zA-Z]{2,12}))\\.?",
	  port_number: "(?::\\d{2,5})?",
	  resource_path: "(?:(?:,\\-|,\\+|[/?#:'()])\\S*)?"
	};
	
	exports.default = {
	  simple_word: "^[a-zA-Z0-9]*$",
	  email: "[a-z0-9]+(?:[.][a-z0-9!#$%&'*+=?^_`{|}~\\-]+)*@(?:[a-z0-9](?:[a-z0-9\\-]*[a-z0-9])?[.])+[a-z0-9](?:[a-z0-9\\-]*[a-z0-9])?",
	  // Adapted from https://gist.github.com/dperini/729294 - MIT
	  url: "\\b" + "(?:" + "(" + url_fragments.required_url_protocol + url_fragments.optional_user_pass_auth + "(?:" + "[a-zA-Z\\u00a1-\\uffff0-9_\\-.()]+" + ")" + url_fragments.port_number + url_fragments.resource_path + ")|(" + url_fragments.optional_url_protocol + url_fragments.optional_user_pass_auth + "(?:" + "localhost" + "|" + url_fragments.ip_dotted_notation + "|" + url_fragments.host_name + url_fragments.domain_name + url_fragments.tld_identifier + ")" + url_fragments.port_number + url_fragments.resource_path + ")" + ")",
	  url_end_punctuation: '[\\s`!()\\[\\]:{};\'".,<>«»“”‘’&]',
	  invite_user_url: '^\\s*http(s?):\/\/((\\w+)\.)?hipchat\\.com\/invite\/(\\d+)\/(\\w+)((\\?utm_campaign\\=company_room_link)?)\\s*$'
	};
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ["aero", "arpa", "asia", "biz", "cat", "com", "coop", "corp", "edu", "gov", "green", "info", "int", "io", "jobs", "local", "mil", "mobi", "museum", "name", "net", "org", "post", "pro", "rocks", "tel", "travel", "xxx", "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cs", "cu", "cv", "cx", "cy", "cz", "dd", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "qc", "qs", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "ja", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "su", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "yu", "za", "zm", "zw"];
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _moment = __webpack_require__(68);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _regex_helpers = __webpack_require__(71);
	
	var _regex_helpers2 = _interopRequireDefault(_regex_helpers);
	
	var _jid_utils = __webpack_require__(74);
	
	var _jid_utils2 = _interopRequireDefault(_jid_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	  url_regex: new RegExp(_regex_helpers2.default.url, "i"),
	  urls_regex: new RegExp(_regex_helpers2.default.url, "gi"),
	  url_end_punct_regex: new RegExp(_regex_helpers2.default.url_end_punctuation),
	  paired_punctuation: {
	    "}": "{",
	    ")": "(",
	    ">": "<"
	  },
	
	  /**
	   * Remove the query string from a url
	   *
	   * @method remove_query_string
	   * @param {String} url
	   * @returns {String} url without query string
	   */
	  remove_query_string: function remove_query_string(url) {
	    return url.split(/[?#]/)[0];
	  },
	
	  /**
	   * Creates a link object
	   *
	   * @method create_link_object
	   * @param {String} jid
	   * @param {String} ts
	   * @param {String} url
	   * @param {String} sender_name
	   * @returns {Object} a link object
	   */
	  create_link_object: function create_link_object(jid, ts, url, sender_name) {
	    if (!/^https?:\/\//i.test(url)) {
	      url = 'http://' + url;
	    }
	    return {
	      date: _moment2.default.utc(ts * 1000).toDate(),
	      group_id: _jid_utils2.default.group_id(jid),
	      id: _.uniqueId(),
	      user_name: sender_name,
	      url: url,
	      display_url: url.replace(/.*?:\/\//g, "")
	    };
	  },
	
	  /**
	   * Gets the urls from a string
	   *
	   * @method get_urls_from_string
	   * @param {String} input
	   * @returns {Array} array of urls found in the input
	   */
	  get_urls_from_string: function get_urls_from_string(input) {
	    return input.match(this.urls_regex);
	  },
	
	  /**
	   * Determines if the string contains a url
	   *
	   * @method contains_url
	   * @param {String} input
	   * @returns {Boolean}
	   */
	  contains_url: function contains_url(input) {
	    return this.url_regex.test(input);
	  },
	
	  /**
	   * Removes the resolution from a url (@2x.jpg, etc...)
	   *
	   * @method remove_resolution
	   * @param {String} url
	   * @returns {String} url without the resolution
	   */
	  remove_resolution: function remove_resolution(url) {
	    return url.replace(/@\d+x/i, "");
	  },
	
	
	  /**
	   * If the last character of the url match ends in a punctuation character
	   * and the match index is not at the beginning of the text input,
	   * we should remove the last character of the match
	   *  ex: (http://en.wikipedia.org/wiki/PC_Tools_(Central_Point_Software)) should not convert the last
	   *  parenthesis as part of the link
	   *
	   * @method wrapped_url_fix
	   * @param {String} input
	   * @param {String} match
	   * @returns {String} url
	   */
	  wrapped_url_fix: function wrapped_url_fix(input, match) {
	    var match_index = input.indexOf(match);
	    var last_char_of_match = input.charAt(match_index + (match.length - 1));
	    var is_matched = this.url_end_punct_regex.test(last_char_of_match);
	
	    if (is_matched && this._should_slice(input, match)) {
	      return this.wrapped_url_fix(input, match.slice(0, -1));
	    }
	
	    return match;
	  },
	
	
	  /**
	   * Checks if the number of character is balanced
	   * (e.g. "http://wikipedia.org/Curry(Computer Science)" returns true
	   * but "http://wikipedia.org/Curry(Computer Science))" returns false)
	   *
	   * @param {String} Input
	   * @param {String} Last matching character
	   * @returns {Boolean}
	   */
	  _num_of_chars_balanced: function _num_of_chars_balanced(match, close_punctuation) {
	    var open_punctuation = this.paired_punctuation[close_punctuation];
	
	    // Use square brackets for non-escaping
	    var rule_for_open = new RegExp('[' + open_punctuation + ']', 'g');
	    var rule_for_close = new RegExp('[' + close_punctuation + ']', 'g');
	
	    var open_matches = match.match(rule_for_open) || [];
	    var close_matches = match.match(rule_for_close) || [];
	
	    return open_matches.length === close_matches.length ? true : false;
	  },
	
	
	  /**
	   * Check if the last character should be removed
	   * @param input
	   * @param match
	   * @returns {boolean}
	   * @private
	   */
	  _should_slice: function _should_slice(input, match) {
	    var match_index = input.indexOf(match);
	    var last_char = input.charAt(match_index + (match.length - 1));
	
	    if (this.paired_punctuation[last_char]) {
	      if (!this._num_of_chars_balanced(match, last_char)) {
	        return true;
	      }
	
	      return false;
	    }
	
	    return true;
	  },
	
	
	  /**
	   * If the first character after the match is not url end punctuation
	   * we should break and not replace the match in the input text
	   *  ex: sys.tr would be linkified in "sys.trace" without this fix
	   *
	   * @method url_should_be_replaced
	   * @param {String} input
	   * @param {String} match
	   * @returns {Boolean}
	   */
	  url_should_be_replaced: function url_should_be_replaced(input, match) {
	    var match_index = input.indexOf(match);
	    var first_char_after_match = input.charAt(match_index + match.length);
	    if (first_char_after_match && !this.url_end_punct_regex.test(first_char_after_match)) {
	      return false;
	    }
	    return true;
	  },
	
	
	  /**
	   * Indentify that provided input text is invite link like https://hipchat.com/invite/3/dd0f069a19e1df8465287d5291aa347e
	   * or http://subdomain.hipchat.com/invite/3/dd0f069a19e1df8465287d5291aa347e?utm_campaign=company_room_link
	   *
	   * @param {String} input
	   * @returns {Boolean}
	   */
	  identify_invite_link: function identify_invite_link(input) {
	    var invite_link_regexp = new RegExp(_regex_helpers2.default.invite_user_url);
	    return invite_link_regexp.test(input);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  display_names: {},
	
	  is_private_chat: function is_private_chat(jid) {
	    return (/@chat/.test(jid)
	    );
	  },
	
	  is_room: function is_room(jid) {
	    return (/@conf/.test(jid)
	    );
	  },
	
	  is_lobby: function is_lobby(jid) {
	    return jid === 'lobby' || /^lobby@/.test(jid);
	  },
	
	  is_search: function is_search(jid) {
	    return jid === 'search' || /^search@/.test(jid);
	  },
	
	  is_chat: function is_chat(jid) {
	    return (this.is_private_chat(jid) || this.is_room(jid)) && !this.is_lobby(jid) && !this.is_search(jid);
	  },
	
	  bare_jid: function bare_jid(val) {
	    if (!val) {
	      return false;
	    }
	
	    return val.split('/')[0];
	  },
	
	  domain: function domain(val) {
	    if (!val) {
	      return false;
	    }
	
	    return val.split('@')[1].split('/')[0];
	  },
	
	  group_id: function group_id(val) {
	    var node = this.node(val);
	    var id = node.substr(0, node.indexOf('_'));
	    return parseInt(id, 10);
	  },
	
	  is_private_room: function is_private_room(privacy) {
	    return privacy === 'private';
	  },
	
	  is_public_room: function is_public_room(privacy) {
	    return privacy === 'public';
	  },
	
	  node: function node(val) {
	    if (!val) {
	      return false;
	    }
	
	    return val.split('@')[0];
	  },
	
	  resource: function resource(val) {
	    // we don't want to use val.split('/') here because there may be a slash
	    // in the resource
	    var i = val.indexOf('/');
	    if (i === -1) {
	      return null;
	    }
	    return val.substr(i + 1);
	  },
	
	  room_name: function room_name(val) {
	    var node = this.node(val);
	    var name = node.substr(node.indexOf('_') + 1);
	    return name;
	  },
	
	  // used to sanitize jids before using them in something HTML/Xpath like a jQuery search
	  sanitize: function sanitize(val) {
	    return val.replace('\\', '\\\\');
	  },
	
	  user_id: function user_id(val) {
	    var node = this.node(val);
	    if (node) {
	      var id = node.substr(node.indexOf('_') + 1);
	      if (id.match(/[0123456789]+/)) {
	        return parseInt(id, 10);
	      }
	    }
	
	    return null;
	  },
	
	  user_name: function user_name(jid) {
	    return jid.split("/")[1];
	  },
	
	  get_display_name: function get_display_name(jid, default_name) {
	
	    if (typeof default_name === 'undefined') {
	      default_name = 'Unknown';
	    }
	    if (!jid || typeof jid === 'undefined') {
	      return default_name;
	    }
	
	    jid = this.bare_jid(jid);
	    var member = this.display_names[jid];
	    if (member) {
	      return member.name;
	    }
	
	    return default_name;
	  },
	
	  /**
	   * Builds a jid for the group instance
	   *
	   * @param groupName the name of the group
	   * @param groupId the id of the group
	   * @param conf the conference server string
	   * @returns {string}
	   */
	  build_group_jid: function build_group_jid(groupName, groupId, conf) {
	    return groupId + "_" + (typeof groupName === 'string' ? groupName.toLowerCase() : groupName) + "@" + conf;
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _regenerator = __webpack_require__(76);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _getIterator2 = __webpack_require__(91);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _toConsumableArray2 = __webpack_require__(94);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _app_config = __webpack_require__(98);
	
	var _app_config2 = _interopRequireDefault(_app_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EMOTICON_FINDER = /\([A-Z0-9]+\)/gim;
	
	
	function getEmoteRegex(shortcut) {
	  // Capture space/beginning char in regex to avoid emoticoning links like
	  // http://coderwall.com/p/euwpig?i=3&p=1&t=git (& becomes &amp; and matches ;p)
	  var regex = '(?:<([A-Z][A-Z0-9]*)\\b.*?(?:\\/>|<\\/\\1>)|(&[a-zA-Z0-9]{2,6};)(?!:-\\()|';
	  if (shortcut.indexOf('(') !== 1) {
	    regex += '(?:\\s|^)(' + shortcut + ')(?!\\w))';
	  } else {
	    regex += '(' + shortcut + '))';
	  }
	  return new RegExp(regex, 'gim');
	}
	
	var Emoticons = {
	  path_prefix: '/',
	  emoticons: {},
	  smileys: {},
	  asset_base_uri: '',
	  web_server: '',
	  specials: {
	    scumbag: '_scumbagify',
	    dealwithit: '_shadesify'
	  },
	
	  init: function init() {
	    this.addSmileys(this.emoticons);
	    return this;
	  },
	
	  addSmileys: function addSmileys(smileys) {
	    var _this = this;
	
	    _.each(smileys, function (smiley, key) {
	      if (smiley.shortcut === ':') {
	        smiley.shortcut = ':\\';
	      } else if (smiley.shortcut === '&gt;:-(') {
	        // Fix encoded angry face
	        smiley.shortcut = '>:-(';
	      }
	      if (!_.isRegExp(smiley.regex)) {
	        smiley.regex = getEmoteRegex(smiley.regex);
	      }
	
	      _this.smileys[key] = smiley;
	    });
	
	    return this.smileys;
	  },
	
	  /**
	   * Add an word-based emoticon to the list of emoticons to check for
	   *
	   * @param filename - Name of the image file (the full path is created in the emoticon_text function)
	   * @param shortcut - Text used to create the emoticon (e.g. "embarrassed" or "puking" )
	   * @param height - Height in pixels of the image
	   * @param width - Width in pixels of the image
	   **/
	  add: function add(filename, shortcut, height, width, type) {
	    var str = "(" + shortcut + ")";
	    // Capture optional space char in regex to be compatible with non paren emoticons
	    // We need to check for space with emoticons like ;p to avoid emoticoning links like
	    // http://coderwall.com/p/euwpig?i=3&p=1&t=git (& becomes &amp; and matches ;p)
	    this.emoticons[str] = {
	      file: filename,
	      height: height,
	      width: width,
	      shortcut: '(' + shortcut + ')',
	      type: type
	    };
	  },
	
	  addBulk: function addBulk(emoticons) {
	    var _this2 = this;
	
	    var collection = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    this.emoticons = _.cloneDeep(collection);
	
	    _.each(emoticons, function (emoticon) {
	      _this2.add(emoticon.path, emoticon.shortcut, emoticon.h, emoticon.w, emoticon.type);
	    });
	
	    return this.emoticons;
	  },
	
	  removeBulk: function removeBulk(emoticons) {
	    var _this3 = this;
	
	    var emoticonsMap = {};
	
	    var _arr = [].concat((0, _toConsumableArray3.default)(this.getEmoticonsKeys(emoticons)));
	
	    for (var _i = 0; _i < _arr.length; _i++) {
	      var key = _arr[_i];
	      emoticonsMap[key] = true;
	    }
	
	    _.forIn(this.emoticons, function (emoticon, key) {
	      if (!emoticonsMap[key]) {
	        delete _this3.emoticons[key];
	      }
	    });
	
	    return this.emoticons;
	  },
	
	  getEmoticonsKeys: _regenerator2.default.mark(function getEmoticonsKeys(emoticons) {
	    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, emoticon;
	
	    return _regenerator2.default.wrap(function getEmoticonsKeys$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _iteratorNormalCompletion = true;
	            _didIteratorError = false;
	            _iteratorError = undefined;
	            _context.prev = 3;
	            _iterator = (0, _getIterator3.default)(emoticons);
	
	          case 5:
	            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	              _context.next = 12;
	              break;
	            }
	
	            emoticon = _step.value;
	            _context.next = 9;
	            return '(' + emoticon.shortcut + ')';
	
	          case 9:
	            _iteratorNormalCompletion = true;
	            _context.next = 5;
	            break;
	
	          case 12:
	            _context.next = 18;
	            break;
	
	          case 14:
	            _context.prev = 14;
	            _context.t0 = _context['catch'](3);
	            _didIteratorError = true;
	            _iteratorError = _context.t0;
	
	          case 18:
	            _context.prev = 18;
	            _context.prev = 19;
	
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	
	          case 21:
	            _context.prev = 21;
	
	            if (!_didIteratorError) {
	              _context.next = 24;
	              break;
	            }
	
	            throw _iteratorError;
	
	          case 24:
	            return _context.finish(21);
	
	          case 25:
	            return _context.finish(18);
	
	          case 26:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, getEmoticonsKeys, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	  }),
	
	  getEmoticons: function getEmoticons(message) {
	    return message.match(EMOTICON_FINDER) || [];
	  },
	
	  getEmoticonsInfo: function getEmoticonsInfo(message) {
	    var usedEmoticons = this.getEmoticons(message);
	    return _.filter(this.emoticons, function (emoticon) {
	      return usedEmoticons.indexOf(emoticon.shortcut) !== -1;
	    });
	  },
	
	
	  /**
	   * Replace text emoticons with images
	   **/
	  render: function render(message) {
	    var _this4 = this;
	
	    var emoticons = this.getEmoticons(message);
	
	    if (emoticons.length) {
	      _.each(emoticons, function (shortcut) {
	        var emoticon = _this4.emoticons[shortcut.toLowerCase()];
	
	        if (emoticon) {
	          message = _this4._replaceWithImage(message, emoticon);
	        }
	      });
	    }
	
	    _.each(this.smileys, function (smiley) {
	      return message = _this4._replaceWithImage(message, smiley);
	    });
	
	    return message;
	  },
	
	  _replaceWithImage: function _replaceWithImage(text, emoticon) {
	    var src = this._generateSrc(emoticon.file);
	    if (!emoticon.regex) {
	      emoticon.regex = getEmoteRegex('\\(' + emoticon.shortcut + '\\)');
	    }
	
	    // (not a word character)(smiley regex)(not a word character)
	    return text.replace(emoticon.regex, function (match, p1, p2, p3) {
	      if (p3) {
	        return '<img class="remoticon" aria-label="' + emoticon.shortcut + '" alt="' + emoticon.shortcut + '" height="' + emoticon.height + '" width="' + emoticon.width + '" src="' + src + '" onerror="if (HC.emoticon_resolution_helper) { HC.emoticon_resolution_helper(this); }" />';
	      }
	      return match;
	    });
	  },
	
	  renderConsole: function renderConsole(message) {
	    var _this5 = this;
	
	    try {
	      var emoticons = this.getEmoticons(message),
	          font = "font-family: Helvetica Neue, Helvetica, Arial; font-size: 14px; font-weight: bold;",
	          msg = "%c" + message,
	          args = [font];
	
	      emoticons.forEach(function (emoticon) {
	        var emoticonInfo = _this5._getEmoticonInfo(emoticon, 1);
	
	        if (_.identity(emoticonInfo)) {
	          msg = msg.replace(emoticonInfo.regex, function (match, p1, p2, p3) {
	            if (p3) {
	              return "%c%c";
	            }
	          });
	          args.push("font-size: " + emoticonInfo.height + "px; padding-left: " + (emoticonInfo.width + 5) + "px;" + " line-height: 30px; background: url(" + emoticonInfo.src + ") no-repeat 0/auto " + emoticonInfo.height + "px;");
	          args.push(font);
	        }
	      });
	
	      args.unshift(msg);
	      console.log.apply(console, args);
	    } catch (ignored) {
	      console.log(message);
	    }
	  },
	
	  _getEmoticonInfo: function _getEmoticonInfo(shortcut, resolution) {
	    var emoticon = this.smileys[shortcut] || this.emoticons[shortcut];
	    if (!emoticon) {
	      return undefined;
	    }
	    var fileName = emoticon.file;
	    if (!emoticon.regex) {
	      emoticon.regex = getEmoteRegex('\\(' + emoticon.shortcut + '\\)');
	    }
	    return {
	      src: this._generateSrc(fileName, resolution),
	      regex: emoticon.regex,
	      height: parseInt(emoticon.height, 10) > 26 ? 26 : emoticon.height,
	      width: parseInt(emoticon.width, 10) > 26 ? 26 : emoticon.width
	    };
	  },
	
	  _generateSrc: function _generateSrc(fileName) {
	    var resolution = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
	
	    if (resolution > 1) {
	      var resolutionSuffix = '@' + resolution + 'x';
	      if (fileName.indexOf(resolutionSuffix) === -1) {
	        fileName = fileName.split('.').join(resolution > 1 ? resolutionSuffix + '.' : '.');
	      }
	    }
	    return this.path_prefix + '/' + fileName;
	  },
	
	
	  _replaceSpecials: function _replaceSpecials(node) {
	    var _this6 = this;
	
	    var emotes = $(node).find('img.remoticon');
	    _.forOwn(this.specials, function (apply, emote) {
	      for (var i = 0; i < emotes.length; i++) {
	        if (emotes[i].getAttribute('src').match('img/emoticons/' + emote) && emotes[i + 1] && emotes[i].nextSibling === emotes[i + 1] && emotes[i].getAttribute('src') !== emotes[i + 1].getAttribute('src')) {
	          _this6[apply](emotes[i], emotes[i + 1]);
	        }
	      }
	    });
	  },
	
	  _scumbagify: function _scumbagify(hat, scumbag) {
	    $(scumbag).on('load', function () {
	      var width = $(scumbag).width();
	      hat.style.display = 'block';
	      hat.parentNode.style.position = 'relative';
	      hat.style.position = 'absolute';
	      hat.style.top = scumbag.offsetTop - 3 + 'px';
	      hat.style.left = scumbag.offsetLeft + width / 2 - 10 + 'px';
	    });
	  },
	
	  _shadesify: function _shadesify(shades, coolDude) {
	    $(shades).attr({
	      src: 'https://' + this.web_server + '/wc/' + _app_config2.default.shades_icon,
	      width: 18,
	      height: 'auto'
	    });
	    $(coolDude).on('load', function () {
	      var width = $(coolDude).width(),
	          height = $(coolDude).height();
	      shades.parentNode.style.position = 'relative';
	      shades.style.display = 'block';
	      shades.style.position = 'absolute';
	      shades.style.top = coolDude.offsetTop + height / 2 - 3 + 'px';
	      shades.style.left = coolDude.offsetLeft + width / 2 - 9 + 'px';
	      $(shades).addClass('shadesify');
	    });
	  }
	};
	
	if (console) {
	  console.emote = function (msg) {
	    Emoticons.renderConsole.call(Emoticons, msg);
	  };
	}
	
	module.exports = Emoticons;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(77);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	module.exports = { "default": module.exports, __esModule: true };
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	"use strict";
	
	var _Symbol = __webpack_require__(79)["default"];
	
	var _Object$create = __webpack_require__(86)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(88)["default"];
	
	var _Promise = __webpack_require__(8)["default"];
	
	!(function (global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = _Object$create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };
	
	  runtime.mark = function (genFun) {
	    if (_Object$setPrototypeOf) {
	      _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = _Object$create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function (arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return _Promise.resolve(value.arg).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return _Promise.resolve(value).then(function (unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new _Promise(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
	
	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function () {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function () {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function stop() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(78)))

/***/ },
/* 78 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(81);
	__webpack_require__(10);
	module.exports = __webpack_require__(19).Symbol;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(24)
	  , global         = __webpack_require__(18)
	  , has            = __webpack_require__(28)
	  , DESCRIPTORS    = __webpack_require__(26)
	  , $export        = __webpack_require__(17)
	  , redefine       = __webpack_require__(22)
	  , $fails         = __webpack_require__(27)
	  , shared         = __webpack_require__(33)
	  , setToStringTag = __webpack_require__(31)
	  , uid            = __webpack_require__(34)
	  , wks            = __webpack_require__(32)
	  , keyOf          = __webpack_require__(82)
	  , $names         = __webpack_require__(83)
	  , enumKeys       = __webpack_require__(84)
	  , isArray        = __webpack_require__(85)
	  , anObject       = __webpack_require__(45)
	  , toIObject      = __webpack_require__(39)
	  , createDesc     = __webpack_require__(25)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(16)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(24)
	  , toIObject = __webpack_require__(39);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(39)
	  , getNames  = __webpack_require__(24).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(24);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(41);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(24);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	module.exports = __webpack_require__(19).Object.setPrototypeOf;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(17);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(52).set});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(92), __esModule: true };

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(35);
	__webpack_require__(11);
	module.exports = __webpack_require__(93);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(45)
	  , get      = __webpack_require__(51);
	module.exports = __webpack_require__(19).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(95);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(11);
	__webpack_require__(97);
	module.exports = __webpack_require__(19).Array.from;

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(20)
	  , $export     = __webpack_require__(17)
	  , toObject    = __webpack_require__(66)
	  , call        = __webpack_require__(48)
	  , isArrayIter = __webpack_require__(49)
	  , toLength    = __webpack_require__(50)
	  , getIterFn   = __webpack_require__(51);
	$export($export.S + $export.F * !__webpack_require__(62)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 98 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  analytics_publish_interval: 30000, // publish analytics events with this interval
	  analytics_save_interval: 3000, // save to storage analytics events with this interval
	  default_web_server: "www.hipchat.com", // default web server
	  save_preferences_throttle_interval: 5 * 1000, //the throttle timer for persisting preferences to the server
	  max_upload_size: 50, //max upload file size in Mb
	  file_download_timeout: 10000, //timeout for downloading files
	  scroll_to_bottom_offset: 25, //Scroll to bottom check offset
	  frozen_scroll_offset: 100, //Offset when we handle frozen scroll case
	  chat_scroll_duration: 200, //The duration of the autoscroll animation when a new message comes in
	  render_twitter_cards: false, //Embedded Twitter cards
	  chat_room_idle_timeout_minutes: 1, //Time to elapse before we begin trimming the history
	  chat_room_trim_buffer: 50, //The minimum number of messages before beginning to trim
	  message_retrieval_chunk_size: 50, //Number of messages to request during a history load
	  composing_message_linger_timeout: 6000, //How long "so and so is typing..." messages hang around
	  sent_active_message_delay: 2000, //Delay for sending "active" message and stop "so and so is typing..."
	  sent_composing_message_interval: 3000, //How often we ping composing state for "so and so is typing..."
	  request_participant_presences_timeout: 500, //Throttle timeout to request all participant presences
	  filter_participant_presences_timeout: 5000,
	  fetch_room_participants_timeout: 500,
	  avatar_loading_timeout: 3000, //Load default avatar after this timeout
	  set_active_rooms_timeout: 500, //Debounce timeout to set activeRooms
	  room_participant_page_limit: 500, //Set limit for room participant API paging
	  message_image_size_check_interval: 100, //Interval to check naturalHeight till image loading
	  message_image_loading_timeout: 10000, //Time elapsed before image was marked as failed to load.
	  message_image_max_size: 8000, //Maximum acceptable image size in pixels for images to be rendered as metadata for messages
	  max_image_size_for_base64: 6500,
	  initial_room_participants_limit: 21, //Limit room occupant presences on join - count includes the current user
	  notification_limit: 5, //limit unique OS notifications
	  leave_room_message_confirmation_timeout: 10 * 1000, //Time elapsed before showing "user left the room" message
	  input_history_max: 50, // Maximum number of saved input history items
	  chat_history_fetching_attempts: 5, // How many times we are trying re-fetch history on error
	  chat_history_fetching_attempt_timeout: 60 * 1000, // Timeout on history re-fetching on error
	  default_message_confirmation_timeout: 75 * 1000, //Time elapsed before considering an non-echoed message failed
	  flaky_network_message_timeout: 12 * 1000, //Time it takes to show the user that something's up
	  reconnect_failures_before_showing_banner: 5, //Number of reconnection failures before showing "can't connect" header banner
	  flag_close_animation_time: 1000, //Time for flag closing animation to complete
	  notify_sound_asset: "assets/audio/notify", //Url to notify sound asset
	  incoming_sound_asset: "assets/audio/incoming_call", //Url to incoming call sound asset
	  outgoing_sound_asset: "assets/audio/outgoing_call", //Url to outgoing call sound asset
	  new_hotness_image_asset: "assets/img/embedded/new-hotness.gif",
	  new_hotness_native_asset: "assets/img/embedded/new-hotness-no-animation.png",
	  help_link_url: 'https://help.hipchat.com',
	  get_started_url: 'https://confluence.atlassian.com/get-started-with-hipchat/get-started-with-hipchat-854033505.html',
	  feedback_issue_url: 'https://jira.atlassian.com/secure/CreateIssue.jspa?pid=18110&issuetype=10000',
	  status_page_url: 'https://status.hipchat.com/',
	  notification_close_timeout: 5000, //The duration that desktop notifications hang around
	  message_filter_predicate: _.constant(true), //An optional predicate to filter messages
	  outgoing_message_filter_predicate: _.constant(true), //An optional predicate to filter outgoing messages
	  notification_banner_slide: 200, //The duration of the notification banner slide
	  notification_title_max_character_length: 33, //The max character length for browser notification titles
	  notification_icon: 'assets/img/embedded/notification.png',
	  notification_attach_to_reorder_limit_mins: 5, //The max number of minutes to allow an attached notification to be reordered next to the original.
	  //If time is greater, it will appear at the time it was sent.
	  fetching_files_limit: 100, //Limit of files that we receive on history call
	  fetching_links_limit: 100, //Limit of links that we receive on history call
	  fetch_thumbnails_timeout: 100, //Timeout for thumbnails fetching (ms)
	
	  shades_icon: 'assets/img/embedded/shades.png',
	  select2_max_displayed_items: 20, //Select2 autocomplete maximum displayed items in dropdown list
	  favicon_bg_color: '#707070', //Background color for the favicon notification badge
	  default_backdrop_dismiss_on_click: true, //A click on backdrop will dismiss modal dialog
	  default_theme: 'light',
	  default_density: 'normal',
	  default_chat_view: 'classic_neue',
	  default_name_display: 'names',
	  default_animated_avatars: 'animated',
	  default_notification_level: 'loud',
	  chat_input_id: 'hc-message-input', //Id attribute value for chat input
	  favicon_bg_color_with_mention: '#3873AE', //Background color for the favicon notification badge, when the user is mentioned
	  slash_replacement_regex: new RegExp('^s/([^/]+)/([^/]*)/?$'), //S-slash command replacement regex
	  integrations_base_url: 'https://{base_url}/addons', // Integrations base url
	  integrations_url: 'https://{base_url}/rooms/addons/{room_id}?required_user={user_id}&from_location_id={from_location_id}&source_id={source_id}', // URL used to install integrations in a room (use IntegrationHelper.getIntegrationsUrl())
	  integrations_config_url: 'https://{base_url}/addons/{addon_key}?room={room_id}', // URL used to configure integration in a room
	  integrations_update_url: 'https://{base_url}/addons/{addon_key}?room={room_id}&update=true', // URL used to configure integration in a room
	  column_width_limits: { //Column width limits
	    left: {
	      max: 450,
	      min: 95,
	      default: 220
	    },
	    right: {
	      max: 450,
	      min: 95,
	      default: 200
	    }
	  },
	  video_width: 960,
	  video_height: 540,
	  min_video_width: 640,
	  min_video_height: 360,
	  default_connect_dialog_height: 400, //connect dialog default height
	  default_connect_dialog_width: 600, //connect dialog default width
	  connect_aui_dialog_chrome_height: 122, //connect dialog AUI header / footer combined height
	  default_connect_aui_dialog_vertical_mergin: 170, //connect dialog default distance from the top of the window
	  onboarding: {
	    rooms_threshold: 5,
	    oto_threshold: 5
	  },
	  login_page_redirect_regex: new RegExp('(log|sign)[_\-]?in', "gi"), //if in app search redirects user to sign_in page we check the iframe location and handle apprpriately
	  emoticon_regex: new RegExp(/[^\(a-zA-Z0-9\-\:'=]+/),
	  emote_regex: /^(\/me\s|\/em\s)/,
	  quote_regex: /^(\/quote\s)/,
	  code_regex: /^(\/code\s)/,
	  pre_regex: /^(\/pre\s*|\/monospace\s*)/,
	  core_mentions: [{
	    mention_name: "all",
	    name: 'All room members',
	    isUser: false,
	    jid: 'all@chat' // to pass utils.jid.is_private_chat (is person)
	  }, {
	    mention_name: "here",
	    name: 'Available room members',
	    isUser: false,
	    jid: 'here@chat' // to pass utils.jid.is_private_chat (is person)
	  }, {
	    mention_name: "HipChat",
	    name: 'HipChat',
	    isUser: true,
	    jid: 'hipchat@chat' // to pass utils.jid.is_private_chat (is person)
	  }],
	  spinner_colors: {
	    light: '#000000', // Default color for loading spinner
	    dark: '#c7c7c7' // Loading spinner color for dark mode
	  },
	  missed_video_call_timeout: 30000,
	  default_group_avatar_bg: "#59afe1",
	  default_guest_avatar_bg: "#cccccc",
	  delayed_video_message_timeout: 3000,
	  max_message_text_length: Math.pow(2, 15), // Max message length - matches backend limit
	  max_file_description_length: 1000, // Max file description length - matches backend limit
	  max_topic_text_length: 250, // Max topic length - too many characters cause crashes
	  max_presence_text_length: 1024,
	  integrations: {
	    persistent_store_max_size_bytes: 100 * 1024, // 100KB in bytes
	    glance_remote_metadata_timeout: 10000,
	    loading_indicator_delay_ms: 100,
	    signed_url_timeout: 2000,
	    spinner_delay: 100
	  },
	  dialog: {
	    max_size_margin: 160,
	    filter_debounce_wait: 250
	  },
	  modal_transition_allowance: 250,
	  people_glance: {
	    full_key: "atlassian.hipchat.internal.people:people",
	    addon_key: "atlassian.hipchat.internal.people",
	    addon_version: "internal.people.1",
	    key: "people",
	    name: "Members",
	    target: "people",
	    type: "glance",
	    icon: {
	      aui_icon: "aui-icon aui-icon-small aui-iconfont-group"
	    },
	    weight: 0,
	    internal: true,
	    max_items_to_render_collapsed: 24
	  },
	  files_glance: {
	    full_key: "atlassian.hipchat.internal.files:files",
	    addon_key: "atlassian.hipchat.internal.files",
	    addon_version: "internal.files.1",
	    key: "files",
	    name: "Files",
	    target: "files",
	    type: "glance",
	    icon: {
	      aui_icon: "hipchat-icon-small icon-file"
	    },
	    weight: 1,
	    internal: true
	  },
	  links_glance: {
	    full_key: "atlassian.hipchat.internal.links:links",
	    addon_key: "atlassian.hipchat.internal.links",
	    addon_version: "internal.links.1",
	    key: "links",
	    name: "Links",
	    target: "links",
	    type: "glance",
	    icon: {
	      aui_icon: "hipchat-icon-small icon-link"
	    },
	    weight: 2,
	    internal: true
	  },
	  max_unread_count: 99,
	  default_avatar_colors: [// Used to identify the default group avatar
	  '#88d3ff', '#59afe1', '#2774a0', '#1a8cff', '#b2e020', '#8eb021', '#2f7a0e', '#0bbe30', '#14892c', '#005812', '#fe5e50', '#d04437', '#88170c', '#f6c342', '#f79232', '#b05600', '#d39c3f', '#815b3a', '#594300', '#a659f5', '#654982', '#3d1368', '#f691b2', '#f15c75', '#be1733', '#ff4f92', '#ff0d6e', '#b3003e', '#ffe400', '#ffae00', '#00d2ff', '#0096ff', '#d84dff', '#b400ff', '#7e00ff', '#ffd200', '#ff7f00', '#ff2f00'],
	  tipsify: {
	    window_margin: 10,
	    distance: 5,
	    delay: 300,
	    max_dom_traverse_depth: 3
	  },
	  cards: {
	    feedback_url: 'https://docs.google.com/a/atlassian.com/forms/d/1vcNJHyni4mCwwljRskil_Xdz9o_ssgxeu-cD0pmv1ts/viewform?entry.640157496='
	  },
	  guest_access_information: {
	    focus_and_select_delay: 200,
	    mouseout_delay: 300
	  },
	  roster_panel: {
	    group_title_item_height: 39,
	    person_item_height: 26,
	    breakpoints: {
	      small: 20,
	      medium: 100,
	      large: 500,
	      xlarge: Infinity
	    }
	  },
	  edit_message_threshold: 1000 * 60 * 60 * 24, // amount of time (in milliseconds) that we will allow users to edit/delete messages
	  max_users_in_group_join_notification: 10, // max number of users in group that will get client notification, that new user joined
	  welcome_dialog: {
	    max_size_of_group_to_display: 5,
	    max_displayed_people: 4,
	    max_displayed_rooms: 4,
	    max_amount_of_people_icons: 6,
	    max_length_of_welcome_message: 150
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _moment = __webpack_require__(68);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _jid_utils = __webpack_require__(74);
	
	var _jid_utils2 = _interopRequireDefault(_jid_utils);
	
	var _file_types = __webpack_require__(100);
	
	var _file_types2 = _interopRequireDefault(_file_types);
	
	var _mime_types = __webpack_require__(101);
	
	var _mime_types2 = _interopRequireDefault(_mime_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var file_utils = {
	
	  file_types: _file_types2.default.init(),
	  mime_types: _mime_types2.default.init(),
	
	  is_gif: function is_gif(fileurl) {
	    var ext = file_utils.get_extension(fileurl);
	    return ext.toLowerCase() === 'gif';
	  },
	
	  get_file_name: function get_file_name(filename) {
	    return _.isString(filename) ? filename.split("/").pop() : "";
	  },
	
	  get_extension: function get_extension(filename) {
	    var file = file_utils.get_file_name(filename),
	        ext = file.split(".").pop();
	    return ext === file ? "" : ext.toLowerCase();
	  },
	
	  get_extension_for_mime_type: function get_extension_for_mime_type(mimeType) {
	    if (file_utils.mime_types[mimeType]) {
	      return file_utils.mime_types[mimeType];
	    } else if (mimeType.split("/").pop().length === 3) {
	      return mimeType.split("/").pop();
	    }
	  },
	
	  get_file_type: function get_file_type(filename, return_default) {
	    var extension = file_utils.get_extension(filename),
	        type;
	    _.find(file_utils.file_types, function (extension_list, key) {
	      if (_.includes(extension_list, extension)) {
	        type = key;
	      }
	    });
	    return return_default ? type || "text" : type;
	  },
	
	  get_size_string: function get_size_string(size) {
	    if (!size) {
	      return '';
	    }
	
	    var precision = size > 1024 ? 0 : 2,
	        sizeString = Number(size / 1024).toFixed(precision),
	        magnitude = 'K';
	
	    if (size > 1048576) {
	      precision = 1;
	      sizeString = Number(size / 1048576).toFixed(precision);
	      magnitude = 'MB';
	    }
	
	    return sizeString + magnitude;
	  },
	
	  get_selected_file_type: function get_selected_file_type(file) {
	    var fileType = {
	      major: "unknown",
	      minor: "unknown"
	    };
	    if (file && file.type && file.type.indexOf("/") > -1) {
	      var fileTypeSplit = file.type.toLowerCase().split("/");
	      fileType.major = fileTypeSplit[0];
	      fileType.minor = fileTypeSplit[1];
	    }
	
	    return fileType;
	  },
	
	  get_icon_class: function get_icon_class(filename) {
	    var file_type = file_utils.get_file_type(filename);
	    return file_type ? "icon-" + file_type : "icon-text";
	  },
	
	  clean_base64_type: function clean_base64_type(base64_type) {
	    var type;
	
	    if (_.isString(base64_type)) {
	      type = base64_type.replace("data:", "").replace(";base64", "");
	    }
	    return type;
	  },
	
	  get_base64_type: function get_base64_type(base64) {
	    if (_.isString(base64)) {
	      return file_utils.clean_base64_type(base64.split(",")[0]);
	    }
	  },
	
	  get_base64_data: function get_base64_data(base64) {
	    if (_.isString(base64)) {
	      var base_data = base64.split(",");
	      if (_.isArray(base_data) && base_data.length > 1) {
	        return base_data[1];
	      }
	    }
	  },
	
	  base64_to_blob: function base64_to_blob(base64) {
	    var fileName = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	    var blob,
	        content_type,
	        base64_data,
	        byteChars,
	        sliceSize = 512,
	        slice,
	        byteNums,
	        byteArray = [],
	        fileType,
	        byteCollection = [];
	
	    if (_.isString(base64)) {
	      base64_data = file_utils.get_base64_data(base64);
	      content_type = file_utils.get_base64_type(base64);
	      byteChars = atob(base64_data);
	
	      for (var offset = 0; offset < byteChars.length; offset += sliceSize) {
	        slice = byteChars.slice(offset, offset + sliceSize);
	        byteNums = new Array(slice.length);
	
	        for (var i = 0; i < slice.length; i++) {
	          byteNums[i] = slice.charCodeAt(i);
	        }
	
	        byteArray = new Uint8Array(byteNums);
	        byteCollection.push(byteArray);
	      }
	
	      if (content_type === 'application/octet-stream') {
	        fileType = this.get_extension(fileName);
	
	        if (fileType === 'mp4') {
	          content_type = 'video/mp4';
	        } else if (fileType === 'mov') {
	          content_type = 'video/quicktime';
	        }
	      }
	
	      blob = new Blob(byteCollection, { type: content_type });
	    }
	    return blob;
	  },
	
	  blob_to_file: function blob_to_file(blob, name) {
	    var date = arguments.length <= 2 || arguments[2] === undefined ? new Date() : arguments[2];
	
	    if (blob instanceof Blob) {
	      blob.lastModifiedDate = date;
	      blob.name = name ? name : "";
	    }
	    return blob;
	  },
	
	  create_file_object: function create_file_object(jid, file, ts, sender_name) {
	    var base_id = _.uniqueId();
	    return _.assign(file, {
	      id: file.id || base_id,
	      group_id: _jid_utils2.default.group_id(jid),
	      user_name: sender_name,
	      date: _moment2.default.utc(ts * 1000).toDate(),
	      icon_class: file_utils.get_icon_class(file.name)
	    });
	  }
	};
	
	exports.default = file_utils;
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  init: function init() {
	    return {
	      "audio": ["aif", "aiff", "mp3", "wav", "wma"],
	      "code": ["asp", "coffee", "css", "html", "htm", "java", "js", "json", "jsp", "less", "lib", "php", "prl", "py", "sass", "sh", "xml"],
	      "doc": ["doc", "docm", "docx", "dotm", "dotx", "gdoc", "pages"],
	      "ai": ["ai"],
	      "psd": ["psd"],
	      "img": ["bmp", "gif", "jpg", "jpeg", "png", "tif", "tiff"],
	      "pdf": ["pdf"],
	      "presentation": ["keynote", "ppam", "ppsm", "ppsx", "ppt", "pptm", "pptx"],
	      "spreadsheet": ["numbers", "ods", "xlam", "xls", "xlsb", "xlsm", "xlsx", "xltm", "xltx"],
	      "vector": ["dxf", "eps", "svg"],
	      "video": ["flv", "m4v", "mov", "mp4", "wmv", "webm", "ogv"],
	      "zip": ["apk", "gz", "rar", "tar", "zip", "zipx"]
	    };
	  }
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  init: function init() {
	    return {
	      "image/jpg": "jpg",
	      "image/jpeg": "jpg",
	      "image/png": "png",
	      "image/gif": "gif",
	      "image/svg+xml": "svg",
	      "audio/mpeg3": "mpg3",
	      "audio/wav": "wav",
	      "application/pdf": "pdf",
	      "application/text": "txt",
	      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
	      "application/vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
	      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
	      "video/mp4": "mp4",
	      "video/quicktime": "mov"
	    };
	  }
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jid_utils = __webpack_require__(74);
	
	var _jid_utils2 = _interopRequireDefault(_jid_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var room_utils = {
	  get_room_name: function get_room_name(rooms, room_jid) {
	    return rooms[room_jid] ? rooms[room_jid].name : "Unknown";
	  },
	  get_room_id: function get_room_id(rooms, room_jid) {
	    return rooms[room_jid] ? rooms[room_jid].id : false;
	  },
	  detect_chat_type: function detect_chat_type(jid) {
	    return _jid_utils2.default.is_room(jid) ? 'groupchat' : 'chat';
	  },
	  is_archived: function is_archived() {
	    var room = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    if (_.isBoolean(room.is_archived)) {
	      return room.is_archived;
	    }
	    return !!parseInt(room.is_archived, 10) || room.is_archived === '';
	  },
	  is_guest: function is_guest(participant) {
	    return _.get(participant, 'is_guest');
	  },
	  is_admin: function is_admin(participant) {
	    return _.get(participant, 'is_group_admin');
	  }
	};
	
	exports.default = room_utils;
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray2 = __webpack_require__(104);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _status_strings = __webpack_require__(108);
	
	var _status_strings2 = _interopRequireDefault(_status_strings);
	
	var _utils = __webpack_require__(7);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var user_utils = {
	
	  get_user_name: function get_user_name(users, group_id, user_id) {
	    var jid_fragment = group_id + "_" + user_id + "@",
	        user_name = "Unknown";
	    _.find(users, function (val, key) {
	      if (key.indexOf(jid_fragment) > -1) {
	        user_name = val.name;
	      }
	    });
	    return user_name;
	  },
	
	  get_user_status: function get_user_status(presence_show) {
	    var status;
	
	    switch (presence_show) {
	      case "chat":
	        status = _status_strings2.default.available;
	        break;
	      case "away":
	        status = _status_strings2.default.idle;
	        break;
	      case "xa":
	        status = _status_strings2.default.away;
	        break;
	      case "dnd":
	        status = _status_strings2.default.dnd;
	        break;
	      case "mobile":
	        status = _status_strings2.default.mobile;
	        break;
	      default:
	        status = _status_strings2.default.unavailable;
	    }
	    return status;
	  },
	
	  chat_header_status: function chat_header_status(presence_status) {
	    var status;
	    switch (presence_status) {
	      case "chat":
	        status = _status_strings2.default.available;
	        break;
	      case "away":
	        status = _status_strings2.default.away;
	        break;
	      case "xa":
	        status = _status_strings2.default.away;
	        break;
	      case "dnd":
	        status = _status_strings2.default.dnd;
	        break;
	      case "mobile":
	        status = _status_strings2.default.mobile;
	        break;
	      default:
	        status = _status_strings2.default.unavailable;
	    }
	    return status;
	  },
	
	  format_idle_time: function format_idle_time(seconds) {
	    var time_msg = "",
	        days = Math.floor(seconds / 86400),
	        hours = Math.floor(seconds % 86400 / 3600),
	        mins = Math.floor(seconds % 86400 % 3600 / 60);
	
	    if (days > 0) {
	      time_msg = days + "d ";
	    }
	    if (hours > 0) {
	      time_msg += hours + "h ";
	    }
	    if (mins > 0) {
	      time_msg += mins + "m";
	    }
	    return $.trim(time_msg);
	  },
	
	  is_admin: function is_admin(admins, ownerId, user) {
	    var result = false,
	        uid = Number(_.get(user, "user_id") || _.get(user, "id")),
	        oid = Number(ownerId);
	
	    if (_.get(user, "is_admin") || _.get(user, 'is_group_admin')) {
	      result = true;
	    } else if (uid) {
	      if (admins) {
	        result = _.some(admins, function (val) {
	          return val === uid;
	        });
	      }
	      if (!result && oid) {
	        result = oid === uid;
	      }
	    }
	    return result;
	  },
	
	  is_guest: function is_guest(user) {
	    return !('subscription' in user);
	  },
	
	  sort_users: function sort_users(results, query) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	    var matchingRegex = new RegExp('^' + _utils2.default.escapeRegEx(query), 'gmi');
	
	    var _results$reduce = results.reduce(function (acc, el) {
	      var sortableValue = key ? el[key] : el;
	      var words = sortableValue.trim().split(' ');
	      var isMatched = words.some(function (name) {
	        return name.match(matchingRegex);
	      });
	      var isExact = isMatched ? words.some(function (name) {
	        return name.toLowerCase() === query.toLowerCase();
	      }) : false;
	
	      if (isExact) {
	        acc.exact.push(el);
	      } else if (isMatched) {
	        acc.highPriority.push(el);
	      } else {
	        acc.lowPriority.push(el);
	      }
	
	      return acc;
	    }, { exact: [], highPriority: [], lowPriority: [] });
	
	    var exact = _results$reduce.exact;
	    var highPriority = _results$reduce.highPriority;
	    var lowPriority = _results$reduce.lowPriority;
	
	
	    var sortFunc = function sortFunc(a, b) {
	      var _ref = key ? [a[key], b[key]] : [a, b];
	
	      var _ref2 = (0, _slicedToArray3.default)(_ref, 2);
	
	      var valueA = _ref2[0];
	      var valueB = _ref2[1];
	
	      return valueA.toLowerCase() > valueB.toLowerCase();
	    };
	
	    exact = exact.sort(sortFunc);
	    highPriority = highPriority.sort(sortFunc);
	    lowPriority = lowPriority.sort(sortFunc);
	
	    return exact.concat(highPriority).concat(lowPriority);
	  }
	};
	
	exports.default = user_utils;
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _isIterable2 = __webpack_require__(105);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(91);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(35);
	__webpack_require__(11);
	module.exports = __webpack_require__(107);

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(43)
	  , ITERATOR  = __webpack_require__(32)('iterator')
	  , Iterators = __webpack_require__(29);
	module.exports = __webpack_require__(19).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  available: 'Available',
	  idle: 'Idle',
	  away: 'Away',
	  dnd: 'Do Not Disturb',
	  mobile: 'Mobile',
	  unavailable: 'Unavailable'
	};
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _app_config = __webpack_require__(98);
	
	var video_utils = {
	
	  isVideoLink: function isVideoLink(link) {
	    // Using the global HC object here because importing the ConfigStore throws an error
	    //  TypeError: "Super expression must either be null or a function, not object"
	    var base_url = _.get(window, 'HC.ApplicationStore.data.config.video_base_url', '').replace(/https?\:\/\//, '');
	
	    var whitelist = ['hipchat.com/video/join', 'hipchat.me', 'enso.me/join'];
	
	    if (base_url && whitelist.indexOf(base_url) === -1) {
	      whitelist.unshift(base_url);
	    }
	
	    for (var i = 0; i < whitelist.length; i++) {
	      var video_url = whitelist[i].replace(/\/join$/, '/(join|call|meeting)'),
	          video_re = new RegExp('^(https?://)?(www.)?' + video_url + '/.*', 'i');
	
	      if (video_re.test(link)) {
	        return true;
	      }
	    }
	
	    return false;
	  },
	
	  get_video_window_props: function get_video_window_props() {
	    var window_size = video_utils.size_window(_app_config.video_width, _app_config.video_height, _app_config.min_video_width, _app_config.min_video_height),
	        width = window_size.width,
	        height = window_size.height;
	
	    var width_ratio = width / _app_config.video_width;
	    var height_ratio = height / _app_config.video_height;
	
	    if (width_ratio < 1 && height_ratio < 1) {
	      if (width_ratio < height_ratio) {
	        width = Math.floor(_app_config.video_width * height_ratio);
	      } else {
	        height = Math.floor(_app_config.video_height * width_ratio);
	      }
	    } else if (height_ratio < 1) {
	      width = Math.floor(_app_config.video_width * height_ratio);
	    } else if (width_ratio < 1) {
	      height = Math.floor(_app_config.video_height * width_ratio);
	    }
	    var pos = video_utils.center_window(width, height);
	
	    return 'resizable=yes,width=' + width + ',height=' + height + ',top=' + pos.top + ',left=' + pos.left;
	  },
	
	  size_window: function size_window(target_w, target_h, min_w, min_h) {
	    var max_ratio = 0.9;
	    return {
	      width: Math.max(Math.min(Math.floor(window.screen.availWidth * max_ratio), target_w), min_w || 100),
	      height: Math.max(Math.min(Math.floor(window.screen.availHeight * max_ratio), target_h), min_h || 100)
	    };
	  },
	
	  center_window: function center_window(width, height) {
	    var w = window,
	        s = w.screen,
	        screenLeft = w.screenLeft !== null && w.screenLeft !== undefined ? w.screenLeft : s.left,
	        screenTop = w.screenTop !== null && w.screenTop !== undefined ? w.screenTop : s.top;
	    return {
	      left: Math.floor((s.availWidth - width) / 2) + screenLeft,
	      top: Math.floor((s.availHeight - height) / 3) + screenTop
	    };
	  }
	
	};
	
	exports.default = video_utils;
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clientSubType = exports.platform = undefined;
	
	var _client_subtype_keys = __webpack_require__(111);
	
	var _client_subtype_keys2 = _interopRequireDefault(_client_subtype_keys);
	
	var _browser_family_keys = __webpack_require__(112);
	
	var _browser_family_keys2 = _interopRequireDefault(_browser_family_keys);
	
	var _uaParserJs = __webpack_require__(116);
	
	var _uaParserJs2 = _interopRequireDefault(_uaParserJs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var browser = {
	  is: {
	    ie_edge: function ie_edge() {
	      return _.includes(navigator.userAgent, 'Edge');
	    },
	    ie: function ie() {
	      return _.includes(navigator.userAgent, 'MSIE') || _.includes(navigator.appVersion, 'Trident/');
	    },
	    safari: function safari() {
	      return _.includes(navigator.userAgent, 'Safari') && !browser.is.chrome();
	    },
	    chrome: function chrome() {
	      return _.includes(navigator.userAgent, 'Chrome') && !browser.is.ie_edge();
	    },
	    firefox: function firefox() {
	      return _.includes(navigator.userAgent, 'Firefox') && !browser.is.ie_edge();
	    }
	  },
	
	  family: function family() {
	    var family = _browser_family_keys2.default.UNKNOWN;
	
	    if (browser.is.ie()) {
	      family = _browser_family_keys2.default.IE;
	    } else if (browser.is.ie_edge()) {
	      family = _browser_family_keys2.default.EDGE;
	    } else if (browser.is.safari()) {
	      family = _browser_family_keys2.default.SAFARI;
	    } else if (browser.is.chrome()) {
	      family = _browser_family_keys2.default.CHROME;
	    } else if (browser.is.firefox()) {
	      family = _browser_family_keys2.default.FIREFOX;
	    }
	
	    return family;
	  },
	
	  userAgent: function userAgent() {
	    if (!browser._userAgent) {
	      browser._userAgent = (0, _uaParserJs2.default)();
	    }
	    return browser._userAgent;
	  }
	};
	
	var platform = {
	  isMac: function isMac() {
	    var pltfrm = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	    return platform._checkPlatform('MAC', pltfrm);
	  },
	  isWindows: function isWindows() {
	    var pltfrm = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	    return platform._checkPlatform('WIN', pltfrm);
	  },
	  isLinux: function isLinux() {
	    var pltfrm = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	    return platform._checkPlatform('LINUX', pltfrm);
	  },
	  _checkPlatform: function _checkPlatform(check, pltfrm) {
	    if (!pltfrm) {
	      pltfrm = navigator.platform;
	    }
	    return pltfrm.toUpperCase().indexOf(check) !== -1;
	  }
	};
	
	var clientSubType = {
	  isNative: function isNative(client_subtype) {
	    return clientSubType.isMac(client_subtype) || clientSubType.isQT(client_subtype);
	  },
	
	  isQT: function isQT(client_subtype) {
	    return clientSubType.isWindows(client_subtype) || clientSubType.isLinux(client_subtype) || clientSubType.isQTMac(client_subtype);
	  },
	
	  isWindows: function isWindows(client_subtype) {
	    return client_subtype === _client_subtype_keys2.default.QT_WINDOWS;
	  },
	
	  isQTMac: function isQTMac(client_subtype) {
	    return client_subtype === _client_subtype_keys2.default.QT_MAC;
	  },
	
	  isLinux: function isLinux(client_subtype) {
	    return client_subtype === _client_subtype_keys2.default.QT_LINUX;
	  },
	
	  isMac: function isMac(client_subtype) {
	    return client_subtype === _client_subtype_keys2.default.MAC_NATIVE;
	  }
	};
	
	exports.default = browser;
	exports.platform = platform;
	exports.clientSubType = clientSubType;

/***/ },
/* 111 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * @typedef {{name: string, key: string}} clientSubtypeKeys
	 * @type {Object.<string, string>}
	 */
	module.exports = {
	  QT_WINDOWS: "windows",
	  QT_MAC: "mac",
	  QT_LINUX: "linux",
	  MAC_NATIVE: "macweb"
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _freeze = __webpack_require__(113);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _freeze2.default)({
	  UNKNOWN: 'unknown',
	  IE: 'ie',
	  EDGE: 'edge',
	  SAFARI: 'safari',
	  CHROME: 'chrome',
	  FIREFOX: 'firefox'
	});
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(115);
	module.exports = __webpack_require__(19).Object.freeze;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(44);
	
	__webpack_require__(67)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * UAParser.js v0.7.10
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2015 Faisal Salman <fyzlman@gmail.com>
	 * Dual licensed under GPLv2 & MIT
	 */
	
	(function (window, undefined) {
	
	    'use strict';
	
	    //////////////
	    // Constants
	    /////////////
	
	
	    var LIBVERSION  = '0.7.10',
	        EMPTY       = '',
	        UNKNOWN     = '?',
	        FUNC_TYPE   = 'function',
	        UNDEF_TYPE  = 'undefined',
	        OBJ_TYPE    = 'object',
	        STR_TYPE    = 'string',
	        MAJOR       = 'major', // deprecated
	        MODEL       = 'model',
	        NAME        = 'name',
	        TYPE        = 'type',
	        VENDOR      = 'vendor',
	        VERSION     = 'version',
	        ARCHITECTURE= 'architecture',
	        CONSOLE     = 'console',
	        MOBILE      = 'mobile',
	        TABLET      = 'tablet',
	        SMARTTV     = 'smarttv',
	        WEARABLE    = 'wearable',
	        EMBEDDED    = 'embedded';
	
	
	    ///////////
	    // Helper
	    //////////
	
	
	    var util = {
	        extend : function (regexes, extensions) {
	            for (var i in extensions) {
	                if ("browser cpu device engine os".indexOf(i) !== -1 && extensions[i].length % 2 === 0) {
	                    regexes[i] = extensions[i].concat(regexes[i]);
	                }
	            }
	            return regexes;
	        },
	        has : function (str1, str2) {
	          if (typeof str1 === "string") {
	            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
	          } else {
	            return false;
	          }
	        },
	        lowerize : function (str) {
	            return str.toLowerCase();
	        },
	        major : function (version) {
	            return typeof(version) === STR_TYPE ? version.split(".")[0] : undefined;
	        }
	    };
	
	
	    ///////////////
	    // Map helper
	    //////////////
	
	
	    var mapper = {
	
	        rgx : function () {
	
	            var result, i = 0, j, k, p, q, matches, match, args = arguments;
	
	            // loop through all regexes maps
	            while (i < args.length && !matches) {
	
	                var regex = args[i],       // even sequence (0,2,4,..)
	                    props = args[i + 1];   // odd sequence (1,3,5,..)
	
	                // construct object barebones
	                if (typeof result === UNDEF_TYPE) {
	                    result = {};
	                    for (p in props) {
	                        if (props.hasOwnProperty(p)){
	                            q = props[p];
	                            if (typeof q === OBJ_TYPE) {
	                                result[q[0]] = undefined;
	                            } else {
	                                result[q] = undefined;
	                            }
	                        }
	                    }
	                }
	
	                // try matching uastring with regexes
	                j = k = 0;
	                while (j < regex.length && !matches) {
	                    matches = regex[j++].exec(this.getUA());
	                    if (!!matches) {
	                        for (p = 0; p < props.length; p++) {
	                            match = matches[++k];
	                            q = props[p];
	                            // check if given property is actually array
	                            if (typeof q === OBJ_TYPE && q.length > 0) {
	                                if (q.length == 2) {
	                                    if (typeof q[1] == FUNC_TYPE) {
	                                        // assign modified match
	                                        result[q[0]] = q[1].call(this, match);
	                                    } else {
	                                        // assign given value, ignore regex match
	                                        result[q[0]] = q[1];
	                                    }
	                                } else if (q.length == 3) {
	                                    // check whether function or regex
	                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
	                                        // call function (usually string mapper)
	                                        result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
	                                    } else {
	                                        // sanitize match using given regex
	                                        result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
	                                    }
	                                } else if (q.length == 4) {
	                                        result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
	                                }
	                            } else {
	                                result[q] = match ? match : undefined;
	                            }
	                        }
	                    }
	                }
	                i += 2;
	            }
	            return result;
	        },
	
	        str : function (str, map) {
	
	            for (var i in map) {
	                // check if array
	                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
	                    for (var j = 0; j < map[i].length; j++) {
	                        if (util.has(map[i][j], str)) {
	                            return (i === UNKNOWN) ? undefined : i;
	                        }
	                    }
	                } else if (util.has(map[i], str)) {
	                    return (i === UNKNOWN) ? undefined : i;
	                }
	            }
	            return str;
	        }
	    };
	
	
	    ///////////////
	    // String map
	    //////////////
	
	
	    var maps = {
	
	        browser : {
	            oldsafari : {
	                version : {
	                    '1.0'   : '/8',
	                    '1.2'   : '/1',
	                    '1.3'   : '/3',
	                    '2.0'   : '/412',
	                    '2.0.2' : '/416',
	                    '2.0.3' : '/417',
	                    '2.0.4' : '/419',
	                    '?'     : '/'
	                }
	            }
	        },
	
	        device : {
	            amazon : {
	                model : {
	                    'Fire Phone' : ['SD', 'KF']
	                }
	            },
	            sprint : {
	                model : {
	                    'Evo Shift 4G' : '7373KT'
	                },
	                vendor : {
	                    'HTC'       : 'APA',
	                    'Sprint'    : 'Sprint'
	                }
	            }
	        },
	
	        os : {
	            windows : {
	                version : {
	                    'ME'        : '4.90',
	                    'NT 3.11'   : 'NT3.51',
	                    'NT 4.0'    : 'NT4.0',
	                    '2000'      : 'NT 5.0',
	                    'XP'        : ['NT 5.1', 'NT 5.2'],
	                    'Vista'     : 'NT 6.0',
	                    '7'         : 'NT 6.1',
	                    '8'         : 'NT 6.2',
	                    '8.1'       : 'NT 6.3',
	                    '10'        : ['NT 6.4', 'NT 10.0'],
	                    'RT'        : 'ARM'
	                }
	            }
	        }
	    };
	
	
	    //////////////
	    // Regex map
	    /////////////
	
	
	    var regexes = {
	
	        browser : [[
	
	            // Presto based
	            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
	            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
	            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
	            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
	
	            ], [NAME, VERSION], [
	
	            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
	            ], [[NAME, 'Opera'], VERSION], [
	
	            // Mixed
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
	                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer
	
	            // Trident based
	            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
	                                                                                // Avant/IEMobile/SlimBrowser/Baidu
	            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer
	
	            // Webkit/KHTML based
	            /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
	            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i
	                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS
	            ], [NAME, VERSION], [
	
	            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
	            ], [[NAME, 'IE'], VERSION], [
	
	            /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
	            ], [NAME, VERSION], [
	
	            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
	            ], [[NAME, 'Yandex'], VERSION], [
	
	            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
	            ], [[NAME, /_/g, ' '], VERSION], [
	
	            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
	                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
	            /(qqbrowser)[\/\s]?([\w\.]+)/i
	                                                                                // QQBrowser
	            ], [NAME, VERSION], [
	
	            /(uc\s?browser)[\/\s]?([\w\.]+)/i,
	            /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,
	            /JUC.+(ucweb)[\/\s]?([\w\.]+)/i
	                                                                                // UCBrowser
	            ], [[NAME, 'UCBrowser'], VERSION], [
	
	            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
	            ], [[NAME, 'Dolphin'], VERSION], [
	
	            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
	            ], [[NAME, 'Chrome'], VERSION], [
	
	            /XiaoMi\/MiuiBrowser\/([\w\.]+)/i                                   // MIUI Browser
	            ], [VERSION, [NAME, 'MIUI Browser']], [
	
	            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i         // Android Browser
	            ], [VERSION, [NAME, 'Android Browser']], [
	
	            /FBAV\/([\w\.]+);/i                                                 // Facebook App for iOS
	            ], [VERSION, [NAME, 'Facebook']], [
	
	            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
	            ], [VERSION, [NAME, 'Firefox']], [
	
	            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
	            ], [VERSION, [NAME, 'Mobile Safari']], [
	
	            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
	            ], [VERSION, NAME], [
	
	            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
	            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [
	
	            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
	            /(webkit|khtml)\/([\w\.]+)/i
	            ], [NAME, VERSION], [
	
	            // Gecko based
	            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
	            ], [[NAME, 'Netscape'], VERSION], [
	            /(swiftfox)/i,                                                      // Swiftfox
	            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
	                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
	            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
	                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
	            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla
	
	            // Other
	            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
	                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
	            /(links)\s\(([\w\.]+)/i,                                            // Links
	            /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
	            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
	            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
	            ], [NAME, VERSION]
	
	            /* /////////////////////
	            // Media players BEGIN
	            ////////////////////////
	
	            , [
	
	            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
	            /(coremedia) v((\d+)[\w\._]+)/i
	            ], [NAME, VERSION], [
	
	            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
	            ], [NAME, VERSION], [
	
	            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
	            ], [NAME, VERSION], [
	
	            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
	                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
	                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
	            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
	            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
	            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
	            ], [NAME, VERSION], [
	            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
	            ], [NAME, VERSION], [
	
	            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
	            ], [[NAME, 'Flip Player'], VERSION], [
	
	            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
	                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
	            ], [NAME], [
	
	            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
	                                                                                // Gstreamer
	            ], [NAME, VERSION], [
	
	            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
	            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
	                                                                                // Java/urllib/requests/wget/cURL
	            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
	            ], [NAME, VERSION], [
	
	            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
	            ], [[NAME, /_/g, ' '], VERSION], [
	
	            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
	                                                                                // MPlayer SVN
	            ], [NAME, VERSION], [
	
	            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
	            ], [NAME, VERSION], [
	
	            /(mplayer)/i,                                                       // MPlayer (no other info)
	            /(yourmuze)/i,                                                      // YourMuze
	            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
	            ], [NAME], [
	
	            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
	            ], [NAME, VERSION], [
	
	            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
	            ], [NAME, VERSION], [
	
	            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
	            ], [NAME, VERSION], [
	
	            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
	            /(winamp)\s((\d+)[\w\.-]+)/i,
	            /(winamp)mpeg\/((\d+)[\w\.-]+)/i
	            ], [NAME, VERSION], [
	
	            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
	                                                                                // inlight radio
	            ], [NAME], [
	
	            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
	                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
	                                                                                // SoundTap/Totem/Stagefright/Streamium
	            ], [NAME, VERSION], [
	
	            /(smp)((\d+)[\d\.]+)/i                                              // SMP
	            ], [NAME, VERSION], [
	
	            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
	            /(vlc)\/((\d+)[\w\.-]+)/i,
	            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
	            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
	            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
	            ], [NAME, VERSION], [
	
	            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
	            /(windows-media-player)\/((\d+)[\w\.-]+)/i
	            ], [[NAME, /-/g, ' '], VERSION], [
	
	            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
	                                                                                // Windows Media Server
	            ], [VERSION, [NAME, 'Windows']], [
	
	            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
	            ], [NAME, VERSION], [
	
	            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
	            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
	            ], [[NAME, 'rad.io'], VERSION]
	
	            //////////////////////
	            // Media players END
	            ////////////////////*/
	
	        ],
	
	        cpu : [[
	
	            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
	            ], [[ARCHITECTURE, 'amd64']], [
	
	            /(ia32(?=;))/i                                                      // IA32 (quicktime)
	            ], [[ARCHITECTURE, util.lowerize]], [
	
	            /((?:i[346]|x)86)[;\)]/i                                            // IA32
	            ], [[ARCHITECTURE, 'ia32']], [
	
	            // PocketPC mistakenly identified as PowerPC
	            /windows\s(ce|mobile);\sppc;/i
	            ], [[ARCHITECTURE, 'arm']], [
	
	            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
	            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [
	
	            /(sun4\w)[;\)]/i                                                    // SPARC
	            ], [[ARCHITECTURE, 'sparc']], [
	
	            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
	                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
	            ], [[ARCHITECTURE, util.lowerize]]
	        ],
	
	        device : [[
	
	            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
	            ], [MODEL, VENDOR, [TYPE, TABLET]], [
	
	            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [
	
	            /(apple\s{0,1}tv)/i                                                 // Apple TV
	            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [
	
	            /(archos)\s(gamepad2?)/i,                                           // Archos
	            /(hp).+(touchpad)/i,                                                // HP TouchPad
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
	            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [
	
	            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
	            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
	            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
	            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [
	
	            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
	            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
	            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
	            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [
	
	            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
	            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
	                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
	            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
	            /(asus)-?(\w+)/i                                                    // Asus
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
	            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
	                                                                                // Asus Tablets
	            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i
	            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [
	
	            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
	            /(sony)?(?:sgp.+)\sbuild\//i
	            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
	            /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i
	            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [
	
	            /\s(ouya)\s/i,                                                      // Ouya
	            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
	            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
	
	            /android.+;\s(shield)\sbuild/i                                      // Nvidia
	            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
	
	            /(playstation\s[34portablevi]+)/i                                   // Playstation
	            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [
	
	            /(sprint\s(\w+))/i                                                  // Sprint Phones
	            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [
	
	            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [
	
	            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
	            /(zte)-(\w+)*/i,                                                    // ZTE
	            /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
	                                                                                // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
	            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [
	                
	            /(nexus\s9)/i                                                       // HTC Nexus 9
	            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
	
	            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
	            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
	            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
	            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [
	
	                                                                                // Motorola
	            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
	            /mot[\s-]?(\w+)*/i,
	            /(XT\d{3,4}) build\//i,
	            /(nexus\s[6])/i
	            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
	            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
	            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [
	
	            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,
	            /((SM-T\w+))/i
	            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
	            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,
	            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
	            /sec-((sgh\w+))/i
	            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [
	            /(samsung);smarttv/i
	            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
	
	            /\(dtv[\);].+(aquos)/i                                              // Sharp
	            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
	            /sie-(\w+)*/i                                                       // Siemens
	            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
	
	            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
	            /(nokia)[\s_-]?([\w-]+)*/i
	            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [
	
	            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
	            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [
	
	            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
	            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
	            /(lg) netcast\.tv/i                                                 // LG SmartTV
	            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
	            /(nexus\s[45])/i,                                                   // LG
	            /lg[e;\s\/-]+(\w+)*/i
	            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [
	
	            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
	            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [
	
	            /linux;.+((jolla));/i                                               // Jolla
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	
	            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
	            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
	
	            /android.+;\s(glass)\s\d/i                                          // Google Glass
	            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [
	
	            /android.+(\w+)\s+build\/hm\1/i,                                        // Xiaomi Hongmi 'numeric' models
	            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,                   // Xiaomi Hongmi
	            /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i    // Xiaomi Mi
	            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
	
	            /\s(tablet)[;\/\s]/i,                                               // Unidentifiable Tablet
	            /\s(mobile)[;\/\s]/i                                                // Unidentifiable Mobile
	            ], [[TYPE, util.lowerize], VENDOR, MODEL]
	
	            /*//////////////////////////
	            // TODO: move to string map
	            ////////////////////////////
	
	            /(C6603)/i                                                          // Sony Xperia Z C6603
	            ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
	            /(C6903)/i                                                          // Sony Xperia Z 1
	            ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
	
	            /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
	            ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
	            ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
	            ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-G313HZ)/i                                                      // Samsung Galaxy V
	            ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
	            ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
	            /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
	            ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
	            /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
	            ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
	
	            /(R1001)/i                                                          // Oppo R1001
	            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [
	            /(X9006)/i                                                          // Oppo Find 7a
	            ], [[MODEL, 'Find 7a'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	            /(R2001)/i                                                          // Oppo YOYO R2001
	            ], [[MODEL, 'Yoyo R2001'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	            /(R815)/i                                                           // Oppo Clover R815
	            ], [[MODEL, 'Clover R815'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	             /(U707)/i                                                          // Oppo Find Way S
	            ], [[MODEL, 'Find Way S'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
	
	            /(T3C)/i                                                            // Advan Vandroid T3C
	            ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
	            /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
	            ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
	            /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
	            ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [
	
	            /(V972M)/i                                                          // ZTE V972M
	            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
	
	            /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
	            ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
	            /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
	            ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
	            
	            /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
	            ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [
	
	            /////////////
	            // END TODO
	            ///////////*/
	
	        ],
	
	        engine : [[
	
	            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
	            ], [VERSION, [NAME, 'EdgeHTML']], [
	
	            /(presto)\/([\w\.]+)/i,                                             // Presto
	            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
	            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
	            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
	            ], [NAME, VERSION], [
	
	            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
	            ], [VERSION, NAME]
	        ],
	
	        os : [[
	
	            // Windows based
	            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
	            ], [NAME, VERSION], [
	            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
	            /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
	            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
	            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
	            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [
	
	            // Mobile/Embedded OS
	            /\((bb)(10);/i                                                      // BlackBerry 10
	            ], [[NAME, 'BlackBerry'], VERSION], [
	            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
	            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
	            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
	                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
	            /linux;.+(sailfish);/i                                              // Sailfish OS
	            ], [NAME, VERSION], [
	            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
	            ], [[NAME, 'Symbian'], VERSION], [
	            /\((series40);/i                                                    // Series 40
	            ], [NAME], [
	            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
	            ], [[NAME, 'Firefox OS'], VERSION], [
	
	            // Console
	            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation
	
	            // GNU/Linux based
	            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
	            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
	            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,
	                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
	                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
	            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
	            /(gnu)\s?([\w\.]+)*/i                                               // GNU
	            ], [NAME, VERSION], [
	
	            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
	            ], [[NAME, 'Chromium OS'], VERSION],[
	
	            // Solaris
	            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
	            ], [[NAME, 'Solaris'], VERSION], [
	
	            // BSD based
	            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
	            ], [NAME, VERSION],[
	
	            /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i              // iOS
	            ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [
	
	            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
	            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
	            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [
	
	            // Other
	            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
	            /(haiku)\s(\w+)/i,                                                  // Haiku
	            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
	            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
	                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
	            /(unix)\s?([\w\.]+)*/i                                              // UNIX
	            ], [NAME, VERSION]
	        ]
	    };
	
	
	    /////////////////
	    // Constructor
	    ////////////////
	
	
	    var UAParser = function (uastring, extensions) {
	
	        if (!(this instanceof UAParser)) {
	            return new UAParser(uastring, extensions).getResult();
	        }
	
	        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
	        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
	
	        this.getBrowser = function () {
	            var browser = mapper.rgx.apply(this, rgxmap.browser);
	            browser.major = util.major(browser.version);
	            return browser;
	        };
	        this.getCPU = function () {
	            return mapper.rgx.apply(this, rgxmap.cpu);
	        };
	        this.getDevice = function () {
	            return mapper.rgx.apply(this, rgxmap.device);
	        };
	        this.getEngine = function () {
	            return mapper.rgx.apply(this, rgxmap.engine);
	        };
	        this.getOS = function () {
	            return mapper.rgx.apply(this, rgxmap.os);
	        };
	        this.getResult = function() {
	            return {
	                ua      : this.getUA(),
	                browser : this.getBrowser(),
	                engine  : this.getEngine(),
	                os      : this.getOS(),
	                device  : this.getDevice(),
	                cpu     : this.getCPU()
	            };
	        };
	        this.getUA = function () {
	            return ua;
	        };
	        this.setUA = function (uastring) {
	            ua = uastring;
	            return this;
	        };
	        this.setUA(ua);
	        return this;
	    };
	
	    UAParser.VERSION = LIBVERSION;
	    UAParser.BROWSER = {
	        NAME    : NAME,
	        MAJOR   : MAJOR, // deprecated
	        VERSION : VERSION
	    };
	    UAParser.CPU = {
	        ARCHITECTURE : ARCHITECTURE
	    };
	    UAParser.DEVICE = {
	        MODEL   : MODEL,
	        VENDOR  : VENDOR,
	        TYPE    : TYPE,
	        CONSOLE : CONSOLE,
	        MOBILE  : MOBILE,
	        SMARTTV : SMARTTV,
	        TABLET  : TABLET,
	        WEARABLE: WEARABLE,
	        EMBEDDED: EMBEDDED
	    };
	    UAParser.ENGINE = {
	        NAME    : NAME,
	        VERSION : VERSION
	    };
	    UAParser.OS = {
	        NAME    : NAME,
	        VERSION : VERSION
	    };
	
	
	    ///////////
	    // Export
	    //////////
	
	
	    // check js environment
	    if (typeof(exports) !== UNDEF_TYPE) {
	        // nodejs env
	        if (typeof module !== UNDEF_TYPE && module.exports) {
	            exports = module.exports = UAParser;
	        }
	        exports.UAParser = UAParser;
	    } else {
	        // requirejs env (optional)
	        if ("function" === FUNC_TYPE && __webpack_require__(117)) {
	            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	                return UAParser;
	            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	        } else {
	            // browser env
	            window.UAParser = UAParser;
	        }
	    }
	
	    // jQuery/Zepto specific (optional)
	    // Note: 
	    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
	    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
	    //   and we should catch that.
	    var $ = window.jQuery || window.Zepto;
	    if (typeof $ !== UNDEF_TYPE) {
	        var parser = new UAParser();
	        $.ua = parser.getResult();
	        $.ua.get = function() {
	            return parser.getUA();
	        };
	        $.ua.set = function (uastring) {
	            parser.setUA(uastring);
	            var result = parser.getResult();
	            for (var prop in result) {
	                $.ua[prop] = result[prop];
	            }
	        };
	    }
	
	})(typeof window === 'object' ? window : this);


/***/ },
/* 117 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = {
		"connect_api_version": 1,
		"minimum_connect_api_version": 1
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(121);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _uri = __webpack_require__(124);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var URI = function () {
	  (0, _createClass3.default)(URI, null, [{
	    key: 'getProtocol',
	
	
	    /**
	     * Returns the scheme of a URI without parsing the URI, e.g. for URI templates and similar.
	     * This method is here for backward compatibility and URI.parse(uri).getScheme() should be used for new code.
	     * @param {string} uri The raw URI
	     * @returns {string} The scheme of the URI, e.g. 'https' for 'https://example.com'
	     */
	    value: function getProtocol(uri) {
	      var parts = uri.split(':');
	      return parts.length > 0 ? parts[0] : '';
	    }
	
	    /**
	     * Parses a URI
	     * @param {string} uri The raw URI
	     * @returns {URI|null} The URI or null, if 'uri' does not parse.
	     */
	
	  }, {
	    key: 'parse',
	    value: function parse(uri) {
	      var parsed = _uri.URI.parse(uri);
	      return parsed ? new URI(parsed) : null;
	    }
	  }]);
	
	  function URI(cajaUri) {
	    (0, _classCallCheck3.default)(this, URI);
	
	    this.uri = cajaUri;
	  }
	
	  /**
	   * Checks if a URI matches the native HipChat URI scheme: hipchat://www.hipchat.com/room/123.
	   * The host part must be 'www.hipchat.com' or match the base URL of the HC Server.
	   * @returns {boolean} true if it matches, false otherwise
	   */
	
	
	  (0, _createClass3.default)(URI, [{
	    key: 'isHipchatNative',
	    value: function isHipchatNative(baseUrl) {
	      var base = _uri.URI.parse(baseUrl);
	      var host = this.uri.getDomain();
	      return "hipchat" === this.uri.getScheme() && ("www.hipchat.com" === host || base.getDomain() === host);
	    }
	
	    /**
	     * Returns the room ID or name for HipChat native URIs
	     * @returns {string|null} null if the URI is not a native URI or does not point to a room. Returns the room ID or name
	     */
	
	  }, {
	    key: 'getRoom',
	    value: function getRoom() {
	      return this._nativePathElement('room');
	    }
	
	    /**
	     * Checks whether the URI is a HipChat native URI and points to a room
	     * @returns {boolean} true if it points to a room, false otherwise
	     */
	
	  }, {
	    key: 'containsRoom',
	    value: function containsRoom() {
	      return this.getRoom() !== null;
	    }
	
	    /**
	     * Returns the user ID, @mention or email for HipChat native URIs
	     * @returns {string|null} null if the URI is not a native URI or does not point to a user;
	     */
	
	  }, {
	    key: 'getUser',
	    value: function getUser() {
	      return this._nativePathElement('user');
	    }
	
	    /**
	     * Checks whether the URI is a HipChat native URI and points to a user
	     * @returns {boolean} true if it points to a user, false otherwise
	     */
	
	  }, {
	    key: 'containsUser',
	    value: function containsUser() {
	      return this.getUser() !== null;
	    }
	
	    /**
	     * Returns the base URI, e.g. 'https://example.com' for 'https://example.com/path/?q=query
	     * @returns {string} the base URI
	     */
	
	  }, {
	    key: 'getBase',
	    value: function getBase() {
	      var baseUri = _uri.URI.create(this.uri.getScheme(), this.uri.getCredentials(), this.uri.getDomain(), this.uri.getPort());
	      return baseUri.toString();
	    }
	
	    /**
	     * @returns {string} The scheme of the URI, e.g. 'https' for 'https://example.com'
	     */
	
	  }, {
	    key: 'getScheme',
	    value: function getScheme() {
	      return this.uri.getScheme();
	    }
	
	    /**
	     * @returns {boolean} whether the URI has a scheme
	     */
	
	  }, {
	    key: 'hasScheme',
	    value: function hasScheme() {
	      return this.uri.hasScheme();
	    }
	
	    /**
	     * @returns {string} The decoded domain of the URI, e.g. 'example.com' for 'https://example.com:80'
	     */
	
	  }, {
	    key: 'getDomain',
	    value: function getDomain() {
	      return this.uri.getDomain();
	    }
	
	    /**
	     * @returns {boolean} whether the URI has a domain
	     */
	
	  }, {
	    key: 'hasDomain',
	    value: function hasDomain() {
	      return this.uri.hasDomain();
	    }
	
	    /**
	     * @returns {string} The port of the URI, e.g. '80' for 'https://example.com:80'
	     */
	
	  }, {
	    key: 'getPort',
	    value: function getPort() {
	      return this.uri.getPort();
	    }
	
	    /**
	     * @returns {boolean} whether the URI has a port
	     */
	
	  }, {
	    key: 'hasPort',
	    value: function hasPort() {
	      return this.uri.hasPort();
	    }
	
	    /**
	     * @returns {string} The decoded path of the URI, e.g. '/path' for 'https://example.com/path'
	     */
	
	  }, {
	    key: 'getPath',
	    value: function getPath() {
	      return this.uri.getPath();
	    }
	
	    /**
	     * @returns {boolean} whether the URI has a path
	     */
	
	  }, {
	    key: 'hasPath',
	    value: function hasPath() {
	      return this.uri.hasPath();
	    }
	
	    /**
	     * @returns {string} The decoded query of the URI, e.g. '?q=query' for 'https://example.com/path?q=query'
	     */
	
	  }, {
	    key: 'getQuery',
	    value: function getQuery() {
	      return this.uri.getQuery();
	    }
	
	    /**
	     * @returns {boolean} whether the URI has a query
	     */
	
	  }, {
	    key: 'hasQuery',
	    value: function hasQuery() {
	      return this.uri.hasQuery();
	    }
	
	    /**
	     * @returns {string} The decoded fragment of the URI, e.g. 'frag' for 'https://example.com/path#frag'
	     */
	
	  }, {
	    key: 'getFragment',
	    value: function getFragment() {
	      return this.uri.getFragment();
	    }
	
	    /**
	     * @returns {boolean} whether the URI has a fragment
	     */
	
	  }, {
	    key: 'hasFragment',
	    value: function hasFragment() {
	      return this.uri.hasFragment();
	    }
	
	    /**
	     * Returns all query parameters as an array of keys and values like [ key0, value0, key1, value1, ... ]
	     * @returns {Array.<string>}
	     */
	
	  }, {
	    key: 'getAllParameters',
	    value: function getAllParameters() {
	      return this.uri.getAllParameters();
	    }
	
	    /**
	     * Returns the decoded values of a particular query parameter. E.g. ['a','b'] for 'q' where the query is '?q=a&q=b'
	     * @param paramNameUnescaped the name of the query parameter (not escaped)
	     * @returns {Array.<string>}
	     */
	
	  }, {
	    key: 'getParameterValues',
	    value: function getParameterValues(paramNameUnescaped) {
	      return this.uri.getParameterValues(paramNameUnescaped);
	    }
	
	    /**
	     * Returns a map of non-empty lists for the query parameters. E.g. {x:['a'],y:['b']} for '?x=a&y=b'
	     * @returns {Object.<string, Array.<string>>}
	     */
	
	  }, {
	    key: 'getParameterMap',
	    value: function getParameterMap() {
	      return this.uri.getParameterMap();
	    }
	
	    /**
	     * Returns the first value for a given query parameter or null if the given
	     * parameter name does not appear in the query string.
	     * If the given parameter name does appear, but has no '=' following
	     * it, then the empty string will be returned.
	     * @param paramNameUnescaped the name of the query parameter (not escaped)
	     * @returns {string|null}
	     */
	
	  }, {
	    key: 'getParameterValue',
	    value: function getParameterValue(paramNameUnescaped) {
	      return this.uri.getParameterValue(paramNameUnescaped);
	    }
	
	    /**
	     * Sets the value(s) of query parameter
	     * @param {string} key The query parameter key
	     * @param {string|Array.<string>} values The value or values of the query parameter
	     */
	
	  }, {
	    key: 'setParameterValues',
	    value: function setParameterValues(key, values) {
	      this.uri.setParameterValues(key, _.isArray(values) ? values : [values]);
	      return this;
	    }
	
	    /**
	     * Removes a query parameter
	     * @param {string} key
	     */
	
	  }, {
	    key: 'removeParameter',
	    value: function removeParameter(key) {
	      this.uri.removeParameter(key);
	      return this;
	    }
	
	    /**
	     * @param {string} fragment the url fragment
	     * @returns {string} The decoded fragment of the URI, e.g. 'frag' for 'https://example.com/path#frag'
	     */
	
	  }, {
	    key: 'setFragment',
	    value: function setFragment(fragment) {
	      if (_.isObject(fragment)) {
	        var parts = [];
	        for (var key in fragment) {
	          parts.push(key + '=' + fragment[key]);
	        }
	        fragment = parts.join('&');
	      }
	      this.uri.setRawFragment(fragment);
	      return this;
	    }
	
	    /**
	     * Get the string representation of the URI
	     * @returns {string}
	     */
	
	  }, {
	    key: 'toString',
	    value: function toString() {
	      var uri = this.uri.toString();
	      return _.endsWith(uri, '?') ? uri.substr(0, uri.length - 1) : uri;
	    }
	  }, {
	    key: '_nativePathElement',
	    value: function _nativePathElement(context) {
	      var pathElements = this.uri.getPath().split('/');
	      if (pathElements.length === 3 && pathElements[1] === context) {
	        return pathElements[2];
	      }
	      return null;
	    }
	  }]);
	  return URI;
	}();
	
	exports.default = URI;
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(122);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(24);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (C) 2010 Google Inc.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	
	/**
	 * @fileoverview
	 * Implements RFC 3986 for parsing/formatting URIs.
	 *
	 * @author mikesamuel@gmail.com
	 * \@provides URI
	 * \@overrides window
	 */
	
	var URI = (function () {
	
	    /**
	     * creates a uri from the string form.  The parser is relaxed, so special
	     * characters that aren't escaped but don't cause ambiguities will not cause
	     * parse failures.
	     *
	     * @return {URI|null}
	     */
	    function parse(uriStr) {
	        var m = ('' + uriStr).match(URI_RE_);
	        if (!m) { return null; }
	        return new URI(
	            nullIfAbsent(m[1]),
	            nullIfAbsent(m[2]),
	            nullIfAbsent(m[3]),
	            nullIfAbsent(m[4]),
	            nullIfAbsent(m[5]),
	            nullIfAbsent(m[6]),
	            nullIfAbsent(m[7]));
	    }
	
	
	    /**
	     * creates a uri from the given parts.
	     *
	     * @param scheme {string} an unencoded scheme such as "http" or null
	     * @param credentials {string} unencoded user credentials or null
	     * @param domain {string} an unencoded domain name or null
	     * @param port {number} a port number in [1, 32768].
	     *    -1 indicates no port, as does null.
	     * @param path {string} an unencoded path
	     * @param query {Array.<string>|string|null} a list of unencoded cgi
	     *   parameters where even values are keys and odds the corresponding values
	     *   or an unencoded query.
	     * @param fragment {string} an unencoded fragment without the "#" or null.
	     * @return {URI}
	     */
	    function create(scheme, credentials, domain, port, path, query, fragment) {
	        var uri = new URI(
	            encodeIfExists2(scheme, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_),
	            encodeIfExists2(
	                credentials, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_),
	            encodeIfExists(domain),
	            port > 0 ? port.toString() : null,
	            encodeIfExists2(path, URI_DISALLOWED_IN_PATH_),
	            null,
	            encodeIfExists(fragment));
	        if (query) {
	            if ('string' === typeof query) {
	                uri.setRawQuery(query.replace(/[^?&=0-9A-Za-z_\-~.%]/g, encodeOne));
	            } else {
	                uri.setAllParameters(query);
	            }
	        }
	        return uri;
	    }
	    function encodeIfExists(unescapedPart) {
	        if ('string' == typeof unescapedPart) {
	            return encodeURIComponent(unescapedPart);
	        }
	        return null;
	    };
	    /**
	     * if unescapedPart is non null, then escapes any characters in it that aren't
	     * valid characters in a url and also escapes any special characters that
	     * appear in extra.
	     *
	     * @param unescapedPart {string}
	     * @param extra {RegExp} a character set of characters in [\01-\177].
	     * @return {string|null} null iff unescapedPart == null.
	     */
	    function encodeIfExists2(unescapedPart, extra) {
	        if ('string' == typeof unescapedPart) {
	            return encodeURI(unescapedPart).replace(extra, encodeOne);
	        }
	        return null;
	    };
	    /** converts a character in [\01-\177] to its url encoded equivalent. */
	    function encodeOne(ch) {
	        var n = ch.charCodeAt(0);
	        return '%' + '0123456789ABCDEF'.charAt((n >> 4) & 0xf) +
	            '0123456789ABCDEF'.charAt(n & 0xf);
	    }
	
	    /**
	     * {@updoc
	     *  $ normPath('foo/./bar')
	     *  # 'foo/bar'
	     *  $ normPath('./foo')
	     *  # 'foo'
	     *  $ normPath('foo/.')
	     *  # 'foo'
	     *  $ normPath('foo//bar')
	     *  # 'foo/bar'
	     * }
	     */
	    function normPath(path) {
	        return path.replace(/(^|\/)\.(?:\/|$)/g, '$1').replace(/\/{2,}/g, '/');
	    }
	
	    var PARENT_DIRECTORY_HANDLER = new RegExp(
	        ''
	            // A path break
	            + '(/|^)'
	            // followed by a non .. path element
	            // (cannot be . because normPath is used prior to this RegExp)
	            + '(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)'
	            // followed by .. followed by a path break.
	            + '/\\.\\.(?:/|$)');
	
	    var PARENT_DIRECTORY_HANDLER_RE = new RegExp(PARENT_DIRECTORY_HANDLER);
	
	    var EXTRA_PARENT_PATHS_RE = /^(?:\.\.\/)*(?:\.\.$)?/;
	
	    /**
	     * Normalizes its input path and collapses all . and .. sequences except for
	     * .. sequences that would take it above the root of the current parent
	     * directory.
	     * {@updoc
	     *  $ collapse_dots('foo/../bar')
	     *  # 'bar'
	     *  $ collapse_dots('foo/./bar')
	     *  # 'foo/bar'
	     *  $ collapse_dots('foo/../bar/./../../baz')
	     *  # 'baz'
	     *  $ collapse_dots('../foo')
	     *  # '../foo'
	     *  $ collapse_dots('../foo').replace(EXTRA_PARENT_PATHS_RE, '')
	     *  # 'foo'
	     * }
	     */
	    function collapse_dots(path) {
	        if (path === null) { return null; }
	        var p = normPath(path);
	        // Only /../ left to flatten
	        var r = PARENT_DIRECTORY_HANDLER_RE;
	        // We replace with $1 which matches a / before the .. because this
	        // guarantees that:
	        // (1) we have at most 1 / between the adjacent place,
	        // (2) always have a slash if there is a preceding path section, and
	        // (3) we never turn a relative path into an absolute path.
	        for (var q; (q = p.replace(r, '$1')) != p; p = q) {};
	        return p;
	    }
	
	    /**
	     * resolves a relative url string to a base uri.
	     * @return {URI}
	     */
	    function resolve(baseUri, relativeUri) {
	        // there are several kinds of relative urls:
	        // 1. //foo - replaces everything from the domain on.  foo is a domain name
	        // 2. foo - replaces the last part of the path, the whole query and fragment
	        // 3. /foo - replaces the the path, the query and fragment
	        // 4. ?foo - replace the query and fragment
	        // 5. #foo - replace the fragment only
	
	        var absoluteUri = baseUri.clone();
	        // we satisfy these conditions by looking for the first part of relativeUri
	        // that is not blank and applying defaults to the rest
	
	        var overridden = relativeUri.hasScheme();
	
	        if (overridden) {
	            absoluteUri.setRawScheme(relativeUri.getRawScheme());
	        } else {
	            overridden = relativeUri.hasCredentials();
	        }
	
	        if (overridden) {
	            absoluteUri.setRawCredentials(relativeUri.getRawCredentials());
	        } else {
	            overridden = relativeUri.hasDomain();
	        }
	
	        if (overridden) {
	            absoluteUri.setRawDomain(relativeUri.getRawDomain());
	        } else {
	            overridden = relativeUri.hasPort();
	        }
	
	        var rawPath = relativeUri.getRawPath();
	        var simplifiedPath = collapse_dots(rawPath);
	        if (overridden) {
	            absoluteUri.setPort(relativeUri.getPort());
	            simplifiedPath = simplifiedPath
	                && simplifiedPath.replace(EXTRA_PARENT_PATHS_RE, '');
	        } else {
	            overridden = !!rawPath;
	            if (overridden) {
	                // resolve path properly
	                if (simplifiedPath.charCodeAt(0) !== 0x2f /* / */) {  // path is relative
	                    var absRawPath = collapse_dots(absoluteUri.getRawPath() || '')
	                        .replace(EXTRA_PARENT_PATHS_RE, '');
	                    var slash = absRawPath.lastIndexOf('/') + 1;
	                    simplifiedPath = collapse_dots(
	                        (slash ? absRawPath.substring(0, slash) : '')
	                            + collapse_dots(rawPath))
	                        .replace(EXTRA_PARENT_PATHS_RE, '');
	                }
	            } else {
	                simplifiedPath = simplifiedPath
	                    && simplifiedPath.replace(EXTRA_PARENT_PATHS_RE, '');
	                if (simplifiedPath !== rawPath) {
	                    absoluteUri.setRawPath(simplifiedPath);
	                }
	            }
	        }
	
	        if (overridden) {
	            absoluteUri.setRawPath(simplifiedPath);
	        } else {
	            overridden = relativeUri.hasQuery();
	        }
	
	        if (overridden) {
	            absoluteUri.setRawQuery(relativeUri.getRawQuery());
	        } else {
	            overridden = relativeUri.hasFragment();
	        }
	
	        if (overridden) {
	            absoluteUri.setRawFragment(relativeUri.getRawFragment());
	        }
	
	        return absoluteUri;
	    }
	
	    /**
	     * a mutable URI.
	     *
	     * This class contains setters and getters for the parts of the URI.
	     * The <tt>getXYZ</tt>/<tt>setXYZ</tt> methods return the decoded part -- so
	     * <code>uri.parse('/foo%20bar').getPath()</code> will return the decoded path,
	     * <tt>/foo bar</tt>.
	     *
	     * <p>The raw versions of fields are available too.
	     * <code>uri.parse('/foo%20bar').getRawPath()</code> will return the raw path,
	     * <tt>/foo%20bar</tt>.  Use the raw setters with care, since
	     * <code>URI::toString</code> is not guaranteed to return a valid url if a
	     * raw setter was used.
	     *
	     * <p>All setters return <tt>this</tt> and so may be chained, a la
	     * <code>uri.parse('/foo').setFragment('part').toString()</code>.
	     *
	     * <p>You should not use this constructor directly -- please prefer the factory
	     * functions {@link uri.parse}, {@link uri.create}, {@link uri.resolve}
	     * instead.</p>
	     *
	     * <p>The parameters are all raw (assumed to be properly escaped) parts, and
	     * any (but not all) may be null.  Undefined is not allowed.</p>
	     *
	     * @constructor
	     */
	    function URI(
	        rawScheme,
	        rawCredentials, rawDomain, port,
	        rawPath, rawQuery, rawFragment) {
	        this.scheme_ = rawScheme;
	        this.credentials_ = rawCredentials;
	        this.domain_ = rawDomain;
	        this.port_ = port;
	        this.path_ = rawPath;
	        this.query_ = rawQuery;
	        this.fragment_ = rawFragment;
	        /**
	         * @type {Array|null}
	         */
	        this.paramCache_ = null;
	    }
	
	    /** returns the string form of the url. */
	    URI.prototype.toString = function () {
	        var out = [];
	        if (null !== this.scheme_) { out.push(this.scheme_, ':'); }
	        if (null !== this.domain_) {
	            out.push('//');
	            if (null !== this.credentials_) { out.push(this.credentials_, '@'); }
	            out.push(this.domain_);
	            if (null !== this.port_) { out.push(':', this.port_.toString()); }
	        }
	        if (null !== this.path_) { out.push(this.path_); }
	        if (null !== this.query_) { out.push('?', this.query_); }
	        if (null !== this.fragment_) { out.push('#', this.fragment_); }
	        return out.join('');
	    };
	
	    URI.prototype.clone = function () {
	        return new URI(this.scheme_, this.credentials_, this.domain_, this.port_,
	            this.path_, this.query_, this.fragment_);
	    };
	
	    URI.prototype.getScheme = function () {
	        // HTML5 spec does not require the scheme to be lowercased but
	        // all common browsers except Safari lowercase the scheme.
	        return this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase();
	    };
	    URI.prototype.getRawScheme = function () {
	        return this.scheme_;
	    };
	    URI.prototype.setScheme = function (newScheme) {
	        this.scheme_ = encodeIfExists2(
	            newScheme, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_);
	        return this;
	    };
	    URI.prototype.setRawScheme = function (newScheme) {
	        this.scheme_ = newScheme ? newScheme : null;
	        return this;
	    };
	    URI.prototype.hasScheme = function () {
	        return null !== this.scheme_;
	    };
	
	
	    URI.prototype.getCredentials = function () {
	        return this.credentials_ && decodeURIComponent(this.credentials_);
	    };
	    URI.prototype.getRawCredentials = function () {
	        return this.credentials_;
	    };
	    URI.prototype.setCredentials = function (newCredentials) {
	        this.credentials_ = encodeIfExists2(
	            newCredentials, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_);
	
	        return this;
	    };
	    URI.prototype.setRawCredentials = function (newCredentials) {
	        this.credentials_ = newCredentials ? newCredentials : null;
	        return this;
	    };
	    URI.prototype.hasCredentials = function () {
	        return null !== this.credentials_;
	    };
	
	
	    URI.prototype.getDomain = function () {
	        return this.domain_ && decodeURIComponent(this.domain_);
	    };
	    URI.prototype.getRawDomain = function () {
	        return this.domain_;
	    };
	    URI.prototype.setDomain = function (newDomain) {
	        return this.setRawDomain(newDomain && encodeURIComponent(newDomain));
	    };
	    URI.prototype.setRawDomain = function (newDomain) {
	        this.domain_ = newDomain ? newDomain : null;
	        // Maintain the invariant that paths must start with a slash when the URI
	        // is not path-relative.
	        return this.setRawPath(this.path_);
	    };
	    URI.prototype.hasDomain = function () {
	        return null !== this.domain_;
	    };
	
	
	    URI.prototype.getPort = function () {
	        return this.port_ && decodeURIComponent(this.port_);
	    };
	    URI.prototype.setPort = function (newPort) {
	        if (newPort) {
	            newPort = Number(newPort);
	            if (newPort !== (newPort & 0xffff)) {
	                throw new Error('Bad port number ' + newPort);
	            }
	            this.port_ = '' + newPort;
	        } else {
	            this.port_ = null;
	        }
	        return this;
	    };
	    URI.prototype.hasPort = function () {
	        return null !== this.port_;
	    };
	
	
	    URI.prototype.getPath = function () {
	        return this.path_ && decodeURIComponent(this.path_);
	    };
	    URI.prototype.getRawPath = function () {
	        return this.path_;
	    };
	    URI.prototype.setPath = function (newPath) {
	        return this.setRawPath(encodeIfExists2(newPath, URI_DISALLOWED_IN_PATH_));
	    };
	    URI.prototype.setRawPath = function (newPath) {
	        if (newPath) {
	            newPath = String(newPath);
	            this.path_ =
	                // Paths must start with '/' unless this is a path-relative URL.
	                (!this.domain_ || /^\//.test(newPath)) ? newPath : '/' + newPath;
	        } else {
	            this.path_ = null;
	        }
	        return this;
	    };
	    URI.prototype.hasPath = function () {
	        return null !== this.path_;
	    };
	
	
	    URI.prototype.getQuery = function () {
	        // From http://www.w3.org/Addressing/URL/4_URI_Recommentations.html
	        // Within the query string, the plus sign is reserved as shorthand notation
	        // for a space.
	        return this.query_ && decodeURIComponent(this.query_).replace(/\+/g, ' ');
	    };
	    URI.prototype.getRawQuery = function () {
	        return this.query_;
	    };
	    URI.prototype.setQuery = function (newQuery) {
	        this.paramCache_ = null;
	        this.query_ = encodeIfExists(newQuery);
	        return this;
	    };
	    URI.prototype.setRawQuery = function (newQuery) {
	        this.paramCache_ = null;
	        this.query_ = newQuery ? newQuery : null;
	        return this;
	    };
	    URI.prototype.hasQuery = function () {
	        return null !== this.query_;
	    };
	
	    /**
	     * sets the query given a list of strings of the form
	     * [ key0, value0, key1, value1, ... ].
	     *
	     * <p><code>uri.setAllParameters(['a', 'b', 'c', 'd']).getQuery()</code>
	     * will yield <code>'a=b&c=d'</code>.
	     */
	    URI.prototype.setAllParameters = function (params) {
	        if (typeof params === 'object') {
	            if (!(params instanceof Array)
	                && (params instanceof Object
	                || Object.prototype.toString.call(params) !== '[object Array]')) {
	                var newParams = [];
	                var i = -1;
	                for (var k in params) {
	                    var v = params[k];
	                    if ('string' === typeof v) {
	                        newParams[++i] = k;
	                        newParams[++i] = v;
	                    }
	                }
	                params = newParams;
	            }
	        }
	        this.paramCache_ = null;
	        var queryBuf = [];
	        var separator = '';
	        for (var j = 0; j < params.length;) {
	            var k = params[j++];
	            var v = params[j++];
	            queryBuf.push(separator, encodeURIComponent(k.toString()));
	            separator = '&';
	            if (v) {
	                queryBuf.push('=', encodeURIComponent(v.toString()));
	            }
	        }
	        this.query_ = queryBuf.join('');
	        return this;
	    };
	    URI.prototype.checkParameterCache_ = function () {
	        if (!this.paramCache_) {
	            var q = this.query_;
	            if (!q) {
	                this.paramCache_ = [];
	            } else {
	                var cgiParams = q.split(/[&\?]/);
	                var out = [];
	                var k = -1;
	                for (var i = 0; i < cgiParams.length; ++i) {
	                    var m = cgiParams[i].match(/^([^=]*)(?:=(.*))?$/);
	                    // From http://www.w3.org/Addressing/URL/4_URI_Recommentations.html
	                    // Within the query string, the plus sign is reserved as shorthand
	                    // notation for a space.
	                    out[++k] = decodeURIComponent(m[1]).replace(/\+/g, ' ');
	                    out[++k] = decodeURIComponent(m[2] || '').replace(/\+/g, ' ');
	                }
	                this.paramCache_ = out;
	            }
	        }
	    };
	    /**
	     * sets the values of the named cgi parameters.
	     *
	     * <p>So, <code>uri.parse('foo?a=b&c=d&e=f').setParameterValues('c', ['new'])
	     * </code> yields <tt>foo?a=b&c=new&e=f</tt>.</p>
	     *
	     * @param key {string}
	     * @param values {Array.<string>} the new values.  If values is a single string
	     *   then it will be treated as the sole value.
	     */
	    URI.prototype.setParameterValues = function (key, values) {
	        // be nice and avoid subtle bugs where [] operator on string performs charAt
	        // on some browsers and crashes on IE
	        if (typeof values === 'string') {
	            values = [ values ];
	        }
	
	        this.checkParameterCache_();
	        var newValueIndex = 0;
	        var pc = this.paramCache_;
	        var params = [];
	        for (var i = 0, k = 0; i < pc.length; i += 2) {
	            if (key === pc[i]) {
	                if (newValueIndex < values.length) {
	                    params.push(key, values[newValueIndex++]);
	                }
	            } else {
	                params.push(pc[i], pc[i + 1]);
	            }
	        }
	        while (newValueIndex < values.length) {
	            params.push(key, values[newValueIndex++]);
	        }
	        this.setAllParameters(params);
	        return this;
	    };
	    URI.prototype.removeParameter = function (key) {
	        return this.setParameterValues(key, []);
	    };
	    /**
	     * returns the parameters specified in the query part of the uri as a list of
	     * keys and values like [ key0, value0, key1, value1, ... ].
	     *
	     * @return {Array.<string>}
	     */
	    URI.prototype.getAllParameters = function () {
	        this.checkParameterCache_();
	        return this.paramCache_.slice(0, this.paramCache_.length);
	    };
	    /**
	     * returns the value<b>s</b> for a given cgi parameter as a list of decoded
	     * query parameter values.
	     * @return {Array.<string>}
	     */
	    URI.prototype.getParameterValues = function (paramNameUnescaped) {
	        this.checkParameterCache_();
	        var values = [];
	        for (var i = 0; i < this.paramCache_.length; i += 2) {
	            if (paramNameUnescaped === this.paramCache_[i]) {
	                values.push(this.paramCache_[i + 1]);
	            }
	        }
	        return values;
	    };
	    /**
	     * returns a map of cgi parameter names to (non-empty) lists of values.
	     * @return {Object.<string,Array.<string>>}
	     */
	    URI.prototype.getParameterMap = function (paramNameUnescaped) {
	        this.checkParameterCache_();
	        var paramMap = {};
	        for (var i = 0; i < this.paramCache_.length; i += 2) {
	            var key = this.paramCache_[i++],
	                value = this.paramCache_[i++];
	            if (!(key in paramMap)) {
	                paramMap[key] = [value];
	            } else {
	                paramMap[key].push(value);
	            }
	        }
	        return paramMap;
	    };
	    /**
	     * returns the first value for a given cgi parameter or null if the given
	     * parameter name does not appear in the query string.
	     * If the given parameter name does appear, but has no '<tt>=</tt>' following
	     * it, then the empty string will be returned.
	     * @return {string|null}
	     */
	    URI.prototype.getParameterValue = function (paramNameUnescaped) {
	        this.checkParameterCache_();
	        for (var i = 0; i < this.paramCache_.length; i += 2) {
	            if (paramNameUnescaped === this.paramCache_[i]) {
	                return this.paramCache_[i + 1];
	            }
	        }
	        return null;
	    };
	
	    URI.prototype.getFragment = function () {
	        return this.fragment_ && decodeURIComponent(this.fragment_);
	    };
	    URI.prototype.getRawFragment = function () {
	        return this.fragment_;
	    };
	    URI.prototype.setFragment = function (newFragment) {
	        this.fragment_ = newFragment ? encodeURIComponent(newFragment) : null;
	        return this;
	    };
	    URI.prototype.setRawFragment = function (newFragment) {
	        this.fragment_ = newFragment ? newFragment : null;
	        return this;
	    };
	    URI.prototype.hasFragment = function () {
	        return null !== this.fragment_;
	    };
	
	    function nullIfAbsent(matchPart) {
	        return ('string' == typeof matchPart) && (matchPart.length > 0)
	            ? matchPart
	            : null;
	    }
	
	
	
	
	    /**
	     * a regular expression for breaking a URI into its component parts.
	     *
	     * <p>http://www.gbiv.com/protocols/uri/rfc/rfc3986.html#RFC2234 says
	     * As the "first-match-wins" algorithm is identical to the "greedy"
	     * disambiguation method used by POSIX regular expressions, it is natural and
	     * commonplace to use a regular expression for parsing the potential five
	     * components of a URI reference.
	     *
	     * <p>The following line is the regular expression for breaking-down a
	     * well-formed URI reference into its components.
	     *
	     * <pre>
	     * ^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?
	     *  12            3  4          5       6  7        8 9
	     * </pre>
	     *
	     * <p>The numbers in the second line above are only to assist readability; they
	     * indicate the reference points for each subexpression (i.e., each paired
	     * parenthesis). We refer to the value matched for subexpression <n> as $<n>.
	     * For example, matching the above expression to
	     * <pre>
	     *     http://www.ics.uci.edu/pub/ietf/uri/#Related
	     * </pre>
	     * results in the following subexpression matches:
	     * <pre>
	     *    $1 = http:
	     *    $2 = http
	     *    $3 = //www.ics.uci.edu
	     *    $4 = www.ics.uci.edu
	     *    $5 = /pub/ietf/uri/
	     *    $6 = <undefined>
	     *    $7 = <undefined>
	     *    $8 = #Related
	     *    $9 = Related
	     * </pre>
	     * where <undefined> indicates that the component is not present, as is the
	     * case for the query component in the above example. Therefore, we can
	     * determine the value of the five components as
	     * <pre>
	     *    scheme    = $2
	     *    authority = $4
	     *    path      = $5
	     *    query     = $7
	     *    fragment  = $9
	     * </pre>
	     *
	     * <p>msamuel: I have modified the regular expression slightly to expose the
	     * credentials, domain, and port separately from the authority.
	     * The modified version yields
	     * <pre>
	     *    $1 = http              scheme
	     *    $2 = <undefined>       credentials -\
	     *    $3 = www.ics.uci.edu   domain       | authority
	     *    $4 = <undefined>       port        -/
	     *    $5 = /pub/ietf/uri/    path
	     *    $6 = <undefined>       query without ?
	     *    $7 = Related           fragment without #
	     * </pre>
	     */
	    var URI_RE_ = new RegExp(
	        "^" +
	            "(?:" +
	            "([^:/?#]+)" +         // scheme
	            ":)?" +
	            "(?://" +
	            "(?:([^/?#]*)@)?" +    // credentials
	            "([^/?#:@]*)" +        // domain
	            "(?::([0-9]+))?" +     // port
	            ")?" +
	            "([^?#]+)?" +            // path
	            "(?:\\?([^#]*))?" +      // query
	            "(?:#(.*))?" +           // fragment
	            "$"
	    );
	
	    var URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_ = /[#\/\?@]/g;
	    var URI_DISALLOWED_IN_PATH_ = /[\#\?]/g;
	
	    URI.parse = parse;
	    URI.create = create;
	    URI.resolve = resolve;
	    URI.collapse_dots = collapse_dots;  // Visible for testing.
	
	// lightweight string-based api for loadModuleMaker
	    URI.utils = {
	        mimeTypeOf: function (uri) {
	            var uriObj = parse(uri);
	            if (/\.html$/.test(uriObj.getPath())) {
	                return 'text/html';
	            } else {
	                return 'application/javascript';
	            }
	        },
	        resolve: function (base, uri) {
	            if (base) {
	                return resolve(parse(base), parse(uri)).toString();
	            } else {
	                return '' + uri;
	            }
	        }
	    };
	
	
	    return URI;
	})();
	
	if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	        exports = module.exports = URI;
	    }
	    exports.URI = URI;
	} else {
	
	    // Exports for closure compiler.
	    if (typeof window !== 'undefined') {
	        window['URI'] = URI;
	    }
	}


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _preferences_store = __webpack_require__(126);
	
	var _preferences_store2 = _interopRequireDefault(_preferences_store);
	
	var _app_config = __webpack_require__(98);
	
	var _app_config2 = _interopRequireDefault(_app_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = React.createClass({
	
	  displayName: 'Spinner',
	
	  propTypes: {
	    size: React.PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
	    delay: React.PropTypes.number
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this._stopSpinner();
	  },
	  componentWillUpdate: function componentWillUpdate() {
	    this._stopSpinner();
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      size: 'medium',
	      zIndex: 100,
	      ref: 'spinner',
	      delay: 0
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this._setSpinner();
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._setSpinner();
	  },
	  _getSpinner: function _getSpinner() {
	    return ReactDOM.findDOMNode(this);
	  },
	  _setSpinner: function _setSpinner() {
	    var options;
	
	    if (this.props.spin) {
	      options = this._getOptions();
	      this._startSpinner(this.props.size, options);
	    } else {
	      this._stopSpinner();
	    }
	  },
	  _getColor: function _getColor() {
	    var theme = _preferences_store2.default.getTheme();
	    return _app_config2.default.spinner_colors[theme];
	  },
	  _getOptions: function _getOptions() {
	    var options = _.clone(this.props);
	
	    if (!options.color) {
	      options.color = this._getColor();
	    }
	
	    return options;
	  },
	  _startSpinner: function _startSpinner(optsOrPreset, opts) {
	    var spinner = AJS.$(this._getSpinner());
	    if (this.props.delay > 0) {
	      this.timer = setTimeout(function () {
	        spinner.spin(optsOrPreset, opts);
	      }, this.props.delay);
	    } else {
	      spinner.spin(optsOrPreset, opts);
	    }
	  },
	  _stopSpinner: function _stopSpinner() {
	    if (this.timer) {
	      this.timer = clearTimeout(this.timer);
	    }
	    AJS.$(this._getSpinner()).spinStop();
	  },
	  render: function render() {
	    return React.createElement('div', { className: 'hc-spinner ' + (this.props.spinner_class ? this.props.spinner_class : ''), ref: this.props.ref });
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(127);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _getPrototypeOf = __webpack_require__(128);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(121);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(131);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(133);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _utils = __webpack_require__(7);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _model_store = __webpack_require__(134);
	
	var _model_store2 = _interopRequireDefault(_model_store);
	
	var _constants = __webpack_require__(154);
	
	var Constants = _interopRequireWildcard(_constants);
	
	var _dal = __webpack_require__(155);
	
	var _dal2 = _interopRequireDefault(_dal);
	
	var _app_dispatcher = __webpack_require__(150);
	
	var _app_dispatcher2 = _interopRequireDefault(_app_dispatcher);
	
	var _preferences_keys = __webpack_require__(166);
	
	var _preferences_keys2 = _interopRequireDefault(_preferences_keys);
	
	var _preferences_model = __webpack_require__(167);
	
	var _preferences_model2 = _interopRequireDefault(_preferences_model);
	
	var _client_preferences_keys = __webpack_require__(168);
	
	var _client_preferences_keys2 = _interopRequireDefault(_client_preferences_keys);
	
	var _app_config = __webpack_require__(98);
	
	var _app_config2 = _interopRequireDefault(_app_config);
	
	var _integration_helper = __webpack_require__(169);
	
	var _integration_helper2 = _interopRequireDefault(_integration_helper);
	
	var _configuration_store = __webpack_require__(149);
	
	var _configuration_store2 = _interopRequireDefault(_configuration_store);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SERVER_KEYS = void 0,
	    CLIENT_KEYS = void 0;
	
	var PreferencesStore = function (_ModelStore) {
	  (0, _inherits3.default)(PreferencesStore, _ModelStore);
	
	
	  /**
	   * On construction of the store, pull in any saved localStorage preferences
	   */
	
	  function PreferencesStore() {
	    (0, _classCallCheck3.default)(this, PreferencesStore);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PreferencesStore).call(this));
	
	    _this._initKeys();
	    _this._throttledSavePrefs = _.throttle(_this.savePrefs, _app_config2.default.save_preferences_throttle_interval, { leading: true, trailing: true });
	    _this.local = {
	      queued: {},
	      cache_configured: false
	    };
	    return _this;
	  }
	
	  (0, _createClass3.default)(PreferencesStore, [{
	    key: '_initKeys',
	    value: function _initKeys() {
	      SERVER_KEYS = _.invert(_preferences_keys2.default);
	      CLIENT_KEYS = _.invert(_client_preferences_keys2.default);
	      CLIENT_KEYS = _.assign(CLIENT_KEYS, SERVER_KEYS);
	
	      // HW-1127 To prevent messing up order in OTO chats
	      CLIENT_KEYS = _.omit(CLIENT_KEYS, [_preferences_keys2.default.AUTO_JOIN]);
	    }
	  }, {
	    key: 'getModel',
	    value: function getModel() {
	      return _preferences_model2.default;
	    }
	  }, {
	    key: 'flush',
	    value: function flush() {
	      if (this.local.cache_configured) {
	        _dal2.default.set(_dal2.default.Keys.CLIENT_PREFERENCES, this.getClientPreferences());
	      }
	    }
	  }, {
	    key: 'getServerPreferences',
	    value: function getServerPreferences() {
	      var from = arguments.length <= 0 || arguments[0] === undefined ? this.getAll() : arguments[0];
	
	      return _.pickBy(from, function (val, key) {
	        return _.has(SERVER_KEYS, key);
	      });
	    }
	  }, {
	    key: 'getClientPreferences',
	    value: function getClientPreferences() {
	      var from = arguments.length <= 0 || arguments[0] === undefined ? this.getAll() : arguments[0];
	
	      return _.pickBy(from, function (val, key) {
	        return _.has(CLIENT_KEYS, key);
	      });
	    }
	  }, {
	    key: 'getDefaults',
	    value: function getDefaults() {
	      var _ref;
	
	      return _ref = {}, (0, _defineProperty3.default)(_ref, _preferences_keys2.default.NOTIFY_WHEN_DND, false), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.NOTIFY_FOR_VIDEO_WHEN_DND, false), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.THEME, _app_config2.default.default_theme), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.DENSITY, _app_config2.default.default_density), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.CHAT_VIEW, _app_config2.default.default_chat_view), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.NAME_DISPLAY, _app_config2.default.default_name_display), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.ENABLE_IDLE, true), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.IDLE_MINUTES, Constants.IDLE_DELAY_MINUTES), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.NOTIFY_FOR_ROOM, true), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.NOTIFY_FOR_TAG, true), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.NOTIFY_FOR_PRIVATE_ROOM, true), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.NOTIFY_FOR_PRIVATE, true), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.HIDE_PRESENCE_MESSAGES, true), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.SOUNDS_ENABLED, true), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.MESSAGE_SOUNDS, true), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.VIDEO_SOUNDS, true), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.GLOBAL_NOTIFICATION_SETTING, 'loud'), (0, _defineProperty3.default)(_ref, _preferences_keys2.default.IGNORE_ADD_INTEGRATIONS_GLANCE, ''), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.ANIMATED_AVATARS, _app_config2.default.default_animated_avatars), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.HIDE_GIFS_BY_DEFAULT, false), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.ENABLE_SPELL_CHECK, true), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.ENABLE_AUTOCORRECT, false), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.HIDE_ATTACHED_CARDS_BY_DEFAULT, false), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.REPLACE_TEXT_EMOTICONS, true), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.SHOW_UNREAD_DIVIDER, true), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.SHOW_CHAT_SIDEBAR, true), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.SHOW_GROUPCHAT_SIDEBAR, true), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.SHOW_NAVIGATION_SIDEBAR, true), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.CHAT_ACTIVE_PANEL, 'files'), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.GROUPCHAT_ACTIVE_PANEL, 'roster'), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.LEFT_COLUMN_WIDTH, _app_config2.default.column_width_limits['left'].default), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.RIGHT_COLUMN_WIDTH, _app_config2.default.column_width_limits['right'].default), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.KEEP_POPUPS_VISIBLE, false), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.BLINK_TASKBAR, true), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.BOUNCE_ICON, true), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.BOUNCE_ONCE, true), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.ENABLE_LOGGING, false), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.SHOW_QUICK_SWITCHER_HINT, true), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.ACTIVE_CHAT_INTEGRATION, null), (0, _defineProperty3.default)(_ref, _client_preferences_keys2.default.ACTIVE_GROUPCHAT_INTEGRATION, null), _ref;
	    }
	
	    /**
	     * This function ensures that we have valid values for our settings (especially in the scenario of a new user).
	     * The validity of these values is important when determining the default value of globalNotificationSetting.
	     *
	     * @param config the configuration object that we get when HC has initialized
	     */
	
	  }, {
	    key: 'getValidDefaults',
	    value: function getValidDefaults(config) {
	      var _overrides;
	
	      var serverSettings = _.pickBy(config.preferences, function (x) {
	        return !_.isNull(x) && !_.isUndefined(x) && x !== '';
	      }),
	          overrides = (_overrides = {}, (0, _defineProperty3.default)(_overrides, _preferences_keys2.default.NOTIFY_FOR_ROOM, _.get(serverSettings, _preferences_keys2.default.NOTIFY_FOR_ROOM, true)), (0, _defineProperty3.default)(_overrides, _preferences_keys2.default.NOTIFY_FOR_PRIVATE_ROOM, _.get(serverSettings, _preferences_keys2.default.NOTIFY_FOR_PRIVATE_ROOM, true)), _overrides);
	
	      // if they don't have a default for the global notification setting, set it based on the room settings above
	      if (_.get(config, "feature_flags.web_client_per_room_notifications")) {
	        var globalDefault = overrides[_preferences_keys2.default.NOTIFY_FOR_ROOM] || overrides[_preferences_keys2.default.NOTIFY_FOR_PRIVATE_ROOM] ? "loud" : "normal";
	        overrides[_preferences_keys2.default.GLOBAL_NOTIFICATION_SETTING] = _.get(serverSettings, _preferences_keys2.default.GLOBAL_NOTIFICATION_SETTING, globalDefault);
	      }
	
	      return _.extend(this.getAll(), serverSettings, overrides);
	    }
	  }, {
	    key: 'getNotificationTypes',
	    value: function getNotificationTypes() {
	      var _ref2;
	
	      return _ref2 = {}, (0, _defineProperty3.default)(_ref2, _preferences_keys2.default.SHOW_TOASTERS, this.getShowToasters()), (0, _defineProperty3.default)(_ref2, _client_preferences_keys2.default.BLINK_TASKBAR, this.shouldBlinkTaskBar()), (0, _defineProperty3.default)(_ref2, _client_preferences_keys2.default.BOUNCE_ICON, this.shouldBounceIcon()), (0, _defineProperty3.default)(_ref2, _client_preferences_keys2.default.BOUNCE_ONCE, this.shouldBounceOnce()), _ref2;
	    }
	  }, {
	    key: 'registerListeners',
	    value: function registerListeners() {
	      var _this2 = this;
	
	      _app_dispatcher2.default.registerOnce({
	        'DAL:cache-configured': function DALCacheConfigured() {
	          _this2.local.cache_configured = true;
	          _dal2.default.get(_dal2.default.Keys.CLIENT_PREFERENCES).then(function (prefs) {
	            _this2.set(prefs);
	          });
	        }
	      });
	      _app_dispatcher2.default.register({
	        'updated:active_chat': function updatedActive_chat(jid) {
	          _this2.setChatToFocus(jid);
	        },
	        'updated:config': function updatedConfig(config) {
	          if (_.has(config, 'preferences')) {
	            if (_.has(config, 'preferences.properties') && !_.isObject(config.preferences.properties)) {
	              delete config.preferences.properties;
	            }
	            _this2.setIfNotEqual(_.omitBy(config.preferences, _.isUndefined));
	          }
	          if (_.has(config, 'feature_flags')) {
	            _this2.set({
	              web_client_integrations_enabled: _integration_helper2.default.isFeatureEnabled(config),
	              web_client_freeze_gifs: _.get(config, 'feature_flags.web_client_freeze_gifs', false)
	            });
	          }
	        },
	        'updated:ignoreAddIntegrationsGlance': function updatedIgnoreAddIntegrationsGlance(roomIdArray) {
	          _this2.set(_preferences_keys2.default.IGNORE_ADD_INTEGRATIONS_GLANCE, roomIdArray);
	        },
	        'save-preferences': function savePreferences(prefs) {
	          _this2.setIfNotEqual(prefs);
	        },
	        'add-room-integration-discovery-ignore-list': function addRoomIntegrationDiscoveryIgnoreList(roomId) {
	          _this2.addRoomToIgnoreIntegrationGlanceList(roomId);
	        },
	        'close-room': function closeRoom(data) {
	          _this2.removeRoom(data);
	        },
	        'toggle-sound-notifications': function toggleSoundNotifications() {
	          _this2.toggleSounds();
	        },
	        'set-first-login-date': function setFirstLoginDate() {
	          _this2.setFirstLoginDate();
	        },
	        'unload-app': function unloadApp() {
	          _this2.savePrefs();
	        }
	      });
	
	      this.on('change', this._onChange);
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(changeset) {
	      var serverChanges = this.getServerPreferences(changeset);
	      var clientChanges = this.getClientPreferences(changeset);
	      if (!_.isEmpty(clientChanges)) {
	        this.flush();
	      }
	      if (!_.isEmpty(serverChanges)) {
	        _.assign(this.local.queued, serverChanges);
	        this._throttledSavePrefs();
	      }
	      _app_dispatcher2.default.dispatch('updated:preferences', this.getAll());
	    }
	  }, {
	    key: 'savePrefs',
	    value: function savePrefs() {
	      _app_dispatcher2.default.dispatch('sync-preferences', this.local.queued);
	      this.local.queued = {};
	    }
	  }, {
	    key: 'getAutoJoinRooms',
	    value: function getAutoJoinRooms() {
	      return this.get(_preferences_keys2.default.AUTO_JOIN);
	    }
	  }, {
	    key: 'setAutoJoinRooms',
	    value: function setAutoJoinRooms(autoJoinRooms) {
	      this.set((0, _defineProperty3.default)({}, _preferences_keys2.default.AUTO_JOIN, autoJoinRooms));
	    }
	  }, {
	    key: 'getChatToFocus',
	    value: function getChatToFocus() {
	      return this.get(_client_preferences_keys2.default.CHAT_TO_FOCUS);
	    }
	  }, {
	    key: 'getSoundsEnabled',
	    value: function getSoundsEnabled() {
	      return this.get(_preferences_keys2.default.SOUNDS_ENABLED);
	    }
	  }, {
	    key: 'getMessageSounds',
	    value: function getMessageSounds() {
	      return this.get(_preferences_keys2.default.MESSAGE_SOUNDS);
	    }
	  }, {
	    key: 'getVideoSounds',
	    value: function getVideoSounds() {
	      return this.get(_preferences_keys2.default.VIDEO_SOUNDS);
	    }
	  }, {
	    key: 'getShowToasters',
	    value: function getShowToasters() {
	      return this.get(_preferences_keys2.default.SHOW_TOASTERS);
	    }
	  }, {
	    key: 'getBlinkTaskBar',
	    value: function getBlinkTaskBar() {
	      return this.get(_client_preferences_keys2.default.BLINK_TASKBAR);
	    }
	  }, {
	    key: 'getBounceIcon',
	    value: function getBounceIcon() {
	      return this.get(_client_preferences_keys2.default.BOUNCE_ICON);
	    }
	  }, {
	    key: 'getBounceOnce',
	    value: function getBounceOnce() {
	      return this.get(_client_preferences_keys2.default.BOUNCE_ONCE);
	    }
	  }, {
	    key: 'toggleSounds',
	    value: function toggleSounds() {
	      this.set(_preferences_keys2.default.SOUNDS_ENABLED, !this.getSoundsEnabled());
	    }
	  }, {
	    key: 'getHidePresenceMessages',
	    value: function getHidePresenceMessages() {
	      return this.get(_preferences_keys2.default.HIDE_PRESENCE_MESSAGES);
	    }
	  }, {
	    key: 'shouldUse24HrTime',
	    value: function shouldUse24HrTime() {
	      return this.get(_preferences_keys2.default.USE_24_HR_FORMAT) || false;
	    }
	
	    /**
	     * Check if the notification should be shown
	     */
	
	  }, {
	    key: 'shouldIssueNotification',
	    value: function shouldIssueNotification() {
	      return this.getShowToasters() || this.shouldBlinkTaskBar() || this.shouldBounceIcon();
	    }
	  }, {
	    key: 'setChatToFocus',
	    value: function setChatToFocus(jid) {
	      if (!_utils2.default.jid.is_search(jid)) {
	        this.data.chatToFocus = jid ? jid.replace(/"/g, '') : '';
	        this._onChange((0, _defineProperty3.default)({}, _client_preferences_keys2.default.CHAT_TO_FOCUS, this.data.chatToFocus));
	      }
	    }
	  }, {
	    key: 'removeRoom',
	    value: function removeRoom(data) {
	      var autoJoinRooms = _.filter(this.getAutoJoinRooms(), function (room) {
	        return room.jid !== data.jid;
	      });
	      this.set((0, _defineProperty3.default)({}, _preferences_keys2.default.AUTO_JOIN, autoJoinRooms));
	    }
	  }, {
	    key: 'setFirstLoginDate',
	    value: function setFirstLoginDate() {
	      var properties = this.get(_preferences_keys2.default.PROPERTIES) || {};
	      properties[_preferences_keys2.default.PROPERTIES_FIRST_LOGIN_DATE] = new Date().getTime();
	      this.set(_preferences_keys2.default.PROPERTIES, properties);
	    }
	  }, {
	    key: 'getRoomNotificationOverrides',
	    value: function getRoomNotificationOverrides() {
	      var overrides = this.get(_preferences_keys2.default.ROOM_NOTIFICATION_OVERRIDES);
	      return _.isEmpty(overrides) ? {} : overrides;
	    }
	  }, {
	    key: 'overrideNotificationForRoom',
	    value: function overrideNotificationForRoom(room_jid, override_info) {
	      var overrides = _.cloneDeep(this.getRoomNotificationOverrides());
	      overrides[room_jid] = override_info;
	      this.set(_preferences_keys2.default.ROOM_NOTIFICATION_OVERRIDES, overrides);
	    }
	  }, {
	    key: 'removeRoomNotificationOverride',
	    value: function removeRoomNotificationOverride(room_jid) {
	      var overrides = _.omit(this.getRoomNotificationOverrides(), room_jid);
	      this.set(_preferences_keys2.default.ROOM_NOTIFICATION_OVERRIDES, overrides);
	    }
	  }, {
	    key: 'getGlobalNotificationSetting',
	    value: function getGlobalNotificationSetting() {
	      return this.get(_preferences_keys2.default.GLOBAL_NOTIFICATION_SETTING);
	    }
	  }, {
	    key: 'setGlobalNotificationSetting',
	    value: function setGlobalNotificationSetting(level) {
	      this.set(_preferences_keys2.default.GLOBAL_NOTIFICATION_SETTING, level);
	    }
	  }, {
	    key: 'getNotifyWhenDND',
	    value: function getNotifyWhenDND() {
	      return this.get(_preferences_keys2.default.NOTIFY_WHEN_DND);
	    }
	  }, {
	    key: 'getNotifyForVideoWhenDND',
	    value: function getNotifyForVideoWhenDND() {
	      return this.get(_preferences_keys2.default.NOTIFY_FOR_VIDEO_WHEN_DND);
	    }
	  }, {
	    key: 'shouldHideGifsByDefault',
	    value: function shouldHideGifsByDefault() {
	      return this.get(_client_preferences_keys2.default.HIDE_GIFS_BY_DEFAULT);
	    }
	  }, {
	    key: 'shouldHideAttachedCardsByDefault',
	    value: function shouldHideAttachedCardsByDefault() {
	      return this.get(_client_preferences_keys2.default.HIDE_ATTACHED_CARDS_BY_DEFAULT);
	    }
	  }, {
	    key: 'shouldReplaceTextEmoticons',
	    value: function shouldReplaceTextEmoticons() {
	      return this.get(_client_preferences_keys2.default.REPLACE_TEXT_EMOTICONS);
	    }
	  }, {
	    key: 'shouldShowUnreadMessageDivider',
	    value: function shouldShowUnreadMessageDivider() {
	      return this.get(_client_preferences_keys2.default.SHOW_UNREAD_DIVIDER);
	    }
	  }, {
	    key: 'shouldShowChatSidebar',
	    value: function shouldShowChatSidebar() {
	      return this.get(_client_preferences_keys2.default.SHOW_CHAT_SIDEBAR);
	    }
	  }, {
	    key: 'shouldShowGroupChatSidebar',
	    value: function shouldShowGroupChatSidebar() {
	      return this.get(_client_preferences_keys2.default.SHOW_GROUPCHAT_SIDEBAR);
	    }
	  }, {
	    key: 'shouldShowNavigationSidebar',
	    value: function shouldShowNavigationSidebar() {
	      return this.get(_client_preferences_keys2.default.SHOW_NAVIGATION_SIDEBAR);
	    }
	  }, {
	    key: 'getChatActivePanel',
	    value: function getChatActivePanel() {
	      var chatActivePanel = this.get(_client_preferences_keys2.default.CHAT_ACTIVE_PANEL);
	      if (this.get('web_client_integrations_enabled')) {
	        return 'integrations';
	      } else if (chatActivePanel === 'integrations') {
	        return 'files';
	      }
	      return chatActivePanel;
	    }
	  }, {
	    key: 'getGroupChatActivePanel',
	    value: function getGroupChatActivePanel() {
	      var activeGroupChatPanel = this.get(_client_preferences_keys2.default.GROUPCHAT_ACTIVE_PANEL);
	      if (this.get('web_client_integrations_enabled')) {
	        return 'integrations';
	      } else if (activeGroupChatPanel === 'integrations') {
	        return 'roster';
	      }
	      return activeGroupChatPanel;
	    }
	  }, {
	    key: 'getActiveGroupchatIntegration',
	    value: function getActiveGroupchatIntegration() {
	      return this.get(_client_preferences_keys2.default.ACTIVE_GROUPCHAT_INTEGRATION);
	    }
	  }, {
	    key: 'getActiveChatIntegration',
	    value: function getActiveChatIntegration() {
	      return this.get(_client_preferences_keys2.default.ACTIVE_CHAT_INTEGRATION);
	    }
	  }, {
	    key: 'getLeftColumnWidth',
	    value: function getLeftColumnWidth() {
	      return this.get(_client_preferences_keys2.default.LEFT_COLUMN_WIDTH);
	    }
	  }, {
	    key: 'getRightColumnWidth',
	    value: function getRightColumnWidth() {
	      return this.get(_client_preferences_keys2.default.RIGHT_COLUMN_WIDTH);
	    }
	  }, {
	    key: 'getChatView',
	    value: function getChatView() {
	      return this.get(_preferences_keys2.default.CHAT_VIEW);
	    }
	  }, {
	    key: 'getNameDisplay',
	    value: function getNameDisplay() {
	      return this.get(_preferences_keys2.default.NAME_DISPLAY);
	    }
	  }, {
	    key: 'getShowQuickSwitcherHint',
	    value: function getShowQuickSwitcherHint() {
	      return this.get(_client_preferences_keys2.default.SHOW_QUICK_SWITCHER_HINT);
	    }
	  }, {
	    key: 'getNameDisplayOptions',
	    value: function getNameDisplayOptions() {
	      return ['names', 'mentions'];
	    }
	  }, {
	    key: 'getIgnoreAddIntegrationGlanceRooms',
	    value: function getIgnoreAddIntegrationGlanceRooms() {
	      return this._convertStringToIntArray(this.get(_preferences_keys2.default.IGNORE_ADD_INTEGRATIONS_GLANCE));
	    }
	  }, {
	    key: '_convertStringToIntArray',
	    value: function _convertStringToIntArray(string) {
	      var intArray = [];
	      if (string) {
	        intArray = string.split(',').map(Number);
	      }
	      return intArray;
	    }
	  }, {
	    key: 'addRoomToIgnoreIntegrationGlanceList',
	    value: function addRoomToIgnoreIntegrationGlanceList(roomId) {
	      var roomsThatDismissedIntegrationsGlance = this._convertStringToIntArray(this.get(_preferences_keys2.default.IGNORE_ADD_INTEGRATIONS_GLANCE));
	      if (!_.includes(roomsThatDismissedIntegrationsGlance, roomId)) {
	        roomsThatDismissedIntegrationsGlance.push(roomId);
	        this.set(_preferences_keys2.default.IGNORE_ADD_INTEGRATIONS_GLANCE, roomsThatDismissedIntegrationsGlance.join());
	      }
	      _app_dispatcher2.default.dispatch('save-preferences', (0, _defineProperty3.default)({}, _preferences_keys2.default.IGNORE_ADD_INTEGRATIONS_GLANCE, roomsThatDismissedIntegrationsGlance.join()));
	    }
	  }, {
	    key: 'getTheme',
	    value: function getTheme() {
	      return this.get(_preferences_keys2.default.THEME);
	    }
	  }, {
	    key: 'isDarkTheme',
	    value: function isDarkTheme() {
	      return this.getTheme() === this.DARK_THEME;
	    }
	  }, {
	    key: 'getThemeOptions',
	    value: function getThemeOptions() {
	      return [this.LIGHT_THEME, this.DARK_THEME];
	    }
	  }, {
	    key: 'getChatViewOptions',
	    value: function getChatViewOptions() {
	      return ['classic_neue', 'classic'];
	    }
	  }, {
	    key: 'getDensity',
	    value: function getDensity() {
	      return this.get(_preferences_keys2.default.DENSITY);
	    }
	  }, {
	    key: 'getDensityOptions',
	    value: function getDensityOptions() {
	      return ['normal', 'tighter'];
	    }
	  }, {
	    key: 'getAnimatedAvatarsOptions',
	    value: function getAnimatedAvatarsOptions() {
	      return ['animated', 'static'];
	    }
	  }, {
	    key: 'shouldAnimateAvatars',
	    value: function shouldAnimateAvatars() {
	      return !this.data.web_client_freeze_gifs || this.get(_client_preferences_keys2.default.ANIMATED_AVATARS) === 'animated';
	    }
	  }, {
	    key: 'shouldLog',
	    value: function shouldLog() {
	      return this.get(_client_preferences_keys2.default.ENABLE_LOGGING);
	    }
	  }, {
	    key: 'shouldBlinkTaskBar',
	    value: function shouldBlinkTaskBar() {
	      var subtype = _configuration_store2.default.get('client_subtype'),
	          isValidSubType = _utils2.default.clientSubType.isWindows(subtype);
	
	      return isValidSubType && this.getBlinkTaskBar();
	    }
	  }, {
	    key: 'shouldBounceIcon',
	    value: function shouldBounceIcon() {
	      var subtype = _configuration_store2.default.get('client_subtype'),
	          isValidSubType = _utils2.default.clientSubType.isMac(subtype);
	
	      return isValidSubType && this.getBounceIcon();
	    }
	  }, {
	    key: 'shouldBounceOnce',
	    value: function shouldBounceOnce() {
	      var subtype = _configuration_store2.default.get('client_subtype'),
	          isValidSubType = _utils2.default.clientSubType.isMac(subtype);
	
	      return isValidSubType && this.getBounceOnce();
	    }
	  }, {
	    key: 'LIGHT_THEME',
	    get: function get() {
	      return 'light';
	    }
	  }, {
	    key: 'DARK_THEME',
	    get: function get() {
	      return 'dark';
	    }
	  }]);
	  return PreferencesStore;
	}(_model_store2.default);
	
	exports.default = new PreferencesStore();
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(122);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(130);
	module.exports = __webpack_require__(19).Object.getPrototypeOf;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(66);
	
	__webpack_require__(67)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(132);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Symbol = __webpack_require__(79)["default"];
	
	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(86)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(88)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(127);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _getPrototypeOf = __webpack_require__(128);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _createClass2 = __webpack_require__(121);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(131);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(133);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _assign = __webpack_require__(135);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _create = __webpack_require__(86);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _store = __webpack_require__(139);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ExampleStoreModel = function ExampleStoreModel() {
	  var input = arguments.length <= 0 || arguments[0] === undefined ? (0, _create2.default)(null) : arguments[0];
	  (0, _classCallCheck3.default)(this, ExampleStoreModel);
	
	  (0, _assign2.default)(this, input);
	};
	
	var ModelStore = function (_Store) {
	  (0, _inherits3.default)(ModelStore, _Store);
	
	  function ModelStore() {
	    (0, _classCallCheck3.default)(this, ModelStore);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ModelStore).call(this));
	
	    _this.data = _this._convertToModel(_this.data);
	    return _this;
	  }
	
	  /**
	   * Override this method to return the model the extending store should use
	   * @returns {Model}
	   */
	
	
	  (0, _createClass3.default)(ModelStore, [{
	    key: 'getModel',
	    value: function getModel() {
	      return ExampleStoreModel;
	    }
	
	    /**
	     * @override
	     * @param key
	     * @param value
	     */
	
	  }, {
	    key: 'setIfNotEqual',
	    value: function setIfNotEqual(key, value) {
	      this.set(key, value, true);
	    }
	
	    /**
	     * @override
	     * @param key
	     * @param value
	     * @param doEqualityCheck
	     */
	
	  }, {
	    key: 'set',
	    value: function set(key, value) {
	      var doEqualityCheck = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
	      var data = this._getInputObject(key, value);
	      if (data && !_.isEmpty(data)) {
	        this.doSet(this._convertToModel(data), doEqualityCheck);
	      }
	    }
	
	    /**
	     * @private
	     */
	
	  }, {
	    key: '_getInputObject',
	    value: function _getInputObject(key, value) {
	      if (_.isObject(key)) {
	        return key;
	      } else if (_.isString(key) && !_.isUndefined(value)) {
	        return (0, _defineProperty3.default)({}, key, value);
	      }
	      return null;
	    }
	
	    /**
	     * @param data
	     * @returns {Model}
	     */
	
	  }, {
	    key: '_convertToModel',
	    value: function _convertToModel(data) {
	      var Model = this.getModel();
	      return new Model(data);
	    }
	
	    /**
	     * @override
	     */
	
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.data = this._convertToModel(this.getDefaults());
	    }
	  }]);
	  return ModelStore;
	}(_store2.default);

	exports.default = ModelStore;
	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(136), __esModule: true };

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(137);
	module.exports = __webpack_require__(19).Object.assign;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(17);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(138)});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(24)
	  , toObject = __webpack_require__(66)
	  , IObject  = __webpack_require__(40);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(27)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _getPrototypeOf = __webpack_require__(128);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(121);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(131);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(133);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _emitter = __webpack_require__(140);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Store = function (_Emitter) {
	  (0, _inherits3.default)(Store, _Emitter);
	
	  function Store() {
	    (0, _classCallCheck3.default)(this, Store);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Store).call(this));
	
	    _this.data = _this.getDefaults();
	
	    _this.registerListeners();
	
	    _this._logger_name = _.kebabCase(_this.constructor.name);
	    return _this;
	  }
	
	  (0, _createClass3.default)(Store, [{
	    key: "has",
	    value: function has(key) {
	      return this.data.hasOwnProperty(key);
	    }
	  }, {
	    key: "get",
	    value: function get(key) {
	      return this.data[key];
	    }
	  }, {
	    key: "getAll",
	    value: function getAll() {
	      return this.data;
	    }
	  }, {
	    key: "setIfNotEqual",
	    value: function setIfNotEqual(key, value) {
	      var data = key;
	
	      if (value !== undefined) {
	        data = {};
	        data[key] = value;
	      }
	
	      this.doSet(data, true);
	    }
	  }, {
	    key: "set",
	    value: function set(key, value) {
	      var data = key;
	
	      if (value !== undefined) {
	        data = {};
	        data[key] = value;
	      }
	
	      this.doSet(data, false);
	    }
	  }, {
	    key: "doSet",
	    value: function doSet(data, doEqualityCheck) {
	      var _this2 = this;
	
	      var changeset = {};
	      var hasChange = false;
	
	      _.keys(data).forEach(function (key) {
	
	        var shouldSet = !doEqualityCheck || doEqualityCheck && !_.isEqual(data[key], _this2.data[key]);
	
	        if (shouldSet) {
	          hasChange = true;
	          var oldValue = _this2.get(key),
	              value = data[key];
	
	          _this2.data[key] = value;
	          changeset[key] = value;
	          _this2.emit("change:" + key, value, oldValue);
	
	          var Logger = __webpack_require__(146);
	          Logger.type(_this2._logger_name + ":data:" + key).withFilter().withCallStack().log({
	            new_value: value,
	            old_value: oldValue
	          });
	        }
	      });
	
	      if (!doEqualityCheck || doEqualityCheck && hasChange) {
	        this.emit("change", changeset);
	      }
	    }
	  }, {
	    key: "unset",
	    value: function unset(key) {
	      if (this.has(key)) {
	        var oldValue = this.get(key);
	        delete this.data[key];
	
	        this.emit("change:" + key, undefined, oldValue);
	      }
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      var _this3 = this;
	
	      var changeset = {};
	
	      _.keys(this.data).forEach(function (key) {
	        changeset[key] = _this3.get(key);
	        _this3.unset(key);
	      });
	
	      this.emit("change", changeset);
	    }
	
	    /**
	     * Registers listeners.
	     */
	
	  }, {
	    key: "registerListeners",
	    value: function registerListeners() {}
	
	    /**
	     * Returns the default value of the store
	     */
	
	  }, {
	    key: "getDefaults",
	    value: function getDefaults() {
	      return {};
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      this.data = this.getDefaults();
	    }
	  }]);
	  return Store;
	}(_emitter2.default);
	
	module.exports = Store;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _getPrototypeOf = __webpack_require__(128);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(121);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(131);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get2 = __webpack_require__(141);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _inherits2 = __webpack_require__(133);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Utils = __webpack_require__(7),
	    EventEmitter = __webpack_require__(145).EventEmitter;
	
	var Emitter = function (_EventEmitter) {
	  (0, _inherits3.default)(Emitter, _EventEmitter);
	
	  function Emitter() {
	    (0, _classCallCheck3.default)(this, Emitter);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Emitter).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(Emitter, [{
	    key: 'on',
	    value: function on(type, callback) {
	      var _this2 = this;
	
	      Utils.toArray(type).forEach(function (t) {
	        return (0, _get3.default)((0, _getPrototypeOf2.default)(Emitter.prototype), 'on', _this2).call(_this2, t, callback);
	      });
	    }
	  }, {
	    key: 'once',
	    value: function once(type, callback) {
	      var _this3 = this;
	
	      Utils.toArray(type).forEach(function (t) {
	        return (0, _get3.default)((0, _getPrototypeOf2.default)(Emitter.prototype), 'once', _this3).call(_this3, t, callback);
	      });
	    }
	  }, {
	    key: 'off',
	    value: function off(type, callback) {
	      var _this4 = this;
	
	      Utils.toArray(type).forEach(function (t) {
	        return (0, _get3.default)((0, _getPrototypeOf2.default)(Emitter.prototype), 'removeListener', _this4).call(_this4, t, callback);
	      });
	    }
	  }]);
	  return Emitter;
	}(EventEmitter);
	
	module.exports = Emitter;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(142)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(143), __esModule: true };

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(24);
	__webpack_require__(144);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(39);
	
	__webpack_require__(67)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 145 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _stringify = __webpack_require__(147);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(121);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _spi = __webpack_require__(5);
	
	var _spi2 = _interopRequireDefault(_spi);
	
	var _utils = __webpack_require__(7);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _preferences_store = __webpack_require__(126);
	
	var _preferences_store2 = _interopRequireDefault(_preferences_store);
	
	var _configuration_store = __webpack_require__(149);
	
	var _configuration_store2 = _interopRequireDefault(_configuration_store);
	
	var _logger_sanitizer = __webpack_require__(152);
	
	var _logger_sanitizer2 = _interopRequireDefault(_logger_sanitizer);
	
	var _constants = __webpack_require__(154);
	
	var Constants = _interopRequireWildcard(_constants);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* global Strophe */
	
	
	var STROPHE = '[Strophe]';
	var DEFAULT_REGEXP_STRING = '/^.*?$/';
	var OLD_LOGGER_TYPE = 'old-logger';
	
	/*
	 * NOTE: Do not use DAL.Cache for browser storage in the logger. We need the logger to be
	 * able to log from earliest init. Can't hold logging until after DAL.Cache is configured
	 */
	
	var Logger = function () {
	  function Logger() {
	    var _this = this;
	
	    (0, _classCallCheck3.default)(this, Logger);
	
	
	    window.HC_LOG = window.HC_LOG || this.storage.getItem('logging');
	    window.HC_LOG_VERBOSE = window.HC_LOG_VERBOSE || !!this.storage.getItem('verbose-logging');
	    window.HC_LOG_CALL_STACK = window.HC_LOG_CALL_STACK || !!this.storage.getItem('logging-call-stack');
	    window.HC_LOG_FORCE_COLORS = window.HC_LOG_FORCE_COLORS || !!this.storage.getItem('logging-force-colors');
	    window.HC_LOG_FORCE_EXPANDED = window.HC_LOG_FORCE_EXPANDED || !!this.storage.getItem('logging-force-expanded');
	
	    this.verbose_mode_enabled = window.HC_LOG_VERBOSE;
	
	    // Implement logging for Strophe when in verbose mode
	    Strophe.log = function (level, message) {
	      if (_this.isVerbose() || _this.isNewLogger()) {
	        switch (level) {
	
	          case Strophe.LogLevel.INFO:
	            _this.info(STROPHE, message);
	            _this.type('strophe').withFilter().info(message);
	            break;
	
	          case Strophe.LogLevel.WARN:
	            _this.warn(STROPHE, message);
	            _this.type('strophe').withFilter().warn(message);
	            break;
	
	          case Strophe.LogLevel.ERROR:
	          case Strophe.LogLevel.FATAL:
	            _this.error(STROPHE, message);
	            _this.type('strophe').withFilter().error(message);
	            break;
	
	          default:
	            _this.debug(STROPHE, message);
	            _this.type('strophe').withFilter().debug(message);
	        }
	      }
	    };
	
	    this.verbose_mode_reminder_logged = false;
	
	    this.colors = ['maroon', 'olive', 'green', 'purple', 'teal', 'navy'];
	
	    this.levels = ['error', 'warn', 'info', 'debug', 'log'];
	
	    this.resetLogger();
	  }
	
	  (0, _createClass3.default)(Logger, [{
	    key: 'error',
	    value: function error() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      args.unshift('error');
	      return this.doLog.apply(this, args);
	    }
	  }, {
	    key: 'warn',
	    value: function warn() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      args.unshift('warn');
	      return this.doLog.apply(this, args);
	    }
	  }, {
	    key: 'info',
	    value: function info() {
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }
	
	      args.unshift('info');
	      return this.doLog.apply(this, args);
	    }
	  }, {
	    key: 'debug',
	    value: function debug() {
	      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        args[_key4] = arguments[_key4];
	      }
	
	      args.unshift('debug');
	      return this.doLog.apply(this, args);
	    }
	  }, {
	    key: 'log',
	    value: function log() {
	      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        args[_key5] = arguments[_key5];
	      }
	
	      args.unshift('log');
	      return this.doLog.apply(this, args);
	    }
	  }, {
	    key: 'logXML',
	    value: function logXML(elem, type) {
	      try {
	        if (!this.shouldLogXML()) {
	          return;
	        }
	
	        // <body> is always the base element, but we don't want it polluting all the logs
	        // Iterate through the child nodes and log them individually (usually there should be only one)
	        for (var i = 0; i < elem.childNodes.length; i++) {
	          var xml = this.sanitizeXML(elem.childNodes[i]);
	          var xmlString = _utils2.default.xml.toString(xml);
	          var logString = '[XML ' + type + '] ' + xmlString;
	
	          if (logString.length > Constants.XMPP_LOG_MAX_CHARS) {
	            var truncatedChars = logString.length - Constants.XMPP_LOG_MAX_CHARS;
	            var truncatedString = logString.substring(0, Math.min(Constants.XMPP_LOG_MAX_CHARS, logString.length));
	            this.debug(truncatedString + '... [truncated ' + truncatedChars + ' chars]');
	          } else {
	            this.debug(logString);
	          }
	        }
	      } catch (e) {
	        if ('console' in window) {
	          console.error(e.message);
	        }
	        _spi2.default.onLogMessage('[ERROR] ' + e.message);
	      }
	    }
	  }, {
	    key: 'type',
	    value: function type(_type) {
	      this._log_type = _type;
	      return this;
	    }
	  }, {
	    key: 'desc',
	    value: function desc(description) {
	      this._log_description = description;
	      return this;
	    }
	  }, {
	    key: 'withCallStack',
	    value: function withCallStack() {
	      this._log_call_stack = true;
	      return this;
	    }
	  }, {
	    key: 'alwaysExpanded',
	    value: function alwaysExpanded() {
	      this._log_always_expanded = true;
	      return this;
	    }
	  }, {
	    key: 'withFilter',
	    value: function withFilter() {
	      this._log_with_filter = true;
	      return this;
	    }
	  }, {
	    key: 'isNewLogger',
	    value: function isNewLogger() {
	      return window.HC_LOG && Number(window.HC_LOG) !== 1 && ('' + window.HC_LOG).length;
	    }
	  }, {
	    key: 'doLog',
	    value: function doLog() {
	      var _this2 = this;
	
	      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        args[_key6] = arguments[_key6];
	      }
	
	      var currentTime = +new Date();
	      var diff = currentTime - (this.prevTime || currentTime);
	      this.prevTime = currentTime;
	
	      this.updateVerboseMode(window.HC_LOG_VERBOSE);
	
	      try {
	        var level = args.shift(),
	            verboseArgs = _.map(_.filter(args, 'verbose'), 'verbose');
	
	        if (verboseArgs.length > 0) {
	          // if verbose objects found strip them out of the args list
	          args = _.reject(args, 'verbose');
	          if (this.isVerbose()) {
	            // restore objects without {verbose: object} container
	            verboseArgs.forEach(function (val) {
	              args.push(val);
	            });
	          } else {
	            // leave a message that the verbose object was removed
	            args.push("[verbose]");
	            if (!this.verbose_mode_reminder_logged) {
	              // leave friendly to inform user that verbose mode is off
	              this.verbose_mode_reminder_logged = true;
	              this.info('Enable Verbose Mode for complete logs - window.HC_LOG_VERBOSE');
	            }
	          }
	        }
	
	        if (!window.HC_LOG) {
	          this.storage.removeItem('logging');
	        }
	
	        if (!window.HC_LOG_CALL_STACK) {
	          this.storage.removeItem('logging-call-stack');
	        }
	
	        if (!window.HC_LOG_FORCE_COLORS) {
	          this.storage.removeItem('logging-force-colors');
	        }
	
	        if (!window.HC_LOG_FORCE_EXPANDED) {
	          this.storage.removeItem('logging-force-expanded');
	        }
	
	        if ('console' in window && window.HC_LOG) {
	
	          var matchFilter = void 0;
	
	          this.storage.setItem('logging', window.HC_LOG);
	
	          if (window.HC_LOG_CALL_STACK) {
	            this.storage.setItem('logging-call-stack', true);
	          }
	
	          if (window.HC_LOG_FORCE_COLORS) {
	            this.storage.setItem('logging-force-colors', true);
	          }
	
	          if (window.HC_LOG_FORCE_EXPANDED) {
	            this.storage.setItem('logging-force-expanded', true);
	          }
	
	          // Todo: remove me when all logs will use new logger system.
	          if (!this._log_type) {
	            this._log_type = OLD_LOGGER_TYPE;
	            this._log_description = 'Migrate me to new logger system or skip with HC_LOG="*,-*' + OLD_LOGGER_TYPE + '"';
	            this._log_call_stack = true;
	          }
	
	          if (this.isNewLogger() && this._log_type) {
	
	            // add additional prefix for important level types
	            if (!(level === 'log' || level === 'debug')) {
	              this._log_type = level + ':' + this._log_type;
	            }
	
	            if (this._log_types !== window.HC_LOG) {
	              this._log_types = window.HC_LOG;
	              var newFilters = ('' + window.HC_LOG).split(',').map(function (filter) {
	                return filter.trim();
	              });
	              var toRegExp = function toRegExp(filter) {
	                return new RegExp('^' + filter.replace(/\*/g, '.*?') + '$');
	              };
	              this._ignoreFilters = newFilters.filter(function (filter) {
	                return filter.indexOf('-') === 0;
	              }).map(function (filter) {
	                return filter.slice(1);
	              }).map(toRegExp);
	              this._filters = newFilters.filter(function (filter) {
	                return filter.indexOf('-') !== 0;
	              }).map(toRegExp);
	            }
	
	            var ignored = false;
	
	            this._ignoreFilters.forEach(function (filter) {
	              if (_this2._log_type.search(filter) !== -1) {
	                ignored = true;
	              }
	            });
	
	            if (!ignored) {
	              this._filters.forEach(function (filter) {
	                if (!_this2._log_with_filter || _this2._log_with_filter && filter.toString() !== DEFAULT_REGEXP_STRING ||
	                // Todo: remove me when all logs will use new logger system.
	                _this2._log_type === OLD_LOGGER_TYPE) {
	                  if (_this2._log_type.search(filter) !== -1) {
	                    matchFilter = true;
	                  }
	                }
	              });
	            }
	          }
	
	          if (matchFilter && this._log_type) {
	
	            args = args.map(function (arg) {
	              if (_.isFunction(arg)) {
	                return "[function call]";
	              } else if (_.isPlainObject(arg) || _.isArray(arg)) {
	                try {
	                  return JSON.parse((0, _stringify2.default)(arg));
	                } catch (e) {
	                  console.error(e);
	                }
	              }
	              return arg;
	            });
	
	            this.evenLog = !this.evenLog;
	            this.colorIndex = this.colorIndex || 0;
	
	            var groupArgs = [];
	
	            if (_utils2.default.browser.is.chrome() || window.HC_LOG_FORCE_COLORS) {
	              groupArgs.push('%c' + this._log_type + ' %c+' + diff + 'ms %c' + this._log_description, 'color: ' + (this.evenLog ? 'gray' : 'dimgray'), 'color: ' + this.colors[this.colorIndex], 'color: blue');
	            } else {
	              groupArgs.push(this._log_type + ' +' + diff + 'ms ' + this._log_description);
	            }
	
	            if (this.colorIndex >= this.colors.length - 1) {
	              this.colorIndex = 0;
	            } else {
	              this.colorIndex++;
	            }
	
	            var isSingleObjectArg = args.length === 1 && _.isObject(args[0]) && !_.isEmpty(args[0]) && _.values(args[0]).every(function (value) {
	              return !_.isObject(value);
	            });
	
	            var nonObjectArgs = args.every(function (value) {
	              return !_.isObject(value);
	            });
	
	            // Todo: remove first line when all logs will use new logger system.
	            var isCollapsed = this._log_type !== OLD_LOGGER_TYPE && !window.HC_LOG_FORCE_EXPANDED && !this._log_always_expanded && !isSingleObjectArg && !nonObjectArgs && (args.some(_.isObject) || args.every(_.isEmpty)) && (level === 'log' || level === 'debug');
	
	            var group = isCollapsed ? console.groupCollapsed : console.group;
	
	            group.apply(console, groupArgs);
	            console[level].apply(console, args);
	            if (window.HC_LOG_CALL_STACK || this._log_call_stack) {
	              if (console.trace) {
	                console.trace();
	              } else {
	                console.log(new Error().stack);
	              }
	            }
	            console.groupEnd();
	
	            // Todo: remove part of expression when all logs will use new logger system.
	          } else if (Number(window.HC_LOG) === 1 && (!this._log_type || this._log_type === OLD_LOGGER_TYPE)) {
	              console[level].apply(console, args);
	            }
	        }
	
	        if (this.shouldLogToFile() && (!this._log_type || this._log_type === OLD_LOGGER_TYPE)) {
	          var message = this.formatLogMessage(level, args);
	          _spi2.default.onLogMessage(message);
	        }
	      } catch (e) {
	        if ('console' in window) {
	          console.error(e.message);
	        }
	        _spi2.default.onLogMessage('[ERROR] ' + e.message);
	      }
	
	      this.resetLogger();
	    }
	  }, {
	    key: 'resetLogger',
	    value: function resetLogger() {
	      this._log_type = null;
	      this._log_description = "";
	      this._log_call_stack = false;
	      this._log_with_filter = false;
	      this._log_always_expanded = false;
	    }
	  }, {
	    key: 'formatLogMessage',
	    value: function formatLogMessage(level, args) {
	      var _this3 = this;
	
	      var curlevel = '[' + level.toUpperCase() + ']',
	          formattedArgs = [];
	
	      try {
	        args.forEach(function (el) {
	          el = _this3.sanitize(el);
	          if (_.isObject(el)) {
	            el = (0, _stringify2.default)(el);
	          }
	          formattedArgs.push(el);
	        });
	      } catch (e) {
	        return "Value cannot be logged.";
	      }
	      return curlevel + ' ' + formattedArgs.join(" ");
	    }
	  }, {
	    key: 'updateVerboseMode',
	    value: function updateVerboseMode(bool) {
	      bool = !!bool;
	      if (bool) {
	        this.storage.setItem('verbose-logging', true);
	      } else {
	        this.storage.removeItem('verbose-logging');
	      }
	      if (this.isVerbose() !== bool) {
	        this.verbose_mode_enabled = bool;
	      }
	    }
	  }, {
	    key: 'isVerbose',
	    value: function isVerbose() {
	      return this.verbose_mode_enabled;
	    }
	  }, {
	    key: 'shouldLogXML',
	    value: function shouldLogXML() {
	      return this.shouldLogToFile() || this.isVerbose();
	    }
	  }, {
	    key: 'shouldLogToFile',
	    value: function shouldLogToFile() {
	      return _preferences_store2.default.shouldLog() || _configuration_store2.default.shouldLogToFile();
	    }
	  }, {
	    key: 'sanitize',
	    value: function sanitize(val) {
	      return _logger_sanitizer2.default.sanitize(val);
	    }
	  }, {
	    key: 'sanitizeXML',
	    value: function sanitizeXML(el) {
	      return _logger_sanitizer2.default.sanitizeXML(el);
	    }
	  }, {
	    key: 'isNativeClient',
	    value: function isNativeClient() {
	      return _utils2.default.clientSubType.isNative(_configuration_store2.default.get("client_subtype"));
	    }
	  }, {
	    key: 'storage',
	    get: function get() {
	      if (!this.isNativeClient()) {
	        return window.sessionStorage;
	      }
	      return window.localStorage;
	    }
	  }]);
	  return Logger;
	}();
	
	module.exports = new Logger();

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(148), __esModule: true };

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(19);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(128);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(121);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(131);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get2 = __webpack_require__(141);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _inherits2 = __webpack_require__(133);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _app_dispatcher = __webpack_require__(150);
	
	var _app_dispatcher2 = _interopRequireDefault(_app_dispatcher);
	
	var _store = __webpack_require__(139);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ConfigurationStore = function (_Store) {
	  (0, _inherits3.default)(ConfigurationStore, _Store);
	
	  function ConfigurationStore() {
	    (0, _classCallCheck3.default)(this, ConfigurationStore);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ConfigurationStore).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(ConfigurationStore, [{
	    key: 'registerListeners',
	    value: function registerListeners() {
	      var _this2 = this;
	
	      _app_dispatcher2.default.register('updated:config', function (data) {
	        _this2.set(data);
	      });
	    }
	  }, {
	    key: 'get',
	    value: function get(key) {
	      switch (key) {
	        case 'auth_method':
	          return this._getAuthMethod();
	
	        case 'client_node':
	          return this._getClientNode();
	
	        case 'bind_url':
	          return this._getBindUrl();
	
	        default:
	          return (0, _get3.default)((0, _getPrototypeOf2.default)(ConfigurationStore.prototype), 'get', this).call(this, key);
	      }
	    }
	  }, {
	    key: '_getBindUrl',
	    value: function _getBindUrl() {
	      if (_.isString(this.data.bind_url) && _.isString(this.data.web_server) && this.data.bind_url.indexOf('https://') === -1) {
	        this.data.bind_url = 'https://' + this.data.web_server + this.data.bind_url;
	      }
	      return this.data.bind_url;
	    }
	  }, {
	    key: '_getAuthMethod',
	    value: function _getAuthMethod() {
	      if (_.isNull(this.data.auth_method) && _.isString(this.data.oauth_token)) {
	        this.data.auth_method = 'oauth2';
	      }
	      return this.data.auth_method;
	    }
	  }, {
	    key: '_getClientNode',
	    value: function _getClientNode() {
	      if (_.isString(this.data.client_type) && _.isNull(this.data.client_node)) {
	        var node = 'http://hipchat.com/client/' + this.data.client_type;
	        if (this.data.client_subtype) {
	          node += '/' + this.data.client_subtype;
	        }
	        this.data.client_node = node;
	      }
	      return this.data.client_node;
	    }
	  }, {
	    key: 'getDefaults',
	    value: function getDefaults() {
	      return {
	        auth_method: null,
	        auth_nonce: null,
	        oauth_token: null,
	        oauth_token_expires_in: null,
	        apiv1_token: null,
	        apiv1_token_expires_in: null,
	        base_url: '',
	        video_base_url: '',
	        bind_url: null,
	        api_host: 'api.hipchat.com',
	        conference_server: null,
	        chat_server: null,
	        display_name: "",
	        web_server: null,
	        route: null,
	        invite_url: null,
	        video_chat_uri: null,
	        client_type: null,
	        client_subtype: null,
	        client_version_id: null,
	        client_os_version_id: null,
	        client_node: null,
	        asset_base_uri: null,
	        video_chat_enabled: null,
	        private_rooms_enabled: null,
	        guest_access_enabled: null,
	        html5_routing_enabled: null,
	        ui: null,
	        app_config_overrides: null,
	        feature_flags: {},
	        native_feature_flags: {},
	        log_to_file: false,
	        jid: null,
	        sid: null,
	        user_id: null,
	        user_name: null,
	        group_id: null,
	        group_name: null,
	        mention: null,
	        is_admin: null,
	        is_guest: null,
	        guest_key: null,
	        email: null,
	        title: null,
	        photo_small: null,
	        photo_large: null,
	        group_avatar_url: null,
	        addlive_app_id: null
	      };
	    }
	
	    /**
	     * @method isOAuth
	     * @returns {boolean} is the config in oauth2 mode
	     */
	
	  }, {
	    key: 'isOAuth',
	    value: function isOAuth() {
	      return this._getAuthMethod() === 'oauth2';
	    }
	
	    /**
	     * @method isNonce
	     * @returns {boolean} is the config in nonce mode
	     */
	
	  }, {
	    key: 'isNonce',
	    value: function isNonce() {
	      return this._getAuthMethod() === 'nonce';
	    }
	
	    /**
	     * @method getNonceToken
	     * @returns {string} the nonce session token used for authenticating xmpp in nonce mode
	     */
	
	  }, {
	    key: 'getNonceToken',
	    value: function getNonceToken() {
	      return this.data.auth_nonce;
	    }
	
	    /**
	     * @method getOAuthToken
	     * @returns {string} the oauth token for authenticating with v2 (coral) apis
	     */
	
	  }, {
	    key: 'getOAuthToken',
	    value: function getOAuthToken() {
	      return this.data.oauth_token;
	    }
	
	    /**
	     * @method getOAuthTokenExpiry
	     * @returns {number} in ms
	     */
	
	  }, {
	    key: 'getOAuthTokenExpiry',
	    value: function getOAuthTokenExpiry() {
	      return this.data.oauth_token_expires_in;
	    }
	
	    /**
	     * @method getApiV1TokenExpiry
	     * @returns {number} in ms
	     */
	
	  }, {
	    key: 'getApiV1TokenExpiry',
	    value: function getApiV1TokenExpiry() {
	      return this.data.apiv1_token_expires_in;
	    }
	
	    /**
	     * Get session token used for authenticating to PHP/v1 api -- such as
	     * for saving preferences and authenticating in-app search
	     *
	     * @method getApiV1Token
	     * @returns {object} the session token object
	     */
	
	  }, {
	    key: 'getApiV1Token',
	    value: function getApiV1Token() {
	      return this.data.apiv1_token;
	    }
	
	    /**
	     * Get BOSH session id
	     *
	     * @method getSID
	     * @returns {string} the BOSH session id
	     */
	
	  }, {
	    key: 'getSID',
	    value: function getSID() {
	      return this.data.sid || "Unknown";
	    }
	
	    /**
	     * @method isAdmin
	     * @returns {boolean} is the current user an admin
	     */
	
	  }, {
	    key: 'isAdmin',
	    value: function isAdmin() {
	      return this.data.is_admin === true;
	    }
	
	    /**
	     * @method isGuest
	     * @returns {boolean} is the current user a guest
	     */
	
	  }, {
	    key: 'isGuest',
	    value: function isGuest() {
	      return this.data.is_guest === true;
	    }
	
	    /**
	     * @method shouldLogToFile
	     * @returns {boolean} should the app send logs through the SPI
	     */
	
	  }, {
	    key: 'shouldLogToFile',
	    value: function shouldLogToFile() {
	      return this.data.log_to_file === true;
	    }
	  }]);
	  return ConfigurationStore;
	}(_store2.default);
	
	exports.default = new ConfigurationStore();
	module.exports = exports['default'];

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(128);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(121);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(131);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get3 = __webpack_require__(141);
	
	var _get4 = _interopRequireDefault(_get3);
	
	var _inherits2 = __webpack_require__(133);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _dispatcher = __webpack_require__(151);
	
	var _dispatcher2 = _interopRequireDefault(_dispatcher);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AppDispatcher = function (_Dispatcher) {
	  (0, _inherits3.default)(AppDispatcher, _Dispatcher);
	
	  function AppDispatcher() {
	    (0, _classCallCheck3.default)(this, AppDispatcher);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AppDispatcher).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(AppDispatcher, [{
	    key: 'dispatch',
	    value: function dispatch(action) {
	      var _Logger$type, _get2;
	
	      var Logger = __webpack_require__(146);
	
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      (_Logger$type = Logger.type('app-dispatcher:' + action)).log.apply(_Logger$type, args);
	      (_get2 = (0, _get4.default)((0, _getPrototypeOf2.default)(AppDispatcher.prototype), 'dispatch', this)).call.apply(_get2, [this, action].concat(args));
	    }
	  }]);
	  return AppDispatcher;
	}(_dispatcher2.default);
	
	exports.default = new AppDispatcher();
	module.exports = exports['default'];

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _promise = __webpack_require__(8);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _getPrototypeOf = __webpack_require__(128);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(121);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(131);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(133);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EventEmitter = __webpack_require__(145).EventEmitter;
	
	var Dispatcher = function (_EventEmitter) {
	  (0, _inherits3.default)(Dispatcher, _EventEmitter);
	
	  function Dispatcher() {
	    (0, _classCallCheck3.default)(this, Dispatcher);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Dispatcher).call(this));
	
	    _this.setMaxListeners(20);
	    return _this;
	  }
	
	  (0, _createClass3.default)(Dispatcher, [{
	    key: "dispatch",
	    value: function dispatch(action) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      this.emit.apply(this, ["before:" + action].concat(args));
	      this.emit.apply(this, arguments);
	      this.emit.apply(this, ["after:" + action].concat(args));
	    }
	  }, {
	    key: "registerOnce",
	    value: function registerOnce(action, callback) {
	      var _this2 = this;
	
	      if (_.isArray(action)) {
	        var promises = action.map(function (evt) {
	          return new _promise2.default(function (resolve) {
	            _this2.once(evt, function () {
	              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                args[_key2] = arguments[_key2];
	              }
	
	              resolve({
	                action: evt,
	                data: args
	              });
	            });
	          });
	        });
	
	        return _promise2.default.all(promises).then(function (returns) {
	          var data = {};
	
	          _.forEach(returns, function (val) {
	            data[val.action] = val.data;
	          });
	
	          callback(data);
	        });
	      } else if (_.isString(action)) {
	        this.once(action, callback);
	      } else if (_.isObject(action)) {
	        _.forOwn(action, function (val, key) {
	          _this2.once(key, val);
	        });
	      }
	    }
	  }, {
	    key: "register",
	    value: function register(action, callback) {
	      var _this3 = this;
	
	      if (_.isString(action)) {
	        this.on(action, callback);
	      } else if (_.isObject(action)) {
	        _.forOwn(action, function (val, key) {
	          _this3.on(key, val);
	        });
	      }
	    }
	  }, {
	    key: "unregister",
	    value: function unregister(action, callback) {
	      var _this4 = this;
	
	      if (_.isString(action)) {
	        this.removeListener(action, callback);
	      } else if (_.isObject(action)) {
	        _.forOwn(action, function (val, key) {
	          _this4.removeListener(key, val);
	        });
	      }
	    }
	  }]);
	  return Dispatcher;
	}(EventEmitter);
	
	module.exports = Dispatcher;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _from = __webpack_require__(95);
	
	var _from2 = _interopRequireDefault(_from);
	
	var _namespaces = __webpack_require__(153);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SANITIZE_TOKEN_KEYS = ["token", "auth_nonce", "oauth_token", "oauth2_token", "access_token", "apiv1_token", "nonce"];
	var SANITIZE_MESSAGE_KEYS = ["message", "text"];
	var REMOVE_TEXT_NODE_TAGS = ['body', 'desc'];
	var REDACT_TEXT_NODE_TAGS = ['name', 'thumb', 'thumbnail', 'thumb_url', 'file_url'];
	var FUNC_STRING = "[function call]";
	
	function cleanTag(tag) {
	  tag.textContent = 'REDACTED';
	}
	function redactTag(tag) {
	  var textContent = tag.textContent;
	
	  tag.textContent = textContent.replace(/([\s\S]+\/)[\S]+(\.[\w]+)$/, "$1REDACTED$2");
	}
	function cleanTags(tags) {
	  var tagName = void 0;
	
	  (0, _from2.default)(tags).forEach(function (tag) {
	    tagName = tag.nodeName;
	    if (REMOVE_TEXT_NODE_TAGS.indexOf(tagName) >= 0) {
	      cleanTag(tag);
	    } else if (REDACT_TEXT_NODE_TAGS.indexOf(tagName) >= 0) {
	      redactTag(tag);
	    }
	  });
	}
	
	exports.default = {
	  sanitize: function sanitize(val) {
	    if (_.isFunction(val)) {
	      return this.sanitizeFunc(val);
	    }
	    var returnVal = _.cloneDeep(val);
	    if (_.isObject(returnVal)) {
	      return this.iterateObj(returnVal);
	    }
	    return returnVal;
	  },
	  sanitizeXML: function sanitizeXML(el) {
	    var localName = _.get(el, "localName");
	
	    if (!_.isString(localName)) {
	      return el;
	    }
	    switch (localName.toLowerCase()) {
	      case "auth":
	        return this.cleanStanza(el);
	      case "success":
	        return this.cleanStanza(el);
	      case "message":
	        return this.cleanMessageStanza(el);
	      case "iq":
	        return this.cleanIqStanza(el);
	    }
	
	    return el;
	  },
	  cleanStanza: function cleanStanza(node) {
	    var cloneNode = this.cloneXMLNode(node);
	
	    if (!cloneNode) {
	      return node;
	    }
	
	    cloneNode = this.cleanNodeContent(cloneNode);
	    cloneNode = this.cleanNodeAttrs(cloneNode);
	
	    return cloneNode;
	  },
	  cleanMessageStanza: function cleanMessageStanza(node) {
	    var cloneNode = this.cloneXMLNode(node);
	    var allNodes = void 0;
	
	    if (!cloneNode) {
	      return node;
	    }
	    allNodes = cloneNode.getElementsByTagName('*');
	    if (allNodes.length) {
	      cleanTags(allNodes);
	    }
	
	    return cloneNode;
	  },
	  cleanIqStanza: function cleanIqStanza(node) {
	    var cloneNode = this.cloneXMLNode(node);
	    var query = cloneNode.getElementsByTagName('query');
	    var attribute = void 0;
	
	    if (query.length) {
	      attribute = query[0].getAttribute('xmlns');
	      if (attribute === _namespaces.HC_FILES || attribute === _namespaces.HC_AUTHENTICATED_FILE) {
	        this.cleanFilesStanza(cloneNode);
	      }
	    }
	
	    return cloneNode;
	  },
	  cleanFilesStanza: function cleanFilesStanza(node) {
	    var allNodes = node.getElementsByTagName('*');
	
	    if (allNodes.length) {
	      cleanTags(allNodes);
	    }
	  },
	  cloneXMLNode: function cloneXMLNode(node) {
	    return node.cloneNode(true);
	  },
	  cleanNodeContent: function cleanNodeContent(node) {
	    node.textContent = this.cleanToken(node.textContent);
	    return node;
	  },
	  cleanNodeAttrs: function cleanNodeAttrs(node) {
	    var _this = this;
	
	    var attrKeys = arguments.length <= 1 || arguments[1] === undefined ? SANITIZE_TOKEN_KEYS : arguments[1];
	
	    _.each(attrKeys, function (attr) {
	      var val = node.getAttribute(attr);
	      if (node && val) {
	        node.setAttribute(attr, _this.cleanToken(val));
	      }
	    });
	    return node;
	  },
	  cleanToken: function cleanToken(val) {
	    var string = val.toString();
	    return string.slice(0, 8) + "...";
	  },
	  cleanMessage: function cleanMessage(val) {
	    return 'REDACTED';
	  },
	  iterateObj: function iterateObj(val) {
	    for (var prop in val) {
	      if (val.hasOwnProperty(prop)) {
	        var curVal = val[prop];
	        if (_.isObject(curVal) && !_.isFunction(curVal)) {
	          this.iterateObj(curVal);
	        } else {
	          val[prop] = this.sanitizeVal(prop, curVal);
	        }
	      }
	    }
	    return val;
	  },
	  sanitizeVal: function sanitizeVal(key, val) {
	    if (!val) {
	      return val;
	    }
	
	    if (_.isFunction(val)) {
	      return this.sanitizeFunc(val);
	    }
	    if (SANITIZE_TOKEN_KEYS.indexOf(key) !== -1) {
	      return this.cleanToken(val);
	    }
	    if (SANITIZE_MESSAGE_KEYS.indexOf(key) !== -1) {
	      return this.cleanMessage(val);
	    }
	    return val;
	  },
	  sanitizeFunc: function sanitizeFunc(val) {
	    return FUNC_STRING;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 153 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * HipChat custom XMPP namespaces
	 */
	var HC = exports.HC = 'http://hipchat.com';
	var HC_PRESENCE = exports.HC_PRESENCE = 'http://hipchat.com/protocol/presence';
	var HC_PROFILE = exports.HC_PROFILE = 'http://hipchat.com/protocol/profile';
	var HC_MUC_ROOM = exports.HC_MUC_ROOM = 'http://hipchat.com/protocol/muc#room';
	var HC_MUC_PERMISSIONS = exports.HC_MUC_PERMISSIONS = 'http://hipchat.com/protocol/muc#permissions';
	var HC_HISTORY = exports.HC_HISTORY = 'http://hipchat.com/protocol/history';
	var HC_LINKS = exports.HC_LINKS = 'http://hipchat.com/protocol/links';
	var HC_FILES = exports.HC_FILES = 'http://hipchat.com/protocol/files';
	var HC_AUTHENTICATED_FILE = exports.HC_AUTHENTICATED_FILE = 'http://hipchat.com/protocol/file';
	var HC_EMOTICONS = exports.HC_EMOTICONS = 'http://hipchat.com/protocol/emoticons';
	var HC_ROSTER_HASH = exports.HC_ROSTER_HASH = 'http://hipchat.com/protocol/users#hash';
	var HC_ROOMS_HASH = exports.HC_ROOMS_HASH = 'http://hipchat.com/protocol/rooms#hash';
	
	/*
	 * Jabber common XMPP namespaces
	 */
	var JABBER = exports.JABBER = 'jabber:client';
	var MUC = exports.MUC = 'http://jabber.org/protocol/muc';
	var MUC_OWNER = exports.MUC_OWNER = 'http://jabber.org/protocol/muc#owner';
	var MUC_USER = exports.MUC_USER = 'http://jabber.org/protocol/muc#user';
	var DISCO_INFO = exports.DISCO_INFO = 'http://jabber.org/protocol/disco#info';
	var DISCO_ITEMS = exports.DISCO_ITEMS = 'http://jabber.org/protocol/disco#items';
	var CHAT_STATES = exports.CHAT_STATES = 'http://jabber.org/protocol/chatstates';
	var ENTITY_CAPABILITIES = exports.ENTITY_CAPABILITIES = 'http://jabber.org/protocol/caps';
	var ROSTER = exports.ROSTER = 'jabber:iq:roster';
	var LAST_ACTIVITY = exports.LAST_ACTIVITY = 'jabber:iq:last';

/***/ },
/* 154 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var HEARTBEAT_INTERVAL = exports.HEARTBEAT_INTERVAL = 60 * 1000;
	var XMPP_INACTIVITY_INTERVAL = exports.XMPP_INACTIVITY_INTERVAL = 60 * 1000;
	var BOSH_INACTIVITY_INTERVAL = exports.BOSH_INACTIVITY_INTERVAL = 60 * 1000;
	var XMPP_PONG_WAIT = exports.XMPP_PONG_WAIT = 30 * 1000;
	var NETWORK_LATENCY_GRACE_PERIOD = exports.NETWORK_LATENCY_GRACE_PERIOD = 5 * 1000;
	
	var RECONNECT_BACKOFF_FACTOR = exports.RECONNECT_BACKOFF_FACTOR = 3;
	var RECONNECT_DELAY_MS = exports.RECONNECT_DELAY_MS = 2 * 1000;
	var RECONNECT_MAX_DELAY = exports.RECONNECT_MAX_DELAY = 60 * 1000;
	var RECONNECT_SYNC_THRESHOLD = exports.RECONNECT_SYNC_THRESHOLD = 3 * 60 * 1000;
	var MAX_RECONNECT_TIME = exports.MAX_RECONNECT_TIME = 10 * 60 * 1000;
	var IDLE_DELAY_MINUTES = exports.IDLE_DELAY_MINUTES = 15;
	
	var OAUTH_TOKEN_REFRESH_DELAY_MS = exports.OAUTH_TOKEN_REFRESH_DELAY_MS = 5000;
	var OAUTH_TOKEN_REFRESH_BACKOFF_FACTOR = exports.OAUTH_TOKEN_REFRESH_BACKOFF_FACTOR = 3;
	var OAUTH_TOKEN_REFRESH_MAX_DELAY = exports.OAUTH_TOKEN_REFRESH_MAX_DELAY = 60 * 1000;
	
	var CACHE_TTL = exports.CACHE_TTL = 90 * 24 * 60 * 60 * 1000;
	var OAUTH_TTL = exports.OAUTH_TTL = 60 * 60 * 1000;
	var SLEEP_DELAY_MS = exports.SLEEP_DELAY_MS = 60 * 1000;
	
	var READSTATE_BACKOFF_FACTOR = exports.READSTATE_BACKOFF_FACTOR = 3;
	var READSTATE_DEFAULT_BACKOFF = exports.READSTATE_DEFAULT_BACKOFF = 5 * 1000;
	var READSTATE_MAX_BACKOFF = exports.READSTATE_MAX_BACKOFF = 5 * 60 * 1000;
	var READSTATE_UPDATE_DEBOUNCE = exports.READSTATE_UPDATE_DEBOUNCE = 0.5 * 1000;
	var READSTATE_NULL_MID = exports.READSTATE_NULL_MID = '';
	var READSTATE_NULL_TS = exports.READSTATE_NULL_TS = '0.0';
	
	var SYNC_REQUEST_GZIP_SIZE = exports.SYNC_REQUEST_GZIP_SIZE = 10 * 1024;
	
	var XMPP_LOG_MAX_CHARS = exports.XMPP_LOG_MAX_CHARS = 600;
	
	var XMPP_SEND_IQ_TIMEOUT = exports.XMPP_SEND_IQ_TIMEOUT = 30000;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DALCache = undefined;
	
	var _keys = __webpack_require__(63);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _promise = __webpack_require__(8);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(121);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _for = __webpack_require__(156);
	
	var _for2 = _interopRequireDefault(_for);
	
	var _dalError = __webpack_require__(158);
	
	var _dalError2 = _interopRequireDefault(_dalError);
	
	var _user = __webpack_require__(159);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _room = __webpack_require__(160);
	
	var _room2 = _interopRequireDefault(_room);
	
	var _emoticon = __webpack_require__(161);
	
	var _emoticon2 = _interopRequireDefault(_emoticon);
	
	var _browser_storage = __webpack_require__(162);
	
	var _browser_storage2 = _interopRequireDefault(_browser_storage);
	
	var _browser_storage_keys = __webpack_require__(163);
	
	var Keys = _interopRequireWildcard(_browser_storage_keys);
	
	var _config_actions = __webpack_require__(164);
	
	var _config_actions2 = _interopRequireDefault(_config_actions);
	
	var _namespaces = __webpack_require__(153);
	
	var NS = _interopRequireWildcard(_namespaces);
	
	var _compression = __webpack_require__(165);
	
	var _compression2 = _interopRequireDefault(_compression);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var STORE = (0, _for2.default)('DAL.Cache.BrowserStorage');
	
	/**
	 * @module DAL.Cache
	 */
	
	var DALCache = exports.DALCache = function () {
	  function DALCache() {
	    (0, _classCallCheck3.default)(this, DALCache);
	
	    this[STORE] = null;
	
	    /**
	     * @property {object} Keys - dictionary of storage keys
	     */
	    this.Keys = Keys;
	  }
	
	  /**
	   * Initializes the localStorage module. All reads/writes to storage
	   * are blocked until this is properly called
	   *
	   * @method configure
	   * @param {number} user_id
	   * @param {number} group_id
	   */
	
	
	  (0, _createClass3.default)(DALCache, [{
	    key: 'configure',
	    value: function configure(user_id, group_id) {
	      if (_.isNumber(user_id) && _.isNumber(group_id)) {
	        this[STORE] = new _browser_storage2.default(user_id, group_id);
	        _config_actions2.default.cacheConfigured();
	      }
	    }
	
	    /**
	     * Async pass-through to BrowserStorage.has
	     *
	     * @method has
	     * @param {string} key
	     * @param {object} [options = { location: 'localStorage' }]
	     * @returns {Promise<boolean,DALError>}
	     */
	
	  }, {
	    key: 'has',
	    value: function has(key) {
	      var _this = this;
	
	      var options = arguments.length <= 1 || arguments[1] === undefined ? { location: _browser_storage2.default.Locations.LOCAL } : arguments[1];
	
	      return new _promise2.default(function (resolve, reject) {
	        if (!_this[STORE]) {
	          return reject(_dalError2.default.ofType(_dalError2.default.Types.STORAGE_NOT_CONFIGURED));
	        }
	        resolve(_this[STORE].has(key, options));
	      });
	    }
	
	    /**
	     * Async pass-through to BrowserStorage.get
	     *
	     * @method get
	     * @param {string} key
	     * @param {object} [options = { location: 'localStorage' }]
	     * @returns {Promise<*,DALError>}
	     */
	
	  }, {
	    key: 'get',
	    value: function get(key) {
	      var _this2 = this;
	
	      var options = arguments.length <= 1 || arguments[1] === undefined ? { location: _browser_storage2.default.Locations.LOCAL } : arguments[1];
	
	      return new _promise2.default(function (resolve, reject) {
	        if (!_this2[STORE]) {
	          return reject(_dalError2.default.ofType(_dalError2.default.Types.STORAGE_NOT_CONFIGURED));
	        }
	        resolve(_compression2.default.rehydrate(key, _this2[STORE].get(key, options)));
	      });
	    }
	
	    /**
	     * Async pass-through to BrowserStorage.set
	     *
	     * @method set
	     * @param {string} key
	     * @param {*} val
	     * @param {object} [options = { location: 'localStorage' }]
	     * @returns {Promise<true,DALError>}
	     */
	
	  }, {
	    key: 'set',
	    value: function set(key, val) {
	      var _this3 = this;
	
	      var options = arguments.length <= 2 || arguments[2] === undefined ? { location: _browser_storage2.default.Locations.LOCAL } : arguments[2];
	
	      return new _promise2.default(function (resolve, reject) {
	        if (!_this3[STORE]) {
	          return reject(_dalError2.default.ofType(_dalError2.default.Types.STORAGE_NOT_CONFIGURED));
	        }
	        resolve(_this3[STORE].set(key, _compression2.default.dehydrate(key, val), options));
	      });
	    }
	
	    /**
	     * Async pass-through to BrowserStorage.unset
	     *
	     * @method unset
	     * @param {string} key
	     * @param {object} [options = { location: 'localStorage' }]
	     * @returns {Promise<true,DALError>}
	     */
	
	  }, {
	    key: 'unset',
	    value: function unset(key) {
	      var _this4 = this;
	
	      var options = arguments.length <= 1 || arguments[1] === undefined ? { location: _browser_storage2.default.Locations.LOCAL } : arguments[1];
	
	      return new _promise2.default(function (resolve, reject) {
	        if (!_this4[STORE]) {
	          return reject(_dalError2.default.ofType(_dalError2.default.Types.STORAGE_NOT_CONFIGURED));
	        }
	        resolve(_this4[STORE].unset(key, options));
	      });
	    }
	
	    /**
	     * Async pass-through to BrowserStorage.clear
	     *
	     * @method clear
	     * @returns {Promise<true,DALError>}
	     */
	
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var _this5 = this;
	
	      return new _promise2.default(function (resolve, reject) {
	        if (!_this5[STORE]) {
	          return reject(_dalError2.default.ofType(_dalError2.default.Types.STORAGE_NOT_CONFIGURED));
	        }
	        resolve(_this5[STORE].clear());
	      });
	    }
	
	    /**
	     * Updates the room cache with the provided array of Room Models.
	     * Will either upsert or remove each provided room based on the
	     * Room's is_deleted flag;
	     *
	     * @param {Array<Room>} updates - list of Room models
	     * @returns {Promise<rooms,DALError>}
	     */
	
	  }, {
	    key: 'updateRooms',
	    value: function updateRooms(updates) {
	      var _this6 = this;
	
	      return this.get(Keys.ROOMS).then(function (cache) {
	        cache = cache || {};
	        updates.forEach(function (room) {
	          if (room.is_deleted || room.is_archived) {
	            if (!_.isNull(room.id)) {
	              delete cache[room.id];
	            } else {
	              cache = _.omitBy(cache, function (item) {
	                return item.jid === room.jid;
	              });
	            }
	          } else {
	            cache[room.id] = room;
	          }
	        });
	        return _this6.set(Keys.ROOMS, cache).then(function () {
	          return cache;
	        });
	      });
	    }
	
	    /**
	     * Updates the roster cache with the provided array of User Models.
	     * Will either upsert or remove each provided user based on the
	     * User's is_deleted flag. Resolves to the updated roster
	     *
	     * @param {Array<User>} updates - list of User models
	     * @returns {Promise<Roster, DALError>}
	     */
	
	  }, {
	    key: 'updateRoster',
	    value: function updateRoster(updates) {
	      var _this7 = this;
	
	      return this.get(Keys.ROSTER).then(function (cache) {
	        cache = cache || {};
	        updates.forEach(function (user) {
	          if (user.is_deleted) {
	            delete cache[user.id];
	          } else {
	            cache[user.id] = user;
	          }
	        });
	        return _this7.set(Keys.ROSTER, cache).then(function () {
	          return cache;
	        });
	      });
	    }
	  }, {
	    key: 'updateEmoticons',
	    value: function updateEmoticons(update) {
	      var _this8 = this;
	
	      return this.get(Keys.EMOTICONS).then(function (cached) {
	        var items = update.query.item,
	            cached_items = _.get(cached, 'query.item', null);
	
	        if (cached_items && update.type !== 'result') {
	          items = [].concat(cached_items, items);
	          update.query.path_prefix = cached.query.path_prefix;
	          update.query.ver = cached.query.ver;
	        }
	        update.query.item = _.uniqBy(items, 'id');
	        return _this8.set(Keys.EMOTICONS, update).then(function () {
	          return update;
	        });
	      });
	    }
	
	    /**
	     * Get the roster from the cache in the shape of an XMPP roster IQ query
	     * TEMPORARY convenience method until we can eliminate the IQ processors
	     * and allow the app to get the roster in it's cached state directly without
	     * breaking the startup flow :(
	     *
	     * @method getRosterAsXMPP
	     * @returns {Promise<XMPPRoster|null, DALError>}
	     */
	
	  }, {
	    key: 'getRosterAsXMPP',
	    value: function getRosterAsXMPP() {
	      return this.get(Keys.ROSTER).then(function (roster) {
	        if (roster) {
	          return {
	            iq: {
	              query: {
	                item: (0, _keys2.default)(roster).map(function (id) {
	                  return _user2.default.asX2JS(roster[id]);
	                }),
	                xmlns: NS.ROSTER
	              },
	              type: 'result',
	              xmlns: NS.JABBER
	            }
	          };
	        }
	        return null;
	      });
	    }
	
	    /**
	     * Get the rooms list from the cache in the shape of an XMPP roster IQ query
	     * TEMPORARY convenience method until we can eliminate the IQ processors
	     * and allow the app to get the room list in it's cached state directly without
	     * breaking the startup flow :(
	     *
	     * @method getRoomsAsXMPP
	     * @returns {Promise<XMPPRoomsList|null, DALError>}
	     */
	
	  }, {
	    key: 'getRoomsAsXMPP',
	    value: function getRoomsAsXMPP() {
	      return this.get(Keys.ROOMS).then(function (rooms) {
	        if (rooms) {
	          return {
	            iq: {
	              query: {
	                item: (0, _keys2.default)(rooms).map(function (id) {
	                  return _room2.default.asX2JS(rooms[id]);
	                }),
	                xmlns: NS.DISCO_ITEMS
	              },
	              type: 'result',
	              xmlns: NS.JABBER
	            }
	          };
	        }
	        return null;
	      });
	    }
	
	    /**
	     * Get the emoticons list from the cache in the shape of an XMPP emoticons IQ query
	     *
	     * @method getEmoticonsAsXMPP
	     * @returns {Promise<XMPPEmoticonsList|null, DALError>}
	     */
	
	  }, {
	    key: 'getEmoticonsAsXMPP',
	    value: function getEmoticonsAsXMPP() {
	      return this.get(Keys.EMOTICONS).then(function (iq) {
	        if (iq) {
	          return {
	            query: {
	              item: iq.query.item.map(_emoticon2.default.asX2JS),
	              path_prefix: iq.query.path_prefix,
	              xmlns: NS.HC_EMOTICONS
	            },
	            type: 'result',
	            xmlns: NS.JABBER
	          };
	        }
	        return null;
	      });
	    }
	  }]);
	  return DALCache;
	}();
	
	exports.default = new DALCache();

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(157), __esModule: true };

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(81);
	module.exports = __webpack_require__(19).Symbol['for'];

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ERRORS = undefined;
	
	var _create = __webpack_require__(86);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _assign = __webpack_require__(135);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _freeze = __webpack_require__(113);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 * NOTE:
	 * XMPP exceptions are declared in txhipchat/txhipchat/error.py
	 * which adds some extensions to twisted's jabber protocol StanzaError class:
	 * http://twistedmatrix.com/trac/browser/tags/releases/twisted-9.0.0/twisted/words/protocols/jabber/error.py
	 */
	var ERRORS = exports.ERRORS = (0, _freeze2.default)({
	  HTTP: 'HTTP',
	  XMPP: 'XMPP',
	  OFFLINE: 'OFFLINE',
	  TIMEOUT: 'TIMEOUT', // status: 0
	  STORAGE_JSON_SERIALIZATION: 'STORAGE_JSON_SERIALIZATION', // status: 422
	  STORAGE_INACCESSIBLE: 'STORAGE_INACCESSIBLE', // status: 423
	  STORAGE_DOM_QUOTA_EXCEEDED: 'STORAGE_DOM_QUOTA_EXCEEDED', // status: 507
	  STORAGE_NOT_CONFIGURED: 'STORAGE_NOT_CONFIGURED', // status: 503
	  EXCEPTION: 'EXCEPTION', // status: 520,
	  OUT_OF_SYNC: 'OUT_OF_SYNC', // status: 409
	  RATE_LIMITED: 'RATE_LIMITED' // status: 429
	});
	
	/**
	 * All errors from the DAL should look like this:
	 *
	 * @class DALError
	 *
	 * @property {string} name - "DALError"
	 * @property {string} stack - stack trace
	 * @property {number} status - status code if applicable
	 * @property {string} message - the error message, if could be parsed
	 * @property {string} type - One of DALError.Types
	 * @property {object} body - the original error body
	 * - In the case of an ajax request, will be the jqXHR object
	 * - In the case of xmpp, will be x2js'd error stanza
	 */
	
	/**
	 * @constructs
	 * @param {object|error} input
	 * @param {string} input.message
	 * @param {number} [input.status = 520]
	 * @param {string} [input.type = "EXCEPTION"]
	 * @param {*} [input.body = null]
	 */
	var DALError = function DALError() {
	  var input = arguments.length <= 0 || arguments[0] === undefined ? { message: '', status: 520, type: ERRORS.EXCEPTION, body: null } : arguments[0];
	
	  var err = new Error(input.message);
	  (0, _assign2.default)(this, err);
	
	  this.status = input.status;
	  this.message = input.message;
	  this.type = input.type;
	  this.body = input.body;
	  this.name = input.name ? 'DALError<' + input.name + '>' : 'DALError';
	  if (input.message === 'Invalid OAuth session') {
	    this.message = 'If this keeps happening, try logging in again.';
	    this.name = '';
	  }
	  this.stack = input.stack || err.stack || null;
	  if (this.stack) {
	    var stackRegex = new RegExp('^' + input.name + '|^Error');
	    this.stack = this.stack.replace(stackRegex, this.name);
	  }
	};
	
	DALError.prototype = (0, _create2.default)(Error.prototype);
	DALError.Types = ERRORS;
	
	/**
	 * Create a DAL Error from a jQuery XHR error object.
	 * Typical Coral error json:
	 *
	 * {
	 *   error: {
	 *     message: "some error message", // Invalid OAuth session
	 *     code: "same as http error code", // 401
	 *     type: "some error type" // HTTP or XMPP
	 *   }
	 * }
	 *
	 * @static
	 * @method fromJqXHR
	 * @param {Object} jqXHR - jquery xhr object
	 * @returns {DALError}
	 */
	DALError.fromJqXHR = function (jqXHR) {
	  var message = jqXHR.responseText,
	      status = jqXHR.status;
	
	  if (_.isString(message) && message !== '') {
	    try {
	      var json = JSON.parse(message);
	      message = _.get(json, 'error.message', message);
	      status = _.get(json, 'error.code', status);
	    } catch (e) {
	      // (nothingtoseehere)
	    }
	  }
	
	  return new DALError({
	    type: ERRORS.HTTP,
	    status: status,
	    message: message,
	    body: jqXHR
	  });
	};
	
	/**
	 * Create a DAL Error from an XMPP error stanza, such as:
	 *
	 * <presence xmlns="" type="error" from="" to="" id="">
	 *   <error code="404" type="cancel">
	 *     <item-not-found xmlns="" />
	 *     <text xmlns="">Some error text</text>
	 *   </error>
	 * </presence>
	 *
	 * <iq xmlns='jabber:client' type='error' from='jid' id='6:sendIQ' to='1_7@chat.devvm.hipchat.com/web||proxy|devvm.hipchat.com|5222'>
	 *   <query xmlns='http://hipchat.com/protocol/links' limit='50'/>
	 *   <error code='500' type='wait'>
	 *     <internal-server-error xmlns='urn:ietf:params:xml:ns:xmpp-stanzas'/>
	 *   </error>
	 * </iq>
	 *
	 * <message xmlns='jabber:client' type='error' from='jid' to='1_7@chat.devvm.hipchat.com/web||proxy|devvm.hipchat.com|5222'>
	 *   <body>some test</body>
	 *   <error code='403' type='auth'>
	 *     <forbidden xmlns='urn:ietf:params:xml:ns:xmpp-stanzas'/>
	 *     <text xmlns='urn:ietf:params:xml:ns:xmpp-stanzas'>You must be in this room to send a message.</text>
	 *   </error>
	 * </message>
	 *
	 * The text node is not always present, so if it doesn't exist,
	 * return the first childNode of error's nodeName, which is a
	 * generic message-status type
	 *
	 * @static
	 * @method fromXMPP
	 * @param xmpp - an error stanza
	 * @returns {DALError}
	 */
	DALError.fromXMPP = function (xmpp) {
	  var errNode = xmpp.querySelector('error'),
	      status = parseInt(errNode.getAttribute('code'), 10),
	      txtNode = errNode.querySelector('text'),
	
	  //TODO: Create generic error messages per status code?
	  message = txtNode ? txtNode.textContent : errNode.childNodes[0].nodeName;
	
	  return new DALError({
	    type: ERRORS.XMPP,
	    status: status,
	    message: message,
	    body: xmpp
	  });
	};
	
	/**
	 * Returns a DALError of a given type with appropriate status codes and
	 * messaging. All these status codes arbitrarily picked from:
	 * https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
	 *
	 * @static
	 * @method ofType
	 * @param {string} type - one of the DALError.Types enums
	 * @param {object|error} [thrownException]
	 * @returns {DALError}
	 */
	DALError.ofType = function () {
	  var type = arguments.length <= 0 || arguments[0] === undefined ? ERRORS.EXCEPTION : arguments[0];
	  var thrownException = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var error = { type: type, body: null },
	      originalErrMessage = thrownException.message ? ': ' + thrownException.message : '';
	  switch (type) {
	    case ERRORS.OFFLINE:
	      error.status = 0;
	      error.message = 'Your connection was interrupted';
	      break;
	
	    case ERRORS.TIMEOUT:
	      error.status = 0;
	      error.message = 'DAL operation timed out' + originalErrMessage;
	      break;
	
	    case ERRORS.OUT_OF_SYNC:
	      error.status = 409;
	      error.message = 'Resource is out of sync' + originalErrMessage;
	      break;
	
	    case ERRORS.RATE_LIMITED:
	      error.status = 429;
	      error.message = 'Too many requests' + originalErrMessage;
	      break;
	
	    case ERRORS.STORAGE_DOM_QUOTA_EXCEEDED:
	      error.status = 507; // Insufficient Storage
	      error.message = 'DAL failed to write to storage due to quota exceeded error' + originalErrMessage;
	      break;
	
	    case ERRORS.STORAGE_JSON_SERIALIZATION:
	      error.status = 422; // Unprocessable Entity
	      error.message = 'DAL JSON serialization error' + originalErrMessage;
	      break;
	
	    case ERRORS.STORAGE_INACCESSIBLE:
	      error.status = 423; // Locked
	      error.message = 'DAL could not access browser storage' + originalErrMessage;
	      break;
	
	    case ERRORS.STORAGE_NOT_CONFIGURED:
	      error.status = 503; // Service Unavailable
	      error.message = 'DAL.Cache has not been configured! Access to storage is not yet available' + originalErrMessage;
	      break;
	
	    case ERRORS.EXCEPTION:
	    default:
	      error.status = 520; // Unknown Error
	      error.message = 'An unknown DALError occurred' + originalErrMessage;
	  }
	
	  return new DALError((0, _assign2.default)(thrownException, error));
	};
	
	exports.default = DALError;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _create = __webpack_require__(86);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(121);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _utils = __webpack_require__(7);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @class User
	 * @property {number|null} id
	 * @property {string|null} jid
	 * @property {string} name
	 * @property {string} mention_name
	 * @property {string} email
	 * @property {string} title
	 * @property {string} photo_url
	 * @property {string} version
	 * @property {boolean} is_guest
	 * @property {boolean} is_deleted
	 */
	
	var User = function () {
	
	  /**
	   * @constructs
	   * @param {object} input
	   * @param {number} [input.id = null]
	   * @param {string} [input.jid = null]
	   * @param {string} [input.name = '']
	   * @param {string} [input.mention_name = '']
	   * @param {string} [input.email = '']
	   * @param {string|null} [input.title = null]
	   * @param {string} [input.photo_url = '']
	   * @param {string} [input.version = '']
	   * @param {boolean} [input.is_guest = false]
	   * @param {boolean} [input.is_deleted = false]
	   */
	
	  function User() {
	    var input = arguments.length <= 0 || arguments[0] === undefined ? (0, _create2.default)(null) : arguments[0];
	    (0, _classCallCheck3.default)(this, User);
	
	    this.id = input.id ? input.id : null;
	    this.jid = input.jid ? input.jid : null;
	    this.name = input.name ? input.name : '';
	    this.mention_name = input.mention_name ? input.mention_name : '';
	    this.email = input.email ? input.email : '';
	    this.title = input.title ? input.title : null;
	    this.photo_url = input.photo_url ? input.photo_url : '';
	    this.version = input.version ? input.version : '';
	    this.is_guest = input.is_guest ? input.is_guest : false;
	    this.is_deleted = input.is_deleted ? input.is_deleted : false;
	  }
	
	  /**
	   * Create a User model from an individual item in a roster push. Roster pushes may
	   * contain 1 or more items (users), so the caller should be responsible for iterating
	   * over the list and calling this method to convert the item xml node into a user model
	   *
	   * <iq xmlns='jabber:client' to='1_4@chat.devvm.hipchat.com/web-15499||proxy|devvm.hipchat.com|5222' type='set'>
	   *   <query xmlns='jabber:iq:roster' ver='2016-04-27T20:16:36Z'>
	   *     <item jid='1_2520@chat.devvm.hipchat.com'
	   *       name='Art Cronin 61'
	   *       id='2520'
	   *       mention_name='ArtCronin61'
	   *       mobile="iphone" <!-- or android or this attribute does not exist -->
	   *       version='18EA5095'
	   *       subscription='both'
	   *       email='art.cronin61@atlassian.com'
	   *       photo_url='https://secure.gravatar.com/avatar/bcd6031e23dfb85bbf7c8aac0d3989df?s=125&amp;r=g&amp;d=https%3A%2F%2Fdevvm.hipchat.com%2Fimg%2Fsilhouette_125.png'/>
	   *   </query>
	   * </iq>
	   *
	   * @static
	   * @method fromXMPP
	   * @param item - the "item" node for a given roster update (not the whole iq)
	   * @returns {User}
	   */
	
	
	  (0, _createClass3.default)(User, null, [{
	    key: 'fromXMPP',
	    value: function fromXMPP(item) {
	
	      var id = item.hasAttribute('id') ? parseInt(item.getAttribute('id'), 10) : _utils2.default.jid.user_id(item.getAttribute('jid'));
	
	      return new User({
	        id: id,
	        jid: item.getAttribute('jid'),
	        name: item.getAttribute('name'),
	        mention_name: item.getAttribute('mention_name'),
	        email: item.getAttribute('email'),
	        photo_url: item.getAttribute('photo_url'),
	        version: item.getAttribute('version'),
	        is_deleted: item.getAttribute('subscription') === 'remove',
	        is_guest: false, // Guest users are not broadcast via roster pushes
	        title: null // We only get this value via xmpp from requesting the user's profile (sadplanet)
	      });
	    }
	
	    /*
	     * Example IQ from profile query. This gives us basically the same information, but
	     * does NOT include the version hash. It is, however, the only endpoint that give us
	     * the user's timezone offset value -- which we need to calculate their local time in
	     * the 1:1 chat headers. We currently store the parsed result of this IQ as a "profile"
	     * in several places in the app, and we should probably just merge it into the roster
	     * to fully flesh out the user item. Because of this, however, we have no single way
	     * to get ALL a user's information (feelsbadman)
	     *
	     * <iq xmlns='jabber:client' type='result' from='1_2530@chat.devvm.hipchat.com'
	     *   id='3b1b70d3-b4f8-48a2-a46e-a20b99ff373b:sendIQ' to='1_4@chat.devvm.hipchat.com/web||proxy|devvm.hipchat.com|5222'>
	     *   <query xmlns='http://hipchat.com/protocol/profile'>
	     *     <email>mattye.veum69@atlassian.com</email>
	     *     <name>Mattye Veum</name>
	     *     <mention_name>MattyeVeum69</mention_name>
	     *     <photo_large>https://secure.gravatar.com/avatar/ea536d6e64288e112e736131589dc1f1?s=125&amp;r=g&amp;d=https%3A%2F%2Fdevvm.hipchat.com%2Fimg%2Fsilhouette_125.png</photo_large>
	     *     <photo_small>https://secure.gravatar.com/avatar/ea536d6e64288e112e736131589dc1f1?s=36&amp;r=g&amp;d=https%3A%2F%2Fdevvm.hipchat.com%2Fimg%2Fsilhouette_36.png</photo_small>
	     *     <timezone utc_offset='0.0'>UTC</timezone>
	     *     <title>Atlassian Member</title>
	     *   </query>
	     * </iq>
	     */
	
	    /*
	     * Guest users are not included when you sync or query the roster. You only know about them
	     * when you get a presence telling you they joined a room. We currently create a partial user
	     * object from this stanza and add them to our internal roster. They are never cached.
	     *
	     * <presence xmlns='jabber:client' to='1_4@chat.devvm.hipchat.com/web||proxy|devvm.hipchat.com|5222'
	     *   from='1_coral-1@conf.devvm.hipchat.com/a guest'>
	     *   <x xmlns='http://jabber.org/protocol/muc#user'>
	     *     <item mention_name='aguestGuest'
	     *       affiliation='member'
	     *       jid='1_5656@chat.devvm.hipchat.com/web||proxy|devvm.hipchat.com|5222'
	     *       role='visitor'/>
	     *   </x>
	     * </presence>
	     */
	
	    /**
	     * Returns a user model from the coral rest user representation pulled down
	     * in the sync api. Updated user looks like:
	     * {
	     *   "email": "extraneous@example.com",
	     *   "id": 5655,
	     *   "is_guest": false,
	     *   "links": {
	     *     "self": "https://devvm.hipchat.com/v2/user/5655"
	     *     },
	     *   "mention_name": "extraneous",
	     *   "name": "extraneous",
	     *   "photo_url": "https://secure.gravatar.com/avatar/13958a29d8b9f8361ce8d1dd8c277dc8?s=125&r=g&d=https%3A%2F%2Fdevvm.hipchat.com%2Fimg%2Fsilhouette_125.png",
	     *   "timezone": "UTC",
	     *   "title": "",
	     *   "version": "00000000",
	     *   "xmpp_jid": "1_5655@chat.devvm.hipchat.com"
	     * }
	     *
	     * Deleted user looks like:
	     * {
	     *   "id": 123,
	     *   "is_deleted": true
	     * }
	     *
	     * The timezone value received from Coral is a string-name (UTC, US/Central),
	     * which is pretty useless for us unless we maintain a dictionary of
	     * these strings -> utc offsets. txhipchat is using http://pythonhosted.org/pytz
	     * which contains a binary database of these mappings
	     *
	     * @static
	     * @method fromREST
	     * @param {object} json
	     * @returns {User}
	     */
	
	  }, {
	    key: 'fromREST',
	    value: function fromREST(json) {
	      return new User({
	        id: json.id,
	        jid: json.xmpp_jid,
	        name: json.name,
	        mention_name: json.mention_name,
	        email: json.email,
	        title: json.title,
	        photo_url: json.photo_url,
	        version: json.version,
	        is_guest: json.is_guest,
	        is_deleted: json.is_deleted
	      });
	    }
	
	    /**
	     * Converts user model back to the x2js version for
	     * backwards compatibility until we can model all
	     * the way thru the app
	     * @param {User} user
	     * @returns {object}
	     */
	
	  }, {
	    key: 'asX2JS',
	    value: function asX2JS(user) {
	      var x2js = {
	        id: user.id,
	        jid: user.jid,
	        name: user.name,
	        mention_name: user.mention_name,
	        email: user.email,
	        title: user.title,
	        photo_url: user.photo_url,
	        version: user.version
	      };
	
	      if (user.subscription) {
	        x2js.subscription = user.subscription;
	      } else if (user.is_deleted) {
	        x2js.subscription = 'remove';
	      } else if (!user.is_guest) {
	        x2js.subscription = '';
	      }
	
	      return x2js;
	    }
	  }]);
	  return User;
	}();

	exports.default = User;
	module.exports = exports['default'];

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PrivacyLevels = undefined;
	
	var _create = __webpack_require__(86);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(121);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _freeze = __webpack_require__(113);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	var _utils = __webpack_require__(7);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _namespaces = __webpack_require__(153);
	
	var NS = _interopRequireWildcard(_namespaces);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Valid room privacy values
	 */
	var PrivacyLevels = exports.PrivacyLevels = (0, _freeze2.default)({
	  PRIVATE: 'private',
	  PUBLIC: 'public'
	});
	
	/**
	 * Reasonable default values for the room object
	 */
	var Defaults = (0, _freeze2.default)({
	  NAME: "",
	  TOPIC: "",
	  PRIVACY: PrivacyLevels.PUBLIC,
	  AVATAR_URL: "",
	  ID: null,
	  JID: "",
	  GUEST_URL: "",
	  OWNER: null,
	  IS_ARCHIVED: false,
	  IS_DELETED: false,
	  VERSION: "00000000"
	});
	
	/**
	 * Returns the textContent value of the node that is found when querying the root node passed in for the element that
	 * returns from a querySelector search for the `name` value specified.
	 *
	 * @param {Document} root xml
	 * @param {string} name the name of the tag you're looking for
	 * @param defaultVal what to return if nothing is found
	 *
	 * @returns {string|null}
	 */
	var queryContent = function queryContent(root, name) {
	  var defaultVal = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	  var node = root.querySelector(name);
	  return _.get(node, 'textContent', defaultVal);
	};
	
	/**
	 * @class Room
	 *
	 * @property {string} name
	 * @property {string} privacy (public or private)
	 * @property {string} topic
	 * @property {string} jid
	 * @property {string} version
	 * @property {int} owner
	 * @property {int} id
	 * @property {boolean} is_archived
	 * @property {string} guest_url
	 * @property {string} avatar_url
	 */
	
	var Room = function () {
	
	  /**
	   * @constructs
	   * @param {object} input
	   * @param {string} input.name
	   * @param {string} [input.privacy="public"]
	   * @param {string} [input.topic=""]
	   * @param {string} input.version
	   * @param {string|null} input.avatar_url
	   * @param {string|number} input.id
	   * @param {string} input.jid
	   * @param {string|null} input.guest_url
	   * @param {string|number} input.owner
	   * @param {boolean} [input.is_archived]
	   * @param {boolean} [input.is_deleted]
	   */
	
	  function Room() {
	    var input = arguments.length <= 0 || arguments[0] === undefined ? (0, _create2.default)(null) : arguments[0];
	    (0, _classCallCheck3.default)(this, Room);
	
	    this.name = input.name || Defaults.NAME;
	    this.topic = input.topic || Defaults.TOPIC;
	    this.privacy = input.privacy || Defaults.PRIVACY;
	    this.version = input.version || Defaults.VERSION;
	    this.avatar_url = input.avatar_url || Defaults.AVATAR_URL;
	    this.id = input.id ? parseInt(input.id, 10) : Defaults.ID;
	    this.jid = input.jid || Defaults.JID;
	    this.guest_url = input.guest_url || Defaults.GUEST_URL;
	    this.owner = input.owner ? parseInt(input.owner, 10) : Defaults.OWNER;
	    this.is_archived = _utils2.default.coerceBoolean(input.is_archived, Defaults.IS_ARCHIVED);
	    this.is_deleted = _utils2.default.coerceBoolean(input.is_deleted, Defaults.IS_DELETED);
	  }
	
	  /**
	   * Takes an IQ result from a disco#info query for a room, and returns
	   * a Room model. IQ looks like:
	   *
	   * <iq xmlns="jabber:client" type="result" from="${room_jid}" id="" to="">
	   *   <query xmlns="http://jabber.org/protocol/disco#info">
	   *     <identity category="conference" type="text" name="${room_name}" />
	   *     <feature var="http://jabber.org/protocol/muc" />
	   *     <feature var="muc_membersonly" />
	   *     <x xmlns="http://hipchat.com/protocol/muc#room">
	   *       <id>${room_id}</id>
	   *       <topic>${room_topic}</topic>
	   *       <privacy>${room_privacy}</privacy>
	   *       <owner>${room_owner_jid}</owner>
	   *       <guest_url />
	   *       <is_archived /> // only present if true
	   *       <version>${room_version_hash}</version>
	   *       <num_participants>0</num_participants>
	   *     </x>
	   *   </query>
	   * </iq>
	   *
	   * @static
	   * @method fromXMPPDiscoInfo
	   * @param xmpp - xml result from a disco#info query for a room
	   * @returns {Room}
	   */
	
	
	  (0, _createClass3.default)(Room, null, [{
	    key: 'fromXMPPDiscoInfo',
	    value: function fromXMPPDiscoInfo(xmpp) {
	      var x = xmpp.getElementsByTagNameNS(NS.HC_MUC_ROOM, 'x')[0],
	          identity = xmpp.querySelector('identity'),
	          owner = queryContent(x, 'owner');
	
	      return new Room({
	        id: queryContent(x, 'id'),
	        jid: xmpp.getAttribute('from'),
	        owner: owner ? _utils2.default.jid.user_id(owner) : null,
	        name: identity.getAttribute('name'),
	        topic: queryContent(x, 'topic'),
	        privacy: queryContent(x, 'privacy'),
	        version: queryContent(x, 'version'),
	        avatar_url: queryContent(x, 'avatar_url'),
	        guest_url: queryContent(x, 'guest_url'),
	        is_archived: x.querySelectorAll('is_archived').length > 0,
	        is_deleted: false // if room was deleted, disco#info would return a 404
	      });
	    }
	
	    /**
	     * Takes an individual item from a disco_items entry (ie. when you download the
	     * entire rooms list) and returns a Room model. Entire IQ result looks like this.
	     * This parser is for an individual item node from this list. Caller is responsible
	     * for iteration.
	     *
	     * <iq xmlns='jabber:client' type='result' from='conf.hipchat.com' id='e09bd3e5-5238-4122-99ee-88a1e51dc654:sendIQ'
	     *  to='10804_220836@chat.hipchat.com/web||proxy|proxy-c303.hipchat.com|5262'>
	     *    <query xmlns='http://jabber.org/protocol/disco#items'>
	     *      <item jid='10804_bitbucket@conf.hipchat.com' name='room name'>
	     *        <x xmlns='http://hipchat.com/protocol/muc#room'>
	     *          <id>22087</id>
	     *          <name>room name</name>
	     *          <topic>room topic</topic>
	     *          <privacy>public</privacy>
	     *          <owner>10804_85346@chat.hipchat.com</owner>
	     *          <guest_url/>
	     *          <version>QX6A723G</version>
	     *          <num_participants>0</num_participants>
	     *        </x>
	     *      </item>
	     *    </query>
	     * </iq>
	     *
	     * @static
	     * @method from XMPPDiscoItem
	     * @param item - individual item node from disco_items iq result
	     * @returns {Room}
	     */
	
	  }, {
	    key: 'fromXMPPDiscoItem',
	    value: function fromXMPPDiscoItem(item) {
	      var x = item.getElementsByTagNameNS(NS.HC_MUC_ROOM, 'x')[0],
	          name = item.hasAttribute('name') ? item.getAttribute('name') : queryContent(x, 'name'),
	          owner = queryContent(x, 'owner');
	
	      return new Room({
	        id: queryContent(x, 'id'),
	        jid: item.getAttribute('jid'),
	        owner: owner ? _utils2.default.jid.user_id(owner) : null,
	        name: name,
	        topic: queryContent(x, 'topic'),
	        privacy: queryContent(x, 'privacy'),
	        version: queryContent(x, 'version'),
	        avatar_url: queryContent(x, 'avatar_url'),
	        guest_url: queryContent(x, 'guest_url'),
	        is_archived: false, // disco items does not return archived rooms
	        is_deleted: false // disco items does not return deleted rooms
	      });
	    }
	
	    /**
	     * Takes an IQ result from a muc#room query for a room, and returns
	     * a Room model. IQ looks like:
	     *
	     * <iq xmlns='jabber:client' to='1_1@chat.devvm.hipchat.com/web||proxy|devvm.hipchat.com|5222' type='set'>
	     *   <query xmlns='http://hipchat.com/protocol/muc#room'>
	     *     <item jid='1_ii@conf.devvm.hipchat.com' name='Eye Eye'>
	     *       <id>693</id>
	     *       <name>Eye Eye</name>
	     *       <topic>This is room Eye Eye topic</topic>
	     *       <privacy>public</privacy>
	     *       <owner>1_2@chat.devvm.hipchat.com</owner>
	     *       <guest_url/>
	     *       <version>8WEKZB9B</version>
	     *       <num_participants>0</num_participants>
	     *     </item>
	     *   </query>
	     * </iq>
	     *
	     * @static
	     * @method fromXMPPMucRoom
	     * @param item - individual item from a muc#room push iq
	     * @returns {Room}
	     */
	
	  }, {
	    key: 'fromXMPPMucRoom',
	    value: function fromXMPPMucRoom(item) {
	      var owner = queryContent(item, 'owner'),
	          name = item.hasAttribute('name') ? item.getAttribute('name') : queryContent(item, 'name');
	
	      return new Room({
	        id: queryContent(item, 'id'),
	        jid: item.getAttribute('jid'),
	        owner: owner ? _utils2.default.jid.user_id(owner) : null,
	        name: name,
	        topic: queryContent(item, 'topic'),
	        privacy: queryContent(item, 'privacy'),
	        version: queryContent(item, 'version'),
	        avatar_url: queryContent(item, 'avatar_url'),
	        guest_url: queryContent(item, 'guest_url'),
	        is_archived: item.querySelectorAll('is_archived').length > 0,
	        is_deleted: item.getAttribute('status') === 'deleted'
	      });
	    }
	
	    /**
	     * Returns room model from the coral rest room representation:
	     * {
	     *     "avatar_url": null,
	     *     "created": "2015-12-29T19:50:02+00:00",
	     *     "delegate_admin_visibility": null,
	     *     "guest_access_url": null,
	     *     "id": 59,
	     *     "is_archived": false,
	     *     "is_guest_accessible": false,
	     *     "last_active": null,
	     *     "links": {
	     *         "participants": "https://devvm.hipchat.com/v2/room/59/participant",
	     *         "self": "https://devvm.hipchat.com/v2/room/59",
	     *         "webhooks": "https://devvm.hipchat.com/v2/room/59/webhook"
	     *     },
	     *     "name": "test room name",
	     *     "owner": {
	     *         "id": 4,
	     *         "links": {
	     *             "self": "https://devvm.hipchat.com/v2/user/4"
	     *         },
	     *         "mention_name": "Homer",
	     *         "name": "Homer Simpson",
	     *         "version": "VXAKO96E"
	     *     },
	     *     "participants": [],
	     *     "privacy": "public",
	     *     "statistics": {
	     *         "links": {
	     *             "self": "https://devvm.hipchat.com/v2/room/59/statistics"
	     *         }
	     *     },
	     *     "topic": "asdsd",
	     *     "version": "GDKMBGDZ",
	     *     "xmpp_jid": "1_test-room-name@conf.devvm.hipchat.com"
	     * }
	     *
	     * @static
	     * @method fromREST
	     * @param {object} json
	     * @returns {Room}
	     */
	
	  }, {
	    key: 'fromREST',
	    value: function fromREST(json) {
	      // let's convert properties that aren't in the format the constructor expects
	      var id = json.id ? parseInt(json.id, 10) : Defaults.ID,
	          jid = json.xmpp_jid,
	          guest_url = json.guest_access_url,
	          owner = json.owner || {};
	
	      return new Room(_.merge(json, { id: id, jid: jid, guest_url: guest_url }, { owner: owner.id }));
	    }
	
	    /**
	     * Converts room model back to the x2js version for
	     * backwards compatibility until we can model all
	     * the way thru the app
	     * @param {Room} room
	     * @returns {object}
	     */
	
	  }, {
	    key: 'asX2JS',
	    value: function asX2JS(room) {
	      return {
	        id: room.id,
	        jid: room.jid,
	        name: room.name,
	        version: room.version,
	        x: {
	          guest_url: room.guest_url,
	          id: room.id,
	          name: room.name,
	          owner: room.owner,
	          privacy: room.privacy,
	          version: room.version
	        }
	      };
	    }
	  }]);
	  return Room;
	}();

	exports.default = Room;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EmoticonTypes = undefined;
	
	var _create = __webpack_require__(86);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(121);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _freeze = __webpack_require__(113);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Valid emoticon type values
	 */
	var EmoticonTypes = exports.EmoticonTypes = (0, _freeze2.default)({
	  GLOBAL: 'global',
	  GROUP: 'group'
	});
	
	/**
	 * Reasonable default values for the emoticon object
	 */
	var Defaults = (0, _freeze2.default)({
	  ID: null,
	  SHORTCUT: '',
	  PATH: '',
	  W: 30,
	  H: 30,
	  TYPE: EmoticonTypes.GROUP
	});
	
	/**
	 * Returns the textContent value of the node that is found when querying the root node passed in for the element that
	 * returns from a querySelector search for the `name` value specified.
	 *
	 * @param {Document} root xml
	 * @param {string} name the name of the tag you're looking for
	 * @param defaultVal what to return if nothing is found
	 *
	 * @returns {string|null}
	 */
	var queryContent = function queryContent(root, name) {
	  var defaultVal = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	  var node = root.querySelector(name);
	  return _.get(node, 'textContent', defaultVal);
	};
	
	/**
	 * @class Emoticon
	 *
	 * @property {number} id
	 * @property {string} shortcut
	 * @property {string} path
	 * @property {number} w
	 * @property {number} h
	 * @property {string} type
	 */
	
	var Emoticon = function () {
	
	  /**
	   * @constructs
	   * @param {object} input
	   * @param {string|number} input.id
	   * @param {string} input.shortcut
	   * @param {string} input.path
	   * @param {string|number} input.w
	   * @param {string|number} input.h
	   * @param {string} input.type
	   */
	
	  function Emoticon() {
	    var input = arguments.length <= 0 || arguments[0] === undefined ? (0, _create2.default)(null) : arguments[0];
	    (0, _classCallCheck3.default)(this, Emoticon);
	
	    this.id = input.id ? parseInt(input.id, 10) : Defaults.ID;
	    this.shortcut = input.shortcut || Defaults.SHORTCUT;
	    this.path = input.path || Defaults.PATH;
	    this.w = input.w ? parseInt(input.w, 10) : Defaults.W;
	    this.h = input.h ? parseInt(input.h, 10) : Defaults.H;
	    this.type = input.type || Defaults.TYPE;
	  }
	
	  /**
	   * Takes an IQ result from a iq query for emoticons, and returns
	   * a Emoticon model. IQ looks like:
	   *
	   * <iq xmlns="jabber:client" to="" type="{set|result}">
	   *  <query xmlns="http://hipchat.com/protocol/emoticons">
	   *    <path_prefix>https://dujrsrsgsd3nh.cloudfront.net/img/emoticons</path_prefix>
	   *    <item>
	   *      <id>560651</id>
	   *      <path>10804/troll-1467393875.png</path>
	   *      <shortcut>troll</shortcut>
	   *      <w>30</w>
	   *      <h>26</h>
	   *      <type>group</type>
	   *    </item>
	   *  </query>
	   * </iq>
	   *
	   * @static
	   * @method fromXMPP
	   * @param item - xml <item> element from a iq query for emoticons
	   * @returns {Emoticon}
	   */
	
	
	  (0, _createClass3.default)(Emoticon, null, [{
	    key: 'fromXMPP',
	    value: function fromXMPP(item) {
	      return new Emoticon({
	        id: queryContent(item, 'id'),
	        shortcut: queryContent(item, 'shortcut'),
	        path: queryContent(item, 'path'),
	        w: queryContent(item, 'w'),
	        h: queryContent(item, 'h'),
	        type: queryContent(item, 'type')
	      });
	    }
	
	    /**
	     * Converts emoticon model back to the x2js version for
	     * backwards compatibility until we can model all
	     * the way thru the app
	     * @param {Emoticon} emoticon
	     * @returns {object}
	     */
	
	  }, {
	    key: 'asX2JS',
	    value: function asX2JS(emoticon) {
	      return {
	        id: String(emoticon.id),
	        shortcut: emoticon.shortcut,
	        path: emoticon.path,
	        w: String(emoticon.w),
	        h: String(emoticon.h),
	        type: emoticon.type
	      };
	    }
	  }]);
	  return Emoticon;
	}();

	exports.default = Emoticon;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _for = __webpack_require__(156);
	
	var _for2 = _interopRequireDefault(_for);
	
	var _stringify = __webpack_require__(147);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _keys = __webpack_require__(63);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(121);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _defineProperty2 = __webpack_require__(127);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _freeze = __webpack_require__(113);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	var _Object$freeze2; /**
	                      * @IMPORTANT: DO NOT IMPORT THIS MODULE DIRECTLY!!!
	                      * IF YOU NEED TO ACCESS STORAGE, DO SO VIA THE DAL.CACHE MODULE.
	                      * IT SHOULD OWN THE ONLY INSTANCE OF THIS ADAPTER, AND ALL METHODS
	                      * WRITTEN TO INTERFACE WITH STORAGE SHOULD BE WRITTEN THERE
	                      */
	
	
	var _browser_storage_keys = __webpack_require__(163);
	
	var Keys = _interopRequireWildcard(_browser_storage_keys);
	
	var _dalError = __webpack_require__(158);
	
	var _dalError2 = _interopRequireDefault(_dalError);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PREFIX = 'hc.';
	var LEGACY_PREFIX = 'hc-';
	
	/*
	 * Browser storage locations
	 */
	var LOCATIONS = (0, _freeze2.default)({
	  LOCAL: 'localStorage',
	  SESSION: 'sessionStorage'
	});
	
	/*
	 * Defines the current/expected storage schema. Used to invalidate
	 * the cache when we make changes to the shape of the data we store
	 */
	var SCHEMA = (0, _freeze2.default)((_Object$freeze2 = {}, (0, _defineProperty3.default)(_Object$freeze2, Keys.ROSTER, '3'), (0, _defineProperty3.default)(_Object$freeze2, Keys.ROOMS, '4'), (0, _defineProperty3.default)(_Object$freeze2, Keys.EMOTICONS, '1'), _Object$freeze2));
	
	/*
	 * Keys for data migration/cleanup
	 */
	var OBSOLETE_KEYS = [Keys.PER_ROOM_NOTIFICATION_DIALOG_SHOWN, 'hc._' + Keys.USER_ID, 'hc._' + Keys.GROUP_ID, 'hc._' + Keys.ROOMS, 'hc._' + Keys.ROSTER, 'hc._' + Keys.EMOTICONS];
	
	var LEGACY_KEYS = [Keys.NOTIF_BANNER_DISMISSAL_COUNT, Keys.NOTIF_BANNER_DISMISSED_FOREVER, Keys.INTEGRATIONS, Keys.CLIENT_PREFERENCES, Keys.READSTATE];
	
	/*
	 * Cross-browser check for localStorage quota exceeded error
	 * http://crocodillon.com/blog/always-catch-localstorage-security-and-quota-exceeded-errors
	 */
	function isQuotaExceededError(error) {
	  switch (error.code) {
	    case 22:
	      // Most browsers
	      return true;
	
	    case 1014:
	      // Firefox :-(
	      return error.name === 'NS_ERROR_DOM_QUOTA_REACHED';
	
	    default:
	      return false;
	  }
	}
	
	/**
	 * @class BrowserStorage
	 */
	
	var BrowserStorage = function () {
	
	  /**
	   * Instantiates the class. Checks user/group against provided params and
	   * throws away all stored data if they do not match. Clears out legacy
	   * localStorage data that we don't use anymore and migrates data stored
	   * in the prior localStorage adapter.
	   *
	   * @constructs
	   * @param {number} user_id
	   * @param {number} group_id
	   */
	
	  function BrowserStorage(user_id, group_id) {
	    (0, _classCallCheck3.default)(this, BrowserStorage);
	
	
	    // If the user/group doesn't match what was provided, throw everything away
	    if (this._shouldClearPriorUserData(user_id, group_id)) {
	      this.clear();
	
	      // Otherwise, migrate over data from legacy storage implementations
	    } else {
	        this._clearObsoleteData();
	        this._migrateLegacyKeys();
	      }
	
	    this.set(Keys.SCHEMA, SCHEMA);
	    this.set(Keys.USER_ID, user_id);
	    this.set(Keys.GROUP_ID, group_id);
	  }
	
	  /**
	   * @method has
	   * @param {string} key
	   * @param {object} [options = { location: 'localStorage' }]
	   * @returns {boolean}
	   */
	
	
	  (0, _createClass3.default)(BrowserStorage, [{
	    key: 'has',
	    value: function has(key) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? { location: LOCATIONS.LOCAL } : arguments[1];
	
	      return PREFIX + key in this._getAPI(options.location);
	    }
	
	    /**
	     * @method get
	     * @param {string} key
	     * @param {object} [options = { location: 'localStorage' }]
	     * @returns {*}
	     */
	
	  }, {
	    key: 'get',
	    value: function get(key) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? { location: LOCATIONS.LOCAL } : arguments[1];
	
	      var api = this._getAPI(options.location);
	      if (this.has(key, options)) {
	        return this._deserialize(api.getItem(PREFIX + key));
	      }
	      return null;
	    }
	
	    /**
	     * @method set
	     * @param {string} key
	     * @param {*} value
	     * @param {object} [options = { location: 'localStorage' }]
	     */
	
	  }, {
	    key: 'set',
	    value: function set(key, value) {
	      var options = arguments.length <= 2 || arguments[2] === undefined ? { location: LOCATIONS.LOCAL } : arguments[2];
	
	      var api = this._getAPI(options.location),
	          data = this._serialize(value);
	      try {
	        api.setItem(PREFIX + key, data);
	      } catch (e) {
	        this.unset(key, options); // erase partial writes
	        var error = isQuotaExceededError(e) ? _dalError2.default.ofType(_dalError2.default.Types.STORAGE_DOM_QUOTA_EXCEEDED, e) : _dalError2.default.ofType(_dalError2.default.Types.EXCEPTION, e);
	        if (window.Raven) {
	          window.Raven.captureException(error);
	        }
	        throw error;
	      }
	      return true;
	    }
	
	    /**
	     * @method unset
	     * @param {string} key
	     * @param {object} [options = { location: 'localStorage' }]
	     * @returns {boolean}
	     */
	
	  }, {
	    key: 'unset',
	    value: function unset(key) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? { location: LOCATIONS.LOCAL } : arguments[1];
	
	      var api = this._getAPI(options.location);
	      api.removeItem(PREFIX + key);
	      return true;
	    }
	
	    /**
	     * For both localStorage and sessionStorage, find all keys that contain either
	     * the new or legacy prefixes and remove the items completely
	     *
	     * @method clear
	     */
	
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var _this = this;
	
	      var prefixMatch = new RegExp('^' + PREFIX + '|^' + LEGACY_PREFIX);
	      _.forOwn(LOCATIONS, function (location) {
	        var api = _this._getAPI(location);
	        (0, _keys2.default)(api).filter(function (key) {
	          return prefixMatch.test(key);
	        }).forEach(function (key) {
	          return api.removeItem(key);
	        });
	      });
	      return true;
	    }
	
	    /**
	     * Check provided user and group id against previously stored values (if they exist)
	     * Returns true if the prior values exist and they don't match the provided values
	     * @private
	     */
	
	  }, {
	    key: '_shouldClearPriorUserData',
	    value: function _shouldClearPriorUserData(user_id, group_id) {
	      if (this.has(Keys.USER_ID) && this.has(Keys.GROUP_ID)) {
	        var prevUser = this.get(Keys.USER_ID),
	            prevGroup = this.get(Keys.GROUP_ID);
	        return !(prevUser === user_id && prevGroup === group_id);
	      }
	      return false;
	    }
	
	    /**
	     * Directly accessing window.localStorage will throw if the user has
	     * disabled it in the browser (ohcrap)
	     * @private
	     */
	
	  }, {
	    key: '_getAPI',
	    value: function _getAPI(location) {
	      try {
	        switch (location) {
	          case LOCATIONS.SESSION:
	            return window.sessionStorage;
	          case LOCATIONS.LOCAL:
	          default:
	            return window.localStorage;
	        }
	      } catch (e) {
	        var error = _dalError2.default.ofType(_dalError2.default.Types.STORAGE_INACCESSIBLE, e);
	        if (window.Raven) {
	          window.Raven.captureException(error);
	        }
	        throw error;
	      }
	    }
	
	    /**
	     * @private
	     */
	
	  }, {
	    key: '_serialize',
	    value: function _serialize(value) {
	      return (0, _stringify2.default)(value, function (k, v) {
	        if (v instanceof RegExp) {
	          return v.toString();
	        }
	        return v;
	      });
	    }
	
	    /**
	     * @private
	     */
	
	  }, {
	    key: '_deserialize',
	    value: function _deserialize(value) {
	      if (_.includes(['null', 'undefined', ''], value)) {
	        return null;
	      }
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        var error = _dalError2.default.ofType(_dalError2.default.Types.STORAGE_JSON_SERIALIZATION, e);
	        if (window.Raven) {
	          window.Raven.captureException(error);
	        }
	        return null;
	      }
	    }
	
	    /**
	     * Clean out obsolete data
	     * @private
	     */
	
	  }, {
	    key: '_clearObsoleteData',
	    value: function _clearObsoleteData() {
	      var _this2 = this;
	
	      var oldSchema = this.get(Keys.SCHEMA),
	          api = this._getAPI();
	
	      // check expected schema against last stored schema
	      // and delete any data under keys where they don't match
	      (0, _keys2.default)(SCHEMA).forEach(function (key) {
	        if (!oldSchema || oldSchema[key] !== SCHEMA[key]) {
	          _this2.unset(key);
	        }
	      });
	
	      // delete data stored under old/unused keys
	      // these are not prefixed
	      OBSOLETE_KEYS.forEach(function (key) {
	        api.removeItem(key);
	      });
	    }
	
	    /**
	     * Migrate data stored under old "hc-" prefixed keys to
	     * use the new "hc." prefix for consistency
	     * @private
	     */
	
	  }, {
	    key: '_migrateLegacyKeys',
	    value: function _migrateLegacyKeys() {
	      var api = this._getAPI();
	      LEGACY_KEYS.forEach(function (key) {
	        var legacyKey = LEGACY_PREFIX + key,
	            newKey = PREFIX + key;
	        if (legacyKey in api) {
	          var data = api.getItem(legacyKey);
	          api.removeItem(legacyKey);
	          api.setItem(newKey, data);
	        }
	      });
	    }
	  }]);
	  return BrowserStorage;
	}();
	
	/*
	 * Expose constants above as static properties on the class
	 * Hide the schema in a symbol since that should never be directly
	 * accessed, other than in testing
	 */
	
	
	BrowserStorage[(0, _for2.default)('HJC.Storage.Schema')] = SCHEMA;
	BrowserStorage.Locations = LOCATIONS;
	
	exports.default = BrowserStorage;
	module.exports = exports['default'];

/***/ },
/* 163 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NOTIF_BANNER_DISMISSED_FOREVER = exports.NOTIF_BANNER_DISMISSED_FOREVER = 'notificationBannerDismissedForever';
	var NOTIF_BANNER_DISMISSAL_COUNT = exports.NOTIF_BANNER_DISMISSAL_COUNT = 'notificationBannerDismissalCount';
	var PER_ROOM_NOTIFICATION_DIALOG_SHOWN = exports.PER_ROOM_NOTIFICATION_DIALOG_SHOWN = 'perRoomNotificationsDialogShown';
	
	var ROSTER = exports.ROSTER = 'roster';
	var ROOMS = exports.ROOMS = 'rooms-wo-archived';
	var EMOTICONS = exports.EMOTICONS = 'emoticons';
	var GROUP_ID = exports.GROUP_ID = 'group_id';
	var USER_ID = exports.USER_ID = 'user_id';
	var SCHEMA = exports.SCHEMA = 'storage-schema';
	var INTEGRATIONS = exports.INTEGRATIONS = 'integrations';
	var CLIENT_PREFERENCES = exports.CLIENT_PREFERENCES = 'client-preferences';
	
	var ANALYTICS = exports.ANALYTICS = 'hc_web-herment-storage-key';
	var READSTATE = exports.READSTATE = 'pending-readstate';

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _app_dispatcher = __webpack_require__(150);
	
	var _app_dispatcher2 = _interopRequireDefault(_app_dispatcher);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	  /**
	   * Notifies native client that API V1 auth token has been updated.
	   * Native client updates the cookie.
	   */
	
	  updateAuthTokens: function updateAuthTokens(config) {
	    _app_dispatcher2.default.dispatch('auth-token-update', config);
	  },
	  updateFeatureFlags: function updateFeatureFlags(config) {
	    _app_dispatcher2.default.dispatch('feature-flags-update', config);
	  },
	  updateAppConfiguration: function updateAppConfiguration(config) {
	    _app_dispatcher2.default.dispatch('configuration-change', config);
	  },
	  serverUnsupportedError: function serverUnsupportedError(reason) {
	    _app_dispatcher2.default.dispatch('server-unsupported', reason);
	  },
	  updateSID: function updateSID(config) {
	    _app_dispatcher2.default.dispatch('update-sid', config);
	  },
	  cacheConfigured: function cacheConfigured() {
	    _app_dispatcher2.default.dispatch('DAL:cache-configured');
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _defineProperty2 = __webpack_require__(127);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _Compressors;
	
	var _user = __webpack_require__(159);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _room = __webpack_require__(160);
	
	var _room2 = _interopRequireDefault(_room);
	
	var _emoticon = __webpack_require__(161);
	
	var _emoticon2 = _interopRequireDefault(_emoticon);
	
	var _browser_storage_keys = __webpack_require__(163);
	
	var Keys = _interopRequireWildcard(_browser_storage_keys);
	
	var _utils = __webpack_require__(7);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	 * Compression algorithms for saving space in localStorage
	 * Keyed by the localStorage key
	 */
	var Compressors = (_Compressors = {}, (0, _defineProperty3.default)(_Compressors, Keys.ROSTER, {
	  dehydrate: function dehydrate(roster) {
	    if (_.isNull(roster)) {
	      return null;
	    }
	    return _.transform(roster, function (result, user, id) {
	      result['g'] = result['g'] || _utils2.default.jid.group_id(user.jid);
	      result['c'] = result['c'] || _utils2.default.jid.domain(user.jid);
	      result['u'] = result['u'] || {};
	      result['u'][id] = [user.name, user.mention_name, user.email, user.photo_url, user.version];
	      return result;
	    });
	  },
	  rehydrate: function rehydrate(roster) {
	    if (_.isNull(roster)) {
	      return null;
	    }
	    return _.transform(roster['u'], function (result, user, id) {
	      result[id] = new _user2.default({
	        id: parseInt(id, 10),
	        jid: roster['g'] + '_' + id + '@' + roster['c'],
	        name: user[0],
	        mention_name: user[1],
	        email: user[2],
	        photo_url: user[3],
	        version: user[4],
	        is_guest: false, // guest users are not saved to storage
	        is_deleted: false // deleted users are not saved to storage
	      });
	      return result;
	    });
	  }
	}), (0, _defineProperty3.default)(_Compressors, Keys.ROOMS, {
	  dehydrate: function dehydrate(rooms) {
	    if (_.isNull(rooms)) {
	      return null;
	    }
	    return _.transform(rooms, function (result, room, id) {
	      result['g'] = result['g'] || _utils2.default.jid.group_id(room.jid);
	      result['c'] = result['c'] || _utils2.default.jid.domain(room.jid);
	      result['u'] = result['u'] || {};
	      result['u'][id] = [room.name, _utils2.default.jid.room_name(room.jid), room.privacy === _room.PrivacyLevels.PUBLIC ? 1 : 0, room.owner, room.guest_url, room.avatar_url, room.version];
	      return result;
	    });
	  },
	  rehydrate: function rehydrate(rooms) {
	    if (_.isNull(rooms)) {
	      return null;
	    }
	    return _.transform(rooms['u'], function (result, room, id) {
	      result[id] = new _room2.default({
	        id: parseInt(id, 10),
	        name: room[0],
	        jid: rooms['g'] + '_' + room[1] + '@' + rooms['c'],
	        privacy: room[2] === 1 ? _room.PrivacyLevels.PUBLIC : _room.PrivacyLevels.PRIVATE,
	        owner: room[3],
	        guest_url: room[4],
	        avatar_url: room[5],
	        version: room[6],
	        topic: null,
	        is_archived: false,
	        is_deleted: false
	      });
	      return result;
	    });
	  }
	}), (0, _defineProperty3.default)(_Compressors, Keys.EMOTICONS, {
	  dehydrate: function dehydrate(iq) {
	    if (_.isNull(iq)) {
	      return null;
	    }
	    return {
	      p: iq.query.path_prefix,
	      v: iq.query.ver,
	      i: _.map(iq.query.item, function (emoticon, i) {
	        return [parseInt(emoticon.id, 10), emoticon.shortcut, emoticon.path, parseInt(emoticon.w, 10), parseInt(emoticon.h, 10), emoticon.type === _emoticon.EmoticonTypes.GROUP ? 1 : 0];
	      })
	    };
	  },
	  rehydrate: function rehydrate(emoticons) {
	    if (_.isNull(emoticons)) {
	      return null;
	    }
	    return {
	      type: 'result',
	      query: {
	        path_prefix: emoticons['p'],
	        ver: emoticons['v'],
	        item: emoticons['i'].map(function (emoticon, i) {
	          return new _emoticon2.default({
	            id: emoticon[0],
	            shortcut: emoticon[1],
	            path: emoticon[2],
	            w: emoticon[3],
	            h: emoticon[4],
	            type: emoticon[5] === 1 ? _emoticon.EmoticonTypes.GROUP : _emoticon.EmoticonTypes.GLOBAL
	          });
	        })
	      }
	    };
	  }
	}), _Compressors);
	
	/**
	 * @module Compressors
	 */
	exports.default = {
	
	  /**
	   * @method dehydrate
	   * @param {string} key - one of browser storage keys
	   * @param {*} val - the data to be compressed
	   * @returns {*} - the compressed version, if there is a compression algorithm for the given key
	   *  otherwise, returns the data it was passed
	   */
	
	  dehydrate: function dehydrate(key, val) {
	    if (Compressors[key]) {
	      return Compressors[key].dehydrate(val);
	    }
	    return val;
	  },
	
	
	  /**
	   * @method rehydrate
	   * @param {string} key - one of browser storage keys
	   * @param {*} val - the data to be decompressed
	   * @returns {*} - the decompressed version, if there is a compression algorithm for the given key
	   *  otherwise, returns the data it was passed
	   */
	  rehydrate: function rehydrate(key, val) {
	    if (Compressors[key]) {
	      return Compressors[key].rehydrate(val);
	    }
	    return val;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _freeze = __webpack_require__(113);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @typedef {{name: string, key: string}} prefs
	 * @type {Object.<string, string>}
	 */
	var PrefKeys = (0, _freeze2.default)({
	  NOTIFY_FOR_ROOM: "notifyForRoom",
	  NOTIFY_FOR_PRIVATE_ROOM: "notifyForPrivateRoom",
	  NOTIFY_FOR_TAG: "notifyForTag",
	  NOTIFY_FOR_PRIVATE: "notifyForPrivate",
	  NOTIFY_WHEN_DND: "notifyWhenDND",
	  NOTIFY_FOR_VIDEO_WHEN_DND: "notifyForVideoWhenDND",
	  SOUNDS_ENABLED: "soundsEnabled",
	  MESSAGE_SOUNDS: "messageSounds",
	  VIDEO_SOUNDS: "videoSounds",
	  SHOW_TOASTERS: "showToasters",
	  HIDE_PRESENCE_MESSAGES: "hidePresenceMessages",
	  USE_24_HR_FORMAT: "timeFormat24Hour",
	  PROPERTIES: "properties",
	  PROPERTIES_FIRST_LOGIN_DATE: "firstLoginDate",
	  ROOM_NOTIFICATION_OVERRIDES: "roomNotificationOverrides",
	  GLOBAL_NOTIFICATION_SETTING: "globalNotificationSetting",
	  AUTO_JOIN: "autoJoin",
	  NOTIFICATIONS: 'notifications',
	  UPDATE_TIME: 'updateTime',
	  THEME: "theme",
	  DENSITY: "density",
	  CHAT_VIEW: 'chatView',
	  NAME_DISPLAY: 'nameDisplay',
	  ENABLE_IDLE: 'enableIdle',
	  IDLE_MINUTES: 'idleMinutes',
	  CHECK_MINOR_UPDATES: 'checkMinorUpdates',
	  IGNORE_ADD_INTEGRATIONS_GLANCE: 'ignoreAddIntegrationsGlance'
	});
	
	exports.default = PrefKeys;
	module.exports = exports['default'];

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(135);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _create = __webpack_require__(86);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _utils = __webpack_require__(7);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _app_config = __webpack_require__(98);
	
	var _app_config2 = _interopRequireDefault(_app_config);
	
	var _preferences_keys = __webpack_require__(166);
	
	var _preferences_keys2 = _interopRequireDefault(_preferences_keys);
	
	var _client_preferences_keys = __webpack_require__(168);
	
	var _client_preferences_keys2 = _interopRequireDefault(_client_preferences_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @class PreferencesModel
	 *
	 * Application State:
	 *
	 * @property {array} autoJoin
	 * @property {string} chatToFocus
	 *
	 * User State:
	 *
	 * @property {object} properties
	 * @property {number} properties.firstLoginDate
	 * @property {array} ignoreAddIntegrationsGlance
	 *
	 * Appearance Settings:
	 *
	 * @property {string} theme "light|dark"
	 * @property {string} density "normal|tighter"
	 * @property {string} chatView "classic|classic_neue"
	 * @property {string} nameDisplay "names|mentions"
	 * @property {string} animatedAvatars "animated|static"
	 * @property {boolean} timeFormat24Hour
	 * @property {boolean} showUnreadDivider
	 * @property {boolean} hidePresenceMessages
	 * @property {boolean} bounceIcon // Mac
	 *
	 * Notification Settings:
	 *
	 * @property {string} globalNotificationSetting "loud|quiet|normal"
	 * @property {boolean} notifyForRoom
	 * @property {boolean} notifyForPrivateRoom
	 * @property {boolean} notifyForTag
	 * @property {boolean} notifyForPrivate
	 * @property {boolean} notifyWhenDND
	 * @property {boolean} notifyForVideoWhenDND
	 * @property {boolean} showToasters
	 * @property {boolean} soundsEnabled
	 * @property {boolean} messageSounds
	 * @property {boolean} videoSounds
	 * @property {boolean} blinkTaskbar // Windows
	 *
	 * @property {object} notifications
	 * @property {array} notifications.room_invite
	 * @property {array} notifications.oto_call
	 * @property {array} notifications.group_invite_requested
	 * @property {array} notifications.oto_message
	 * @property {array} notifications.mention
	 * @property {array} notifications.newsletter
	 *
	 * @property {object} roomNotificationOverrides
	 * @property {object} roomNotificationOverrides[room_jid]
	 * @property {string} roomNotificationOverrides[room_jid].level "quiet|loud|normal"
	 *
	 * Native Prefs, unused in web client:
	 *
	 * @property {boolean} enableIdle
	 * @property {number} idleMinutes
	 * @property {number} updateTime
	 * @property {boolean} checkMinorUpdates
	 * @property {boolean} keepPopUsVisible
	 * @property {boolean} blinkTaskbar
	 *
	 * Client Preferences (persisted in localStorage):
	 *
	 * @property {boolean} hideGifsByDefault
	 * @property {boolean} replaceTextEmoticons
	 * @property {boolean} showUnreadDivider
	 * @property {boolean} showChatSidebar
	 * @property {boolean} showGroupChatSidebar
	 * @property {boolean} showNavigationSidebar
	 * @property {boolean} launchWithOSStartup
	 * @property {boolean} enableSpellCheck
	 * @property {boolean} bounceIcon
	 * @property {boolean} enableLogging
	 * @property {boolean} showQuickSwitcherHint
	 * @property {string} chatActivePanel
	 * @property {string} groupChatActivePanel
	 * @property {number} leftColumnWidth
	 * @property {number} rightColumnWidth
	 * @property {object} activeGroupchatIntegration
	 * @property {object} activeChatIntegration
	 */
	
	var ENUMS = {
	  theme: {
	    options: ['light', 'dark'],
	    default: _app_config2.default.default_theme
	  },
	  density: {
	    options: ['normal', 'tighter'],
	    default: _app_config2.default.default_density
	  },
	  chatView: {
	    options: ['classic', 'classic_neue'],
	    default: _app_config2.default.default_chat_view
	  },
	  nameDisplay: {
	    options: ['names', 'mentions'],
	    default: _app_config2.default.default_name_display
	  },
	  animatedAvatars: {
	    options: ['animated', 'static'],
	    default: _app_config2.default.default_animated_avatars
	  },
	  notificationLevels: {
	    options: ['loud', 'normal', 'quiet'],
	    default: _app_config2.default.default_notification_level
	  }
	};
	
	// Various string prefs sometimes come back with extraneous quotes around them
	function normalizeString(val) {
	  return _.isString(val) ? val.replace(/"/g, '') : val;
	}
	
	// Make sure appearance setting values are ONLY the expected enums above
	function normalizeAppearanceSettings(key, val) {
	  var str = normalizeString(val);
	  if (!_.includes(ENUMS[key].options, str)) {
	    return ENUMS[key].default;
	  }
	  return str;
	}
	
	// Ensure global notification setting is one of the expected enums above
	function normalizeGlobalNotificationSetting(val, obj) {
	  if (_.isString(val)) {
	    var str = normalizeString(val);
	    if (_.includes(ENUMS.notificationLevels.options, str)) {
	      return str;
	    }
	  }
	  return obj[_preferences_keys2.default.NOTIFY_FOR_ROOM] || obj[_preferences_keys2.default.NOTIFY_FOR_PRIVATE_ROOM] ? 'loud' : 'normal';
	}
	
	// Clean up autojoin -- mainly from raw x2js input
	function normalizeAutoJoin(autoJoin) {
	  var normalizedAutoJoin = [];
	
	  if (autoJoin.item) {
	    autoJoin = autoJoin.item;
	  }
	  if (!Array.isArray(autoJoin)) {
	    autoJoin = [autoJoin];
	  }
	
	  for (var room in autoJoin) {
	    var curRoom = autoJoin[room];
	    if (_.isPlainObject(curRoom) && !_.isEmpty(curRoom)) {
	      normalizedAutoJoin.push(_.pick(curRoom, 'jid', 'name'));
	    }
	  }
	  return normalizedAutoJoin;
	}
	
	// Returned as object with comma separated string values instead of array of values
	function normalizeNotifications(notifications) {
	  return _.transform(notifications, function (result, val, key) {
	    if (_.isString(val)) {
	      result[key] = _.compact(val.split(','));
	    } else {
	      result[key] = val;
	    }
	  });
	}
	
	// roomNotificationOverrides is sometimes an object,
	// sometimes a json string, sometimes an empty string
	function normalizeJSON(json) {
	  if (_.isObject(json)) {
	    return json;
	  } else if (_.isString(json)) {
	    try {
	      return JSON.parse(json);
	    } catch (e) {
	      return null;
	    }
	  }
	}
	
	// The Big Switch. Go through each key and fix/properly coerce the value
	function normalizePreferences(input) {
	  return _.transform(input, function (result, val, key, original) {
	    switch (key) {
	
	      case _preferences_keys2.default.USE_24_HR_FORMAT:
	      case _preferences_keys2.default.HIDE_PRESENCE_MESSAGES:
	      case _preferences_keys2.default.NOTIFY_FOR_TAG:
	      case _preferences_keys2.default.NOTIFY_FOR_PRIVATE:
	      case _preferences_keys2.default.NOTIFY_WHEN_DND:
	      case _preferences_keys2.default.NOTIFY_FOR_VIDEO_WHEN_DND:
	      case _preferences_keys2.default.SHOW_TOASTERS:
	      case _preferences_keys2.default.SOUNDS_ENABLED:
	      case _preferences_keys2.default.MESSAGE_SOUNDS:
	      case _preferences_keys2.default.VIDEO_SOUNDS:
	      case _preferences_keys2.default.ENABLE_IDLE:
	      case _preferences_keys2.default.CHECK_MINOR_UPDATES:
	      case _client_preferences_keys2.default.SHOW_UNREAD_DIVIDER:
	      case _client_preferences_keys2.default.REPLACE_TEXT_EMOTICONS:
	      case _client_preferences_keys2.default.BOUNCE_ICON:
	      case _client_preferences_keys2.default.BOUNCE_ONCE:
	      case _client_preferences_keys2.default.BLINK_TASKBAR:
	      case _client_preferences_keys2.default.HIDE_GIFS_BY_DEFAULT:
	      case _client_preferences_keys2.default.SHOW_CHAT_SIDEBAR:
	      case _client_preferences_keys2.default.SHOW_GROUPCHAT_SIDEBAR:
	      case _client_preferences_keys2.default.SHOW_NAVIGATION_SIDEBAR:
	      case _client_preferences_keys2.default.LAUNCH_WITH_OS_STARTUP:
	      case _client_preferences_keys2.default.ENABLE_SPELL_CHECK:
	      case _client_preferences_keys2.default.KEEP_POPUPS_VISIBLE:
	      case _client_preferences_keys2.default.ENABLE_LOGGING:
	      case _client_preferences_keys2.default.SHOW_QUICK_SWITCHER_HINT:
	        result[key] = _utils2.default.coerceBoolean(val);
	        break;
	
	      case _preferences_keys2.default.NOTIFY_FOR_ROOM:
	      case _preferences_keys2.default.NOTIFY_FOR_PRIVATE_ROOM:
	        result[key] = _.isBoolean(val) ? val : true;
	        break;
	
	      case _preferences_keys2.default.IDLE_MINUTES:
	      case _preferences_keys2.default.UPDATE_TIME:
	      case _client_preferences_keys2.default.LEFT_COLUMN_WIDTH:
	      case _client_preferences_keys2.default.RIGHT_COLUMN_WIDTH:
	        result[key] = parseFloat(val);
	        break;
	
	      case _preferences_keys2.default.CHAT_TO_FOCUS:
	      case _client_preferences_keys2.default.CHAT_ACTIVE_PANEL:
	      case _client_preferences_keys2.default.GROUPCHAT_ACTIVE_PANEL:
	      case _preferences_keys2.default.IGNORE_ADD_INTEGRATIONS_GLANCE:
	        result[key] = normalizeString(val);
	        break;
	
	      case _preferences_keys2.default.GLOBAL_NOTIFICATION_SETTING:
	        result[key] = normalizeGlobalNotificationSetting(val, original);
	        break;
	
	      case _preferences_keys2.default.THEME:
	      case _preferences_keys2.default.CHAT_VIEW:
	      case _preferences_keys2.default.DENSITY:
	      case _preferences_keys2.default.NAME_DISPLAY:
	      case _client_preferences_keys2.default.ANIMATED_AVATARS:
	        result[key] = normalizeAppearanceSettings(key, val);
	        break;
	
	      case _preferences_keys2.default.AUTO_JOIN:
	        result[key] = normalizeAutoJoin(val);
	        break;
	
	      case _preferences_keys2.default.NOTIFICATIONS:
	        result[key] = normalizeNotifications(val);
	        break;
	
	      case _preferences_keys2.default.PROPERTIES:
	        result[key] = normalizeJSON(val);
	        break;
	
	      case _preferences_keys2.default.ROOM_NOTIFICATION_OVERRIDES:
	        result[key] = normalizeJSON(val);
	        break;
	
	      // ignored keys
	      case 'secondsToIdle':
	      case 'isIdleTimeEnabled':
	      case 'enableEmoticons':
	      case 'dndWhenInCall':
	      case 'visualNotifications':
	      case 'exitWarn':
	        break;
	
	      default:
	        result[key] = val;
	    }
	  });
	}
	
	var PreferencesModel =
	
	/**
	 * @constructs
	 *
	 * @param {object} input
	 * @param {boolean} [serverPreferencesOnly]
	 */
	function PreferencesModel() {
	  var input = arguments.length <= 0 || arguments[0] === undefined ? (0, _create2.default)(null) : arguments[0];
	  var serverPreferencesOnly = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	  (0, _classCallCheck3.default)(this, PreferencesModel);
	
	  if (serverPreferencesOnly) {
	    input = _.pick(input, _.values(_preferences_keys2.default));
	  }
	  (0, _assign2.default)(this, normalizePreferences(input));
	};
	
	exports.default = PreferencesModel;
	module.exports = exports['default'];

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _freeze = __webpack_require__(113);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @typedef {{name: string, key: string}} clientPrefs
	 * @type {Object.<string, string>}
	 */
	var ClientPrefKeys = (0, _freeze2.default)({
	  ANIMATED_AVATARS: 'animatedAvatars',
	  HIDE_GIFS_BY_DEFAULT: 'hideGifsByDefault',
	  HIDE_ATTACHED_CARDS_BY_DEFAULT: 'hideAttachedCardsByDefault',
	  CHAT_TO_FOCUS: 'chatToFocus',
	  REPLACE_TEXT_EMOTICONS: 'replaceTextEmoticons',
	  SHOW_UNREAD_DIVIDER: 'showUnreadDivider',
	  SHOW_CHAT_SIDEBAR: 'showChatSidebar',
	  SHOW_GROUPCHAT_SIDEBAR: 'showGroupChatSidebar',
	  SHOW_NAVIGATION_SIDEBAR: 'showNavigationSidebar',
	  CHAT_ACTIVE_PANEL: 'chatActivePanel',
	  GROUPCHAT_ACTIVE_PANEL: 'groupChatActivePanel',
	  LEFT_COLUMN_WIDTH: 'leftColumnWidth',
	  RIGHT_COLUMN_WIDTH: 'rightColumnWidth',
	  LAUNCH_WITH_OS_STARTUP: 'launchWithOSStartup',
	  ENABLE_SPELL_CHECK: 'enableSpellCheck',
	  ENABLE_AUTOCORRECT: 'enableAutoCorrect',
	  KEEP_POPUPS_VISIBLE: 'keepPopUsVisible',
	  BLINK_TASKBAR: 'blinkTaskbar',
	  BOUNCE_ICON: 'bounceIcon',
	  BOUNCE_ONCE: 'bounceOnce',
	  ENABLE_LOGGING: 'enableLogging',
	  SHOW_QUICK_SWITCHER_HINT: 'showQuickSwitcherHint',
	  ACTIVE_GROUPCHAT_INTEGRATION: 'activeGroupchatIntegration',
	  ACTIVE_CHAT_INTEGRATION: 'activeChatIntegration'
	});
	
	exports.default = ClientPrefKeys;
	module.exports = exports['default'];

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _app_config = __webpack_require__(98);
	
	var _app_config2 = _interopRequireDefault(_app_config);
	
	var _client_info_helper = __webpack_require__(170);
	
	var _uri_template = __webpack_require__(171);
	
	var _uri_template2 = _interopRequireDefault(_uri_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
	  /*
	   * Source IDs as per https://extranet.atlassian.com/display/HC/Add-on+Management+Analytics
	   */
	  CONFIGURE_LINK_SOURCE_ID: 5,
	  DIALOG_LINK_SOURCE_ID: 6,
	  API_SOURCE_ID: 7,
	
	  to_full_key: function to_full_key(addon_key, module_key) {
	    return addon_key + ':' + module_key;
	  },
	
	  is_full_key: function is_full_key(key) {
	    return key.indexOf(":") !== -1;
	  },
	
	  split_full_key: function split_full_key(key) {
	    return key.split(":");
	  },
	
	  isFeatureEnabled: function isFeatureEnabled(initData) {
	    var isGuest = initData && initData.is_guest;
	    return !isGuest && (_.get(initData, 'feature_flags.web_client_integrations') || _.get(initData, "perms.hipconnect") === "all");
	  },
	
	  /**
	   * Check if an integration key is the same as an internal integration
	   *
	   * It is currently possible to fake this key, so it should not be used for anything requiring security
	   *
	   * @param key
	   * @returns {boolean}
	   */
	  isInternalIntegrationKey: function isInternalIntegrationKey(key) {
	    return _.includes([_app_config2.default.links_glance.full_key, _app_config2.default.files_glance.full_key, _app_config2.default.people_glance.full_key], key);
	  },
	
	  /**
	   * This routine returns a URL to the integrations management page.
	   * @param baseUrl the base URL where the connected instance of HipChat is running.
	   * @param roomId the ID of the room that the integration manager should use for its context.
	   * @param userId the ID of the current user.
	   * @param sourceId an ID representing the 'source' by which the user arrives at the integration
	   * management page. See https://extranet.atlassian.com/display/HC/Add-on+Management+Analytics.
	   * @returns {string} a URL to the integration manager.
	   */
	  getIntegrationsUrl: function getIntegrationsUrl(baseUrl, roomId, userId, sourceId) {
	    var fromLocationId = (0, _client_info_helper.getClientLocationId)();
	    if (!sourceId) {
	      sourceId = 0;
	    }
	    var str_formats = {
	      'base_url': baseUrl,
	      'room_id': roomId,
	      'user_id': encodeURIComponent(userId),
	      'from_location_id': fromLocationId,
	      'source_id': sourceId
	    };
	
	    var template = new _uri_template2.default(_app_config2.default.integrations_url);
	    return template.replaceVariables(str_formats);
	  },
	
	  getIntegrationsBaseUrl: function getIntegrationsBaseUrl(baseUrl) {
	    var str_formats = {
	      'base_url': baseUrl
	    };
	
	    var template = new _uri_template2.default(_app_config2.default.integrations_base_url);
	    return template.replaceVariables(str_formats);
	  },
	
	  getIntegrationsConfigUrl: function getIntegrationsConfigUrl(baseUrl, roomId, addon_key) {
	    var str_formats = {
	      'base_url': baseUrl,
	      'room_id': roomId,
	      'addon_key': addon_key
	    };
	
	    var template = new _uri_template2.default(_app_config2.default.integrations_config_url);
	    return template.replaceVariables(str_formats);
	  },
	
	  getIntegrationsUpdateUrl: function getIntegrationsUpdateUrl(baseUrl, roomId, addon_key) {
	    var str_formats = {
	      'base_url': baseUrl,
	      'room_id': roomId,
	      'addon_key': addon_key
	    };
	
	    var template = new _uri_template2.default(_app_config2.default.integrations_update_url);
	    return template.replaceVariables(str_formats);
	  },
	
	  extractIntegrationParametersFromMessage: function extractIntegrationParametersFromMessage(msg) {
	    var parameters = {};
	    if (msg) {
	      parameters = {
	        body: msg.body,
	        sender: {
	          id: msg.sender_id,
	          name: msg.sender,
	          mention: msg.sender_mention
	        },
	        mid: msg.mid,
	        type: msg.type,
	        metadata: _.get(msg, 'metadata', {})
	      };
	
	      if (msg.card) {
	        parameters.card = _.pick(msg.card, ['title', 'description', 'url']);
	      }
	
	      if (msg.file_data) {
	        parameters.media = {
	          type: _.get(msg.file_data, 'file_type', 'unknown').replace('img', 'image'),
	          name: _.get(msg.file_data, 'name', ''),
	          size: msg.file_data.size,
	          url: msg.file_data.url
	        };
	        if (msg.file_data.thumb_url) {
	          parameters.media.thumb_url = msg.file_data.thumb_url;
	        }
	      }
	
	      if (msg.link_details) {
	        parameters.media = {
	          type: msg.link_details.type,
	          url: msg.link_details.url
	        };
	      }
	    }
	    return parameters;
	  }
	
	};
	module.exports = exports['default'];

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ANDROID_CLIENT_LOCATION_ID = exports.IOS_CLIENT_LOCATION_ID = exports.LINUX_CLIENT_LOCATION_ID = exports.WINDOWS_CLIENT_LOCATION_ID = exports.MAC_CLIENT_LOCATION_ID = exports.WEB_CLIENT_LOCATION_ID = exports.INTERNET_LINK_LOCATION_ID = exports.UNKNOWN_LOCATION_ID = undefined;
	exports.getClientLocationId = getClientLocationId;
	
	var _configuration_store = __webpack_require__(149);
	
	var _configuration_store2 = _interopRequireDefault(_configuration_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UNKNOWN_LOCATION_ID = exports.UNKNOWN_LOCATION_ID = 0;
	var INTERNET_LINK_LOCATION_ID = exports.INTERNET_LINK_LOCATION_ID = 1;
	var WEB_CLIENT_LOCATION_ID = exports.WEB_CLIENT_LOCATION_ID = 2;
	var MAC_CLIENT_LOCATION_ID = exports.MAC_CLIENT_LOCATION_ID = 3;
	var WINDOWS_CLIENT_LOCATION_ID = exports.WINDOWS_CLIENT_LOCATION_ID = 4;
	var LINUX_CLIENT_LOCATION_ID = exports.LINUX_CLIENT_LOCATION_ID = 5;
	var IOS_CLIENT_LOCATION_ID = exports.IOS_CLIENT_LOCATION_ID = 6;
	var ANDROID_CLIENT_LOCATION_ID = exports.ANDROID_CLIENT_LOCATION_ID = 7;
	
	function getClientLocationId() {
	  var clientType = _configuration_store2.default.get('client_type');
	  var clientSubtype = _configuration_store2.default.get('client_subtype');
	  if (clientType === 'qt' && clientSubtype === 'windows') {
	    return WINDOWS_CLIENT_LOCATION_ID;
	  } else if (clientType === 'qt' && clientSubtype === 'linux') {
	    return LINUX_CLIENT_LOCATION_ID;
	  } else if (clientType === 'mac') {
	    return MAC_CLIENT_LOCATION_ID;
	  } else if (clientType === 'web') {
	    return WEB_CLIENT_LOCATION_ID;
	  }
	  return UNKNOWN_LOCATION_ID;
	}

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(120);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(121);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _stringify = __webpack_require__(147);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var URL_TEMPLATE_RE = new RegExp("{[^}]*}", "g");
	
	function getReplacement(parameters, variable) {
	  var value = _.get(parameters, variable, "");
	  if (_.isObject(value)) {
	    value = (0, _stringify2.default)(value);
	  } else {
	    value = String(value);
	  }
	  return value;
	}
	
	var URITemplate = function () {
	  function URITemplate(template) {
	    (0, _classCallCheck3.default)(this, URITemplate);
	
	    this.template = template;
	  }
	
	  (0, _createClass3.default)(URITemplate, [{
	    key: "getTemplateVariables",
	    value: function getTemplateVariables() {
	      var matches = this.template.match(URL_TEMPLATE_RE);
	      return _.uniq(_.map(matches, function (match) {
	        return match.slice(1, -1);
	      }));
	    }
	  }, {
	    key: "replaceVariables",
	    value: function replaceVariables(parameters) {
	      var uri = this.template;
	      var variables = this.getTemplateVariables();
	      _.each(variables, function (variable) {
	        uri = uri.replace("{" + variable + "}", encodeURIComponent(getReplacement(parameters, variable)));
	      });
	      return uri;
	    }
	  }, {
	    key: "getTemplateValuesFromParameters",
	    value: function getTemplateValuesFromParameters(parameters) {
	      var variables = this.getTemplateVariables();
	      return _.reduce(variables, function (accumulator, variable) {
	        accumulator[variable] = getReplacement(parameters, variable);
	        return accumulator;
	      }, {});
	    }
	  }]);
	  return URITemplate;
	}();
	
	exports.default = URITemplate;
	module.exports = exports['default'];

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }
/******/ ]);
//# sourceMappingURL=service_selector_main.js.map