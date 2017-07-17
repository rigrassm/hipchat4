
function focusChatInput() {
    var input = $('#hc-message-input')[0];
    if (input) {
        input.focus();
    }
}

define('bridge', [], function () {
    return new Promise(function (resolve, reject) {

        new QWebChannel(qt.webChannelTransport, function (channel) {

            var IndexBridge = channel.objects.IndexBridge;

            window.IndexBridge = IndexBridge;

            // This is the earliest signal after communication has started.
            // All init info should happen here
            IndexBridge.channelReady.connect(function () { });

            resolve(IndexBridge);
        });
    });

});

define("spi", ['SpiBase', 'bridge'], function (SpiBase, bridge) {
    function NativeSPI() { }

    NativeSPI.prototype = SpiBase.prototype;

    NativeSPI.prototype.getNotificationPermission = function () {
        return true;
    };

    bridge.then(function (IndexBridge) {

        // This is where any helper functions get attached to the IndexBridge to be used in multiple places within this file

        IndexBridge.onSignOut = function () {
            window.HC.api.clearWebCookies(function (resp) {
                window.HC.api.revokeOauth2Token(function () {
                    IndexBridge.onLogoutUser();
                });
            });
        };

        NativeSPI.prototype.focusApp = function () {
            IndexBridge.onActivateRequested();
            focusChatInput();
        }

        // The web client is sending individual settings as they are updated but we want to just parse the whole
        // settings object, so ignore the data passed and just retrieve all settings when they update us.
        NativeSPI.prototype.onPreferencesUpdated = function (data) {
            IndexBridge.getSettings(JSON.stringify(HC.api.getPreferences()));
        };

        NativeSPI.prototype.onNotification = function (data) {
            IndexBridge.incomingNotification((data.group_id || 0), (data.group_name || ""), data.jid, data.title, data.body, (data.html_body || ""));
        };

        NativeSPI.prototype.onTotalUnreadCountUpdate = function (count, hasMention) {
            IndexBridge.totalUnreadCountUpdate(count, hasMention);
        };

        // proxy button
        NativeSPI.prototype.buttonClickedProxySettings = function () {
            IndexBridge.systemProxySettingsRequested();
        };

        NativeSPI.prototype.onLogMessage = function (data) {
            IndexBridge.logMessage(data);
        };

        NativeSPI.prototype.onSignOut = function (hc, data) {
            IndexBridge.onSignOut();
        };

        NativeSPI.prototype.onStropheAuthFailed = function () {
            IndexBridge.onSignOut();
        };

        NativeSPI.prototype.openInternalWindow = function (url, name, props) {
            return window.oldWindowOpen(url, name, props);
        };

        NativeSPI.prototype.openExternalWindow = function (url, name, props) {
            IndexBridge.onLinkClicked(url);
        };
        NativeSPI.prototype.downloadFile = function (url) {
            IndexBridge.onDownloadFile(url);
        };

        NativeSPI.prototype.onSanitizeError = function (data) {
            return window.HC.api.sanitizeError(data);
        };


        NativeSPI.prototype.onDesktop4DialogShown = function () {
            IndexBridge.onDesktop4DialogShown();
        };

        NativeSPI.prototype.onInternalTokenRefreshed = function (token) {
            IndexBridge.internalTokenRefreshed(token);
        };

        NativeSPI.prototype.onAppStateReady = function (data) {
            var fullInitData = data;
            if (!fullInitData.addlive_app_id) {
                window.HC.api.requestAddLiveCredentials().then(function (result) {
                    fullInitData.addlive_app_id = result.app_id >>> 0;
                    console.log("addlive_app_id retrieved - " + fullInitData.addlive_app_id);
                    IndexBridge.onAppStateReady(JSON.stringify(fullInitData));
                }).catch(function (error) {
                    console.log('Failed to fetch addlive app id: ' + error.message + ' code: ' + error.code);
                    IndexBridge.onAppStateReady(JSON.stringify(fullInitData));
                });
            } else {
                console.log("onAppStateReady");
                IndexBridge.onAppStateReady(JSON.stringify(fullInitData));
            }
        };

        NativeSPI.prototype.initializeVideoWindow = function (url, name, props) {
            IndexBridge.logMessage("Call Create Video Window from JS");
            IndexBridge.onCreateVideoWindow(url);
            window.HC.api.onVideoConferenceJoined();
            return new Promise(function (resolve) {
                resolve({
                    focus: function () {
                        IndexBridge.logMessage("Call Focus Video Window from JS");
                        IndexBridge.onFocusVideoWindow();
                    },
                    close: function () {
                        IndexBridge.logMessage("Call Close Video Window from JS");
                        IndexBridge.onCloseVideoWindow();
                        window.HC.api.onVideoConferenceLeft();
                    }
                });
            });
        }

        NativeSPI.prototype.hasActiveVideoSession = function () {
            return new Promise(function (resolve) {
                IndexBridge.hasActiveVideoSession(function (returnValue) {
                    console.log("hasActiveVideoSession:" + returnValue);
                    resolve(returnValue);
                });
            });
        };

    });

    return new NativeSPI();
});
