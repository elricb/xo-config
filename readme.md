# @elric/xo-config

Personal [xo](https://www.npmjs.com/package/xo) config for my projects.

## Install

```
$ npm install --save-dev xo @elricb/xo-config
```

## Usage

Add the below to the `.xo-config.js` file in your project.

```js
module.exports = require("@elric/xo-config")();
```

### nodejs

```js
module.exports = require("@elric/xo-config")(["node"]);
```

### react

`npm i --save-dev eslint-config-xo-react`

```js
module.exports = require("@elric/xo-config")(["react"]);
```

### typescript

`npm i --save-dev eslint-config-xo-react`

```js
module.exports = require("@elric/xo-config")(["typescript"]);
```


## Notes

Mixed typescript and javascript projects will throw errors like below.  It's recommended to ignore js files in the `.eslintignore` files.

```
Definition for rule @typescript-eslint/naming-convention was not found.  @typescript-eslint/naming-convention
```


## Documentation

### Release Notes

View commit tag for release notes.

* [release list](https://github.com/elricb/xo-config/tags)

