function universalStringHash(str) {
  var hash = 0, chr;
  for (var idx = 0, max = str.length; idx < max; idx++) {
    chr = str.charCodeAt(idx);
    hash = hash * 31 + chr;
    hash &= hash;
  }
  return hash;
}

function colorForString(str) {
  if (typeof str === "number") {
    str = str.toString();
  }
  var colors = [
    '#88d3ff', // 04
    '#59afe1', // 05
    '#2774a0', // 06
    '#1a8cff', // 07
    '#b2e020', // 10
    '#8eb021', // 11
    '#2f7a0e', // 12
    '#0bbe30', // 13
    '#14892c', // 14
    '#005812', // 15
    '#fe5e50', // 16
    '#d04437', // 17
    '#88170c', // 18
    '#f6c342', // 19
    '#f79232', // 20
    '#b05600', // 21
    '#d39c3f', // 22
    '#815b3a', // 23
    '#594300', // 24
    '#a659f5', // 25
    '#654982', // 26
    '#3d1368', // 27
    '#f691b2', // 28
    '#f15c75', // 29
    '#be1733', // 30
    '#ff4f92', // 104
    '#ff0d6e', // 105
    '#b3003e', // 106
    '#ffe400', // 108
    '#ffae00', // 109
    '#00d2ff', // 111
    '#0096ff', // 112
    '#d84dff', // 113
    '#b400ff', // 114
    '#7e00ff', // 115
    '#ffd200', // 116
    '#ff7f00', // 117
    '#ff2f00'  // 118
  ];

  var colorIndex = Math.abs(universalStringHash(str) % colors.length);
  return colors[colorIndex];
}

function addAvatarBGtoInitState(color) {
  var colorObj = {
        group_avatar_bg: (typeof color === "string") ? color : null
      },
      newObj,
      $body = $("body");

  newObj = $.extend($body.data("init-state"), colorObj);
  $body.data("init-state", newObj);
}

$(document).on('hipchat.load', function() {
  var groupAvatar = $('.avatar-dynamic'),
      groupColorStr;
  if (groupAvatar.length) {
    groupColorStr = groupAvatar.attr('data-color-string');
    if (groupColorStr) {
      groupAvatar.css('background-color', colorForString(groupColorStr));
    }
  }
});
