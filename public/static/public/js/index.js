import "../styles/app.scss";

// polyfills (IE 11)
import "url-search-params-polyfill";
import "promise-polyfill/src/polyfill";
import "whatwg-fetch";

import React from "react";
import ReactDOM from "react-dom";

function addBanner(content) {
  var div = document.createElement("div");
  div.className = "notification-banner";
  div.appendChild(document.createTextNode(content));
  document.querySelector("body header").appendChild(div);
}

function checkIE() {
  var ua = window.navigator.userAgent;
  if (ua.indexOf("MSIE") > 0 || ua.indexOf("Trident/") > 0) {
    document.querySelector(".header__logo").src =
      "/static/public/images/openstates_logo.png";
    addBanner(
      "You are viewing this site in an outdated browser, some features may not work."
    );
  }
}

window.addEventListener("load", checkIE);
