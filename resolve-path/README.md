# Resolve a Path

The library consists of a client that requests data from the server which in turn resolves data from the database. We ask for data by passing in a path to it. As an example:

```js
{ "users": [ { "name": "mafintosh" } ] }
client.fetch('users.0.name');
// mafintosh
```

The db can also contain references to other paths in the db. As an example:

```js
{
  "users": [ { "repos": { "_ref": "repos.0" } } ],
  "repos": [ { "name": "peerflix" } ]
}
client.fetch('users.0.repos');
// [ { "name": "peerflix" } ]
```

## Tasks

The task is to complete `server.get()` so that `test.js` passes. Then, it's up to you to pick one (or more) of the following extensions to the library and complete it.

1. How would we **cache data** on the client? For example, if we fetch `users.0.repos.0` and within say 100ms we make a request for `repos.0.tags`, we'd like to skip making the request to the server as we already have the data.
2. How would we limit the client cache to be not time-bound but size-bound? Meaning, if we set the size of it to 2 items, we will keep a maximum of 2 **most recently used** requests.
3. How could we **batch** requests so that a path such as `['tags', [0, 2]]` would make one request to the server asking for both `tags.0` and `tags.2`?