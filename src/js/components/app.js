define([], function () {
  var App = function (appID, settings) {
    // Use the settings.id as appID if only a settings object is passed
    typeof appID === "object" && (settings = appID, appID = settings.ID);

    // Throw error if appID is not a string

    if (typeof appID !== "string") {
      throw new TypeError("appID must be a string");
    }

    this.appID = appID;
    this.settings = settings;

    // Use default name if app doesn't have a name or name is falsey
    this.name = settings.name ? settings.name : "Untitled Cloud App";
    // App directory
    this.url = settings.url;
  };

  // Set app to global
  window.App = App;
});