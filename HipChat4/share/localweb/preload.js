/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*global getEvent*/

	/**
	 * A loader screen for the web client.
	 *
	 * This module is responsible for bootstrapping the web client interface.
	 *
	 * Please keep imports into this module to a minimum. i.e. none.
	 */
	(function () {

	  var delay = 20 * 1000;

	  var loadingMessages = __webpack_require__(1),
	      listeners = [],
	      eventQueue = [],
	      shouldShowStatusLink = false;

	  var loadingMessage = document.querySelector('.loading-message');

	  /**
	   * Builds a basic analytics event object with some of the expected properties.  Once the analytics object is
	   * initialized, we can populate the rest of properties GAS expects
	   *
	   * @param name the name of the analytics event
	   *
	   * @returns {object} the object containing the minimum expected values
	   */
	  function makeEvent(name) {
	    return {
	      "name": name,
	      "serverTime": new Date().getTime()
	    };
	  }

	  function setMessage(message) {
	    loadingMessage.querySelector('p').textContent = message;
	  }

	  function removeMessage() {
	    loadingMessage.removeChild(loadingMessage.querySelector('p'));
	  }

	  function handleFirstTimer() {
	    eventQueue.push(makeEvent("hipchat.client.load.timeout.1"));
	    setMessage(loadingMessages.loading);
	  }

	  function handleSecondTimer() {
	    eventQueue.push(makeEvent("hipchat.client.load.timeout.2"));
	  }

	  function elAppend(el, html) {
	    el.insertAdjacentHTML('beforeend', html);
	  }

	  function elAddClass(el, strClass) {
	    if (el.classList) {
	      el.classList.add(strClass);
	    } else {
	      // for IE9
	      el.className += ' ' + strClass;
	    }
	  }

	  function elRemove(el) {
	    el.parentNode.removeChild(el);
	  }

	  function onDomReady(fn) {
	    if (document.readyState !== 'loading') {
	      fn();
	    } else {
	      document.addEventListener('DOMContentLoaded', fn);
	    }
	  }

	  function cleanup() {
	    listeners = null;
	    delete window.preloaderEvents;
	  }

	  function firePreloaderComplete(queue) {
	    if (listeners) {
	      listeners.forEach(function (listener) {
	        listener(queue);
	      });
	    }
	    cleanup();
	  }

	  window.preloaderEvents = {
	    onComplete: function onComplete(handler) {
	      listeners.push(handler);
	    }
	  };

	  function handleFinalTimer() {
	    eventQueue.push(makeEvent("hipchat.client.load.failed"));
	    firePreloaderComplete(eventQueue);

	    setMessage(loadingMessages.failed);

	    elAppend(loadingMessage, '<p><button class=\'aui-button\' id=\'try-again\' type=\'button\'>' + loadingMessages.try_again + '</button></p>');
	    if (shouldShowStatusLink) {
	      elAppend(loadingMessage, '<p><a href=\'https://status.hipchat.com\' target=\'_blank\'>' + loadingMessages.check_status + '</a></p>');
	    }

	    var tryAgainBtn = loadingMessage.querySelector('#try-again');
	    tryAgainBtn.style.margin = '5px 0';
	    tryAgainBtn.onclick = function () {
	      return window.location.reload();
	    };

	    elAddClass(loadingMessage, 'sad');
	  }

	  function showPolicyViolationMessage(_ref) {
	    var web_server = _ref.web_server;

	    eventQueue.push(makeEvent("hipchat.client.load.failed"));
	    firePreloaderComplete(eventQueue);

	    removeMessage();
	    elAppend(loadingMessage, loadingMessages.policy_violation(web_server));

	    elAddClass(loadingMessage, 'sad');
	  }

	  function checkBrowserSupport() {
	    var el = document.querySelector('.unsupported-browser');

	    if (el && el.style.display !== 'none') {
	      eventQueue.push(getEvent("hipchat.client.load.failed.unsupported"));
	      firePreloaderComplete(eventQueue);
	    }
	  }

	  // Push an event that indicates we're beginning the load process
	  eventQueue.push(makeEvent("hipchat.client.load.begin"));

	  // Setup our loading timeouts
	  var timeouts = [setTimeout(handleFirstTimer, delay), setTimeout(handleSecondTimer, delay * 2), setTimeout(handleFinalTimer, delay * 3)];

	  onDomReady(checkBrowserSupport);

	  var clearTimeouts = function clearTimeouts() {
	    return timeouts.forEach(function (t) {
	      return clearTimeout(t);
	    });
	  };

	  function onAppReady() {
	    elRemove(loadingMessage);
	    clearTimeouts();
	    eventQueue.push(makeEvent("hipchat.client.load.end"));
	    firePreloaderComplete(eventQueue);

	    // remove jquery event handler
	    delete document['onapp-state-ready'];
	  }

	  function onAppError(evt, data) {
	    clearTimeouts();
	    showPolicyViolationMessage(data);
	    delete document['onapp-error'];
	  }

	  function onAppFeatureFlags(evt, data) {
	    if (data && data.feature_flags && data.feature_flags.btf === false) {
	      shouldShowStatusLink = true;
	    }
	    delete document['onapp-feature-flags'];
	  }

	  // add handler for jquery event
	  document['onapp-state-ready'] = onAppReady;
	  document['onapp-error'] = onAppError;
	  document['onapp-feature-flags'] = onAppFeatureFlags;
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _common_strings = __webpack_require__(2);

	var _common_strings2 = _interopRequireDefault(_common_strings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  loading: 'Loading ' + _common_strings2.default.app_name + '…',
	  failed: 'Couldn\'t load HipChat.',
	  try_again: 'Try again',
	  check_status: 'Check our status',
	  policy_violation: function policy_violation(web_server) {
	    return '<p>You currently have 10 active sessions which is the maximum number allowed.</p>\n                                      <p>You can manage your active sessions <a href="https://' + web_server + '/account/sessions">here</a>.</p>';
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  app_name: 'HipChat',
	  filter_label: 'Filter rooms and people',
	  filter: 'Filter',
	  all: 'All',
	  rooms: 'Rooms',
	  people: 'People',
	  sign_in: 'Sign in',
	  lobby: 'Lobby',
	  youre_welcome: 'you\'re welcome here',
	  search_results: 'Search results',
	  buttons: {
	    create_room: 'Create a room',
	    invite_team: 'Invite your team',
	    invite_team_in_lobby: 'Invite someone to join!',
	    invite_team_in_qs: 'Invite them to join!',
	    invite_team_in_invite_users_dialog: 'Invite them to join!'
	  },
	  no_one_found: 'No one found',
	  loud: 'Loud',
	  normal: 'Normal',
	  quiet: 'Quiet',
	  room_not_found: 'We couldn\'t find that room. It may have been deleted or you may have the wrong ID.',
	  user_not_found: 'We couldn\'t find that person.'
	};
	module.exports = exports['default'];

/***/ }
/******/ ]);