
try {
  var bind = require('component-bind');
  var type = require('component-type');
} catch (e) {
  // commented out by npm-component: var bind = require('bind-component');
  // commented out by npm-component: var type = require('type-component');
}

module.exports = function (obj) {
  for (var key in obj) {
    var val = obj[key];
    if (type(val) === 'function') obj[key] = bind(obj, obj[key]);
  }
  return obj;
};