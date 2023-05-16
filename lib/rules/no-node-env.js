/**
 * @fileoverview Prevent usage of NODE_ENV
 * @author sawyerh
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Prevent usage of NODE_ENV",
      category: "Best Practices",
      recommended: true,
      url: null, // URL to the documentation page for this rule
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
          node.object &&
          node.object.name === "process" &&
          node.property &&
          node.property.name === "env" &&
          node.parent.property &&
          node.parent.property.name === "NODE_ENV"
        ) {
          context.report({
            node: node,
            message: errorMessage,
          });
        }
      },
    };
  },
};
