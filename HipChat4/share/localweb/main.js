/*global QWebChannel, define, HipChatClient, HC*/
define("spi", ['SpiBase', 'ipc'], function (SpiBase, ipc) {
  function NativeSPI() {}

  NativeSPI.prototype = SpiBase.prototype;

  NativeSPI.prototype.getNotificationPermission = function () {
    return true;
  };

  var nativeSPI = new NativeSPI();

  ipc.then(function (IndexBridge){
    if (!IndexBridge) {
      return;
    }

    IndexBridge.setSettings.connect(function(text) {
      var settingsJSON = JSON.parse(text);
      HC.api.setPreferences(settingsJSON);
    });

    nativeSPI.onNotification = function( data ) {
      IndexBridge.incomingNotification( data.jid, data.title, data.body );
      console.log( "onNotification", data.title, data.body );
    };

    nativeSPI.onTotalUnreadCountUpdate = function (count, hasMention) {
      IndexBridge.totalUnreadCountUpdate( count, hasMention);
    };

    nativeSPI.showPreferencesDialog = function () {
      IndexBridge.showSettings();
    };

    nativeSPI.openInternalWindow = function(url, name, props) {
      //native call
    };

    nativeSPI.openExternalWindow = function(url, name, props) {
      //native call
    };

    window.open = function(url, windowName, windowOpts) {
      return nativeSPI.openExternalWindow(url, windowName, windowOpts);
    };

  });

  return nativeSPI;
});

define('ipc', [], function() {
  return new Promise(function (resolve, reject){

    // resolve immediately for dev setTimeout is to allow the HipChatClient to load
    return setTimeout(resolve, 100);

    function WebEventHandler() {
      this.controlWsUrl = (/[?&]control=([^&]*)/.exec(location.search)[1]);
      this.socket = new WebSocket(this.controlWsUrl);

      this.socket.onclose = this.onSocketClose.bind(this);
      this.socket.onerror = this.onSocketError.bind(this);
      this.socket.onopen = this.onSocketOpen.bind(this);
    }

    WebEventHandler.prototype.onSocketError = function (error) {
      console.error("WebSocket error ", error, this.socket);
      reject(error);
    };

    WebEventHandler.prototype.onSocketClose = function () {
      console.error("WebSocket closed");
    };

    WebEventHandler.prototype.onSocketOpen = function () {
      console.log("WebSocket connected");

      new QWebChannel(this.socket, function(channel) {
        var IndexBridge = channel.objects.QtBridge;
        // This is the earliest signal after communication has started.
        // All init info should happen here
        IndexBridge.channelReady.connect(function() {
          resolve(IndexBridge);
        });

        // Functions and signal connections finished
        IndexBridge.controlChannelReady();
      });
    };

    return new WebEventHandler();
  });
});

