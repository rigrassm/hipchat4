
$(document).on('app-state-ready', function () {

    function connectIndexBridge(IndexBridge) {
    IndexBridge.requestSettings.connect(function () {
      IndexBridge.getSettings(JSON.stringify(HC.api.getPreferences()), function (returnVal) {
        console.log("Sent settings to Qt from spi.js. return val=" + returnVal);
      });
    });

    IndexBridge.showSettingsDialog.connect(function () {
      IndexBridge.getSettings(JSON.stringify(HC.api.getPreferences()), function (returnVal) {
        console.log("Sent settings to Qt from spi.js. return val=" + returnVal);
      });
    });

    // TODO: Replace with API function once implemented
    IndexBridge.focusChatInput.connect(function () {
        focusChatInput();
    });

    // signals can pass in data
    IndexBridge.setSettings.connect(function (text) {
      console.log("set Settings called with text = " + text);
      var settingsJSON = JSON.parse(text);
      HC.api.setPreferences(settingsJSON);
      console.log("setSettings completed");
    });
    // signals can pass in data
    IndexBridge.setSpellCheck.connect(function (enable) {
      console.log("set spellcheck called with = " + enable);
      var settingsJSON = HC.api.getPreferences();
      settingsJSON["enableSpellCheck"] = enable;
      HC.api.setPreferences(settingsJSON);
      console.log("setspellcheck completed");
    });

    IndexBridge.sendMessagetoJid.connect(function (jid, text) {
      console.log("jid: " + jid + " text: " + text);
      window.HC.api.sendMessage({"jid": jid, "text": text});
      window.HC.api.openChat({"jid": jid});
    });

    IndexBridge.raiseChatByJid.connect(function (jid) {
      window.HC.api.openChat({"jid": jid});
    });

    IndexBridge.idleStatusChanged.connect(function (text) {
      window.HC.api.setUserStatus({"idle": text === "true"});
    });

    IndexBridge.joinChatClicked.connect(function (text) {
      window.HC.api.openQuickSwitcher();
    });

    IndexBridge.createRoomClicked.connect(function () {
      window.HC.api.createRoom();
    });

    IndexBridge.inviteToRoomClicked.connect(function () {
      window.HC.api.inviteUsersToRoom();
    });

    IndexBridge.nextChatClicked.connect(function () {
      window.HC.api.navigateChatDown();
    });

    IndexBridge.previousChatClicked.connect(function () {
      window.HC.api.navigateChatUp();
    });

    IndexBridge.systemTraySettingsClicked.connect(function (text) {
      window.HC.api.showPreferencesDialog();
    });

    IndexBridge.getInitData(JSON.stringify(HC.api.getInitData()), function (returnVal) {
      console.log("Sent initData to Qt from spi.js. return val=" + returnVal);
    });

    IndexBridge.pasteFileLink.connect(function (file) {
      window.HC.api.addFileForUploadWithUrl(file, "paste");
    });

    IndexBridge.pasteBase64File.connect(function (file) {
      window.HC.api.addFileForUploadWithBase64(file, "paste");
    });

    IndexBridge.showDesktop4Dialog.connect(function () {
        window.HC.api.showDesktop4Dialog();
    });

    IndexBridge.appBlurred.connect(function () {
        window.HC.api.blurApp();
    });
    IndexBridge.appFocused.connect(function () {
        window.HC.api.focusApp();
    });

    IndexBridge.networkDown.connect(function () {
        console.log("online status NETWORK_DOWN");
        IndexBridge.logMessage("online status NETWORK_DOWN");
        window.HC.api.onConnectionChanged(window.HC.api.ConnectionStatus.NETWORK_DOWN);
    });

    IndexBridge.networkUp.connect(function () {
        console.log("online status NETWORK_UP");
        IndexBridge.logMessage("online status NETWORK_UP");
        window.HC.api.onConnectionChanged(window.HC.api.ConnectionStatus.NETWORK_UP);
    });

    IndexBridge.logoutRequested.connect(function() {
        IndexBridge.onSignOut();
    });

    IndexBridge.disconnectStrophe.connect(function () {
        window.HC.api.onConnectionChanged( window.HC.api.ConnectionStatus.SUSPEND, function () {
            IndexBridge.onStropheDisconnected();
            console.log("connection suspend callback");
        });
    });

    IndexBridge.getDownloadURL.connect(function (url) {
      window.HC.api.getFileUrls(url).then(function(fileUrls) {
        IndexBridge.onDownloadFile(fileUrls.downloadUrl);
      }).catch(function (error) {
        IndexBridge.logMessage('Unable to get download url: ' + error);
      });
    });
    IndexBridge.openSignedURL.connect(function (url) {
      window.HC.api.getFileUrls(url).then(function(fileUrls) {
        IndexBridge.onLinkClicked(fileUrls.signedUrl);
      }).catch(function (error) {
        IndexBridge.logMessage('Unable to get signed url: ' + error);
      });
    });
    IndexBridge.copyPublicURL.connect(function (url) {
      window.HC.api.getFileUrls(url).then(function(fileUrls) {
        IndexBridge.onCopyPublicURL(fileUrls.url);
      }).catch(function (error) {
        IndexBridge.logMessage('Unable to get signed url: ' + error);
      });
    });
    IndexBridge.videoCallEnded.connect(function() {
        window.HC.api.onVideoConferenceLeft();
        console.log("window.HC.api.onVideoConferenceLeft");
        IndexBridge.clearActiveVideoSession();
    });


    IndexBridge.onWebClientLoaded();
  }

  function bindEventHandlers(IndexBridge){
    var $body = $('body'),
      $document = $(document);

    //! open links in external browser
    // 'click' event is used to prevent redirect.
    $document.on('click', 'a', function (event) {
      var isPopup = $(this).attr("target") === "_blank";
      var isDefaultPrevented = event.isDefaultPrevented();
      var href = $(this).attr('href');

      if (isPopup && !isDefaultPrevented && href) {
        IndexBridge.onLinkClicked(href);
        event.preventDefault();
      }
    });

    window.oldWindowOpen = window.open;
    window.open = function(url, windowName, windowOpts) {
      IndexBridge.onLinkClicked(url);
    };

    $body.on('mousedown', 'a', function (event) {
      var href = $(this).attr('href');
      if (href && href.indexOf("#") !== 0 && event.which === 3) {
        IndexBridge.handleRightLinkClicked(href);
        event.preventDefault();
        return false;
      }

      if (href && event.which === 2) {
        IndexBridge.onLinkClicked(href);
        event.preventDefault();
      }

      return true;
    });
  }

  require('bridge').then(function (IndexBridge) {
    connectIndexBridge(IndexBridge);
    bindEventHandlers(IndexBridge);
  });
});

