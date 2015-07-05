define(["pc", "dom/appframe", "components/app", ], function (pc, appframe) {
  var app = {};

  // Set current app
  app.currentApp = null;

  app.run = function (appObj) {
    app.update(appObj);
  };

  app.update = function (appObj) {
    appframe.src = appObj.dir;
    app.currentApp = appObj;
  };

  pc.app = app;
});