define(["pc", "var/document", "dom/interface"], function (pc, document) {
  var infobar = document.querySelector(".pc-header");
  pc.interface.components.infobar = infobar;
});