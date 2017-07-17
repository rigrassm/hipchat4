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
/***/ function(module, exports) {

	'use strict';
	
	// closure my locals
	(function () {
	
	  // ------------------------------------------------------------------------
	  //
	  // Helpers
	  //
	
	  // Helper for select elements by tag name into an array
	  var query_all = function query_all(selector, visible_only) {
	    var items = Array.prototype.slice.call(document.querySelectorAll(selector));
	    if (visible_only) {
	      items = items.filter(function (el) {
	        return el.offsetParent !== null;
	      });
	    }
	    return items;
	  };
	
	  // Gets all text inputs
	  var get_text_inputs = function get_text_inputs(visible_only) {
	    return query_all('input[type=text],input[type=email],input[type=password]', visible_only);
	  };
	
	  // Focuses on first input
	  var focus_on_first_input = function focus_on_first_input() {
	    var input = get_text_inputs(true // visible_only
	    )[0];
	    if (input) {
	      input.focus();
	      if (typeof input.select === 'function') {
	        input.select();
	      }
	    }
	  };
	
	  var enable_submit = function enable_submit() {
	    // Enable the submit button
	    query_all('input[type=submit]').forEach(function (input) {
	      input.removeAttribute('disabled');
	    });
	  };
	
	  var disable_submit = function disable_submit() {
	    // Disable the submit button
	    query_all('input[type=submit]').forEach(function (input) {
	      input.setAttribute('disabled', 'disabled');
	    });
	  };
	
	  var show_error = function show_error(msg) {
	    query_all('.field-group', true // visible_only
	    )[0].classList.add('error');
	    query_all('.field-group', true // visible_only
	    )[0].innerHTML += '<div class="error-text">' + msg + '</div>';
	  };
	
	  var clear_error = function clear_error() {
	    query_all('.field-group', true // visible_only
	    )[0].classList.remove('error');
	    query_all('.error-text').forEach(function (el) {
	      el.remove();
	    });
	  };
	
	  // ------------------------------------------------------------------------
	  //
	  // Server check
	  //
	
	  var last_domain_value = '';
	  var check_domain = function check_domain(domain) {
	    if (!domain) {
	      domain = last_domain_value;
	    }
	    last_domain_value = domain;
	    // Clean it up
	    domain = domain.replace(/(^.*:\/\/|^ *|\/ *$| *$)/ig, '');
	
	    // Add the https back in
	    var full_url = 'https://' + domain;
	
	    // Try to check that url
	    clear_error();
	    disable_submit();
	    var xhr = new XMLHttpRequest();
	    var throw_xhr_error = function throw_xhr_error() {
	      enable_submit();
	      show_error('HipChat Server not found. Please ensure that the address is correct.');
	    };
	    xhr.onreadystatechange = function () {
	      if (xhr.readyState === xhr.DONE) {
	        if (xhr.status === 200) {
	          try {
	            var features = JSON.parse(xhr.responseText).features;
	
	            // Invaid JSON
	          } catch (e) {
	            throw_xhr_error();
	          }
	
	          // Parse the results of that JSON
	          var is_128_or_higher_supports_nonce = features.xmpp_compression;
	          var is_137_or_higher_supports_oauth = features.web_client_reconnect_header;
	
	          // Newer server
	          if (is_137_or_higher_supports_oauth) {
	            window.spi.onServerLoginShow(full_url);
	            window.spi.onServerOauthLogin(full_url);
	
	            // Older server
	          } else if (is_128_or_higher_supports_nonce) {
	              window.spi.onServerLoginShow(full_url);
	              document.location.href = full_url + '/sign_in';
	
	              // Got valid json, didn't get valid server data for desktop login
	            } else {
	                throw_xhr_error();
	              }
	
	          // Got a non 200 response
	        } else {
	            throw_xhr_error();
	          }
	      }
	    };
	    xhr.open('GET', full_url + '/api/features', true);
	    xhr.send();
	  };
	
	  query_all('#domain-form')[0].addEventListener('submit', function (e) {
	    e.preventDefault();
	    check_domain(query_all('#domain-input')[0].value);
	  });
	
	  // ------------------------------------------------------------------------
	  //
	  // Cloud Login
	  //
	
	  query_all('#login-form')[0].addEventListener('submit', function (e) {
	    e.preventDefault();
	    disable_submit();
	    window.spi.onCloudLoginShow(query_all('#email-input')[0].value);
	  });
	
	  // ------------------------------------------------------------------------
	  //
	  // QT/MAC Api
	  //
	  window.HCLogin = window.HCLogin || {};
	  window.HCLogin.API = window.macapi = {
	    clearError: function clearError() {
	      clear_error();
	    },
	    showCertificateError: function showCertificateError() {
	      show_error("You chose to not trust this HipChat Server's certificate. Check with your admins to find out if you should trust it.");
	    },
	    retrySubmit: function retrySubmit() {
	      check_domain();
	    }
	  };
	
	  // ------------------------------------------------------------------------
	  //
	  // Enable / Disable buttons
	  //
	  var inputs_passed = false;
	
	  // Will only enable submit if captcha is passed
	  var try_enable_submit = function try_enable_submit() {
	
	    // Test whether the inputs were passing
	    if (!inputs_passed) {
	      return;
	    }
	
	    enable_submit();
	  };
	
	  var check_field_validation = function check_field_validation(e) {
	
	    // Ignore enter key presses so doesnt re-enable on submit
	    if (e && e.keyCode && e.keyCode === 13) {
	      return;
	    }
	
	    var all_fields_valid = true;
	
	    // All input fields
	    get_text_inputs(true // visible_only
	    ).forEach(function (input) {
	
	      if (input.type === 'email') {
	        if (!input.value.match(/.+@.+\..+/) || input.value === input.getAttribute('value')) {
	          all_fields_valid = false;
	        }
	
	        // Normal case of detecting based on current value, against original html attribute value
	      } else {
	          if (input.value === input.getAttribute('value')) {
	            all_fields_valid = false;
	          }
	        }
	    }); // end forEach on inputs
	
	    // Based on results from all fields, enable or disable
	    if (all_fields_valid) {
	      inputs_passed = true;
	      try_enable_submit();
	    } else {
	      inputs_passed = false;
	      disable_submit();
	    }
	  }; // end check_field_validation
	
	  // Wait until dom load for interacting with dom
	  document.addEventListener("DOMContentLoaded", function () {
	
	    // When any input is changed ...
	    get_text_inputs().forEach(function (input) {
	      input.addEventListener('keyup', check_field_validation); // captures most cases
	      input.addEventListener('change', check_field_validation); // this is just paranoia, maybe not necessary
	      input.addEventListener('input', check_field_validation); // detects paste events
	      check_field_validation(); // detects cases of password managers
	    });
	
	    focus_on_first_input();
	  }); // end DOMContentLoaded
	
	  // ------------------------------------------------------------------------
	  //
	  // Toggle between server / login
	  //
	
	  query_all('#select-server')[0].addEventListener('click', function (e) {
	    e.preventDefault();
	    query_all('body')[0].classList.add('server-mode');
	    focus_on_first_input();
	    check_field_validation();
	  });
	
	  query_all('#select-login')[0].addEventListener('click', function (e) {
	    e.preventDefault();
	    query_all('body')[0].classList.remove('server-mode');
	    focus_on_first_input();
	    check_field_validation();
	  });
	})(); // end closure for locals

/***/ }
/******/ ]);
//# sourceMappingURL=login_main.js.map