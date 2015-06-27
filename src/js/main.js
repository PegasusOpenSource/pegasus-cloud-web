(function(global){

  var window = global.window,
    document = global.document;

  var PC = {
    "version": "0.1.0"
  };

  // App class

  var App = function (id, path, options) {
    this.id = id;
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
    var appCenter = PC.apps.getById("pegasus-app-center");
    PC.apps.open(appCenter);
  };

  PC.apps = {};

  PC.apps.appList = [];
  // Temporary app store app


  PC.apps.open = function (app) {
    PC.appFrame.src = app.path;
    // Set app name
    PC.currentAppName.textContent = app.options.name;
  };

  PC.apps.add = function (app) {
    PC.apps.appList.push(app);
  };

  PC.apps.getById = function (id) {
    for (var i = 0; i < PC.apps.appList.length; i++) {
      if (PC.apps.appList[i].id === id) {
        return PC.apps.appList[i];
      }
    }
  };

  // Temporary code

  PC.apps.add(new PC.App("pegasus-app-center", "/apps/appcenter/index.html", {"name": "Pegasus App Center"}));

  // App store app. Will later be stored in a database


  addEventListener("DOMContentLoaded", PC.main, false);

  global.PC = PC;

})(window);