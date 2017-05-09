const db = require('./db.json');

exports.fetch = (path) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = get(db, path);
      resolve(data);
    }, 50);
  });
}

const getKey = (key) => {
  const intKey = parseInt(key, 10);
  return (intKey.toString() === key) ? intKey : key;
}

// ---------- COMPLETE THIS CODE ---------- //
const get = (obj, path) => {
  if (typeof path === 'string') return get(obj, path.split('.'));

  if (Number.isInteger(path)) path = [path];

  let val = obj[getKey(path[0])];

  if (path.length === 1) return val;

  return get(val, path.slice(1));
};