define('sentryHelper', ['spi'], function (spi) {

  function sanitizeData(data) {
    return spi.onSanitizeError(data);
  }

  function setupSentry(config, web_core_version) {
    if (Raven && config) {
      console.log("Initializing sentry for build number " + config.client_version_build_number );
      Raven.config('https://8a89ec05e1b94f68a1a40456894a8296@app.getsentry.com/52685', {
        release: config.client_version_build_number,
        tags: {
          version: config.client_version_id,
          client_type: config.client_type,
          client_subtype: config.client_subtype,
          client_os_version: config.client_os_version_id,
          web_core_version : web_core_version
        },
        shouldSendCallback: function(data) {
          // only send 25% of errors
          return (Math.random() * 100 <= 25);
        },
        dataCallback: function(data) {
          return sanitizeData(data);
        }
      }).install();
    }
  }

  return {
    setupSentry: setupSentry
  };

});

// debug settings
var debugOAuthRefresh = false;
var currentOauthRefreshPromise = null;
var refreshTime = 5;

require('bridge').then(function (IndexBridge) {
    var sentryHelper = require('sentryHelper');

    IndexBridge.startWebClient.connect(function(clientConfigStr) {
        IndexBridge.logMessage("Start");
        var clientConfig = JSON.parse(clientConfigStr);
        if (!clientConfig.initState) {
            // needed for server config merge in hipchat-client.js
            clientConfig.initState = {};
        } else {
            if (debugOAuthRefresh) {
                clientConfig.initState.expires_in = refreshTime;
            }
            // cloud reconnect code
            clientConfig.initState.onRefreshOAuthAccessToken = function() {
                if (currentOauthRefreshPromise) {
                    IndexBridge.logMessage("[OAuth2] Refresh token already in progress, returning promise");
                    return currentOauthRefreshPromise;
                }

                IndexBridge.logMessage("[OAuth2] Requesting oauth token refresh...");
                currentOauthRefreshPromise = new Promise(function (resolve, reject) {
                    IndexBridge.resolvedOAuthSession.connect(function(authInfo, err) {
                        if (authInfo) authInfo = JSON.parse(authInfo);
                        if (err) err = JSON.parse(err);

                        if (debugOAuthRefresh) {
                            authInfo.expires_at -= authInfo.expires_in;
                            authInfo.expires_in = refreshTime;
                            authInfo.expires_at += authInfo.expires_in;
                        }

                        if ((authInfo) && (authInfo.expires_at * 1000) < Date.now()) {
                            IndexBridge.logMessage("[OAuth2] Resolved with expired token. Ask for another refresh...");
                            IndexBridge.requestNewOAuthSession();
                            return
                        }

                        // treat this as a registerOnce by disconnecting when it is called
                        IndexBridge.resolvedOAuthSession.disconnect(this);
                        if (!err) {
                            IndexBridge.logMessage("[OAuth2] Resolving oauth token refresh with info:\n" + JSON.stringify(authInfo));
                            resolve(authInfo);
                        } else {
                            IndexBridge.logMessage("[OAuth2] Rejecting oauth token refresh with error:\n" + JSON.stringify(err));
                            if (debugOAuthRefresh) refreshTime = 300;
                            reject(err);
                        }
                        currentOauthRefreshPromise = null;
                    });
                });

                IndexBridge.requestNewOAuthSession();
                return currentOauthRefreshPromise;
            };
        }
        $('#hipchat').addClass('platform-' + clientConfig.client_subtype);
        var platformConfigBase = window.platformConfigs.base;
        var platformConfig = window.platformConfigs[clientConfig.client_subtype];
        var config = _.merge({}, platformConfigBase, platformConfig, clientConfig);

        IndexBridge.webCoreVersionStringRetrieved.connect(function (versionStr) {
            console.log("Retrieve WebCore version from client : " + versionStr);
            var isProduction = config.is_production;
            var isBTF = (config.feature_flags && config.feature_flags.btf);
            if (isProduction && !isBTF) {
                // Only setup Sentry for production and Cloud
                sentryHelper.setupSentry(config, versionStr);
            }
        });
        IndexBridge.getWebCoreVersionString();

        var client = new HipChatClient(config);
        client.render();
    });
    IndexBridge.controlChannelReady();
});

$('body').on('click', function (event) {
  // disable middle mouse clicks
  if (event.which === 2) {
    event.preventDefault();
    event.stopImmediatePropagation();
    return false;
  }
});
