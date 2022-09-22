const {existsSync} = require("fs");

test(".xo-config.js exists", () => {
  expect(existsSync("./.xo-config.js")).toBe(true);
});

test(".xo-config.js exports", () => {
  expect(typeof require("./.xo-config.js")).toBe("function");
});
