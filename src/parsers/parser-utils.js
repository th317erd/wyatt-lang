function finalize(callback) {
  return function(args) {
    var { token } = args;

    token.defineProperties({ syntaxType: 'UULang' });

    return (callback) ? callback.call(this, args) : token;
  };
}

function isFalsy(value) {
  if (value == null || value === false || ((typeof value === 'number' || (value instanceof Number)) && !isFinite(value)))
    return true;

  return false;
}

function get(obj, key, defaultValue) {
  if (obj === true || isFalsy(obj))
    return defaultValue;

  var value = obj[key];
  return (isFalsy(obj)) ? defaultValue : value;
}

module.exports = {
  finalize,
  get
};
