var db = require('./db.json');

exports.fetch = function(path) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(get(db, path));
    }, 50);
  });
}

function getKey(key) {
  var intKey = parseInt(key, 10);
  return (intKey.toString() === key) ? intKey : key;
}

// ---------- COMPLETE THIS CODE ---------- //
function get(obj, path) {
  if (typeof path === 'string') return get(obj, path.split('.'));

  if (Number.isInteger(path)) path = [path];

  var val = obj[getKey(path[0])];

  if (path.length === 1) return val;

  return get(val, path.slice(1));
}
