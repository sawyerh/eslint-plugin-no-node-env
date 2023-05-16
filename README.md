# eslint-plugin-no-node-env

Prevent usage of `process.env.NODE_ENV`, which is probably not what you think it is. [Read more context here](/docs/rules/no-node-env.md).

## Installation

```sh
npm install eslint-plugin-no-node-env --save-dev
```

## Usage

Add `no-node-env` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix. Then include the rule in the rules section:

```json
{
    "plugins": ["no-node-env"],
    "rules": {
        "no-node-env/no-node-env": "error"
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                     | Description               |
| :--------------------------------------- | :------------------------ |
| [no-node-env](docs/rules/no-node-env.md) | Prevent usage of NODE_ENV |

<!-- end auto-generated rules list -->
