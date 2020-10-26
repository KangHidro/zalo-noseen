chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    return {cancel: true};
  },
  // filters
  {
    urls: [
	  "*://*.chat.zalo.me/api/message/seen*",
	  "*://*.chat.zalo.me/api/message/typing*"
    ],
    types: ["csp_report", "font", "image", "main_frame", "media", "object", "other", "ping", "script", "stylesheet", "sub_frame", "websocket", "xmlhttprequest"]
  },
  // extraInfoSpec
  ["blocking"]
);