require(['ipc'], function (ipc) {
  ipc.then(function () {

    var client = new HipChatClient({
      // The following are required establish the BOSH connection.
      // These properties will be retrieved during the authorization step
      // of the OAuth flow.
      // https://extranet.atlassian.com/display/HC/Public+OAuth+client+sample+flow
      config: {
        auth_method: 'oauth2',
        access_token: '<access_token>',
        jid: '<jid>',
        user_id: '<uid>',
        route: '<route>',
        bind_url: '<bind_url>',
        chat_server: '<chat_server>'
      },

      base_url: 'https://atlassian.hipchat.com', // hard coded for dev - ex: '<https://hipchat.server.url>'

      // client identifier
      client_type: 'qt',
      client_subtype: 'windows',
      client_version_id: '4.0',

      asset_base_uri: '',
      video_chat_uri: 'video/index.html',
      html5_routing_enabled: false,
      feature_flags: {
        "web_client_appearance_settings": true,
        "web_client_file_viewer": true,
        "web_client_integrations": false,
        "web_client_per_room_notifications": true,
        "web_client_subdomain_scoped_session": false,
        "web_client_video_chat": true,
        "web_client_embedded_search": false
      },
      
      keyboard_shortcuts: {
        "ctrl+t": {
          "action": "newChat"
        },
        "ctrl+i": {
          "action": "inviteUsersToRoom"
        },
        "ctrl+w": {
          "action": "closeRoom"
        },
        "ctrl+shift+tab": {
          "action": "navigateRoomsUp"
        },
        "ctrl+tab": {
          "action": "navigateRoomsDown"
        },
        "ctrl+f": {
          "action": "searchHistory"
        },
        "ctrl+shift+s": {
          "action": "toggleSoundNotifications"
        },
        "ctrl+/": {
          "action": "viewShortcuts"
        }
      },
      "smileys": {
        ":D": {
          "shortcut": ":D",
          "width": 20,
          "height": 20,
          "file": "bigsmile.png"
        },
        ":-D": {
          "shortcut": ":-D",
          "width": 20,
          "height": 20,
          "file": "bigsmile.png"
        },
        ":o": {
          "shortcut": ":o",
          "width": 20,
          "height": 20,
          "file": "gasp.png"
        },
        ":Z": {
          "shortcut": ":Z",
          "width": 20,
          "height": 20,
          "file": "sealed.png"
        },
        ":p": {
          "shortcut": ":p",
          "width": 20,
          "height": 20,
          "file": "tongue.png"
        },
        ";p": {
          "shortcut": ";p",
          "width": 20,
          "height": 20,
          "file": "winktongue.png"
        },
        ">:-(": {
          "shortcut": ">:-(",
          "width": 20,
          "height": 20,
          "file": "angry.png"
        },
        "8)": {
          "shortcut": "8)",
          "width": 20,
          "height": 20,
          "file": "cool.png"
        },
        "8-)": {
          "shortcut": "8-)",
          "width": 20,
          "height": 20,
          "file": "cool.png"
        },
        ":'(": {
          "shortcut": ":'(",
          "width": 20,
          "height": 20,
          "file": "cry.png"
        },
        ":(": {
          "shortcut": ":(",
          "width": 20,
          "height": 20,
          "file": "frown.png"
        },
        ":#": {
          "shortcut": ":#",
          "width": 20,
          "height": 20,
          "file": "footinmouth.png"
        },
        "(embarrassed)": {
          "shortcut": "(embarrassed)",
          "width": 20,
          "height": 20,
          "file": "embarrassed.png"
        },
        "O:)": {
          "shortcut": "O:)",
          "width": 20,
          "height": 20,
          "file": "innocent.png"
        },
        ":-*": {
          "shortcut": ":-*",
          "width": 20,
          "height": 20,
          "file": "kiss.png"
        },
        ":$": {
          "shortcut": ":$",
          "width": 20,
          "height": 20,
          "file": "moneymouth.png"
        },
        "(oops)": {
          "shortcut": "(oops)",
          "width": 20,
          "height": 20,
          "file": "oops.png"
        },
        ":": {
          "shortcut": ":\\",
          "width": 20,
          "height": 20,
          "file": "slant.png"
        },
        ":)": {
          "shortcut": ":)",
          "width": 20,
          "height": 20,
          "file": "smile.png"
        },
        ":-)": {
          "shortcut": ":-)",
          "width": 20,
          "height": 20,
          "file": "smile.png"
        },
        "=)": {
          "shortcut": "=)",
          "width": 20,
          "height": 20,
          "file": "smile.png"
        },
        ":|": {
          "shortcut": ":|",
          "width": 20,
          "height": 20,
          "file": "straightface.png"
        },
        "(thumbsdown)": {
          "shortcut": "(thumbsdown)",
          "width": 20,
          "height": 20,
          "file": "thumbs_down.png"
        },
        "(thumbsup)": {
          "shortcut": "(thumbsup)",
          "width": 20,
          "height": 20,
          "file": "thumbs_up.png"
        },
        ";)": {
          "shortcut": ";)",
          "width": 20,
          "height": 20,
          "file": "wink.png"
        },
        ";-)": {
          "shortcut": ";-)",
          "width": 20,
          "height": 20,
          "file": "wink.png"
        }
      },
      ui: {
        clickable_logo: false
      }
    });
    client.render();
  });
});