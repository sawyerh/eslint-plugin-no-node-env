"use strict";

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  // eslint-disable-next-line eslint-plugin/prefer-message-ids
  meta: {
    type: "problem",
    docs: {
      url: null,
    },
    schema: [
      {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const errorMessage =
      context.options[0]?.message ||
      "Usage of process.env.NODE_ENV is not allowed";

    return {
      MemberExpression: function (node) {
        if (
          node.object.name === "process" &&
          node.property.name === "env" &&
          node.parent.property.name === "NODE_ENV"
        ) {
          context.report({
            node: node,
            // eslint-disable-next-line eslint-plugin/prefer-message-ids
            message: errorMessage,
          });
        }
      },
    };
  },
};
