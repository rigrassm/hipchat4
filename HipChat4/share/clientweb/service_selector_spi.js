define('bridge', [], function() {
    return new Promise(function (resolve, reject){
        new QWebChannel(qt.webChannelTransport, function(channel) {

            var AuthBridge = channel.objects.AuthBridge;
            window.AuthBridge = AuthBridge;

            // This is the earliest signal after communication has started.
            // All init info should happen here
            AuthBridge.channelReady.connect( function() {
                console.log("channelReady emitted");
            });

            AuthBridge.controlChannelReady();
            resolve(AuthBridge);
        });
    });
});

define("spi", ['SpiBase', 'bridge'], function (SpiBase, bridge) {
    function NativeSPI() {  }

    NativeSPI.prototype = SpiBase.prototype;

    var lastLoginUrl = '';

    bridge.then((AuthBridge) => {
        AuthBridge.getLastServerUrl(function (url) {
            console.log(url);
            lastLoginUrl = url;
        });
    });

    NativeSPI.prototype.onCloudLoginShow = function (url) {
        bridge.then(function (AuthBridge) {
            AuthBridge.loginType(true);
        });
    };

    NativeSPI.prototype.onServerLoginShow = function (url) {
        bridge.then(function (AuthBridge) {
            AuthBridge.loginType(false);
            AuthBridge.setLastServerUrl(url);
        });
    };

    NativeSPI.prototype.onLegacyDownloadLinkClicked = function() {
        bridge.then(function (AuthBridge) {
            AuthBridge.downloadLegacyClient();
        });
    };

    NativeSPI.prototype.onServerOauthLogin = function(url) {
        bridge.then(function (AuthBridge) {
            console.log("do server oauth called");
            AuthBridge.doServerOauth();
        });
    };

    NativeSPI.prototype.getLastServerUrl = function() {
        return lastLoginUrl;
    };

    return new NativeSPI();
});
