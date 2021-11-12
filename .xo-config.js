module.exports = {
  "space": true,
  "prettier": true,
  "extends": ["xo-react"],
  "plugins": ["react"],
  "rules": {
    // i != 0 seems alright for string/int checking
    "eqeqeq": 0,
    // in webpack no extension allows import of directory/index
    "import/extensions": 0,
    // checking equal/not-equal is valid logic
    "no-negated-condition": 0,
    // in webpack no extension allows import of directory/index
    "node/file-extension-in-import": 0,
    // doesn't make sense for CLI apps (e.g. verbose)
    "react/boolean-prop-naming": 1,
    // template + curl encodes HTML characters properly {`% @`}; always using looks cleaner as well
    "react/jsx-curly-brace-presence": 0,
    // JSX props in a specific order is beyond anal with no benefit
    "react/jsx-sort-props": 0,
    // not always possible; don't always have control over 3rd party args
    "react/no-array-index-key": 1,
    // should be a warning
    "react/no-unused-prop-types": 1,
    // should be a warning
    "react/prop-types": 1,
    // just changing to warning
    "react-hooks/exhaustive-deps": 1,
    // greater/less-then are valid length checks
    "unicorn/explicit-length-check": 0,
    // i'm not 100% sold on this
    "unicorn/filename-case": 1,
    // reduce is a performant/powerful method
    "unicorn/no-array-reduce": 0,
    // for loops are valid code instructions; adopted from c
    "unicorn/no-for-loop": 0,
    // hex and unicode are both valid logic interfaces
    "unicorn/no-hex-escape": 0,
    // __dirname/__filename are useful when used correctly in jobs (not everything is an app)
    "unicorn/prefer-module": 0,
    // this isn't available in current node lts version
    "unicorn/prefer-node-protocol": 0,
    // spread everything isn't performant
    "unicorn/prefer-spread": 0,
    // this doesn't always apply; it's better to carry standards through like stdio/stderr; also reserved words with underscore is poor practice
    "unicorn/prevent-abbreviations": 1,
  }
};
