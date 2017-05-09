const t = require('tap');
const client = require('./client.js');

t.test('pegas', function(t) {
  t.plan(3);

  t.test('users.0.repos.1', function(t) {
    client.fetch('users.0.repos.1').then(function(res) {
      t.deepEqual(res, {
        name: 'mongojs',
        tags: [ 'javascript' ]
      });
      t.end();
    });
  });

  t.test('users.0.repos.0.tags', function(t) {
    client.fetch('users.0.repos.0.tags').then(function(res) {
      t.deepEqual(res, [ 'javascript', 'html' ]);
      t.end();
    });
  });

  t.test('users.0.repos.0.tags.1', function(t) {
    client.fetch('users.0.repos.0.tags.1').then(function(res) {
      t.deepEqual(res, 'html');
      t.end();
    });
  });
});
