chrome.webRequest.onBeforeRequest.addListener(
  function (info) {
    return { cancel: true };
  },
  // filters
  {
    urls: [
      "*://*.chat.zalo.me/api/message/seen*",
      "*://*.chat.zalo.me/api/message/typing*",
      "*://*.chat.zalo.me/api/group/seen*",
      "*://*.chat.zalo.me/api/social/profile/ping*",
      "*://*.chat.zalo.me/keepalive*",
      "*://*.chat.zalo.me/api/message/deliveredv2*",
      "*://*.chat.zalo.me/api/group/deliveredv2*",
      "*://*.chat.zalo.me/api/message/delivered*",
      "*://*.chat.zalo.me/api/group/delivered*",
    ],
    types: ["csp_report", "font", "image", "main_frame", "media", "object", "other", "ping", "script", "stylesheet", "sub_frame", "websocket", "xmlhttprequest"]
  },
  // extraInfoSpec
  ["blocking"]
);