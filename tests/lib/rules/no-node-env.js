"use strict";

const rule = require("../../../lib/rules/no-node-env");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

const invalidCode = "var isDev = process.env.NODE_ENV === 'development'";

ruleTester.run("no-node-env", rule, {
  valid: [
    "var isDev = process.env.MY_CUSTOM_ENV_VAR === 'development';",
    "var foo;",
    "var originalEnv = process.env",
    "var process = process",
  ],
  invalid: [
    {
      code: invalidCode,
      errors: [
        {
          message:
            "Usage of NODE_ENV isn't allowed. It likely doesn't do what you think it does.",
          type: "MemberExpression",
        },
      ],
    },
    {
      code: invalidCode,
      options: [{ message: "Custom error message" }],
      errors: [
        {
          message: "Custom error message",
          type: "MemberExpression",
        },
      ],
    },
  ],
});
