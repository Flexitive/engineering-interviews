# Resolve a Path

The repo consists of a client that requests data from the server which in turn resolves data from the database (in `db.json`).

## Setup

```bash
$ nvm use # (optional)
$ npm install
$ npm test
```

## Usage

We ask for data by passing in a path to it. As an example:

```js
{ "users": [ { "name": "mafintosh" } ] }

client.fetch('users.0.name');
// mafintosh
```

The db can contain references to other paths in the db using the special `{ "_ref": "<PATH>" }` syntax. As an example:

```js
{
  "users": [ { "repos": { "_ref": "repos.0" } } ],
  "repos": [ { "name": "peerflix" } ]
}

client.fetch('users.0.repos');
// [ { "name": "peerflix" } ]
```

The backend database is contained in a `db.json` flatfile which is queried by the `server.js` API. `client.js` acts as a "client-side" script making requests to the server and to begin with passes all requests through to the server without modification.

All the tests are in `test.js`.

## Tasks

- [ ] The task is to complete `server.get()` so that `test.js` passes. There is no need to use external libraries for this.

Then, it's up to you to pick one (or more) of the following improvements and complete them.

- [ ] How would we **cache data** on the client? For example, if we fetch `users.0.repos.0` and within say 100ms (configurable) we make another request for `repos.0.tags`, we'd like to skip making the roundtrip request to the server as we already have the data.
- [ ] How would we limit the client cache to be not time-bound but size-bound? Meaning, if we set the size of it to 2 items (configurable), we will keep references to the data retrieved through the 2 **most recently used** requests.
- [ ] How could we **batch** requests (and change the server API) so that an Array path such as `['tags', [0, 2]]` would make one request to the server asking for both `tags.0` and `tags.2` (consider caching too)?
