# Prevent usage of NODE_ENV (`no-node-env/no-node-env`)

<!-- end auto-generated rule header -->

It's common for `NODE_ENV` to mistakenly be used as a way to determine the application environment in which the code is running, such as `development`, `test`, `staging`, and `production`. This is often not the correct way to check this, since some frameworks use `NODE_ENV` to instead represent the build environment, such as `development` for local development, `test` for testing suite, and `production` for an optimized build.

## Rule Details

Examples of **incorrect** code for this rule:

```js
const isProduction = process.env.NODE_ENV === 'production';
```

Examples of **correct** code for this rule:

```js
// Note that we're using APP_ENV instead of NODE_ENV
const isProduction = process.env.APP_ENV === 'production';
```

### Options

- `message` - Custom error message to display when the rule is violated.

## When Not To Use It

If you only have one application environment and are able to rely on `NODE_ENV=production` to represent the production environment, then this rule is not for you.

## Further Reading

- [Don't be fooled by NODE_ENV](https://seanconnolly.dev/dont-be-fooled-by-node-env/).