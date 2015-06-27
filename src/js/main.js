(function(global){

  var window = global.window,
    document = global.document;

  var PC = {
    "version": "0.1.0"
  };

  // App class

  var App = function (id, path, options) {
    this.id = name;
    this.path = path;
    this.options = options || {};
    // Default app name
    this.options.name = this.options.name || "Untitled Cloud App";
  };

  PC.App = App;

  PC.main =  function() {
    var appFrame = document.getElementById("app-frame");
    var appFrameWindow = appFrame.contentWindow;
    PC.appFrameWindow = appFrameWindow, PC.appFrame = appFrame;
    PC.currentAppName = document.querySelector(".app-name");
    // Open the app store by default
    PC.apps.open(PC.apps.appList[0]);
  };

  PC.apps = {};

  // Temporary list of apps. Will be removed in the future.

  PC.apps.appList = [];
  // Temporary app store app
  PC.apps.appList.push(new PC.App("pegasus-app-center", "/apps/appcenter/index.html", {"name": "Pegasus App Center"}));

  PC.apps.open = function (app) {
    PC.appFrame.src = app.path;
    // Set app name
    PC.currentAppName.textContent = app.options.name;
  };

  addEventListener("DOMContentLoaded", PC.main, false);

  global.PC = PC;

})(window);