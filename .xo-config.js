module.exports = {
  "space": true,
  "prettier": true,
  "extends": ["xo-react"],
  "plugins": ["react"],
  "rules": {
    // String + Int checking is standard practice; i != 0
    "eqeqeq": 0,
    // In webpack no extension allows import of directory/index
    "import/extensions": 0,
    // Checking equal/not-equal is valid logic
    "no-negated-condition": 0,
    // In webpack no extension allows import of directory/index
    "node/file-extension-in-import": 0,
    // Doesn't make sense for CLI apps (e.g. verbose)
    "react/boolean-prop-naming": 1,
    // It's more informative to display the value passed
    "react/jsx-boolean-value": 0,
    // Template + curly encodes HTML characters properly {`% @`}; Rule should be to always use curly braces
    "react/jsx-curly-brace-presence": 0,
    // React recommends bind functions circumstantially; https://reactjs.org/docs/faq-functions.html#is-it-ok-to-use-arrow-functions-in-render-methods
    "react/jsx-no-bind": 0,
    // JSX props in a specific order is beyond anal with no benefit
    "react/jsx-sort-props": 0,
    // Not always possible; don't always have control over 3rd party data
    "react/no-array-index-key": 1,
    // Should be a warning
    "react/no-unused-prop-types": 1,
    // Should be a warning
    "react/prop-types": 1,
    // Should be a warning
    "react-hooks/exhaustive-deps": 1,
    // Greater/less-then are valid length checks
    "unicorn/explicit-length-check": 0,
    // I'm not 100% sold on this ATM
    "unicorn/filename-case": 1,
    // Reduce is a performant/powerful method
    "unicorn/no-array-reduce": 0,
    // For loops are valid code instructions; adopted from c
    "unicorn/no-for-loop": 0,
    // Hex and unicode are both valid logic interfaces
    "unicorn/no-hex-escape": 0,
    // There are reasons to import then export; also "export from" isn't current LTS this rule wrongly assumes a transpiler.
    "unicorn/prefer-export-from": 0,
    // __dirname/__filename are useful when used correctly in jobs (not everything is an app)
    "unicorn/prefer-module": 0,
    // This isn't available in current node lts version
    "unicorn/prefer-node-protocol": 0,
    // Spread everything isn't performant
    "unicorn/prefer-spread": 0,
    // It's preferable to carry standards through like stdio/stderr; reserved words circumvented with underscore is poor practice
    "unicorn/prevent-abbreviations": 1,
  }
};
