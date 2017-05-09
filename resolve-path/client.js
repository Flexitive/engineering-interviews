var server = require('./server.js');

exports.fetch = function(path) {
  return server.fetch(path);
};
