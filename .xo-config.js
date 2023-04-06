module.exports = function (plugins = []) {
  let config = {
    space: true,
    prettier: true,
    rules: {
      // Sometimes comments equal helpful greater-than standardized
      "capitalized-comments": 1,
      // Switch does not always have a default case.
      "default-case": 0,
      // String + Int checking is standard practice; i != 0
      "eqeqeq": 0,
      // In webpack no extension allows import of directory/index
      "import/extensions": 0,
      // Avoid code bloat; allow: export default function
      "import/no-anonymous-default-export": 0,
      // Standard process for node env config - xo assumes browser only usage
      "import/no-unassigned-import": 1,
      // packages that use exports warn about extensions
      "n/file-extension-in-import": 1,
      // MDN suggested syncronous promises uses this method
      "no-await-in-loop": 0,
      // Checking equal/not-equal is valid logic
      "no-negated-condition": 0,
      // For classes yes, for json/literals no
      "object-shorthand": 0,
      // Object.assign is more performant and in circumstances speed is more important.
      "prefer-object-spread": 1,
      // Disagree: with new RegExp you can add dynamic fields; literals can not.  Use always for consistency.
      "prefer-regex-literals": 0,
      // typescript throws an error if you use spread for args `test(...args)`; hence using apply to work around it `test.apply(null, args)`.
      // But getting this lint error that works in the reverse.
      "prefer-spread": 1,
      // Greater/less-then are valid length checks
      "unicorn/explicit-length-check": 0,
      // I'm not 100% sold on this ATM
      "unicorn/filename-case": 1,
      // Certain libraries import rules is super anal
      "unicorn/import-style": 0,
      // Standard practice in libraries
      "unicorn/no-array-callback-reference": 0,
      // For ES5 compatible libraries, can't alway use "for/of".
      "unicorn/no-array-for-each": 1,
      // Reduce is a performant/powerful method
      "unicorn/no-array-reduce": 0,
      // For loops are valid code instructions; adopted from c
      "unicorn/no-for-loop": 0,
      // Hex and unicode are both valid logic interfaces
      "unicorn/no-hex-escape": 0,
      // Using in CLI app, but throws lint error (xo bug?)
      "unicorn/no-process-exit": 0,
      // Consistency over whatever this is
      "unicorn/no-zero-fractions": 0,
      // There are reasons to import then export; also "export from" isn't current LTS this rule wrongly assumes a transpiler.
      "unicorn/prefer-export-from": 0,
      // indexOf/includes are both relevant searches
      "unicorn/prefer-includes": 1,
      // __dirname/__filename are useful when used correctly in jobs (not everything is an app)
      "unicorn/prefer-module": 0,
      // This isn't available in current node lts version
      "unicorn/prefer-node-protocol": 0,
      // Spread everything isn't performant
      "unicorn/prefer-spread": 0,
      // Slice vs substring.  I dislike slice because it indicates it alters the original string even though it doesn't.
      "unicorn/prefer-string-slice": 0,
      // It's preferable to carry standards through like stdio/stderr; reserved words circumvented with underscore is poor practice
      "unicorn/prevent-abbreviations": 1,
      // Ignore case bloat: case X: {}
      "unicorn/switch-case-braces": 0,
    },
  };

  if (plugins.includes("node")) {
    config.rules = {
      ...config.rules,
      // In webpack no extension allows import of directory/index
      "node/file-extension-in-import": 0,
    };
  }

  if (plugins.includes("react")) {
    config = {
      ...config,
      extends: ["xo-react"],
      plugins: ["react"],
      rules: {
        ...config.rules,
        // Doesn't make sense for CLI apps (e.g. verbose)
        "react/boolean-prop-naming": 1,
        // It's more informative to display the value passed
        "react/jsx-boolean-value": 0,
        // Template + curly encodes HTML characters properly {`% @`}; Rule should be to always use curly braces
        "react/jsx-curly-brace-presence": 0,
        // React recommends bind functions circumstantially; https://reactjs.org/docs/faq-functions.html#is-it-ok-to-use-arrow-functions-in-render-methods
        "react/jsx-no-bind": 0,
        // If child is var/loop throws error if no fragment exists - linting shouldn't cause syntax errors
        "react/jsx-no-useless-fragment": 0,
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
      },
    };
  }

  if (plugins.includes("typescript")) {
    config.rules = {
      ...config.rules,
      // Perpetual lint loop.  If you fix interface/extends with intersection,
      // "@typescript-eslint/no-redundant-type-constituents" will be thrown.
      "@typescript-eslint/consistent-type-definitions": 1,
      // I don't care record vs indexed-signature; typesript should be more consistant
      "@typescript-eslint/consistent-indexed-object-style": 0,
      // Don't know passthrough function return types
      "@typescript-eslint/ban-types": 0,
      // Checks inside strings and templates and tries to correct contents
      // "@typescript-eslint/naming-convention": 1,
      // Arguments defaulting to optional empty function is a time saver
      "@typescript-eslint/no-empty-function": 0,
      // typescript default rule conflicts with this default xo rule; typescript wins
      "@typescript-eslint/no-inferrable-types": 0,
      // Using loose typescript rules.  This is thrown for all Component.propTypes assignments.
      "@typescript-eslint/no-unsafe-assignment": 0,
      // Using loose typescript rules.  Trying to `String.split()` on `var s: string = ""` throws this error?
      "@typescript-eslint/no-unsafe-call": 0,
      // Using loose typescript rules.  Need to investigate, `Component(): JSX.Element {` still throws this.  Why would `return </>;` still need to be defined?
      "@typescript-eslint/no-unsafe-return": 0,
      // for loop is more performant and matches c language syntax
      "@typescript-eslint/prefer-for-of": 0,
      // Bloat overkill; also breaks certain environments
      "@typescript-eslint/promise-function-async": 0,
      // ContestRule: So even if a variable is defined as a number, you can't add +1 to it?
      "@typescript-eslint/restrict-plus-operands": 0,
      // String contents shouldn't be a rule
      "@typescript-eslint/restrict-template-expressions": 0,
      // Rediculous rule that forces Object keys to only be camel case
      // Causes problems with things like HTTP headers or find/replace
      "@typescript-eslint/naming-convention": [
        "error",
        {
          "selector": [
            "classProperty",
            "objectLiteralProperty",
            "typeProperty",
            "classMethod",
            "objectLiteralMethod",
            "typeMethod",
            "accessor",
            "enumMember"
          ],
          "format": null,
          "modifiers": ["requiresQuotes"]
        }
      ],
    // ContestRule: charAt(0) is fine for one character.  Faster and easier to understand.
    "@typescript-eslint/prefer-string-starts-ends-with": 0,
    // I like this rule, but current node.js LTS doesn't support optional chaining without task runner (pause implementation for now)
    "@typescript-eslint/prefer-optional-chain": 1,
    };
  }

  return config;
};
