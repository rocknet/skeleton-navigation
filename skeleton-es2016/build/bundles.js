module.exports = {
  "bundles": {
    "dist/app-build": {
      "includes": [
        "[**/*.js]",
        "**/*.html!text",
        "**/*.css!text",
        "[aurelia-kendoui-bridge]",
        "[aurelia-kendoui-bridge/**/*.js]",
        "aurelia-kendoui-bridge/**/*.html!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": false
      }
    },
    "dist/kendo-build": {
      "includes": [ 
        "kendo-ui/js/*.js",
        "kendo-ui/styles/kendo.common.min.css!text",
        "kendo-ui/styles/kendo.blueopal.min.css!" 
      ],
      "excludes": [
        "kendo-ui/js/jquery.js",
        "kendo-ui/js/kendo.angular.js",
        "kendo-ui/js/kendo.angular2.js",
        "kendo-ui/js/kendo.spreadsheet.js",
        "kendo-ui/js/kendo.all.js",
        "kendo-ui/js/kendo.web.js",
        "kendo-ui/js/kendo.dataviz.js",
        "kendo-ui/js/kendo.dataviz.mobile.js",
        "kendo-ui/js/kendo.mobile.js"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "rev": true
      }
    },
    "dist/aurelia": {
      "includes": [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-router",
        "aurelia-animator-css",
        "aurelia-templating-binding",
        "aurelia-polyfills",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-loader-default",
        "aurelia-history-browser",
        "aurelia-logging-console",
        "bootstrap",
        "bootstrap/css/bootstrap.css!text",
        "jquery"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": false
      }
    }
  }
};
