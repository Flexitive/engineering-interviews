const t = require('tap');
const client = require('./client.js');

t.test('pegas', (t) => {
  t.plan(3);

  t.test('users.0.repos.1', (t) => {
    client.fetch('users.0.repos.1').then((res) => {
      t.deepEqual(res, {
        name: 'mongojs',
        tags: [ 'javascript' ]
      });
      t.end();
    });
  });

  t.test('users.0.repos.0.tags', (t) => {
    client.fetch('users.0.repos.0.tags').then((res) => {
      t.deepEqual(res, [ 'javascript', 'html' ]);
      t.end();
    });
  });

  t.test('users.0.repos.0.tags.1', (t) => {
    client.fetch('users.0.repos.0.tags.1').then((res) => {
      t.deepEqual(res, 'html');
      t.end();
    });
  });
});
